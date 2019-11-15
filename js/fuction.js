// function testNoReturn(a,b){
//     console.log(`a+b ${a+b*x}`)
// }
let testNoReturn = (a,b) =>{
    return(console.log(`a+b ${a+b*x}`))
}
function testReturn(a,b){
    return(x*(a+b))
}
var x=8
let logs = testNoReturn(12,10)
let num=testReturn(3,10)
let testing=num+10
console.log(testing)

function showMessage(){
    alert("Data has been Deleted")
}
//showMessage()
// let demo = (a,b) => a*b
//Arrow Fuction
let demo=(a ,b ) =>{
return a*b
}
console.log(demo(4,4))