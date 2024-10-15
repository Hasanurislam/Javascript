let inp=document.querySelector("input");
let submit=document.querySelector("#btn-one");
let startgame=document.querySelector("#btn-two");
let h3=document.querySelector("h3");
let h4=document.querySelector("h4");
let started=true;
let guessnumber;
let guess=[];

let ran=Math.floor(Math.random()*100)+1;

inp.addEventListener("input",function(){
      guessnumber=parseInt(inp.value);
      
      
      
    })
    
    submit.addEventListener("click",function(){
        guess.push(guessnumber);
        if(guessnumber>ran){
        h3.innerText=`the guess number is big`
     
     }
     else if(guessnumber==ran){
        h3.innerText=`congrass you win! in ${guess.length} guess`
     }
     else if(guessnumber>100){
        h3.innerText=`please enter a valid number`
     }
     else{
        h3.innerText=`the guess number is small`

     }
     h4.innerText=`your guess: ${guess}`;
});

startgame.addEventListener("click",function(started){
    started=false;
     guess=[];
     ran=Math.floor(Math.random()*100)+1;

})
