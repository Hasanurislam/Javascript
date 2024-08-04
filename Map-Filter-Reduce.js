//Map Methods

/*let num=[23,54,37];
let arr=num.map((value,index,Array)=>{
    console.log(value,index,Array)
    return value+index;
})
console.log(arr);
*/

//Filter Methods
let num1=[24,12,2,6,8,78,10];
let num2=num1.filter((a)=>{
    
    return a<10;
})
console.log(num2,num1)

//Reduce Methods
let  num=[2,3,1,3,];
const new_arr=(h1,h2)=>{
    return h1+h2;

}
let num3=num.reduce(new_arr)
console.log(num3)
