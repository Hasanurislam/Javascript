/*h1=document.querySelector("h1");

function changecolor(color,delay,nextcolor){
    setTimeout(function(){
        h1.style.color=color;
        if(nextcolor) nextcolor();
    },delay);
};

changecolor("red",1000,()=>{
    changecolor("green",1000,()=>{
        changecolor("yellow",1000,()=>{
            changecolor("pink",1000,)
        })
    })
})
*/
/*function saveDb(data,success,failure){
    let netspeed=Math.floor(Math.random()*10)+1;
    if(netspeed>4){
        success();
    }
    else{
        failure();
    }
};
*/

/*saveDb("Hsanur",()=>{
    console.log("data was saved successfully ");
    saveDb("Zulfikar",()=>{
        console.log("success2: data saved");

        saveDb("Farid",()=>{
            console.log("success3: data saved successfully");
        },
    ()=>{
        console.log("Failure3: data was not saved");
    })
    },()=>{
        console.log(" failure2: data was not saved");
    })
},()=>{
    console.log("week connection data was not saved");

} 
);

*/
function saveDb(data){
    return new Promise((resolve,reject)=>{
    let netspeed=Math.floor(Math.random()*10)+1;
    if(netspeed>4){
        resolve('data was saved');
    }
    else{
        reject('data was not saved');
    }
    })
};

saveDb("Hasanur")
.then((result)=>{
    console.log("data1 saved");
    console.log(result);
    return saveDb("Zulfikar")
})
.then((result)=>{
    console.log("data2 saved")
    console.log(result)
    return saveDb("Farid");
})
.then((result)=>{
    console.log("data3 saved")
    console.log(result)
})
.catch((error)=>{
    console.log("rejected");
    console.log(error)
})