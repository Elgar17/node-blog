const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')
// 创建对象

const con = mysql.createConnection(MYSQL_CONF)

// 连接数据库
con.connect()

// 执行
const exec = (sql)=>{
    const promise = new Promise((resove,reject)=>{
        con.query(sql,(err,data)=>{
            if(err){
                reject(err)
            }
            resove(data)
        })
    })
    return promise
}



module.exports = {
    exec,
    escape: mysql.escape
}