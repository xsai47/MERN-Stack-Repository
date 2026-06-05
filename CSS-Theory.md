<div align="center">

```
 ██████╗███████╗███████╗    ████████╗██╗  ██╗███████╗ ██████╗ ██████╗ ██╗   ██╗
██╔════╝██╔════╝██╔════╝    ╚══██╔══╝██║  ██║██╔════╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
██║     ███████╗███████╗       ██║   ███████║█████╗  ██║   ██║██████╔╝ ╚████╔╝ 
██║     ╚════██║╚════██║       ██║   ██╔══██║██╔══╝  ██║   ██║██╔══██╗  ╚██╔╝  
╚██████╗███████║███████║       ██║   ██║  ██║███████╗╚██████╔╝██║  ██║   ██║   
 ╚═════╝╚══════╝╚══════╝       ╚═╝   ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝  
```

# 🎨 CSS Theory Assignment

### MERN Stack + AI Engineering Bootcamp — Week 2


*Cascading Style Sheets — where structure meets beauty.*

</div>

---

## 📋 Table of Contents

| # | Question | Level | Marks |
|:-:|----------|:-----:|:-----:|
| [Q1](#-q1--what-is-css-and-how-do-you-add-it-to-an-html-page) | What is CSS and how do you add it to an HTML page? | 🟢 Beginner | 5 |
| [Q2](#-q2--explain-css-selectors-with-examples) | Explain CSS Selectors with examples | 🟢 Beginner | 8 |
| [Q3](#-q3--what-is-the-css-box-model) | What is the CSS Box Model? Explain each layer | 🟢 Beginner | 7 |
| [Q4](#-q4--explain-css-colors) | Explain CSS Colors — different ways to define a color | 🟢 Beginner | 6 |
| [Q5](#-q5--what-are-css-units) | What are CSS Units? px, %, rem, em, vh, vw | 🟢 Beginner | 7 |
| [Q6](#-q6--css-specificity--the-cascade) | What is CSS Specificity and how does the Cascade work? | 🟡 Intermediate | 8 |
| [Q7](#-q7--css-flexbox) | Explain CSS Flexbox — how it differs from block layout | 🟡 Intermediate | 10 |
| [Q8](#-q8--pseudo-classes--pseudo-elements) | CSS Pseudo-classes and Pseudo-elements | 🟡 Intermediate | 9 |
| [Q9](#-q9--css-transitions--animations) | Explain CSS Transitions and Animations | 🔴 Advanced | 10 |
| [Q10](#-q10--responsive-web-design) | Responsive Design, Media Queries & CSS Variables | 🔴 Advanced | 10 |

---

<br>

## 🟢 Q1 — What is CSS and how do you add it to an HTML page?

> **5 Marks · Beginner**

### What does CSS stand for?

**CSS** stands for **Cascading Style Sheets**. It is the language responsible for the visual presentation of HTML documents — controlling layout, color, typography, spacing, animations, and responsiveness.

### What problem does CSS solve?

Without CSS, every webpage would look like a plain text document. CSS **separates content (HTML) from presentation (styling)**, making code cleaner, easier to maintain, and allowing the same HTML to be presented in completely different ways.

---

### The Three Ways to Add CSS

#### Method 1 — 🔗 External CSS *(Recommended)*

A separate `.css` file linked in the `<head>` of your HTML.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

```css

h1 {
  color: #1d4ed8;
  font-size: 2rem;
}
```

---

#### Method 2 — 📄 Internal CSS

CSS written inside a `<style>` tag within the `<head>` of the HTML file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      h1 {
        color: #16a34a;
        font-size: 2rem;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

---

#### Method 3 — ✍️ Inline CSS

CSS written directly on an HTML element using the `style` attribute is called Inline CSS.

```html
<h1 style="color: #dc2626; font-size: 2rem;">Hello World</h1>
```

---

### Why is External CSS Preferred?

| Feature | External | Internal | Inline |
|---------|:--------:|:--------:|:------:|
| Reusable across pages | ✅ | ❌ | ❌ |
| Browser caching | ✅ | ❌ | ❌ |
| Clean separation of concerns | ✅ | ⚠️ | ❌ |
| Easy to maintain | ✅ | ⚠️ | ❌ |
| Specificity issues | Low | Medium | High |

> 💡 **External CSS** is the industry standard because it keeps code organized, allows the browser to cache the stylesheet (faster load times), and lets one CSS file control thousands of pages simultaneously.

---

<br>

## 🟢 Q2 — Explain CSS Selectors with Examples

> **8 Marks · Beginner**

CSS selectors are **patterns used to target HTML elements** and apply styles to them. Think of them as a precise "find and style" mechanism.

---

### The 7 Core Selector Types

#### 1. Element Selector
This type of selector targets all elements of a given HTML tag.

```css
p {
  color: #374151;
  line-height: 1.6;
}
```

#### 2. Class Selector
This type of selector targets elements with a specific `class` attribute. Uses a `.` prefix.

```css
.card {
  background: #f9fafb;
  border-radius: 8px;
  padding: 1.5rem;
}
```
> ✅ The **same class** can be used on **multiple** elements. Classes are reusable.

#### 3. ID Selector
This type of selector targets a **single unique element** with a specific `id`. Uses a `#` prefix.

```css
#hero {
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  height: 100vh;
}
```
> ❌ The **same ID** should **never** be used on multiple elements. IDs must be unique per page.

#### 4. Group Selector
This type of selector applies the same styles to multiple selectors at once, separated by commas.

```css
h1, h2, h3, h4 {
  font-family: 'Georgia', serif;
  font-weight: 700;
  color: #111827;
}
```

#### 5. Descendant Selector
This type of selector targets an element **anywhere inside** another element (any level deep). Uses a space.

```css
.navbar a {
  color: white;
  text-decoration: none;
}
```

#### 6. Child Selector (`>`)
This type of selector targets  only **direct children** of an element — not deeper descendants. Uses `>`.

```css
ul > li {
  list-style: disc;
  margin-bottom: 8px;
}
```

#### 7. Universal Selector
This type of selector targets  **every single element** on the page. Uses `*`.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
```

---

### Class vs ID — Key Comparison

| Feature | Class (`.`) | ID (`#`) |
|---------|:-----------:|:--------:|
| Specificity score | `0,1,0` | `0,1,0,0` |
| Reusable? | ✅ Yes | ❌ No |
| Multiple per page? | ✅ Yes | ❌ Should be unique |
| Used for JavaScript? | Sometimes | Frequently (`getElementById`) |
| Best for | Styling components | Page anchors / JS hooks |

> 🏆 **ID has higher specificity** than a class. An ID selector will always override a class selector on the same element (unless `!important` is involved).

---

### Direct Child vs Any Descendant

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>       
    <li>
      <ul>
        <li><a href="#">Sub-link</a></li> 
      </ul>
    </li>
  </ul>
</nav>
```

```css

ul > li { color: blue; }


ul li { color: red; }
```

---

<br>

## 🟢 Q3 — What is the CSS Box Model?

> **7 Marks · Beginner**

Every HTML element on a webpage is treated as a **rectangular box**. The CSS Box Model describes the four layers that make up this box, from the inside out.

---

### The Four Layers

```
┌─────────────────────────────────────┐
│              MARGIN                 │  ← Outer space (transparent)
│  ┌───────────────────────────────┐  │
│  │           BORDER              │  │  ← The visible edge/frame
│  │  ┌─────────────────────────┐  │  │
│  │  │        PADDING          │  │  │  ← Inner space (takes background)
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │     CONTENT       │  │  │  │  ← Text, images, child elements
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

| Layer | Description | Takes Background Color? |
|-------|-------------|:-----------------------:|
| **Content** | The innermost layer — holds text, images, child elements | ✅ |
| **Padding** | Space **between** the content and the border | ✅ |
| **Border** | The visible frame around the padding and content | ✅ |
| **Margin** | Space **outside** the border — pushes other elements away | ❌ (always transparent) |

> 📌 **Padding is INSIDE the border.** Margin is OUTSIDE the border.

---

### `box-sizing: content-box` vs `box-sizing: border-box`

#### `content-box` (browser default — avoid!)
The `width` you set only applies to the **content area**. Padding and border are **added on top**, making the element wider than expected.

```css
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid;
  box-sizing: content-box;
}
```

#### `border-box` ✅ (professional standard)
The `width` includes **content + padding + border**. What you set is what you get.

```css
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid;
  box-sizing: border-box;
}
```

> 🏆 **`border-box` is used in all professional projects.** It makes layout math predictable.

---

### `margin: 0 auto` — Centering Block Elements

When applied to a block element **with a defined width**, `margin: 0 auto` sets the top/bottom margin to `0` and the left/right margins to `auto` — which divides the remaining space equally and **horizontally centers** the element.

```css
.container {
  width: 1200px;
  margin: 0 auto;
}
```

---

### Code Task — `.box` Component

```css
.box {
  width: 300px;      
  padding: 20px;       
  border: 2px solid #3b82f6;
  margin: 16px;        
  box-sizing: border-box; 
}
```

---

<br>

## 🟢 Q4 — Explain CSS Colors

> **6 Marks · Beginner**

CSS offers five ways to define colors, each with its own use case and level of control.

---

### The Five Color Formats

#### 1. Named Colors
CSS has 140+ predefined color names.

```css
.element { color: tomato; background-color: steelblue; }
```

#### 2. HEX (Hexadecimal) ⭐ Most Common
A 6-digit code where pairs represent Red, Green, Blue in base-16 (00–FF).

```css
.element { color: #F97316; } 
```

#### 3. RGB (Red, Green, Blue)
Each channel ranges from 0–255.

```css
.element { color: rgb(249, 115, 22); } 
```

#### 4. RGBA (Red, Green, Blue, Alpha)
It is identical to RGB but with a 4th value — the **alpha channel** — controlling transparency (0 = fully transparent, 1 = fully opaque).

```css
.element { color: rgba(249, 115, 22, 0.75); } 
```

#### 5. HSL (Hue, Saturation, Lightness)
More intuitive for designers — Hue is 0–360° on the color wheel, Saturation and Lightness are percentages.

```css
.element { color: hsl(25, 95%, 53%); } 
```

---

### Code Task — Orange (`#F97316`) in All 5 Formats

```css
.named  { color: orange; }

/* HEX */
.hex    { color: #F97316; }

/* RGB */
.rgb    { color: rgb(249, 115, 22); }

/* RGBA */
.rgba   { color: rgba(249, 115, 22, 1); }

/* HSL */
.hsl    { color: hsl(25, 95%, 53%); }
```

---

### `opacity` vs `rgba` — A Critical Difference

| Feature | `opacity: 0.5` | `rgba(r,g,b,0.5)` |
|---------|:--------------:|:-----------------:|
| Affects child elements? | ✅ **YES** — children inherit transparency | ❌ **NO** — only the background color is transparent |
| Use case | Fade an entire element (including text, borders, children) | Transparent background while keeping text fully opaque |

```css

.card-opacity {
  background: #F97316;
  opacity: 0.5; 
}


.card-rgba {
  background: rgba(249, 115, 22, 0.5); 
  color: #111; 
}
```

> 💡 **The 'A' in RGBA stands for Alpha** — the alpha channel controls opacity on a 0–1 scale.

---

<br>

## 🟢 Q5 — What are CSS Units?

> **7 Marks · Beginner**

CSS units define **how sizes are measured**. Choosing the right unit is crucial for accessible, responsive, and maintainable designs.

---

### Unit Reference Guide

| Unit | Relative To | Use Case |
|------|------------|----------|
| `px` | Screen pixels (fixed) | Borders, box shadows, fine details |
| `%` | Parent element's size | Fluid widths in layouts |
| `rem` | Root `<html>` font-size (default 16px) | Font sizes, spacing ⭐ |
| `em` | Current element's font-size | Padding/margin relative to text size |
| `vh` | 1% of the **viewport height** | Full-screen sections, hero areas |
| `vw` | 1% of the **viewport width** | Full-width elements, fluid typography |

---

### Detailed Explanations

#### `px` — Pixels
Fixed, absolute unit. `1px = 1 screen pixel`.

```css
.divider {
  border-bottom: 1px solid #e5e7eb; 
}
```

#### `%` — Percentage
Relative to the **parent element's** size.

```css
.sidebar {
  width: 30%; 
}
```

#### `rem` — Root Em ⭐ Best for font-size
Relative to the **root `<html>`** font-size. Default is `1rem = 16px`.

```css
html { font-size: 16px; } 

h1 { font-size: 3rem; }    
p  { font-size: 1rem; }    
```

> ♿ **Why `rem` beats `px` for accessibility:** If a user changes their browser's default font size (e.g., to 20px for readability), `rem` values scale proportionally. `px` values are fixed and ignore user preferences — making your site less accessible.

#### `em` — Em
Relative to the **current element's** font-size (or inherited font-size).

```css
.button {
  font-size: 1rem;
  padding: 0.75em 1.5em; 
}
```

#### `vh` — Viewport Height
`1vh = 1%` of the browser window's height. `100vh = full screen height`.

```css
.hero {
  height: 100vh; 
}
```

> **`vh` stands for "Viewport Height"**

#### `vw` — Viewport Width
`1vw = 1%` of the browser window's width.

```css
.full-width-banner {
  width: 100vw; 
}
```

---

### The Golden Rule 🏆

| Purpose | Recommended Unit |
|---------|:----------------:|
| Font sizes | `rem` |
| Widths & layouts | `%` or `rem` with `max-width` |
| Full-screen sections | `vh` / `vw` |
| Borders, shadows, fine details | `px` |

---

### Code Task — Hero Section

```css

.hero {
  height: 100vh;              
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;               
}

.hero__content {
  max-width: 60rem;            
  width: 100%;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 4.5rem); 
  line-height: 1.2;
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
}
```

---

<br>

## 🟡 Q6 — CSS Specificity & The Cascade

> **8 Marks · Intermediate**

When multiple CSS rules target the same element, the browser uses **specificity** and **cascade rules** to decide which rule wins.

---

### Specificity Score System

Specificity is calculated as a 4-part score: `(inline, ID, class/attr/pseudo-class, element/pseudo-element)`

| Selector Type | Specificity Score | Example |
|--------------|:-----------------:|---------|
| `!important` | Overrides everything | `color: red !important` |
| Inline style | `1,0,0,0` | `style="color:red"` |
| ID selector | `0,1,0,0` | `#hero` |
| Class / Attribute / Pseudo-class | `0,0,1,0` | `.card`, `[type]`, `:hover` |
| Element / Pseudo-element | `0,0,0,1` | `p`, `div`, `::before` |
| Universal `*` | `0,0,0,0` | `*` |

> 🏆 **Class `(0,0,1,0)` has higher specificity than element `(0,0,0,1)`.**  
> 🏆 **Inline style `(1,0,0,0)` beats everything except `!important`.**

---

### The Cascade — How CSS Decides the Winner

The browser resolves conflicts in this order (highest priority wins):

```
1. !important declarations (avoid using)
2. Inline styles
3. Specificity score (higher score wins)
4. Source order (if equal specificity, the LAST rule wins)
5. Inherited styles (from parent elements)
```

---

### `!important` — Handle With Care ⚠️

`!important` overrides ALL specificity rules and source order. It creates a "nuclear option" that breaks the natural cascade.

```css
p { color: blue !important; } 
#intro { color: red; }        
```

> ❌ **Why to avoid `!important`:** It makes debugging nightmarish. Once you use it, you often need more `!important` declarations to override previous ones, creating an arms race in your CSS.

---

### Code Task — Which Color Wins?

```html
<p id="intro" class="text">Hello</p>
```

```css

p {
  color: blue;
}


.text {
  color: green;
}


#intro {
  color: red;
}
```

> 🏆 **`color: red` wins** — the ID selector `#intro` has the highest specificity score `(0,1,0,0)`.  
> If the ID rule were removed, `color: green` from `.text` would win.  
> If both ID and class were removed, `color: blue` from `p` would win.

---

<br>

## 🟡 Q7 — CSS Flexbox

> **10 Marks · Intermediate**

### What is Flexbox?

Flexbox (Flexible Box Layout) is a **1-dimensional layout system** that controls how items are arranged along a single axis — either a row or a column. Setting `display: flex` on a container transforms it into a **flex container**, making all direct children **flex items** that respond to flex properties.

---

### Flexbox vs Block Layout

| Feature | Block Layout | Flexbox |
|---------|:------------:|:-------:|
| Flow direction | Vertical (top to bottom) | Either axis (row or column) |
| Centering elements | Requires hacks (`margin: auto`) | Built-in with 1–2 properties |
| Equal-height columns | Impossible natively | Automatic by default |
| Space distribution | Manual margins | `justify-content` handles it |

---

### Core Flex Container Properties

#### `flex-direction`
Sets the main axis direction.

```css
.container {
  display: flex;
  flex-direction: row;        
}
```

#### `justify-content`
Aligns items along the **main axis** (horizontal for row, vertical for column).

```css
.container {
  justify-content: flex-start;    
  justify-content: flex-end;     
  justify-content: center;        
  justify-content: space-between; 
  justify-content: space-around;  
  justify-content: space-evenly;  
```

#### `align-items`
Aligns items along the **cross axis** (vertical for row, horizontal for column).

```css
.container {
  align-items: stretch;   
  align-items: flex-start; 
  align-items: center;     
}
```

> 📌 **`justify-content` = main axis | `align-items` = cross axis**

#### `flex-wrap`
Controls whether items wrap to a new line when they overflow.

```css
.container {
  flex-wrap: nowrap;  
  flex-wrap: wrap;    
}
```

#### `gap`
Sets spacing between flex items (no need for margins).

```css
.container {
  gap: 1rem;           
  gap: 1rem 2rem;      
}
```

#### `flex: 1` on Items
`flex: 1` is shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 0`. It makes the item **grow to fill available space equally** with other `flex: 1` siblings.

```css
.sidebar { flex: 0 0 250px; }
.main    { flex: 1; }         
```

---

### Centering Both Horizontally and Vertically

```css
.container {
  display: flex;
  justify-content: center; 
  align-items: center;    
  height: 100vh;
}
```

---

### Real-World Use Cases

1. **Navigation bars** — Logo on the left, links on the right, all vertically centered
2. **Card grids** — Equal-height cards that wrap responsively

---

### Code Task — Flexbox Navbar

```html
<nav class="navbar">
  <div class="navbar__logo">
    <a href="/">MyBrand</a>
  </div>
  <ul class="navbar__links">
    <li><a href="/about">About</a></li>
    <li><a href="/services">Services</a></li>
    <li><a href="/portfolio">Portfolio</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between; 
  align-items: center;            
  padding: 1rem 2rem;
  background-color: #0f172a;
}

.navbar__logo a {
  color: #f8fafc;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
}

.navbar__links {
  display: flex;               
  align-items: center;
  gap: 2rem;                   
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar__links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
}

.navbar__links a:hover {
  color: #f8fafc;
}
```

---

<br>

## 🟡 Q8 — Pseudo-classes & Pseudo-elements

> **9 Marks · Intermediate**

### The Difference: `:` vs `::`

| Feature | Pseudo-classes `:` | Pseudo-elements `::` |
|---------|:-----------------:|:-------------------:|
| Syntax | Single colon `:` | Double colon `::` |
| Purpose | Style based on **state or position** | Style a **virtual part** of an element |
| Creates new DOM node? | ❌ No | ❌ No (it's virtual) |
| Examples | `:hover`, `:focus`, `:nth-child()` | `::before`, `::after`, `::placeholder` |

---

### Pseudo-classes

#### `:hover` — Mouse Over State
```css
.button:hover {
  background-color: #ea580c;
  transform: translateY(-2px);
}
```

#### `:focus` — Keyboard/Input Focus
```css
input:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-color: #3b82f6;
}
```

#### `:nth-child()` — Position-Based Selection
```css
li:nth-child(2n)   { background: #f1f5f9; } 
li:nth-child(3n)   { color: #7c3aed; }     
li:nth-child(2n+1) { font-weight: 600; }    
```

#### `:not()` — Exclusion Selector
```css

a:not(.active) {
  color: #64748b;
}


li:not(:last-child) {
  border-bottom: 1px solid #e2e8f0;
}
```

---

### Pseudo-elements

#### `::before` and `::after`
These insert **virtual content** before or after an element's actual content. They do **NOT** add real HTML elements to the DOM — they exist only in CSS.

> ⚠️ **`content` property is REQUIRED** for `::before` and `::after` to appear. Without it, they are invisible. Even `content: ""` (empty string) works for decorative purposes.

```css

blockquote::before {
  content: '"';
  font-size: 4rem;
  color: #3b82f6;
  line-height: 0;
}
```

#### `::placeholder` — Input Placeholder Text
```css
input::placeholder {
  color: #9ca3af;
  font-style: italic;
  font-size: 0.9rem;
}
```

---

### Code Task — Button, Featured Items & Placeholder

```html
<button class="btn">Click Me</button>

<ul class="list">
  <li class="featured">Premium Plan</li>
  <li>Basic Plan</li>
  <li class="featured">Enterprise Plan</li>
</ul>

<input type="text" placeholder="Search..." />
```

```css

.btn {
  background-color: #1d4ed8;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.25s ease;
}

.btn:hover {
  background-color: #f97316; 
}


.featured::before {
  content: "★ ";  
  color: #f59e0b;
  font-size: 1rem;
}

.featured {
  font-weight: 600;
  color: #111827;
}


input {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
}

input::placeholder {
  color: #9ca3af; 
  font-style: italic;
}
```

---

<br>

## 🔴 Q9 — CSS Transitions & Animations

> **10 Marks · Advanced**

### Transitions vs Animations

| Feature | Transitions | Animations (`@keyframes`) |
|---------|:-----------:|:------------------------:|
| Requires a trigger? | ✅ Yes (hover, focus, class change) | ❌ No — can run on load |
| Control keyframes? | ❌ Only start/end states | ✅ Full control (0%, 50%, 100%) |
| Can loop? | ❌ No | ✅ Yes (`animation-iteration-count: infinite`) |
| Best for | Interactive state changes | Entrance effects, loaders, continuous motion |

---

### CSS Transition Shorthand

```css
selector {
  transition: property duration timing-function delay;
}


.button {
  transition: background-color 0.3s ease-in-out 0s;
 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

| Property | Description |
|----------|-------------|
| `property` | Which CSS property to animate (`all`, `transform`, `opacity`, etc.) |
| `duration` | How long the transition takes (`0.3s`, `500ms`) |
| `timing-function` | The acceleration curve |
| `delay` | How long to wait before starting |

---

### Timing Functions Explained

| Function | Behavior | Use Case |
|----------|----------|----------|
| `ease` | Slow start, fast middle, slow end (default) | General purpose |
| `ease-in` | Starts slow, ends fast | Elements leaving the screen |
| `ease-out` | Starts fast, ends slow | Elements entering the screen |
| `linear` | Constant speed throughout | Loaders, spinners, progress bars |

---

### `@keyframes` and Animation Shorthand

```css

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply it */
.card {
  animation: fadeInUp 0.6s ease-out forwards;

}
```

#### `animation-fill-mode: forwards`
By default, when an animation ends, the element **snaps back** to its original styles. `forwards` tells the element to **retain the final keyframe's styles** after the animation completes. Essential for entrance animations — without it, the element would disappear back to its pre-animated state.

---

### `animation-iteration-count: infinite`
Makes the animation **repeat forever** — perfect for loaders, pulsing badges, or continuous background effects.

```css
.spinner {
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

---

### Why `transform` and `opacity` are Faster

> 🚀 **`transform` and `opacity` are GPU-accelerated.**

The browser has two rendering engines: the CPU (which handles layout) and the GPU (which handles compositing). Properties like `width`, `height`, `margin`, and `top` trigger a full **layout recalculation** (expensive). `transform` and `opacity` are handled entirely on the **GPU compositor layer** — they never cause a reflow, making animations buttery smooth at 60fps.

| Animate This | Not This |
|:------------:|:--------:|
| `transform: translateY(-8px)` | `top: -8px` or `margin-top: -8px` |
| `transform: scale(1.05)` | `width: 105%` |
| `opacity: 0` → `opacity: 1` | `visibility` or `display` changes |

---

### Code Task — Card with Hover Lift + Load Animation

```html
<div class="card">
  <h2>Featured Article</h2>
  <p>This card lifts on hover and fades in on page load.</p>
</div>
```

```css

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


.card {
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 380px;


  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;


  animation: fadeInUp 0.6s ease-out forwards;
}


.card:hover {
  transform: translateY(-8px);              /* Lift using GPU-accelerated transform */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); /* Deeper shadow on lift */
}
```

---

<br>

## 🔴 Q10 — Responsive Web Design

> **10 Marks · Advanced**

### Part A — Media Queries

A **media query** applies CSS only when certain conditions about the user's device or viewport are met. It's the cornerstone of responsive design.

```css

@media (condition) {

}


@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}
```

#### Standard Industry Breakpoints

| Breakpoint | Name | Media Query |
|------------|------|-------------|
| `< 640px` | Mobile (default) | No query needed (mobile-first base) |
| `≥ 640px` | Large Mobile | `@media (min-width: 640px)` |
| `≥ 768px` | Tablet | `@media (min-width: 768px)` |
| `≥ 1024px` | Laptop | `@media (min-width: 1024px)` |
| `≥ 1280px` | Desktop | `@media (min-width: 1280px)` |
| `≥ 1536px` | Large Desktop | `@media (min-width: 1536px)` |

---

### Part B — Mobile-First Approach ⭐

**Mobile-First** means you write your **base styles for mobile screens first**, then use `min-width` media queries to progressively enhance the layout for larger screens.

#### Mobile-First (Industry Standard ✅)
```css

.grid {
  display: grid;
  grid-template-columns: 1fr;
}


@media (min-width: 768px) {
  .grid { grid-template-columns: 1fr 1fr; }
}


@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

#### Desktop-First (Outdated ❌)
```css

.grid { grid-template-columns: repeat(3, 1fr); }


@media (max-width: 1023px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 767px) {
  .grid { grid-template-columns: 1fr; }
}
```

**Why Mobile-First is the standard:**
1. 📱 **60%+ of web traffic is mobile** — prioritize the majority
2. 🚀 **Performance** — mobile gets only the CSS it needs; desktop gets additions
3. 🧠 **Forces better design decisions** — designing for constraints first
4. 🔧 **Easier to maintain** — `min-width` cascades cleanly; `max-width` overrides fight the cascade

> **Mobile-first uses `min-width`** in media queries (adding styles as the screen grows).

---

### Part C — CSS Variables (Custom Properties)

CSS Variables (officially called **Custom Properties**) let you store reusable values in one place and reference them throughout your stylesheet with `var()`.

```css

:root {
  --color-primary: #3b82f6;
  --color-text: #111827;
  --font-size-base: 1rem;
  --spacing-md: 1.5rem;
}

.button {
  background: var(--color-primary);
  font-size: var(--font-size-base);
  padding: var(--spacing-md);
}


.button {
  background: var(--color-primary, #007bff);
}
```

#### `@media (prefers-color-scheme: dark)`
This built-in media query detects the user's **OS-level dark mode preference** and applies dark styles automatically.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #0f172a;
    --color-text: #f1f5f9;
  }
}
```

#### Can JavaScript Read/Change CSS Variables?

```javascript

const value = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary');


document.documentElement.style.setProperty('--color-primary', '#10b981');
```

> **Yes! JavaScript can both read and change CSS variables**, making them incredibly powerful for theme switching, dynamic theming, and JavaScript-driven animations.

---

### Code Task — Full Design System

```css
/* ============================================
   DESIGN SYSTEM — CSS Variables & Dark Mode
   ============================================ */

:root {

  --color-bg:        #ffffff;
  --color-surface:   #f8fafc;
  --color-border:    #e2e8f0;
  --color-text:      #0f172a;
  --color-text-muted:#64748b;
  --color-primary:   #3b82f6;
  --color-primary-hover: #2563eb;
  --color-accent:    #f97316;
  --color-success:   #22c55e;


  --font-sans:       'Sora', sans-serif;
  --font-serif:      'Lora', serif;
  --font-size-sm:    0.875rem;
  --font-size-base:  1rem;
  --font-size-lg:    1.125rem;
  --font-size-xl:    1.25rem;
  --font-size-2xl:   1.5rem;
  --font-size-4xl:   2.25rem;
  --line-height:     1.65;

  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.10);
  --shadow-lg: 0 20px 40px rgba(0,0,0,0.14);

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  --transition: 0.25s ease;
}



[data-theme="dark"] {
  --color-bg:        #0f172a;
  --color-surface:   #1e293b;
  --color-border:    #334155;
  --color-text:      #f1f5f9;
  --color-text-muted:#94a3b8;
  --color-primary:   #60a5fa;
  --color-primary-hover: #93c5fd;

}


/* ============================================
   BASE STYLES — Mobile First
   ============================================ */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;  
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height);
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color var(--transition), color var(--transition);
}

.container {
  width: 100%;
  padding-inline: var(--space-4); 
  margin-inline: auto;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;      
  gap: var(--space-6);
}


/* ============================================
   TABLET — ≥ 768px
   ============================================ */

@media (min-width: 768px) {
  .container {
    padding-inline: var(--space-8); 
    max-width: 768px;
  }

  .grid {
    grid-template-columns: 1fr 1fr; 
  }
}


/* ============================================
   DESKTOP — ≥ 1024px
   ============================================ */

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }

  .grid {
    grid-template-columns: repeat(3, 1fr); 
  }
}
```

---

<br>

<div align="center">

---

## 📊 Assignment Summary

| Range | Level | Questions | Marks |
|-------|:-----:|:---------:|:-----:|
| Q1 – Q5 | 🟢 Beginner | 5 | 33 |
| Q6 – Q8 | 🟡 Intermediate | 3 | 27 |
| Q9 – Q10 | 🔴 Advanced | 2 | 20 |
| **Total** | | **10** | **80** |

---

```
  ____  _   _ ___ _     _____    ___   _   _ 
 | __ )| | | |_ _| |   |_   _|  / _ \ | \ | |
 |  _ \| | | || || |     | |   | | | ||  \| |
 | |_) | |_| || || |___  | |   | |_| || |\  |
 |____/ \___/|___|_____| |_|    \___/ |_| \_|
```

**MERN Stack + AI Engineering Bootcamp · Week 2 · CSS Theory**

</div>