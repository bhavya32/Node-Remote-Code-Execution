var fs = require('fs');
var bytenode = require("./helper");
var source = fs.readFileSync(process.argv[2], 'utf8');
var x = bytenode.compileCode(source)
fs.writeFileSync(process.argv[2].split(".")[0] + ".jsc", x);