let scanner = require('local-network-scanner')

var scanObj = { argument: ["-I", "eth0"] }

class Scanner {
    scan() {
        console.log(Date.toUTCString(Date.UTC(Date.now())))
        scanner.scan(scanObj, (devices) => {
            console.log(devices)
        })
    }
}
module.exports = new Scanner()