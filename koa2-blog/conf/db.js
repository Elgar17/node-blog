const env = process.env.NODE_ENV // 环境参数

// 配置
let MYSQL_CONF
let REDIS_CONF


// if (env === 'dev') {
//     MYSQL_CONF = {
//         host: 'localhost',
//         user: 'root',
//         password: 'blog',
//         posrt: '3306',
//         database: 'myblog'
//     }

//     REDIS_CONF = {
//         port: 6379,
//         host: '127.0.0.1'
//     }
// }else{
//     MYSQL_CONF = {
//         host: 'localhost',
//         user: 'root',
//         password: 'blog',
//         posrt: '3306',
//         database: 'myblog'
//     }

//     REDIS_CONF = {
//         port: 6379,
//         host: '127.0.0.1'
//     }
// }

MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'blog',
    posrt: '3306',
    database: 'myblog'
}

REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}


module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}