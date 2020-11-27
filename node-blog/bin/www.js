const http = require('http')
const serverhandle = require('../app')

const PORT = 8088;
const serve = http.createServer(serverhandle)

serve.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})

