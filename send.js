const dgram = require("dgram");

let myAddr1 = '192.168.2.100'
let myAddr2 = '192.168.200.101'
let pcAddr = '192.168.200.100'
let droneAddr = '192.168.2.200'

let rcPort = 10001
let dronePort = 10002
let cmdPort = 10003

let rcUDP = dgram.createSocket('udp4');

rcUDP.send(Buffer.from('HELLO', 'hex'), 0, Buffer.from('HELLO', 'hex').length, rcPort, droneAddr,
    function (err) {
        if (err) {
            console.log('UDP message send error', err);
            return;
        }
    }
)