let max=prompt("Enter the maximum number");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number:");
let count=0;
while(true){
    if(guess==="quit"){
        console.log("you quit game");
        break;
    }
    if(guess==random){
        console.log("Congrats you guess the Right! "+random + " number in "+count +"  guess");
        break;
    }
    else{
         guess=prompt("you guess the wrong! tri again")
        count++;
    }
};
