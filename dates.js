const date = new Date()

// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);

const mydate = new Date(2025 , 0, 12)

console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(mydate.toLocaleString('default',{
    weekday: "long",
}));
