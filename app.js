let port = require('./modules/port.js')
let ip = require('./modules/ip.js')

let app = require('express')()
let scanner = require('./scan/scanner.js')

app.get('/', (request, response) => {
    response.writeHead(200, { "ContentType": "text/plain" })
    response.write("It Works here!")
    response.end()
}).listen(port.PORT, ip.IP, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server lunched on " + ip.IP + ":" + port.PORT)
        scanner.scan()
    }
})