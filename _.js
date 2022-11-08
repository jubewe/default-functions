const fs = require("fs");

let funcs = {};
let funcdir = fs.readdirSync("./");
for(let func in funcdir){
  console.log(funcdir[func])
  if(funcdir[func].endsWith(".js") && funcdir[func] !== "_.js"){
    funcs[funcdir[func].split(".js")[0]] = require(`./${funcdir[func]}`);
  }
}

console.log(funcs)

module.exports = funcs;