/**
 * @auth yangyufei
 * @date 2018-12-20 17:33:10
 * @desc 配置文件
 *
 * //TODO 根据项目配置相关选项
 */
const _     = require('lodash');
const fs    = require('fs');
const path  = require('path');

const dateFormat = require('../common/date_format');

const ENV   = process.env.NODE_ENV || 'development';

let config = {
	NAME        : 'lagouLiaoning', // 工程名同
    SITE_NAME   : '拉勾-辽宁', // 主站中文名称

	MONITOR     : true, // 默认加入监控当中

	// 信源配置，每个信源对应一个接口/out文件
	XINYUAN     : {
		corpOut	: {
			/**
			 * out文件名前缀；
			 * 建议和信源关键字一致
			 */
			key     : 'lagouCorp',

			/**
			 * schema详细使用见 https://github.com/epoberezkin/ajv
			 */
			schema  : {
				type: 'object',
				properties  : {
				    id      : {type: 'string', maxLength: 50},
                    city	: {type: 'string', maxLength: 50},
                    region	: {type: 'string', maxLength: 50},
                    address	: {type: 'string', maxLength: 200},
                    lat		: {type: 'string', maxLength: 50},
                    lng		: {type: 'string', maxLength: 50},
                    tags	: {type: 'string', maxLength: 100},
                    industry: {type: 'string', maxLength: 50},
                    companySize: {type: 'string', maxLength: 50},
                    financeStage: {type: 'string', maxLength: 50},
                    name	: {type: 'string', maxLength: 100},
                    companyShortName: {type: 'string', maxLength: 50},
                    homepage: {type: 'string', maxLength: 100},
                    companyIntroduce: {type: 'string', maxLength: 50},
                    desc	: {type: 'string', maxLength: 500},

                },
				required    : ['id']
			},

			/**
			 * 如果subDir存在，则生成一个子目录，子目录里面存放相关out文件
			 */
			subDir  : 'corp', // 如果subDir存在，则生成一个子目录，子目录里面存放相关out文件
		},

        jobOut  : {
		    key : 'lagouJob',
            schema: {
		        type    : 'object',
                properties: {
                    subTitle    : {type: 'string', maxLength: 50},
                    title       : {type: 'string', maxLength: 50},
                    salary      : {type: 'string', maxLength: 50},
                    workAt      : {type: 'string', maxLength: 50},
                    workExp     : {type: 'string', maxLength: 50},
                    eduLv       : {type: 'string', maxLength: 50},
                    quanzhi     : {type: 'string', maxLength: 50},
                    tags        : {type: 'string', maxLength: 50},
                    publishDate : {type: 'string', maxLength: 50},
                    welfare     : {type: 'string', maxLength: 50},
                    desc        : {type: 'string', maxLength: 50},
                    workAddr    : {type: 'string', maxLength: 50},
                    companyId   : {type: 'string', maxLength: 50},
                    jobId       : {type: 'string', maxLength: 50},
                },
                required    : ['jobId', 'companyId'],
            },
            subDir  : 'job',
        }
	},

	// 过滤器配置
	FILTER      : {
		corpFilter   : {
			name    : 'corp', // 过滤器名字
			type    : 1, // 过滤器类型
		}
	},

	// 错误相关信息
	ERROR_OBJ   : {
		SUCCESS     : {code: 0, msg: '操作成功！'},

		DEFAULT     : {code: 100, msg: '系统错误！'},
		TIMEOUT     : {code: 101, msg: '请求访问超时！'},
		RETRYOUT    : {code: 102, msg: '超过最大重试次数！'},
		PARSEJSON   : {code: 103, msg: '异常非json数据！'},
		BAD_REQUEST : {code: 104, msg: 'uri请求错误！'},
		BAD_CONFIG  : {code: 105, msg: '配置错误！'},
		CHECK_RULE  : {code: 106, msg: '网站接口/页面规则校验不通过！'},
		BAD_OUTPUT  : {code: 107, msg: '输出数据校验失败！'}
	},

	// 网络监控相关keys
	NET_MONITOR_KEYS: {
		STATE_NET   : 'network:connect:state', // 当前网络基本状态
		NET_LAST_TEST: 'network:connect:lastTestTime', // 上次检查网络状态时间
		POOL        : 'network:proxy:pool', // 代理池
	},

	// 网络状态
	NET_STATE       : {
		DISCONNECT  : -1, // 网络不通
		GOOD        : 1, // 通畅
	},

	TASK_STATUS     : {
		BIG_RECORD  : -2, // 查询条件下数据过多，需要再次分割
		ERROR       : -1, // 失败
		WAITING     : 0, // 等待
		RUNNING     : 1, // 运行中
		SUCCESS     : 2, // 成功
	},

	OUT_FILE_SIZE   : 500, // 输出out文件的大小

	// 过滤器类型
	FILTER_TYPE     : {
		SIMPLE      : 1, // 简单过滤器
		EXPIRE      : 2, // 带过期的过滤器
	}
};

// 读取config目录下所有配置文件，并合并到system当中
fs.readdirSync(__dirname).forEach(fileName => {
	let stats = fs.statSync(path.join(__dirname, fileName));

	if (!stats.isDirectory() && fileName.startsWith(`${ENV}_`) && fileName.endsWith('.js')) {
		let key = fileName.replace(`${ENV}_`, '').replace('.js', '').toUpperCase();
		let value = require(path.join(__dirname, fileName));
		config.hasOwnProperty(key) ? _.merge(config[key], value) : (config[key] = value);
	}
});

/**
 * 开发环境中需要实时监控网络状态；
 * 生产环境中可以保证网络稳定，因此不需要开启此功能；
 * @type {boolean}
 */
config.NET_CONNECT_TEST = ENV === 'development';

// 生产环境中禁止自定义的test选项
ENV === 'production' && config.SPIDER && config.SPIDER.test && (delete config.SPIDER.test);

module.exports = config;