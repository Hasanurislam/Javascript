/*h1=document.querySelector("h1");

function changecolor(color){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            h1.style.color=color;
            resolve("color change");
        
        },delay);

    })
};

changecolor("red",1000,()=>{
    changecolor("green",1000,()=>{
        changecolor("yellow",1000,()=>{
            changecolor("pink",1000,)
        })
    })
})

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
/*function saveDb(data){
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
*/


/*async function greet(){
    throw("error occour")
    return "hello";
}

greet()
.then((result)=>{
  console.log("promise was accepted",result)
})
.catch((error)=>{
    console.log("promise was rejected=",error)
})
*/

let h1=document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        let num=Math.floor(Math.random()*5)+1;
        if(num>4){
            reject("color not changed")
        }
        setTimeout(function(){
            h1.style.color=color;
            console.log(`color change to ${color}`)
            resolve("color change");
        },delay);

    })
};

async function getcolor(){
    try{
    await changecolor("red",1000)
    await changecolor("yellow",1000)
    await changecolor("green",1000)
} catch(error){
        console.log("error caught")
        console.log(error)
    }

    let a=5;
    console.log(a+3);
}

getcolor();