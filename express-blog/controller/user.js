const {
    exec,
    escape
} = require('../db/mysql')
const {genPassword} = require('../utils/cryp')

const login = (name, password) => {
    // 防止sql注入
    name = escape(name)
    password = escape(password)

    // 加密
    // password = genPassword(password)

    let sql = `
        select username, realname from users where username=${name} and password=${password}
    `
    return exec(sql).then(rows=>{
        return rows[0] || {}
    })
}

module.exports = {
    login
}