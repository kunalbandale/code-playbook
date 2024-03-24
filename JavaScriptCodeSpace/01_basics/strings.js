const gameName = new String('COD-game');
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('C'))

const newString = gameName.substring(0,3);
console.log(newString);

const anotherString = gameName.slice(0,4);
console.log(anotherString);

const newString1 = "     kunal    ";
console.log(newString1);
console.log(newString1.trim());

const url = "www.kunalbandale%20com"
console.log(url.replace('%20' , '.'));


console.log(gameName.split('_'))