let gameseque=[];
let userseque=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started==false){
        console.log("game has started");
        started=true;
        levelup();
    }
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);

}

function levelup(){
    userseque=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomInx=Math.floor(Math.random()*3);
    let randomcolor=btns[randomInx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    console.log(randomInx);
    console.log(randomcolor);
    console.log(randombtn);
    gameseque.push(randomcolor);
    console.log(gameseque);

    gameflash(randombtn);
}
function checkAns(idx){
    //console.log("curent level:" +level);
   // let idx=level-1;
    if(userseque[idx]===gameseque[idx]){
        if(userseque.length==gameseque.length){
            setTimeout(levelup,1000);
        }
    }
    else {
        console.log("over");
        h2.innerHTML=`game over! your score was <b>${level}</b> <br>prese any key to start game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function keypress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseque.push(usercolor);
    console.log(usercolor);
    checkAns(userseque.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
btn.addEventListener("click",keypress);
}
function reset(){
    started=false;
    gameseque=[];
    userseque=[];
    level=0;
}