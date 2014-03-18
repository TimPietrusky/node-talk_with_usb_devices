'use strict';

/*
 * Imports & variables
 */
    // https://github.com/node-hid/node-hid
var HID = require('node-hid'),
    // Get all devices connected to the computer
    devices = HID.devices(),
    // Current connected device
    connectedDevice = undefined;





/*
 * Options
 */
var options = {
  vendorID : 8483,
  productID : 4112
}





// Iterate over all USB devices
devices.forEach(function(device, index) {

    // Get the path of the real device if vendorID & productID match
    if (device.vendorId == options.vendorID && device.productId == options.productID) {
      // Open the device
      connectedDevice = new HID.HID(device.path);

      // Read from device
      connectedDevice.on("data", function(data) {
        console.log(data);
      });

    }

}, this);