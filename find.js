'use strict';


    // https://github.com/node-hid/node-hid
var HID = require('node-hid'),
    // Get all devices connected to the computer
    devices = HID.devices();





// Show all devices
console.log(devices);