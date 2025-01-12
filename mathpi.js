
console.log(Math.PI);
const descraptor=Object.getOwnPropertyDescriptor(Math,"PI");
descraptor.value=100;

const chai={
    name:"Masala chai",
    price:10,
    isavalable:true
}
Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:true,
    configurable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));