## koa2



- 原生支持 async/await 
- 新开发的框架基于koa2，比如 egg.js



### 1. async/await

学习koa2 之前需要会使用 async/await。

举个例子，按照顺序读取两个文件的内容。在一个文件夹下三个文件：

```txt
a.txt	// 内容为 this is a file
b.txt	// 内容为 this is b file
app.js
```




```js
// app.js 的内容
var fs = require('fs')

// promise 封装读取文件
function getFile(filename){
    return new Promise((resove,reject)=>{
        fs.readFile(filename,(err,data)=>{
            if(err){
                reject(err)
            }
            resove(data.toString())
        })
    })
}

// 按照顺序读取两个文件
async function aReadFile(){
    rty{
        let a = await getFile('a.txt')
        console.log(a)
        let b = await getFile('b.txt')
        console.log(b)
    }catch(err){
        console.log(err)
    }
}

aReadFile()
// 输出结果如下
// this is a file
// this is b file
```

总结：

- await 后面可以传入 promise 获取resove	
- async/await必须一起使用
- async 函数也是 promise 对象

- try-catch 获取 promise 获取 promise 的 reject

### 2. koa2

安装：

```bash
// 全局安装
npm i koa-generator -g

// 创建
koa2 project-name

// 安装依赖 && 运行
npm install 
npm run dev
```



安装 cross-env

```bash
npm i cross-env --save-dev
```

安装完成后在， package.json 中更新配置

```json
"scripts":{
    "dev": "cross-env NODE_ENV=dev ./node_modules/.bin/nodemon bin/www",
    "prd": "cross-env NODE_ENV=prd pm2 start bin/www",
}
```



koa2 跟 express 有一下不同点：

- 中间件必须使用 async 函数
- koa2 中的 ctx 合并了
- 返回使用 `ctx.body`

 

### 3. 请求处理

- get请求：在ctx.query中获取
- post请求：在 ctx.request.body中获取

### 4.登录

- koa-generic-session 
- koa-redis

- redis

### 5. 处理路由

安装数据库和 xss 

```bash
npm i xss mysql --save
```



