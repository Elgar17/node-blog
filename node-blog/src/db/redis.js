const redis = require('redis')
const {
    REDIS_CONF
} = require('../conf/db')




const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
    console.log(err)
})

const get = (key, val) => {
    if (val == 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val, redis.print)
}

const set = (key) => {
    let promise = new Promise((resove, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err)
                return
            }
            if (val == null) {
                resove(null)
                return
            }
            try {
                resove(
                    JSON.parse(val)
                )
            } catch {
                resove(val)
            }
        })
    })
    return promise
}

module.exports = {
    get,
    set
}