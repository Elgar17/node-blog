const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const { access} = require('./src/util/log')

// session 数据
const SESSION_DATA = {}




// ⭐ 路由的处理
const serverHandle = (req, res) => {
    // 记录日志
    access(`${req.method} -- ${req.url} -- ${Date.now()}`)

    // 设置数据返回格式
    res.setHeader('Content-type', 'application/json')

    // 处理path
    const url = req.url
    req.path = url.split('?')[0]

    // 处理 参数
    req.query = querystring.parse(url.split('?')[1])

    // 解析 cookie
    req.cookie = {}
    let cookieStr = req.headers.cookie || ''
    cookieStr.split(';').forEach(val => {
        if (!val) {
            return
        }
        let arr = val.split("=")
        req.cookie[arr[0].trim()] = arr[1]
    });

    // 解析 session 
    let needSetCookie = false;
    let userId = req.cookie.userid
    if (userId) {
        if (!SESSION_DATA[userId]) {
            SESSION_DATA[userId] = {}
        }
    } else {
        needSetCookie = true
        userId = `${Date.now()}_${Math.random()}`
        SESSION_DATA[userId] = {}
    }
    req.session = SESSION_DATA[userId]

    // 处理 POST 请求
    getPostData(req).then(postDta => {
        req.body = postDta
        // 处理 blog
        const blogResult = handleBlogRouter(req, res)
        if (blogResult) {
            blogResult.then(blogData => {
                if(needSetCookie){
                    res.setHeader('Set-Cookie',`userid=${userId}; path=/; httpOnly; expires=${getCookieEexpries()}`)
                }
                res.end(
                    JSON.stringify(blogData)
                )
            })
            return
        }


        const userResult = handleUserRouter(req, res)
        if (userResult) {
            userResult.then(userData => {
                if(needSetCookie){
                    res.setHeader('Set-Cookie',`userid=${userId}; path=/; httpOnly; expires=${getCookieEexpries()}`)
                }
                res.end(
                    JSON.stringify(userData)
                )
            })
            return
        }


        // 404
        res.writeHead(404, {
            "Content-type": "text/plain"
        })
        res.write('404 Not Found\n')
        res.end()
    })



}


// 获取cookie的过期时间
const getCookieEexpries = ()=>{
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    // console.log(d.toGMTString())
    return d.toGMTString()
}

// 处理 POST　data
const getPostData = (req) => {
    const promise = new Promise((resove, reject) => {
        if (req.method !== 'POST') {
            resove({})
            return
        }
        if (req.headers['content-type'] !== 'application/json') {
            resove({})
            return
        }
        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            console.log(postData)
            if (postData == '') {
                resove({})
            }
            resove(
                JSON.parse(postData)
            )
        })
    })
    return promise
}

module.exports = serverHandle