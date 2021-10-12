var fetchUrl = require("fetch").fetchUrl;
  fetchUrl(`https://evergene.io/api/animemes`, function(error, meta, body){
    const JSONa = body
    const ParsedJSON = JSON.parse(JSONa);
    console.log(ParsedJSON,0,data.children,0,data.glidings.url_overridden_by_dest);
  });