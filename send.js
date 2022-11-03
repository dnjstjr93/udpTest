const dgram = require("dgram");

let myAddr1 = '192.168.2.100'
let myAddr2 = '192.168.200.101'
let pcAddr = '192.168.200.100'
let droneAddr = '192.168.2.200'

let rcPort = 10001
let dronePort = 10002
let cmdPort = 10003

let rcUDP = dgram.createSocket('udp4');

let sendIP = pcAddr
let sendPort = dronePort
rcUDP.send(Buffer.from('HELLO'), 0, Buffer.from('HELLO').length, sendPort, sendIP,
    function (err) {
        if (err) {
            console.log('UDP message send error', err);
            return;
        } else {
            console.log('Send message HELLO to ' + sendIP)
        }
    }
)
