// Part 1: Predict and explain
//console.log(a);       // Output:undefined -VAR IS hoisted to the top of its execution context and immediately initialized. In this case it has no value and hence the output will be undefined.
//console.log(b);       // Output: ?CRASH. There will be a reference error! 
//console.log(c);       // Output: ?CRASH. There will be a reference error! 
//var  a = 10;
//let  b = 20;
//const c = 30;
// Part 2: Predict
//var   a = 99;         // re-declaring var- var lets you re declare the value.
//let   b = 88;         // re-declaring let- The problem is that let does not allow the redeclaring. In this case it will be an error!
//const c = 77;         // re-declaring const- The problem is that const does not allow the redeclaring. In this case it will be an error!
// Part 3: Predict
//const user = { name: 'Asad' };
//user.name  = 'Ali';   // is this allowed?-Yes, It is completely fine!
//user       = {};      // is this allowed?-No, You are trying to bulldoze the entire house and build a brand-new house on the exact same address. This is not possible!






//The Correct Code!!!!!



var a=10;
let b=20;
const c=30;

console.log(a);
console.log(b);
console.log(c);

const user ={ name: 'Asad'};
user.name='Asad'; 