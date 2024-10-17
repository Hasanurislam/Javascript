/*let p1=new Promise((resoleve,reject) =>{
    
    setTimeout(() => {
        resoleve("value1");
    }, 1000);
    
});
let p2=new Promise((resoleve,reject) =>{
    setTimeout(() => {
        resoleve("value2");
    }, 2000);
    
});
let p3=new Promise((resoleve,reject) =>{
    setTimeout(() => {
        resoleve("value3");
    }, 3000);
    
});

/*p1.then((value)=>{
   console.log(value);
})
p1.catch((value)=>{
    console.log(value)
})
p2.then((value)=>{
   console.log(value);
})
p3.then((value)=>{
   console.log(value);
})
   
  let promise_all=Promise.all([p1,p2,p3]);
  promise_all.then((value)=>{
    console.log(value)
  })
*/

async function weather(){
    let dumpara=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("23 deg")

        },2000)
    })
    let hekra=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")

        },5000)
    })


console.log("fetching dumpara weather.....");
let a= await dumpara;
console.log("dumpara weather",a);
console.log("Fetching hekra weather......")
let b=await hekra;
console.log("hekra weather",b);

}


weather();
