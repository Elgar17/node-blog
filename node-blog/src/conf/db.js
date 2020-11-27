let MYSQL_CONF = {
    host: 'localhost',
    user: 'root',
    password: 'blog',
    posrt: '3306',
    database: 'myblog'
}

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1' 
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}