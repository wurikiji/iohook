const iohook = require('../iohook/index.js');

iohook.on('keydown', event => {
  console.log(event);
});

iohook.on('mousemove', event => {
  console.log(event);
});

console.log('start');
iohook.disableKeyboardPropagation();
iohook.disableMovePropagation();
iohook.disableClickPropagation();
iohook.start(true);

setTimeout(() => {
  iohook.enableKeyboardPropagation();
  iohook.enableMovePropagation();
  iohook.enableClickPropagation();
  iohook.stop();
  console.log('end');
}, 3000)