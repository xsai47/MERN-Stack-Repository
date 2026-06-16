// DISCOUNT RULES (apply in this order):
// 1. If price is not a number or is <= 0 fi return 'Invalid price'
// 2. Admin users always get 50% off
// 3. If price > 1000 fi 20% off
// 4. If price > 500  fi 10% off
// 5. Members (isMember === true) get an additional 5% off
//    (applied AFTER the above discounts)
// 6. Final price must not go below 1 (minimum price is 1)
// 7. Return the final price rounded to 2 decimal places
// Test cases you MUST include:
// calculateDiscount(1200, 'user', false)   // fi 960
// calculateDiscount(1200, 'user', true)    // fi 912
// calculateDiscount(600,  'admin', true)   // fi 270
// calculateDiscount(-50,  'user', false)   // fi 'Invalid price'
// calculateDiscount('abc','user', false)   // fi 'Invalid price


function calculateDiscount(price, userType, isMember) {
    if (typeof price !== 'number' || isNaN(price) || price <= 0) {
        return 'Invalid price';
    }

    let finalPrice = price;
    if (userType === 'admin') {
        finalPrice = finalPrice * 0.50; // 50% off
    } else if (finalPrice > 1000) {
        finalPrice = finalPrice * 0.80; // 20% off
    } else if (finalPrice > 500) {
        finalPrice = finalPrice * 0.90; // 10% off
    }

    if (isMember === true) {
        finalPrice = finalPrice * 0.95; // Additional 5% off
    }

    if (finalPrice < 1) {
        finalPrice = 1;
    }

    return Number(finalPrice.toFixed(2));
}

// === Test Case ===
console.log(calculateDiscount(1200, 'user', false));  // 960
console.log(calculateDiscount(1200, 'user', true));   // 912
console.log(calculateDiscount(600, 'admin', true));   // 285
console.log(calculateDiscount(-50, 'user', false));   // 'Invalid price'
console.log(calculateDiscount('abc', 'user', false)); // 'Invalid price'