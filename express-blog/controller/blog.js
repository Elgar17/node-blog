const {
    exec
} = require('../db/mysql')

const getList = (author, keyword) => {
    // 返回 list 数据
    let sql = 'select * from blogs where 1=1 '
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and content like '%${keyword}%' `
    }
    sql += 'order by createtime desc'

    return exec(sql)
}

const getDetial = (id) => {
    let getSql = `select * from blogs where id=${id} `
    return exec(getSql).then(row => {
        return row[0]
    })
}


const newBlog = (blogData) => {
    // 这里存储数据
    let title = blogData.title
    let content = blogData.content
    let author = blogData.author
    let createtime = Date.now()
    let sql = `
        insert into blogs(title,content,createtime,author) 
        values ('${title}','${content}','${createtime}','${author}');
    `

    return exec(sql).then(status => {
        return status.insertId
    })
}

const updateBlog = (id, blogData) => {
    // 这里存储数据
    let content = blogData.content
    let title = blogData.title

    let sql = `
        update blogs set content='${content}', title='${title}' where id="${id}"
    `
    return exec(sql).then(updateData => {
        if (updateData.affectedRows > 0) {
            return true
        } else {
            return false
        }
    })
}

const delBlog = (id, author) => {

    sql = `
        delete from blogs where id='${id}' and author='${author}';
    `
    return exec(sql).then(deleteData => {
        if (deleteData.affectedRows > 0) {
            return true
        } else {
            return false
        }
    })
}




module.exports = {
    getList,
    getDetial,
    newBlog,
    updateBlog,
    delBlog
}