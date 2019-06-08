'use strict';

if(process.argv.length <= 2){
    throw "No arguments entered!";
}

let args: Array<string> = process.argv.slice(2, process.argv.length);
console.log(args);

