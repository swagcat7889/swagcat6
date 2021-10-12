const express = require(`express`);
const app = express();
const {port} = require(`./webconfig.json`);
const fs = require(`fs`);
var fetchUrl = require("fetch").fetchUrl;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
app.get('/', async function(req, res) {
  console.log(req.ip);
  return res.sendFile('index.html', {root: '.'});
});
app.get('/jsonify/:id', async function (req, res) {
  res.send(`{"JSON":"${req.params.id}"}`)
});
app.get(`/ping`, async function (req, res) {
  res.send(`Pong!`)
});
app.get('/cat/', async function (req, res) {
  fetchUrl("https://some-random-api.ml/img/cat", function(error, meta, body){
    const apiFetch = body.toString();
    const parsedFetch = JSON.parse(apiFetch);
    res.send(parsedFetch.link);
  });
});
app.get('/dog/', async function (req, res) {
  fetchUrl("https://some-random-api.ml/img/dog", function(error, meta, body){
    const apiFetch = body.toString();
    const parsedFetch = JSON.parse(apiFetch);
    res.send(parsedFetch.link);
  });
});
app.get('/fox/', async function (req, res) {
  fetchUrl("https://some-random-api.ml/img/fox", function(error, meta, body){
    const apiFetch = body.toString();
    const parsedFetch = JSON.parse(apiFetch);
    res.send(parsedFetch.link);
  });
});
app.get('/drake.png', async function (req, res) {
  const txt1 = req.query.txt1;
  if (txt1 == null) return res.send(`txt1 is empty, come on, how stupid can you be?`);
  const txt2 = req.query.txt2;
  if (txt2 == null) return res.send(`txt2 is empty, COME ON!!!`)
  fetchUrl(`https://cool-api.xyz/drake?text1=${txt1}&text2=${txt2}`, function(error, meta, body){
    res.set('Content-Type', 'image/png');
    res.send(body);
  });
});
app.get('/triggered.gif', async function (req, res) {
  const avatar = req.query.avatar;
  if (avatar == null) return res.send(`avatar query is empty, please give me the avatar link...`);
  fetchUrl(`https://some-random-api.ml/canvas/triggered?avatar=${req.query.avatar}`, function(error, meta, body){
    res.set('Content-Type', 'image/gif');
    res.send(body);
  });
});
app.get('/animeme', async function (req, res) {
  fetchUrl(`https://evergene.io/api/animemes`, function(error, meta, body){
    const JSONa = body
    const ParsedJSON = JSON.parse(JSONa);
    res.send(ParsedJSON.url);
  });
});
app.get('/docs', async function(req, res) {
  return res.sendFile('docs.html', {root: '.'});
});
app.listen(port, () => console.log(`SwagCat api ready at http://0.0.0.0:${port}`));