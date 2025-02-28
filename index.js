console.log("Hello world..")

//console.log(require('os').networkInterfaces())


// const math = require("./CommonJsModule.js")

// console.log(math.add(2,3))
// console.log(math.sub(9,2))

import { add, sub } from './ES6_Modules.mjs';

console.log(add(2,3))
console.log(sub(9,2))