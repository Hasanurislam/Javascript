let runagain=true;

while(runagain)
{
    let age=prompt("Enter your age: ");
    age=parseInt(age);
    if(age<=0)
    {
        console.error("please enter a valid age");
        break;
    }
    let candrive=(age)=>{
       return age>=18?true:false;
    }
    if(candrive(age))
    {
        alert("You can drive");
    }
    else
    {
        alert("You can not drive:");
    }
    runagain=confirm("Can you again enter your age");
}