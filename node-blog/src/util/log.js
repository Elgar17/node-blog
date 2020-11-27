const fs = require('fs')
const path = require('path')

// 写日志
function writeLog(writeStream, log) {
    writeStream.write(log + '\n')
}

// 生成 writeStram
function createWriteStream(fileName) {
    let name = path.resolve(__dirname, '../', '../', 'logs', fileName)
    const writeStream = fs.createWriteStream(name, {
        flags: 'a'
    })
    return writeStream
}

const accessWritwStream = createWriteStream('access.log')

function access(log) {
    writeLog(accessWritwStream, log)
}

module.exports = {
    access
}