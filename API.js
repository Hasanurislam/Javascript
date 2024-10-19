let url="https://catfact.ninja/fact";
fetch(url)
.then((responce)=>{
    console.log(responce);

})
.catch((err)=>{
    console.log("ERROR",err)
})