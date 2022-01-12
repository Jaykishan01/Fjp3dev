//child pocess is a node module useed to create a sub-process within a script 
//You can perform different task 

// // require karna padega 
const cp =require('child_process')
// console.log('Trying to open calaculator')

// //cp.execSync('code')
let output =cp.execSync('node test.js')
// cp.execSync('start chrome')
console.log('output__>'+output)

