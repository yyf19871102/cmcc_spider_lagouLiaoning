/**
 * @auth yangyufei
 * @date 2018-12-20 17:33:10
 * @desc 日期辅助类
 */
const moment    = require('moment');

exports.getDate = date => moment(date).format('YYYY-MM-DD');

exports.getDateTime = date => moment(date).format('YYYY-MM-DD HH:mm:ss');

exports.getTime = date = date => moment(date).format('HH:mm:ss');

exports.getFullDateTime = date => moment(date).format('YYYY-MM-DD HH:mm:ss.SSS');