/* 
//
var cartA = { owner: 'Asad', items: [{ name: 'Laptop', price: 150000}], total: 150000};

// BUG 1: Assignment operator only copies the reference pointer. cartB is NOT an independent copy.
var cartB = cartA; 

cartB.items.push({ name: 'Mouse', price: 2500 });
cartB.total = cartB.total + 2500;

// PREDICTION 1: 2 
// WHY: cartB mutated the shared memory address, directly affecting cartA.
console.log('Tab 1 cart items:', cartA.items.length); 

// PREDICTION 2: 152500
// WHY: Same as above. The total was mutated on the shared object.
console.log('Tab 1 total:', cartA.total); 


function applyPromo(cart, discount) {
    // BUG 2: Direct mutation of a passed reference argument. This makes the function impure.
    cart.total = cart.total - discount; 
    cart.promoApplied = true;
    return cart;
}

const originalCart = { owner: 'Sara', items: ['Book'], total: 500 };
const discountedCart = applyPromo(originalCart, 50);

// PREDICTION 3: 450
// WHY: applyPromo mutated the originalCart object passed into it.
console.log('Original total:', originalCart.total); 
*/

//   Fixed Version
  
const cartA = { owner: 'Asad', items: [{ name: 'Laptop', price: 150000}], total: 150000};
const cartB = structuredClone(cartA); 
cartB.items.push({ name: 'Mouse', price: 2500 });
cartB.total = cartB.total + 2500;

console.log('\n--- Task 3: Fixed Cart Outputs ---');
console.log('After fix Tab 1 items:', cartA.items.length); // 1
console.log('After fix Tab 1 total:', cartA.total);         // 150000

function applyPromoFixed(cart, discount) {
    return {
        ...cart, // Spread original properties
        total: cart.total - discount, // Overwrite total
        promoApplied: true            // Add new property
    };
}

const originalCart = { owner: 'Sara', items: ['Book'], total: 500 };
const discountedCart = applyPromoFixed(originalCart, 50);

console.log('After fix Original total:', originalCart.total); // 500 (Safely preserved!)

function addItem(cart, item) {
    return {
        ...cart,
        // We must spread the nested items array as well to avoid a shallow copy bug
        items: [...cart.items, item], 
        total: cart.total + item.price
    };
}

console.log("\n--- Task 4: Testing addItem Function ---");
console.log("Before adding item:", originalCart);

const updatedCart = addItem(originalCart, { name: 'Pen', price: 20 });

console.log("After adding item (New Cart):", updatedCart);
console.log("Original cart intact check:", originalCart);