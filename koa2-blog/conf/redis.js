const redis = require('redis')

const {
    REDIS_CONF
} = require('../conf/db')

// 创建
const redisClient = redis.createClient(REDIS_CONF.port,REDIS_CONF.host)
redisClient.on('erorr',err=>{
    console.log(err)
})

module.exports = redisClient