let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    let h1=document.querySelector("h1");
    let getrandomcolor=randomcolor();
    h1.innerText=getrandomcolor;
    
    let div=document.querySelector("div");
    div.style.backgroundColor=getrandomcolor;
    console.log("color updated");
});

function randomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;
    return color
}