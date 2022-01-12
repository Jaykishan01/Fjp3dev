const path =require('path')

let ext =path.extname('D:\\Fjp3dev\\node\\f1.txt')
console.log('Extension name '+ext)

// ye copy karta hai extension file ko 

let basename =path.basename('D:\\Fjp3dev\\node\\f1.txt')
console.log('BaseName-->'+basename)

console.log(__dirname) //  gets you the path of curr directory 
console.log(__filename) //gets you the path of the file you are in 