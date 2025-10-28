const mysym = Symbol("key1")

const Detail = {
    name : "Nirajan",
    [mysym] : "myKey1",
    email : "nirajan@google.com",
    address : "patan",
    age : 20,

}

// console.log(Detail.email);
// console.log(Detail["email"]);
// console.log(typeof Detail["email"]);
// console.log(Detail[mysym])
// console.log(typeof Detail[mysym])


// Detail.email = "nirajan@chatGpt.com"
// console.log(Detail);
// Object.freeze(Detail)
// console.log(Detail);


Detail.greeting = function(){
    console.log("Hello javascript user ");
    
}

Detail.greetingTwo = function(){
    console.log(`hello ${this.name}, How are u?`);
    
}

console.log(Detail.greeting());
console.log(Detail.greetingTwo());
