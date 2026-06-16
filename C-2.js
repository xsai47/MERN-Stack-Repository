function validateUser(data) {
    const errors = [];
    let { name, email, age, password, role = 'user' } = data;
    if (typeof name !== 'string' || name.trim() === '') {
        errors.push('Name cannot be empty');
    }

    if (typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
        errors.push('Invalid email format');
    }

    const parsedAge = Number(age);
    if (isNaN(parsedAge) || parsedAge < 13 || parsedAge > 120) {
        errors.push('Age must be a valid number between 13 and 120');
    }

    if (typeof password !== 'string' || password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }

    if (!['admin', 'editor', 'user'].includes(role)) {
        errors.push("Role must be 'admin', 'editor', or 'user'");
    }

    if (errors.length > 0) {
        return { valid: false, errors: errors };
    }

    return {
        valid: true,
        user: {
            name: name.trim(),
            email: email,
            age: parsedAge, 
            password: password,
            role: role
        }
    };
}

// === Test Cases ===
console.log("Test 1:", validateUser({ 
    name: 'Ali', email: 'ali@test.com', age: '25', password: 'pass1234' 
}));

console.log("Test 2:", validateUser({ 
    name: '', email: 'notanemail', age: 10, password: 'abc' 
}));

console.log("Test 3:", validateUser({ 
    name: 'Sara', email: 'sara@x.io', age: 30, password: 'secure99', role: 'admin' 
}));

console.log("Test 4:", validateUser({ 
    name: 'X', email: 'x@x.com', age: '17abc', password: 'hello123' 
}));