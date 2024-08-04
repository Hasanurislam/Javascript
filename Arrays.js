let n=[57,81,78.68,false,null,"Hasanur"];
for(let i=0;i<n.length;i++)
{
    console.log(n[i])
}
console.log(typeof n)

let num=[6,7,9,30,2];
let num2=num.toString()
console.log(num)
console.log(typeof num2)
console.log(num.join(" and "))
let r=num.push(5);
console.log(num,r)
console.log(num.unshift(9))
//Array Methods
let num3=[19,27,84,83,53,92,23,41];
let num4=[67,38,39,46,7,9];
//delete(num[0])
console.log(num)
console.log(num.concat(num,num4))

//Sort Methods
let compare=(a,b)=>{
    return a-b; 
}
let num5=[19,27,84,83,53,92,23,41];

num.sort(compare)
num.reverse()
console.log(num5)

let num6=[19,27,84,83,53,92,23,41];
let deletevalues=num6.splice(2,3,2000,3000,4000,500000)
console.log(deletevalues)
