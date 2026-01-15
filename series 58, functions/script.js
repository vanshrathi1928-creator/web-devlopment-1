function nice(name){

console.log("hey "+ name +" you are a nice programer!")
console.log("hey "+ name +" you a the frontend devloper!")
console.log("hey "+ name +" you are fullstack devloper!")
console.log("hey "+ name +" you working in google as SDE2!")
}
nice("vansh")
nice("rathi")

// function sum(a,b,c){
function sum(a,b,c=5){
    // console.log(a+b+c)
    return a+ b + c
}
// sum(1,2,3)
result=sum(2,3)
result1=sum(2,3)
result2=sum(2,3)

console.log("the sum of the these numbere is",result)
console.log("the sum of the these numbere is",result1)
console.log("the sum of the these numbere is",result2)
func1=(x)=>{
console.log("I am a arrow function ",(x))
}
func1(22);
func1(33);
func1(44);