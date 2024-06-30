let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let res=document.getElementById("result");

document.getElementById('sum').addEventListener("click",()=>{
    res.value=parseInt(num1.value)+parseInt(num2.value);
})