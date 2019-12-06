var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var opt="";
var result=document.getElementById('result');
function getOperate(btn) {
    opt = btn.innerHTML;
}
function equal(){
    result.innerHTML = caculate(num1.value, num2.value, opt);
}
function clears(){
    result.innerHTML="0";
}
// function caculate(num1,num2,opt) {
//     switch (opt) {
//         case "-":
//             return num1 - num2;
//             break;
//         case "+":
//             return parseInt(num1) + parseInt(num2);
//             break;
//         case "x":
//             return num1 * num2;
//             break;
//         case "/":
//             return num1 / num2;
//             break;
//         default:
//             return "Error"
//     }
// }
function caculate(num1, num2, opt) {
    if (opt == "-") {
        return num1 - num2;
    }
    else if (opt == "+") {
        return parseInt(num1) + parseInt(num2);
    }
    else if (opt == "x") {
        return num1 * num2;
    }
    else if (opt == "/") {
        return num1 / num2;
    } else
        return Error;

}
