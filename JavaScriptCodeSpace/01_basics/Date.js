let myDate = new Date();
console.log(myDate);
console.log(myDate.toString())
console.log(myDate.toLocaleString())

console.log(typeof Date);
console.log(typeof myDate);

// 
let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString());

// timestamps 
let myTimeStamps = Date.now()
console.log(myTimeStamps);
console.log(myCreatedDate.getTime())