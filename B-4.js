// Bug 1: Cart duplication bug
//const cart1 = { items: ['JS Book', 'React Book'], total: 150 };
//const cart2 = { ...cart1 };
//cart2.items.push('Node Book');
//console.log(cart1.items); // What prints? Is this correct?


//Fixed Bug-1

// FIXED CODE:
const cart1 = { items: ['JS Book', 'React Book'], total: 150 };
const cart2 = structuredClone(cart1); 
cart2.items.push('Node Book');
console.log(cart1.items); 


// Bug 2: Function mutating original
//function applyTax(order) {
  //order.total = order.total * 1.17;  // 17% tax
  //return order;
//}
//const myOrder = { id: 1, total: 100 };
//const taxedOrder = applyTax(myOrder);
//console.log(myOrder.total);   // What prints? Should it change?

//Fixed Bug-2

// FIXED CODE:
function applyTax(order) {
    return { ...order, total: order.total * 1.17 };
}
const myOrder = { id: 1, total: 100 };
const taxedOrder = applyTax(myOrder);
console.log(myOrder.total); 

// Bug 3: Config reset that doesn't work
//const defaultConfig = { theme: 'dark', lang: 'en', nested: { fontSize: 14 } };
//function resetConfig(config) {
 // config = { ...defaultConfig }; // intended to reset
 // config.nested.fontSize = 14;   // intended to reset nested
//}
//const appConfig = { theme: 'light', lang: 'ur', nested: { fontSize: 20 } };
//resetConfig(appConfig);
//console.log(appConfig.theme);           // 'light' or 'dark'?
//console.log(appConfig.nested.fontSize); // 20 or 14?

//Fixed Bug-3

// FIXED CODE:
const defaultConfig = { theme: 'dark', lang: 'en', nested: { fontSize: 14 } };

function resetConfig() {
    return structuredClone(defaultConfig); 
}

let appConfig = { theme: 'light', lang: 'ur', nested: { fontSize: 20 } };
appConfig = resetConfig(); 

console.log(appConfig.theme); // Outputs: 'dark'
console.log(appConfig.nested.fontSize); // Outputs: 14