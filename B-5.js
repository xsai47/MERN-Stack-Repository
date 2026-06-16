// 1. addToCart(cart, item)
//    cart = array of items, item = string
//    Returns NEW array with item added — original cart unchanged
// 2. updateUserAge(user, newAge)
//    user = object, newAge = number
//    Returns NEW user object with updated age — original unchanged
// 3. incrementScore(scores, playerName)
//    scores = { playerName: number, ... }
//    Returns NEW scores object with playerName's score incremented by 1
// 4. reverseString(str)
//    Returns reversed string without modifying original
//    (Strings are immutable — show why this is already 'safe')
// 5. removeItem(arr, index)
//    Returns NEW array with item at given index removed
//    Original array must be untouched — verify with console.log


function addToCart(cart, item) {
    return [...cart, item]; 
}

const originalCart = ['milk', 'eggs'];
console.log("addToCart:", addToCart(originalCart, 'bread')); 
// Expected: ['milk', 'eggs', 'bread']
console.log("original cart:", originalCart); 
// Expected: ['milk', 'eggs'] -> Unchanged!

function updateUserAge(user, newAge) {
    return { ...user, age: newAge }; 
}

const originalUser = { name: 'Ali', age: 25 };
console.log("updateUserAge:", updateUserAge(originalUser, 26)); 
// Expected: { name: 'Ali', age: 26 }
console.log("original user:", originalUser); 
// Expected: { name: 'Ali', age: 25 } -> Unchanged!

function incrementScore(scores, playerName) {
    return {
        ...scores,
        [playerName]: scores[playerName] + 1
    };
}

const originalScores = { Ali: 5, Sara: 3 };
console.log("incrementScore:", incrementScore(originalScores, 'Ali')); 
// Expected: { Ali: 6, Sara: 3 }
console.log("original scores:", originalScores); 
// Expected: { Ali: 5, Sara: 3 } -> Unchanged!

function reverseString(str) {
    // Strings in JavaScript are primitive and inherently immutable. 
    // String methods naturally return new strings, so they are already "safe" from mutation.
    return str.split('').reverse().join('');
}

const originalString = 'hello';
console.log("reverseString:", reverseString(originalString)); 
// Expected: 'olleh'
console.log("original string:", originalString); 
// Expected: 'hello' -> Unchanged!

function removeItem(arr, index) {
    // We cannot use arr.splice() because it mutates the array.
    // Instead, we use slice() to grab everything BEFORE the index, and everything AFTER the index,
    // and spread them into a brand new array.
    return [
        ...arr.slice(0, index), 
        ...arr.slice(index + 1)
    ];
}

const originalArray = [1, 2, 3, 4];
console.log("removeItem:", removeItem(originalArray, 1)); 
// Expected: [1, 3, 4]
console.log("original array:", originalArray); 
// Expected: [1, 2, 3, 4] -> Unchanged!
