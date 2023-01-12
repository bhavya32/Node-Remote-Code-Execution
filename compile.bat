@echo off
call uglifyjs index.js helper.js -o min.js -c -m
call javascript-obfuscator min.js --output obfuscated.js