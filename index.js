const bot = require(`./bot.js`);
// const cmds = require(`./komendy.js`);
const web = require(`./web.js`);
const wait = require(`util`).promisify(setTimeout);
const data = `ICBfX19fX19fX18gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fICAgICAgLl9fXy5fXyAgICAgICAuX18gIC5fXyBfXyAgICAgICAgICAgCiAvICAgX19fX18vXyAgXyAgX19fX19fXyAgICAgX19fXyAgIF9fX18gX19fX18gXy8gIHxfICBfX3wgXy98X198IF9fX19ffCAgfCB8X198ICB8IF9fIF9fX18gIAogXF9fX19fICBcXCBcLyBcLyAvXF9fICBcICAgLyBfX19cXy8gX19fXFxfXyAgXFwgICBfX1wvIF9fIHwgfCAgfC8gIF9fXy8gIHwgfCAgfCAgfC8gLy8gX18gXCAKIC8gICAgICAgIFxcICAgICAvICAvIF9fIFxfLyAvXy8gID4gIFxfX18gLyBfXyBcfCAgfCAvIC9fLyB8IHwgIHxcX19fIFx8ICB8X3wgIHwgICAgPFwgIF9fXy8gCi9fX19fX19fICAvIFwvXF8vICAoX19fXyAgL1xfX18gIC8gXF9fXyAgPl9fX18gIC9fX3wgXF9fX18gfCB8X18vX19fXyAgPl9fX18vX198X198XyBcXF9fXyAgPgogICAgICAgIFwvICAgICAgICAgICAgICBcLy9fX19fXy8gICAgICBcLyAgICAgXC8gICAgICAgICAgXC8gICAgICAgICBcLyAgICAgICAgICAgICBcLyAgICBcLyA`;
const decodeddata = atob(data);
const myArgs = process.argv.slice(2);
process.on('unhandledRejection', (error) => { // unhandled promise rejection
  console.error('Unhandled promise rejection:', error);
});
switch (myArgs[0]) {
  case 'debug':
    console.log(`Swagcatlike Debug`);
    break;
  case 'production':
    console.log(`Swagcatlike Production`);
    break;
  default:
    break;
}
// console.clear();
console.log(decodeddata);
const syncWait = (ms) => {
  const end = Date.now() + ms;
  while (Date.now() < end) continue;
};

if (process.platform === 'win32') {
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('SIGINT', function() {
    process.emit('SIGINT');
  });
}

process.on('SIGINT', function() {
  console.log(`CTRL+C Otrzymane, quituje...`);
  syncWait(25);
  // graceful shutdown
  process.exit();
});
async (bot, web) => {
try {
//    eval(cmds);
  eval(bot);
  eval(web);
} catch (error) {
  console.log(error);
}
}
 
