## 中间件原理

- 如何使用？
- 如何实现？



这是一个最简单的中间件，不难发现，每个都用 next 函数连接起来的。

```js
app.use((req,res,next)=>{
    console.log("开始处理...")
    next()
})
app.use((req,res,next)=>{
    console.log(req.url)
    next()
})
```

分析：

1. 收集 `app.use` 注册的中间件

2. 遇到 http 请求，用 path 和 method 来判断，将来要触发哪些请求

3. 通过 next 触发下一个函数

```js
class myexpress(){
    constructor(){
        this.router = {
            all:[],
            get:[],
            post:[]
        }
    }
}
```

在处理路由前，执行函数



