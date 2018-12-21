/**
 * @auth yangyufei
 * @date 2018-12-20 17:33:10
 * @desc
 */
const moment        = require('moment');
const _             = require('lodash');

const phaseManager  = require('../core/phase');
const fetcher       = require('./fetcher');
const SysConf       = require('../config');
const cateList      = require('./cate');

const NAVI_PAGE_SIZE= 1000;

exports.makePhaseList = async (context) => {
	let annFilter = context.filterManager['annFilter'];
	let output = context.outputManager['output'];

	let phaseList = [];

	// 初始化阶段，主要获取各期都有多少数据
	let phaseInit = await phaseManager.getOnePhase('init', 1);

	// 生产各期导航页
	let phaseMakeNaviParams = await phaseManager.getOnePhase('makeNaviParams', 2);

	// 抓取导航页数据
	let phaseGetNavi = await phaseManager.getOnePhase('getNavi', 2);

	phaseInit.setHandler(async () => {
        let params = [];

        let testOpt = SysConf.SPIDER.test;
        if (testOpt && testOpt.enable === true) {
            await annFilter.exists(testOpt.annNum + '');
            params.push({ann: testOpt.annNum});
        } else {
            let {maxNum, annList} = await fetcher.getAnnCount();

            if (SysConf.SPIDER.run.type === 'cron') {
                for (let ann of annList) {
                    !await annFilter.exists(ann.annNum + '') && params.push({ann: ann.annNum});
                }
            } else if (SysConf.SPIDER.run.type === 'once') {
                for (let ann = 1; ann <= maxNum; ann ++) {
                    params.push({ann});
                }
            } else {
                logger.warn(`错误的run type：${SysConf.SPIDER.run.type}`);
            }
        }

		await phaseMakeNaviParams.insertTasks(params);
	});

	phaseMakeNaviParams.setHandler(async annObj => {
		let {total, rows} = await fetcher.getNaviData(annObj.ann, 1, NAVI_PAGE_SIZE).catch(console.error);

		await output.write(rows);

		let endPage = Math.ceil(total / NAVI_PAGE_SIZE);
		let pageList = [];

		let testOpt = SysConf.SPIDER.test;
		testOpt && testOpt.enable && (endPage = testOpt.endPage);
		for (let page = 2; page <= endPage; page ++) {
			pageList.push({ann: annObj.ann, page});
		}

		await phaseGetNavi.insertTasks(pageList);
	});

	phaseGetNavi.setHandler(async annObj => {
		let {rows} = await fetcher.getNaviData(annObj.ann, annObj.page, NAVI_PAGE_SIZE);

		await output.write(rows);
	});

	return [
		phaseInit,
		phaseMakeNaviParams,
		phaseGetNavi
	]
};

exports.makeMacroTasks = async () => {
    return [
        {code : '44', name: '沈阳'},
        {code : '43', name: '大连'},
        {code : '45', name: '鞍山'},
        {code : '46', name: '抚顺'},
        {code : '47', name: '本溪'},
        {code : '48', name: '丹东'},
        {code : '49', name: '锦州'},
        {code : '50', name: '营口'},
        {code : '51', name: '阜新'},
        {code : '52', name: '辽阳'},
        {code : '53', name: '盘锦'},
        {code : '54', name: '铁岭'},
        {code : '55', name: '朝阳'},
        {code : '56', name: '葫芦岛'},
    ]
};

exports.makePhaseList = async (context) => {
    let {corpOut, jobOut} = context.outputManager;
    let {corpFilter} = context.filterManager;

    let phaseList = [];

    let phaseMakeBaseParams = await phaseManager.getOnePhase('makeBaseParams', 1);
    let phaseMakeJobNaviParams = await phaseManager.getOnePhase('makeJobNaviParams', 2);
    let phaseGetJobNaviList = await phaseManager.getOnePhase('getJobNaviList', 3);
    let phaseGetJobInfo = await phaseManager.getOnePhase('getJobInfo', 4);
    let phaseGetCorpInfo = await phaseManager.getOnePhase('getCorpInfo', 5);

    phaseMakeBaseParams.setHandler(async cityObj => {
        let paramsList = [];

        cateList.forEach(cate => {
            paramsList.push({cate, city: cityObj});
        });

        await phaseMakeJobNaviParams.insertTasks(paramsList);
    });

    phaseMakeJobNaviParams.setHandler(async param => {
        let {totalPage, jobList, corpList} = await fetcher.searchJobList(param.city.name, param.cate.cateLv3, 1);

        jobList = jobList.map(job => {
            job.cate = param.cate;
            job.city = param.city;

            return job;
        });
        await phaseGetJobInfo.insertTasks(jobList);

        let _corpList = [];
        for (let corp of corpList) {
            !corpFilter.exists(corp.corpId) && _corpList.push(_.merge({}, corp, param));
        }
        await phaseGetCorpInfo.insertTasks(_corpList);

        let pageList = [];
        for (let page = 2; page <= totalPage; page++) pageList.push(_.merge({page}, param));
        await phaseGetJobNaviList.insertTasks(pageList);
    });

    phaseGetJobNaviList.setHandler(async param => {
        let {jobList, corpList} = await fetcher.searchJobList(param.city.name, param.cate.cateLv3, param.page);

        jobList = jobList.map(job => {
            job.cate = param.cate;
            job.city = param.city;

            return job;
        });
        await phaseGetJobInfo.insertTasks(jobList);

        let _corpList = [];
        for (let corp of corpList) {
            !corpFilter.exists(corp.corpId) && _corpList.push(_.merge({}, corp, param));
        }
        await phaseGetCorpInfo.insertTasks(_corpList);
    });

    phaseGetJobInfo.setHandler(async jobObj => {
        let job = await fetcher.getJobInfo(jobObj.jobId);

        await jobOut.write([job]);
    });

    phaseGetCorpInfo.setHandler(async corpObj => {
        let corp = await fetcher.getCompanyInfo(corpObj.corpId);

        await corpOut.write([corp]);
    });

    return [phaseMakeBaseParams, phaseMakeJobNaviParams, phaseGetJobNaviList, phaseGetJobInfo, phaseGetCorpInfo]
};