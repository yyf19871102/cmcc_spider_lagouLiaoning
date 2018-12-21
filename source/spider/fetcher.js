/**
 * @author yangyufei
 * @date 2018-12-15 10:22:16
 * @desc
 */
const cheerio           = require('cheerio');

const {requestUrl}      = require('../core/utils');
const SysConf           = require('../config');
const {timeout, retry}  = SysConf.SPIDER.fetch;
const uuid              = require('uuid/V4');

const SEARCH_SIZE = 15;

/**
 * 获取一期有多少数据
 * @returns {Promise<number>}
 */
exports.getAnnCount = async () => {
	let reqConf = {
		uri     : 'http://sbgg.saic.gov.cn:9080/tmann/annInfoView/homePage.html',
		method  : 'GET',
		useProxy: true,
		timeout,
		transform: res => cheerio.load(res),
	};

	let $ = await requestUrl(reqConf, retry, $ => $('.odd_bg').length > 0);

	let annList = [];

	$('.odd_bg').each(function () {
		let annNum = $(this).find('td:first-child').text().replace(/\r|\n|\s|第|期/g, '');
		let annDateArr = $(this).find('td:nth-child(2)').text().replace(/\r|\n|\s|初步审定公告日期：/g, '').split(/年|月|日/g);

		let annDate = new Date(parseInt(annDateArr[0]), parseInt(annDateArr[1] - 1), parseInt(annDateArr[2]));

		annList.push({annNum, annDate});
	});

	let str = $('.odd_bg:nth-child(2) > td:first-child').text().replace(/\r|\n|\s|第|期/g, '');

	return {maxNum: parseInt(str), annList};
};

/**
 * 读取指定导航页的数据
 * @param ann
 * @param page
 * @returns {Promise<*|void>}
 */
exports.getNaviData = async (ann, page, rows) => {
	let reqConf = {
		uri     : 'http://sbgg.saic.gov.cn:9080/tmann/annInfoView/annSearchDG.html',
		method  : 'POST',
		useProxy: true,
		timeout,
		form    : {
			page,
			rows,
			annNum: ann
		},
		json    : true,
	};

	let data = await requestUrl(reqConf, 5, res => res.hasOwnProperty('rows'));

	data.rows.forEach(record => {
	    record.uri = `http://sbgg.saic.gov.cn:9080/tmann/annInfoView/annSearch.html?annNum=${ann}`;
    });

	return data;
};

/**
 * 获取职位分类
 * @returns {Promise<Array>}
 */
exports.getCategories = async () => {
    let reqConf = {
        uri     : `https://www.lagou.com/`,
        method  : 'GET',
        transform: res => cheerio.load(res)
    };

    let $ = await requestUrl(reqConf, null, $ => $('.mainNavs').length > 0);

    let cateList = [];
    $('.mainNavs > .menu_box').each(function () {
        let cateLv1 = $(this).find('.menu_main > .category-list > h2').text().replace(/\s/g, '');

        $('.menu_sub dl').each(function () {
            let cateLv2 = $(this).find('dt').text().replace(/\s/g, '');

            $(this).find('dd > a').each(function () {
                let cateLv3 = $(this).text().replace(/\s/g, '');

                cateList.push({cateLv1, cateLv2, cateLv3});
            })
        })
    });

    return cateList;
};

/**
 * 搜索职位列表
 * @param cityName
 * @param keyword
 * @param page
 * @returns {Promise<{totalPage: number, jobList: Array, corpList: Array}>}
 */
exports.searchJobList = async (cityName, keyword, page) => {
    let reqConf = {
        uri     : 'https://www.lagou.com/jobs/positionAjax.json',
        method  : 'POST',
        // useProxy: true,
        headers : {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36',
            Referer: `https://www.lagou.com/jobs/list_Java?px=default&city=%E5%8C%97%E4%BA%AC`,
            Cookie : `user_trace_token=20181214094034-${uuid()}`
        },
        qs      : {
            px  : 'default',
            city: cityName,
            needAddtionalResult: false
        },
        form    : {
            first: false,
            pn  : page,
            kd  : keyword,
        },
        json    : true,
    };

    let data = await requestUrl(reqConf, null, res => res.code === 0);

    if (!data.content.positionResult) {
        console.log(reqConf);
        process.exit(0);
    }
    let totalPage = Math.ceil(data.content.positionResult.totalCount / SEARCH_SIZE);

    let jobList = [], corpList = [];
    data.content.positionResult.result.forEach(record => {
        let corpId = record.companyId;
        let jobId = record.positionId;

        jobList.push({corpId, jobId});
        corpList.push({corpId});
    });

    return {totalPage, jobList, corpList};
};

/**
 * 获取职位信息
 * @param jobId
 * @return {Promise.<{}>}
 */
exports.getJobInfo = async jobId => {
    let reqConf = {
        uri     : `http://www.lagou.com/jobs/${jobId}.html`,
        method  : 'GET',
        useProxy: true,
        transform: res => cheerio.load(res),
        headers : {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36',
        },
    };

    let job = {};

    let $ = await requestUrl(reqConf, 5, $ => $('.job-name .company').length > 0);

    job.subTitle = $('.job-name .company').text();
    job.title = $('.job-name .name').text();

    $('.job_request > p > span').each(function (index) {
        let value = $(this).text().replace(/\r|\n|\t|\s|\||\//g, '');
        switch(index) {
            case 0 : job.salary = value; break;
            case 1 : job.workAt = value; break;
            case 2 : job.workExp = value; break;
            case 3 : job.eduLv = value; break;
            case 4 : job.quanzhi = value; break;
        }
    });

    let tags = [];
    $('.position-label li').each(function () {
        tags.push($(this).text())
    });
    job.tags = tags;

    let publishDate = $('.publish_time').text();
    if (publishDate.indexOf('-')) {}
    job.publishDate = publishDate.indexOf('-') > -1 ? publishDate.replace(/\s|发布于拉勾网/g, '') : moment().format('YYYY-MM-DD');

    job.welfare = $('.job-advantage p').text();
    job.desc = $('.job_bt div').text().replace(/\r|\n|\t|\s|\|/g, '');
    job.workAddr = $('.work_addr').text().replace(/\r|\n|\t|\s|\|/g, '');

    return job;
};

/**
 * 获取公司json数据
 * @param corpId
 * @returns {Promise.<void>}
 */
exports.getCompanyInfo = async corpId => {
    let reqConf = {
        uri     : `http://www.lagou.com/gongsi/${corpId}.html`,
        method  : 'GET',
        transform: res => cheerio.load(res),
        useProxy: true,
        headers : {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.108 Safari/537.36',
            Referer: `http://www.lagou.com/gongsi/`,
        },
    };

    let $ = await requestUrl(reqConf, 5, $ => $('#companyInfoData').length > 0);

    return JSON.parse($('#companyInfoData').html());
};