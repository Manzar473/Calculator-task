const buttons=document.querySelectorAll("button");
let input=document.getElementById("input");
let equalBtn=document.getElementById("EqualButton")
input.value= '';
const clearBtn=document.getElementById("clearBtn");
let i=0
let clearEvent;
function getValue(number){
  input.value+=number;
}

function plus(){
   
   input.value+="+";
}
function minus(){
   input.value+="-";
}
function div(){
   input.value+="/";
}
function mul(){
   input.value+="*";
}
function Result(){
   let result=eval(input.value);
   
  input.value=result;
}


clearBtn.addEventListener("click",function (){
  
      input.value="";
     
 })