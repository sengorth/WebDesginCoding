function btnsum(a,b){
    console.log(sum);
}

var btn=document.getElementById('btnsum')
btn.onclick = function(){
    var none = document.getElementById('num1')
    var ntwo = document.getElementById('num2')
    sum = parseInt(num1.value) + parseInt(num2.value);
    btnsum(none.value ,ntwo.value)
}
function btnsubtract(a,b){
    console.log(`${a-b}`)
}

var btn=document.getElementById('btnsubtract')
btn.onclick = function(){
    var none = document.getElementById('num1')
    var ntwo = document.getElementById('num2')
    btnsubtract(none.value ,ntwo.value)
}
function btnmultiply(a,b){
    console.log(`${a*b}`)
}

var btn=document.getElementById('btnmultiply')
btn.onclick = function(){
    var none = document.getElementById('num1')
    var ntwo = document.getElementById('num2')
    btnmultiply(none.value ,ntwo.value)
}
function btndivide(a,b){
    console.log(`${a/b}`)
}

var btn=document.getElementById('btndivide')
btn.onclick = function(){
    var none = document.getElementById('num1')
    var ntwo = document.getElementById('num2')
    btndivide(none.value ,ntwo.value)
}