
<div align="center">

# ⚡ JavaScript Fundamentals Assignment
### MERN Stack + AI Engineering Bootcamp · Week 3
> *Section A — Interview-Style Conceptual Questions*  
> *6 Questions · 30 Marks · Written in my own words*

</div>

---

## 📚 Table of Contents

| # | Question | Concepts Covered | Marks |
|:---:|---|---|:---:|
| [A1](#-a1--var-let-and-const) | `var`, `let` & `const` | Scope · Hoisting · TDZ · Re-declaration | 5 |
| [A2](#-a2--the-v8-engine--single-threaded-javascript) | The V8 Engine | JIT · Call Stack · Event Loop · Async | 5 |
| [A3](#-a3--javascript-data-types--type-coercion) | Data Types & Coercion | 8 Types · `typeof null` · `==` vs `===` | 5 |
| [A4](#-a4--primitive-vs-non-primitive-types) | Primitive vs Non-Primitive | Stack · Heap · Copy by Value/Ref | 5 |
| [A5](#-a5--pass-by-value-vs-pass-by-reference) | Pass by Value / Reference | Function params · Mutation vs Reassignment | 5 |
| [A6](#-a6--functions-in-javascript) | Functions in JavaScript | Declaration · Hoisting · Params · Return | 5 |

---
<br>

## 🟡 A1 — `var`, `let`, and `const`

> Think of these three as different "flavours" of variable declaration. Each comes with its own rules about where it lives, when it's available, and whether it can change. Getting this right cold is one of the things that separates a serious JS developer from someone who just copied tutorials.

---

### ① Scope — Where Does Each Variable Live?

**Scope** answers the question: *"From where in my code can I see and use this variable?"*

| Keyword | Scope | What that actually means |
|:---:|:---:|---|
| `var` | **Function** | Accessible anywhere inside the function it was declared in — including inside `if` blocks, `for` loops, etc. |
| `let` | **Block** | Only accessible inside the exact `{ }` it was declared in |
| `const` | **Block** | Same as `let` |

```javascript
function scopeExample() {
  if (true) {
    var  x = 'I am var';    
    let  y = 'I am let';   
    const z = 'I am const'; 
  }

  console.log(x); 
  console.log(y); 
  console.log(z); // 
}
```

`var` leaking out of blocks is one of the classic JS footguns that `let` was invented to fix.

---

### ② Hoisting — What Happens Before Your Code Even Runs?

JavaScript doesn't just run your file top to bottom. Before executing a single line, the engine does a **first pass** and "hoists" (lifts) variable declarations to the top of their scope. But critically, each keyword is hoisted *differently*:

```
What the JS engine does before running your code:
─────────────────────────────────────────────────
var a;       ← hoisted AND initialized to undefined
let b;       ← hoisted but NOT initialized  (stuck in TDZ)
const c;     ← hoisted but NOT initialized  (stuck in TDZ)
─────────────────────────────────────────────────
```

```javascript
// This is what you write:
console.log(a); // ?
console.log(b); // ?
var a = 10;
let b = 20;

// This is what the engine actually runs:
var a;          // ← hoisted, value = undefined
console.log(a); // undefined
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

---

### ③ Temporal Dead Zone (TDZ) — The "No-Man's Land" for `let` and `const`

The **TDZ** is the period between when a `let`/`const` variable is *hoisted* and when it's *actually assigned a value*. During this window, the variable technically exists — but trying to touch it throws a `ReferenceError`.

```
Timeline for: let score = 100;

┌──────────────────────────────────────────────────────┐
│  TEMPORAL DEAD ZONE                                  │
│                                                      │
│  • 'score' is hoisted (engine knows it exists)       │
│  • but it has NO value yet                           │
│  • accessing it here → ReferenceError ❌             │
│                                                      │
└────────────────── let score = 100; ─────────────────┘
   From this line onward → 'score' is safe to use ✅
```

> ⚠️ **The interview trap people fail:** Many candidates say "let is not hoisted." This is **wrong**. `let` IS hoisted — the difference is it goes into the TDZ instead of being set to `undefined` like `var`. The correct answer is: *"Yes, `let` is hoisted, but to the TDZ rather than to `undefined`."* Knowing this earns respect in an interview room.

---

### ④ Re-declaration and Re-assignment — What's Allowed?

```javascript
// ─── VAR: everything goes ───────────────────────────────
var name = 'Ali';
var name = 'Sara';  // ✅ re-declaring: no error
name = 'Ahmed';     // ✅ re-assigning: no error

// ─── LET: can change, can't re-declare ──────────────────
let age = 25;
let age = 30;       // ❌ SyntaxError: 'age' already declared
age = 30;           // ✅ re-assigning: fine

// ─── CONST: locked on both ──────────────────────────────
const PI = 3.14;
const PI = 3.15;    // ❌ SyntaxError
PI = 3.15;          // ❌ TypeError: Assignment to constant variable

// BUT — const with objects: the binding is locked, the contents aren't
const user = { name: 'Ali' };
user.name = 'Sara'; // ✅ ALLOWED — mutating a property is fine
user = {};          // ❌ TypeError — changing what 'user' POINTS TO is not
```

| Keyword | Re-declare? | Re-assign? |
|:---:|:---:|:---:|
| `var` | ✅ Yes | ✅ Yes |
| `let` | ❌ No | ✅ Yes |
| `const` | ❌ No | ❌ No (but object properties can still be mutated) |

---

### ⑤ Which One Should You Use in Modern JavaScript?

```
My rule of thumb:
  const  →  default choice for everything
  let    →  only when you know the value will change (loop counters, accumulators)
  var    →  never, in new code
```

Using `const` by default tells anyone reading the code: *"this value isn't supposed to change."* It makes intent explicit and prevents accidental reassignment. When you do reach for `let`, it signals: *"heads up, this changes."* `var` has no place in modern codebases — its function-scoping and lack of TDZ have caused too many subtle bugs over the years.

---
<br>

## 🔴 A2 — The V8 Engine & Single-Threaded JavaScript

> This one sounds intimidating but it clicks fast once you build the right mental model. The key is understanding that JavaScript the language and the *environment it runs in* are two different things.

---

### ① What is V8?

V8 is the **JavaScript engine** built by Google. An engine is the piece of software that takes your JavaScript source code (which is just text) and transforms it into instructions the CPU can actually execute. V8 is written in C++ and powers:

- 🌐 **Google Chrome** (the browser)
- 🟢 **Node.js** (JavaScript on the server)
- ⚡ **Deno**, **Electron**, **Cloudflare Workers**, and more

Without an engine like V8, your `.js` files are just strings. V8 is what gives them life.

---

### ② JIT Compilation — The Best of Both Worlds

There are traditionally two ways to run code:

```
INTERPRETER                    COMPILER
───────────────────────        ───────────────────────
Read line 1 → run it           Translate ALL code first
Read line 2 → run it           THEN run the result
Read line 3 → run it
 • Starts fast                  • Starts slow
 • Runs slow                    • Runs very fast
```

V8 uses **JIT — Just-In-Time compilation**, which is a smart hybrid:

```
JIT (What V8 does):
────────────────────────────────────────────────────────
1. Start interpreting your code immediately (fast startup)
2. Track which functions get called over and over ("hot paths")
3. Compile THOSE specific parts to optimized machine code on the fly
4. Next time they run, they execute at near-native speed
────────────────────────────────────────────────────────
Result: fast startup AND fast execution for code that matters
```

In plain terms: V8 gets smarter as your code runs. Code that runs a lot gets optimized automatically.

---

### ③ Single-Threaded — One Task at a Time

JavaScript has **one call stack**. That means only one piece of code is ever actually executing at any moment. There's no "background thread 2" secretly running your JS in parallel.

```
THE CALL STACK (one thread, one lane):

    │ greetUser()   │  ← currently running
    │ main()        │  ← waiting
    │               │
    └───────────────┘

Functions push onto the stack when called.
They pop off when they return.
One at a time. Always.
```

---

### ④ If JS Is Single-Threaded, How Does `setTimeout` Work?

This is the most important question in understanding JavaScript's concurrency model. The answer: **the browser (or Node.js) handles async work outside of JavaScript itself.**

Here's the full picture of what happens when you write `setTimeout(fn, 2000)`:

```
┌─────────────────────────────────────────────────────────┐
│  YOUR JAVASCRIPT (single thread)                        │
│                                                         │
│  1. JS calls setTimeout(fn, 2000)                       │
│  2. JS hands the timer to the browser's Web API         │
│  3. JS KEEPS RUNNING — it doesn't wait                  │
└─────────────────────────┬───────────────────────────────┘
                          │ hands off
                          ▼
┌─────────────────────────────────────────────────────────┐
│  WEB APIs (browser's C++ layer, outside JS)             │
│                                                         │
│  Timer runs here for 2000ms                             │
│  JS is free to do other things during this time         │
└─────────────────────────┬───────────────────────────────┘
                          │ 2000ms later, timer done
                          ▼
┌─────────────────────────────────────────────────────────┐
│  CALLBACK QUEUE                                         │
│                                                         │
│  fn is placed here, waiting its turn                   │
└─────────────────────────┬───────────────────────────────┘
                          │ Event Loop checks:
                          │ "Is the Call Stack empty?"
                          │ YES → move fn to stack
                          ▼
┌─────────────────────────────────────────────────────────┐
│  CALL STACK                                             │
│                                                         │
│  fn() runs here — finally!                             │
└─────────────────────────────────────────────────────────┘
```

---

### ⑤ The Four Players — Quick Reference

| Component | Role |
|---|---|
| **Call Stack** | Where JS executes code. One function at a time, LIFO order. |
| **Web APIs** | Browser/Node features (timers, fetch, DOM events) that operate *outside* the JS thread. |
| **Callback Queue** | The waiting room — completed async callbacks sit here until the stack is clear. |
| **Event Loop** | The traffic cop. Constantly checks: "Is the Call Stack empty AND is there something in the Queue?" — if both yes, it moves the callback to the stack. |

> 💡 **Classic interview follow-up:** *"If JS is single-threaded, is Node.js single-threaded?"*
>
> **Precise answer:** JavaScript *execution* is single-threaded. But Node.js uses **libuv** — a C++ library — which gives Node a thread pool for I/O operations (reading files, making network requests, querying databases). Node handles many concurrent I/O tasks in parallel in C++, and then reports the results back to the single JS thread one at a time through the event loop.

---
<br>

## 🟠 A3 — JavaScript Data Types & Type Coercion

> JavaScript's type system is famously quirky. Most of the "weird" behaviour people laugh about online comes directly from the coercion rules. Once you actually understand why it works the way it does, it stops being weird and starts being predictable.

---

### ① All 8 JavaScript Data Types

```
PRIMITIVE TYPES (7)                   NON-PRIMITIVE (1)
─────────────────────                 ─────────────────
String      "hello"                   Object  { }  [ ]  Date  null*
Number      42, 3.14, NaN, Infinity
Boolean     true / false              * null reports as 'object' — more below
undefined   (unassigned variable)
null        (intentional absence)
BigInt      9007199254740991n
Symbol      Symbol('unique')
```

```javascript
typeof 'hello'         // 'string'
typeof 42              // 'number'
typeof true            // 'boolean'
typeof undefined       // 'undefined'
typeof null            // 'object'   ← famous bug
typeof 9007199n        // 'bigint'
typeof Symbol('x')     // 'symbol'
typeof {}              // 'object'
typeof []              // 'object'   ← arrays are objects
typeof function(){}    // 'function' ← functions are objects but get their own typeof
```

---

### ② The `typeof null === 'object'` Bug — Know This Cold

This bug is 30 years old and was baked in from the very first version of JavaScript (1995). Here's what happened:

In Brendan Eich's original implementation, values were stored in memory with a **type tag** in the first few bits. The type tag for objects was `000`. The null value was stored as a null pointer — which in binary is all zeros, so it *also* started with `000`. The `typeof` operator read the tag, saw `000`, and returned `'object'`.

It was recognised as a bug almost immediately. But by the time anyone tried to fix it, millions of websites had started writing code like `if (typeof x === 'object')` and silently depending on null matching. Fixing it would have broken the web. So it stayed.

```javascript
// The WRONG way to check for null:
if (typeof value === 'object') { ... }  // ❌ matches null AND all objects

// The CORRECT ways:
if (value === null) { ... }                            // ✅ strict null check
if (value !== null && typeof value === 'object') { ... } // ✅ safe object check
```

---

### ③ Implicit Coercion — JS Silently Changes Types

Implicit coercion happens when JavaScript automatically converts one type to another to make an operation work. The two most common sources of confusion:

```javascript
// Example 1: The + operator is overloaded (addition AND concatenation)
'5' + 3      // '53'  → 3 was coerced to a string (JS chose concatenation)
'5' - 3      // 2     → '5' was coerced to a number (- is always arithmetic)
'5' * '3'    // 15    → both strings coerced to numbers

// Example 2: Conditional statements coerce to boolean
if (0)       { } // skipped — 0 is falsy
if ('')      { } // skipped — empty string is falsy
if (null)    { } // skipped — null is falsy
if ([])      { } // ✅ runs  — empty array is TRUTHY (many people get this wrong)
if ({})      { } // ✅ runs  — empty object is TRUTHY
```

**Falsy values (the full list — memorize these):**

```
0    ""    null    undefined    NaN    false    0n (BigInt zero)
```

Everything else is truthy — including `[]`, `{}`, `'0'`, `'false'`, and `-1`.

---

### ④ Explicit Coercion — You're in Control

```javascript
// Number() — convert to number
Number('42')       // 42
Number('')         // 0       ← empty string becomes 0 (watch out)
Number(true)       // 1
Number(false)      // 0
Number(null)       // 0
Number(undefined)  // NaN    ← undefined doesn't have a numeric equivalent
Number('abc')      // NaN
Number([])         // 0       ← empty array converts via '' → 0

// String() — convert to string
String(42)         // '42'
String(null)       // 'null'
String(undefined)  // 'undefined'
String(true)       // 'true'
String([1,2,3])    // '1,2,3'

// Boolean() — convert to boolean
Boolean(1)         // true
Boolean(0)         // false
Boolean('hi')      // true
Boolean('')        // false
Boolean(null)      // false
Boolean([])        // true  ← empty array is TRUTHY, do not forget this
Boolean({})        // true  ← empty object is TRUTHY
```

---

### ⑤ Why `==` is Dangerous and `===` is Safe

`==` (loose equality) silently runs type coercion before comparing. `===` (strict equality) never coerces — it checks both value and type exactly as they are.

```javascript
// == coercion: confusing results
0 == false          // true   (false → 0)
'' == false         // true   (both → 0)
null == undefined   // true   (special JS rule — they're "loosely equal")
[] == false         // true   ([] → '' → 0, false → 0)
'5' == 5            // true   ('5' → 5)
[] == ![]           // true   (this is genuinely baffling)

// === strict: exactly what you see is what you get
0 === false         // false  (number ≠ boolean)
'' === false        // false  (string ≠ boolean)
null === undefined  // false  (different types)
'5' === 5           // false  (string ≠ number)
```

> **Rule:** Always use `===` by default. The one intentional exception many developers use: `value == null` checks for *both* `null` and `undefined` at once — useful when you want to handle both the same way.

---
<br>

## 🟢 A4 — Primitive vs Non-Primitive Types

> Understanding this properly is what separates people who *write* JavaScript from people who actually *understand* why their code behaves the way it does. Almost every subtle bug involving shared state traces back to not knowing this.

---

### ① Primitive Types — Stored on the Stack

Primitives are **simple, fixed-size values**: strings, numbers, booleans, `null`, `undefined`, `BigInt`, `Symbol`. Because their size is known and predictable, they're stored directly in the **call stack** — a small, fast, organized region of memory.

```
STACK MEMORY (fast, organized, limited size):
┌──────────────────────────┐
│  score    │  42          │  ← the actual number 42 lives here
│  username │  'Ali'       │  ← the actual string 'Ali' lives here
│  isAdmin  │  false       │  ← the actual boolean false lives here
└──────────────────────────┘
```

---

### ② Non-Primitive Types — Stored on the Heap

Objects (including arrays, functions, and dates) can grow to any size — you might have an object with 3 properties or 30,000. The stack can't handle that unpredictability. So the actual data lives in the **heap** — a large, flexible memory region.

But here's what makes everything click: the **variable** itself is still on the stack. It just holds the **memory address** (a reference) pointing to where the data lives in the heap.

```
STACK                             HEAP
┌───────────────────┐             ┌──────────────────────────────────┐
│ user → [0x4A3F]  │────────────►│ { name: 'Ali', role: 'admin' }   │
│ cart → [0x7B12]  │────────────►│ { items: ['Book'], total: 500 }  │
└───────────────────┘             └──────────────────────────────────┘
  Variables hold addresses          Actual data lives here
  (pointers to heap)
```

---

### ③ Copying a Primitive — Fully Independent

When you copy a primitive variable, the value is duplicated. Two independent values, no connection between them.

```javascript
let a = 10;
let b = a;   // b gets its own copy of the value 10

b = 99;

console.log(a); // 10 — completely untouched
console.log(b); // 99 — its own independent value
```

---

### ④ Copying a Reference — Same Object, Two Addresses

When you "copy" an object variable, you copy the **address** — not the object itself. Both variables now point to the exact same object in the heap. There is only one object.

```javascript
let obj1 = { name: 'Ali' };
let obj2 = obj1; // obj2 gets a copy of the ADDRESS — not a copy of the object

obj2.name = 'Sara';

console.log(obj1.name); // 'Sara' 😱 — the original was changed!
console.log(obj2.name); // 'Sara'
// There was only ever ONE object — both variables just pointed to it.
```

---

### ⑤ Code Example — Mutation Through a Copied Reference

```javascript
// START: one object in heap
const original = { brand: 'Nike', size: 42 };

// copy — but it's just a copy of the address
const copy = original;

// mutating through 'copy' changes the original
copy.brand = 'Adidas';

console.log(original.brand); // 'Adidas' — the object you thought was "original"
                              // was changed via 'copy'. Same object, two doors.

// VISUALIZED:
// Stack: original → [0x9A1F]     Heap: { brand: 'Adidas', size: 42 }
// Stack: copy     → [0x9A1F] ──────────────────────────────────────^
//                                               ↑ same address
```

> 💡 **Interview question:** *"Are arrays primitive or non-primitive?"*
>
> Arrays are **objects** in JavaScript — non-primitive, stored in the heap, and copied by reference. `typeof []` returns `'object'`, and `Array.isArray([])` is the proper way to detect them.

---
<br>

## 🔵 A5 — Pass by Value vs Pass by Reference

> This question has a twist that trips up even experienced developers. The technically precise answer is different from what most people say — and knowing the difference makes you stand out.

---

### ① Passing a Primitive to a Function

When a primitive is passed to a function, the function receives its own **copy** of the value. Whatever happens inside the function stays inside the function.

```javascript
function doubleIt(num) {
  num = num * 2;
  console.log('Inside:', num); // 20
}

let score = 10;
doubleIt(score);
console.log('Outside:', score); // still 10 — untouched
```

The function got `10`, doubled its own copy to `20`, and the original `score` variable never knew about it.

---

### ② Passing an Object to a Function

When an object is passed, the function receives a copy of the **reference** — the memory address. This lets the function reach into the heap and modify the actual object.

```javascript
function levelUp(player) {
  player.level = player.level + 1; // reaching into heap through the reference
}

const user = { name: 'Ali', level: 5 };
levelUp(user);
console.log(user.level); // 6 — the original was changed!
```

---

### ③ The Key Nuance — JS Always Passes by Value

Here's where precision matters. JavaScript is **always** pass by value. When it comes to objects, what it passes *by value* is the **reference itself** (the memory address). You get a copy of the address, not a copy of the object.

This means:
- You can **reach through** the address to modify the object → affects original ✅
- But you cannot **change which object the original variable points to** from inside a function → does not affect original ✅

```
What actually gets passed to a function:

Primitive:     copy of the VALUE         → 10
Object:        copy of the ADDRESS       → 0x4A3F

JS never passes the actual heap object. It passes the address that leads to it.
```

---

### ④ Proof — Reassigning the Param Does NOT Change the Original

```javascript
function replaceUser(obj) {
  obj = { name: 'New Person', age: 0 }; // ← changing the LOCAL copy of the address
  console.log('Inside:', obj.name);     // 'New Person'
}

const user = { name: 'Ali', age: 25 };
replaceUser(user);
console.log('Outside:', user.name); // 'Ali' — completely unaffected
```

`obj = { ... }` creates a new object in the heap and points the local `obj` variable at it. The original `user` variable outside was never touched — it still holds the original address.

---

### ⑤ Mutation vs Reassignment — Both Cases, Side by Side

```javascript
const original = { score: 10 };

// ─── MUTATION: reaches through address → DOES affect original ──────────
function mutate(obj) {
  obj.score = 999; // 'obj' and 'original' share the same address
}
mutate(original);
console.log(original.score); // 999 ← changed through shared reference

// ─── REASSIGNMENT: changes local address → does NOT affect original ────
function reassign(obj) {
  obj = { score: 999 }; // 'obj' now points to a NEW object; original is untouched
}
const original2 = { score: 10 };
reassign(original2);
console.log(original2.score); // 10 ← unchanged
```

```
Before mutate():          After mutate():
────────────────          ────────────────
original → [0x01]   →    original → [0x01]
obj      → [0x01]   →    obj      → [0x01]
heap[0x01]: { score:10 }  heap[0x01]: { score:999 }

Before reassign():        After reassign():
────────────────          ────────────────
original2 → [0x02]  →    original2 → [0x02]
obj       → [0x02]  →    obj       → [0x99]  (new address — local only)
heap[0x02]: { score:10 }  heap[0x02]: { score:10 } (untouched)
```

> 💡 **The line to say in an interview:** *"JavaScript passes objects by passing a copy of the reference by value — so mutation through the reference affects the original, but reassigning the parameter doesn't."*

---
<br>

## 🟣 A6 — Functions in JavaScript

> Functions are probably the most important concept in all of JavaScript. Everything — closures, callbacks, async/await, React components, Express routes — is built on functions. Getting crystal clear on the fundamentals here pays off everywhere else.

---

### ① What Problem Do Functions Solve?

Without functions, you'd have to write the same logic over and over in every place it's needed. Change the logic once, and you'd have to hunt down every copy and update each one. That's a maintenance nightmare.

Functions let you:

```
Without functions:              With functions:
──────────────────              ──────────────────
// validate age at signup       function validateAge(age) {
if (!age || age < 13) { ... }     if (!age || age < 13) return false;
                                  return true;
// validate age at checkout     }
if (!age || age < 13) { ... }
                                // use it everywhere:
// validate age at profile      validateAge(signupAge)
if (!age || age < 13) { ... }   validateAge(checkoutAge)
                                validateAge(profileAge)
Need to change the rule?
Update 3 places.                Need to change the rule?
                                Update 1 function.
```

Beyond reusability: functions give you **abstraction** (hiding complexity behind a name), **organisation** (breaking big problems into small pieces), and **testability** (test each piece independently).

---

### ② Function Declaration — The Correct Syntax

```javascript
function functionName(parameter1, parameter2) {
  // --- function body ---
  const result = parameter1 + parameter2;
  return result; // sends value back to the caller
}
```

Breaking down every piece:

```
function          → keyword that begins the declaration
functionName      → how you'll call it elsewhere in your code
(param1, param2)  → the inputs the function expects (placeholders)
{ }               → the function body
return            → sends a value back; execution stops here
```

---

### ③ Are Function Declarations Hoisted? Yes — Completely.

Function **declarations** are the one case in JavaScript where something is *fully* hoisted — both the name and the body. This means you can call a function declaration before it appears in your source code:

```javascript
// Calling BEFORE the definition — and it works perfectly:
console.log(greet('Ali')); // ✅ 'Hello, Ali!' — no error at all

function greet(name) {
  return `Hello, ${name}!`;
}
```

This is unique to function **declarations**. Function **expressions** and **arrow functions** are NOT hoisted this way:

```javascript
console.log(sayBye('Ali')); // ❌ TypeError: sayBye is not a function

const sayBye = function(name) {
  return `Bye, ${name}!`;
};
```

| Function Type | Hoisted? | Callable before definition? |
|:---:|:---:|:---:|
| `function foo() {}` (declaration) | ✅ Fully | ✅ Yes |
| `const foo = function() {}` (expression) | ❌ No | ❌ No |
| `const foo = () => {}` (arrow) | ❌ No | ❌ No |

---

### ④ Parameter vs Argument — Not the Same Thing

This is a small but genuine distinction that interviewers appreciate when you get it right:

```javascript
//                  ↓       ↓   — PARAMETERS: placeholders defined with the function
function multiply(a,     b) {
  return a * b;
}
//               ↓     ↓     — ARGUMENTS: actual values passed when calling
multiply(       5,    3);
```

- **Parameters** are the *placeholders* listed in the function's definition — they're like variable names waiting to be filled in.
- **Arguments** are the *actual values* you pass when you call the function.

> **Memory trick:** **P**arameters are **P**laceholders. **A**rguments are the **A**ctual values.

---

### ⑤ What Does a Function Return With No `return` Statement?

If a function body runs to the end without hitting a `return` statement (or just hits `return;` with nothing after it), JavaScript automatically returns `undefined`.

```javascript
function doCalculation() {
  const x = 5 * 10;  // x is 50
  // no return
}

const result = doCalculation();
console.log(result); // undefined

// Same for explicit 'return' with nothing:
function doNothing() {
  return;
}
console.log(doNothing()); // undefined
```

This catches people out when they forget to return a value from a function and then wonder why a variable is `undefined`.

---

### ⑥ Real-World Example — A Function That Validates User Age

```javascript
function validateAge(age) {
  // Guard 1: make sure we actually got a number
  if (typeof age !== 'number' || isNaN(age)) {
    return { valid: false, message: 'Age must be a valid number' };
  }

  // Guard 2: must be a whole number (no 25.7 year olds)
  if (!Number.isInteger(age)) {
    return { valid: false, message: 'Age must be a whole number' };
  }

  // Guard 3: must be a realistic human age
  if (age < 0 || age > 120) {
    return { valid: false, message: 'Age must be between 0 and 120' };
  }

  // Guard 4: platform requires minimum age 13
  if (age < 13) {
    return { valid: false, message: 'You must be at least 13 years old to register' };
  }

  // Passed all checks
  return { valid: true, message: `Age ${age} accepted` };
}

// Testing every case:
console.log(validateAge(25));       // { valid: true,  message: 'Age 25 accepted' }
console.log(validateAge(-5));       // { valid: false, message: 'Age must be between 0 and 120' }
console.log(validateAge(10));       // { valid: false, message: 'You must be at least 13...' }
console.log(validateAge('hello'));  // { valid: false, message: 'Age must be a valid number' }
console.log(validateAge(25.7));     // { valid: false, message: 'Age must be a whole number' }
console.log(validateAge(undefined));// { valid: false, message: 'Age must be a valid number' }
```

> 💡 **Bonus fact for the interview:** Functions in JavaScript are also **objects**. They have properties like `.name` (the function's name as a string) and `.length` (the number of parameters defined). `typeof function(){}` returns `'function'` — but `function(){} instanceof Object` also returns `true`. Functions are "first-class citizens" in JS, which means they can be assigned to variables, passed as arguments, and returned from other functions.

---
<br>
<div align="center">

---

### 📁 Repository Structure

```
js-fundamentals-assignment/
├── README.md          ← You are here (Section A answers)
├── b1.js              ← Hoisting prediction + bug fixes
├── b2.js              ← typeAnalyser function
├── b3.js              ← calculateDiscount function
├── b4.js              ← Pass-by-reference bug fixes
├── b5.js              ← Pure functions library
├── c1.js              ← E-commerce shopping cart scenario
├── c2.js              ← User registration validator
└── c3.js              ← Student grade management system
```

---

*MERN Stack + AI Engineering Bootcamp · JavaScript Assignment · Week 3*

</div>
