/*let incr=document.querySelector(".box-two");
let incr2=document.querySelector(".box-one");
let inp=document.querySelector(".user-inp");
let reset=document.querySelector(".reset-box")
let operaton=1;
let num=0;
//let changeby=parseInt(inp.value);
inp.addEventListener("click",function(){
    operaton=parseInt(inp.value);
})



let h1=document.querySelector("#count");
incr.addEventListener("click",function(){
      num=num+operaton;
      h1.innerText=num;
})

incr2.addEventListener("click",function(){
    if(num>0){
        num=num-operaton;
    h1.innerText=num;
    }
})
reset.addEventListener("click",function(){
    num=0;
    h1.innerText=nam;
    
})
    */
let incr = document.querySelector(".box-two");
let incr2 = document.querySelector(".box-one");
let inp = document.querySelector(".user-inp");
let reset = document.querySelector(".reset-box");
let operaton = 1;
let num = 0;

inp.addEventListener("input", function () {
    operaton = parseInt(inp.value) || 1;  // Set to 1 if input is invalid
});

let h1 = document.querySelector("#count");

incr.addEventListener("click", function () {
    num = num + operaton;
    h1.innerText = num;
});

incr2.addEventListener("click", function () {
    if (num > 0) {
        num = num - operaton;
        h1.innerText = num;
    }
});

reset.addEventListener("click", function () {
    num = 0;
    h1.innerText = num;  // Change `nam` to `num`
});

