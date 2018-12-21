/**
 * @auth yangyufei
 * @date 2018-12-20 17:33:10
 * @desc redis的三种服务：redis数据库、发布者和订阅者
 */
const redisConnector= require('./redis_connector');

exports.redis       = redisConnector.getInstance();
exports.publisher   = redisConnector.getInstance();
exports.subscriber  = redisConnector.getInstance();