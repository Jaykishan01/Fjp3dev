// file ssystem moduele 

// ***   files********//

const fs= require('fs')

const path =require('path') //

// kuch file create karenge us me read karenge write karenge update karenge delete karenge

// let content =fs.readFileSync('f1.txt')
// console.log("this is F1 data -->"+content)  // humne alag se ek txt file banay fir usko read kiya


//writing to a file 
// writeFileSync kisi file me write kar sakte hai 
// kaun si file me write karwana hai hai o rkya write karwana hai
// fs.writeFileSync('f3.txt','This data will be written for f3')
//if the file name is passed does not exist then a new file will be created its length 
// and data will we writteen on that file 
// fs.writeFileSync('f2.txt','This data will be written for f2')
// console.log('Data Written')

// append a file 
// appendFileSync method add new data to previously written file 
// fs.appendFileSync('f2.txt','this is new data laundey ')

// delete a file 
// fs.unlinkSync('f2.text')
// console.log('f2 Deleted ')
// delet kar deta hai  khatarnak hai bhaishab 


// ******************************* Directories *************************************//
// creating a directories
// // mkdirSync method is used to crate a new directory or folder 

// fs.mkdirSync('myFolder')
// delete a directory
//rmdirSync

// fs.rmdirSync('myDirectory')

// let doesExist =fs.existsSync('myFolder')
// console.log('Available hai bro -->>> mauj le ab '+doesExist)

// let statsofDirectory= fs.lstatSync('myFolder')
// // console.log(statsofDirectory)

// console.log('is file', statsofDirectroy.isFile())
// console.log('isDirectory',statsofDirectory.isDirectory())
// let folderPath ='D:\\Fjp3dev\\node\\myFolder'

// let foldercontent =fs.readdirSync(folderPath)

// console.log("Directory content"+foldercontent)


//copying file   copy karne ke lye source or Destination Dono CHahye
// source file , destination file
let srcFilePath= 'D:\\Fjp3dev\\node\\myFolder\\u.txt'

let destinationPath ='D:\\Fjp3dev\\node\\myFolder2\\'

let tobecopiedFileName = path.basename(srcFilePath)
console.log(tobecopiedFileName)

let destpath = path.join(destinationPath,tobecopiedFileName)
console.log(destpath)

fs.copyFileSync(srcFilePath,destpath)
console.log("Ho gya bhai copy")

//********************************************* *
