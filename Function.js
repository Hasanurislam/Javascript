//print marks of a student in object using for loop and for in loop
let marks={
    Hasanur:60,
    Zulfikar:50,
    Samiul:70

}
for(let i=0;i<Object.keys(marks).length;i++)
    {
    console.log("The marks of "+Object.keys(marks)[i] +" are " +marks[Object.keys(marks)[i]])
}
//another way
for(let a in marks)
{
    console.log("The marks of "+a+" are "+marks[a])
}