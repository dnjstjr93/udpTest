const dgram = require("dgram");

let myAddr1 = '192.168.2.100'
let myAddr2 = '192.168.200.101'
let pcAddr = '192.168.200.100'
let droneAddr = '192.168.2.200'

let rcPort = 10001
let dronePort = 10002
let cmdPort = 10003

rc_udp_client = null

udpPortOpening()

function udpPortOpening() {
    if (rc_udp_client === null) {
        rc_udp_client = dgram.createSocket('udp4');
        rc_udp_client.bind(dronePort, pcAddr);

        rc_udp_client.on('listening', udpPortOpen);
        rc_udp_client.on('message', udpPortData);
        rc_udp_client.on('close', udpPortClose);
        rc_udp_client.on('error', udpPortError);
    } else {
        rc_udp_client.close()
        rc_udp_client = null

        setTimeout(udpPortOpening, 1000)
    }
}

function udpPortOpen() {
    console.log('UDP socket connect to ' + rc_udp_client.address().address + ':' + rc_udp_client.address().port);
}

function udpPortClose() {
    console.log('udpPort closed.')

    setTimeout(udpPortOpening, 2000)
}

function udpPortError(error) {
    console.log('[udpPort error]: ' + error.message)

    setTimeout(udpPortOpening, 2000)
}

function udpPortData(data) {
    console.log(data)
}

