let scanner = require('local-network-scanner')

var scanObj = { argument: ["-I", "eth0"] }

class Scanner {
    scan() {
        var date = new Date(Date.now())
        console.log('# ' + date.toUTCString())
        scanner.scan(scanObj, (devices) => {
            console.log(devices)
        })
    }
}
module.exports = new Scanner()