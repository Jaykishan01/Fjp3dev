function add(a,b){
    console.log("The sum is",a+b)
}

function sub(a,b){
    console.log("The Differnece is",a-b)
}
function mul(a,b){
    console.log("The mul is",a*b)
}
function div(a,b){
    console.log("The Div is",a/b)
}


module.exports={
    addition :add,
    dubstraction :sub,
    Multiply: mul,
    division :div,
}


//module.expots is a object provided by node.js by
// which you can export your function in key value pair 
// you will use your functions with the keys you have assigned to them 