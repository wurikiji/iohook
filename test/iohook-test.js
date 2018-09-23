const iohook = require('../index.js');
const keyname = require('../os-keycode').keyname;
const keycode = require('../os-keycode').keycode;


console.log(keycode('control'));
iohook.on('keydown', event => {
  console.log(event);
  console.log(keyname(event.rawcode));
});

iohook.on('mousemove', event => {
  console.log(event);
});

console.log('start');
// iohook.disableMovePropagation();
// iohook.disableClickPropagation();
iohook.start();

setTimeout(() => {
  //iohook.enableKeyboardPropagation();
  //iohook.enableMovePropagation();
  //iohook.enableClickPropagation();
  iohook.stop();
  console.log('end');
}, 100000)
