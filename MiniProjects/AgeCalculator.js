let inp=document.querySelector("input");
let btn=document.querySelector("#btn");
let h3=document.querySelector("h3");

btn.addEventListener("click",function(){
    if(inp.value===""){
        alert("Please Enter Your Date of Birth");
    }
    else{
        const dob =new Date(inp.value);
        //user dob
        let dob_year=dob.getFullYear();
        let dob_mounth=dob.getMonth()+1;
        let dob_day=dob.getDate();
        //current dob
        const currentdob=new Date();
        console.log(currentdob);
        let currentdob_year=currentdob.getFullYear();
        let currentdob_mounth=currentdob.getMonth()+1;
        let currentdob_day=currentdob.getDate();
        
        
        let year;
        //year

        if(currentdob_year>dob_year){
            year=currentdob_year-dob_year;
        }else{
            year=dob_year-currentdob_year;
        }
        let mounth;
        //month
        if(currentdob_mounth>dob_mounth){
            mounth=currentdob_mounth-dob_mounth;
        }else{
            mounth=dob_mounth-currentdob_mounth;
        }
        let day;
        //day
        if(currentdob_day>dob_day){
         day=currentdob_day-dob_day;
        }else{
            day= dob_day-currentdob_day
        }
        
        h3.innerText=`Your are ${year} year ${mounth} mounth ${day} day old`
      

    
    }
})
