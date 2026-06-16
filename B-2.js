// Write the function typeAnalyser(value) that returns:
// {
//   input:        the original value,
//   typeofResult: what typeof returns,
//   isArray:      true/false,
//   isNull:       true/false,
//   toNumber:     Number(value),
//   toBoolean:    Boolean(value),
//   toString:     String(value)
// }
// Test it with ALL of these values:
// typeAnalyser(42)
// typeAnalyser('hello')
// typeAnalyser(null)
// typeAnalyser([])
// typeAnalyser(undefined)
// typeAnalyser(true)
// typeAnalyser(0)
// typeAnalyser(''))





function typeAnalyser(value) {
    return {
        input: value,
        typeofResult: typeof value,
        isArray: Array.isArray(value), // Specifically checks for arrays
        isNull: value === null,        // Specifically checks for null
        toNumber: Number(value),       // Coerces the value to a number
        toBoolean: Boolean(value),     // Coerces the value to a boolean
        toString: String(value)        // Coerces the value to a string
    };
}

// === Test Calls ===
console.log("42:", typeAnalyser(42));
console.log("'hello':", typeAnalyser('hello'));
console.log("null:", typeAnalyser(null)); 
console.log("[]:", typeAnalyser([]));     
console.log("undefined:", typeAnalyser(undefined));
console.log("true:", typeAnalyser(true));
console.log("0:", typeAnalyser(0));       
console.log("empty string:", typeAnalyser(''));