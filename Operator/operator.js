// Arthmatic Operator
var x=1
var a=1
// 1.Increment
var y=++x
var z=a++
console.log("y=",y)
console.log("z=",z)
console.log("a=",a)
z=a++;
console.log("z=", z)
console.log("a=",a)
a=++z;
z=++a
console.log("a=",a)
console.log("z=",z)
// comparision operator
//1. ==  === !==
var name="Dara"
var num= 9
// if(num !== "9"){
//     alert("type and Value")
// }else{
//     alert("not both")
// }
console.log("type",typeof(name))
// logical Operation

var dog="dog", cat="cat",cow="cow"
if(!(dog == "dog" && cat =="cow")){
    console.log("Cat not equal cow")
}else{
    console.log("dog and cat")
}
//Ternary Operator
// var age=16
// var votable=(age<16)?"ឆ្មាំអូនមិនទាន់១៦សំុស្រលាញ់ៗ" : "ឆ្មាំអូន១៦សំុស្រលាញ់ៗ"
// console.log(votable)

function CheckAge(age){
    if (age > 18){
        console.log("True")
    }else{
        console.log("False")
    }
    
}

var btn = document.getElementById('btn');
var nu = document.getElementById('numb').value;
btn.onclick =function(){
    CheckAge(nu);
    console.log(CheckAge(num.value))
}

