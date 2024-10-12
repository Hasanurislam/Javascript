/*let btn=document.querySelector("button");

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
    */
/*let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log(this.innerHTML);
    this.style.backgroundColor="red";
})
    */
   /*let inp=document.querySelector("input");

   inp.addEventListener("keyup",function(event){
    //
    if(event.code=="ArrowUp"){
        console.log("the character moves fordward");
    }
    else if(event.code=="ArrowDown"){
        console.log("the character moves backward");
    }
    else if(event.code=="ArrowRight"){
        console.log("the character moves Right");
    }
    else if(event.code=="ArrowLeft"){
        console.log("the character moves left");
    }
   });
   */
  let form=document.querySelector("form");

  form.addEventListener("submit",function(event){
    event.preventDefault();
    let inp=document.querySelector("input");
    console.dir(inp.value);

  });