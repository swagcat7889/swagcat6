const { response } = require('express');
const fetch = require('node-fetch');
let asdf
let j = 0
asdf = 0
const syncWait = (ms) => {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
  };
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  process.on('unhandledRejection', (error) => { // unhandled promise rejection
    console.error('Unhandled promise rejection:', error, asdf);
    asdf++
    syncWait(75);
    if (asdf == 50) process.exit();
  });
async function test() {
  i = 0
  while (true) {
      fetch(`http://n1.furrethosting.pl:1025/ping`);
      i++
      j++
      await sleep(0);
      console.log(i);
  }
}
test();