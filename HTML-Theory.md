# 🌐 HTML Theoretical Questions

> 📘 **MERN Stack + AI Engineering Bootcamp — Week 1**  


---

## 🧠 Q1: What is HTML and what is the difference between HTML and HTML5?

HTML (HyperText Markup Language) is the standard language used to create and structure web pages.

**HTML vs HTML5:**
- HTML5 is the latest version with modern features.
- Supports audio, video, canvas, and semantic tags.
- Better performance and mobile support.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Example</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

---

## 🧠 Q2: What are semantic HTML tags? Why are they important?

Semantic tags clearly describe their meaning for both the browser and the user.

Examples: `<header>`, `<footer>`, `<article>`

**Importance:**
- Improves SEO
- Enhances accessibility
- Better code readability

---

## 🧠 Q3: Difference between <div> and <span>

- `<div>` → Block-level (Occupying The Whole Space)
- `<span>` → Inline (Occupying The Limited Space)

```html
<div>Block</div>
<span>Inline</span>
```

---

## 🧠 Q4: Block-level vs Inline elements

| Block Elements | Inline Elements |
|---------------|----------------|
| Takes full width | Takes required width |
| Starts new line | No new line |

---

## 🧠 Q5: Purpose of DOCTYPE

Defines HTML version and ensures proper browser rendering.

```html
<!DOCTYPE html>
```

---

## 🧠 Q6: id vs class

- `id` → unique identification of an element.
- `class` → reusable identification of elements under which classes are defined.

---

## 🧠 Q7: Creating forms

```html
<form>
  <input type="text" placeholder="Type Something..." >
  <input type="email" placeholder="Enter Your Email Adress">
  <button>Submit</button>
</form>
```

---

## 🧠 Q8: Meta tags

Provide metadata like charset and SEO info.

---

## 🧠 Q9: alt attribute

Improves accessibility and SEO. This text is displayed if the image cannot load, and it also improves accessibility by providing descriptions for screen readers.

```html
<img src="img.jpg" alt="Description">
```

---

## 🧠 Q10: Clickable image

We can make an image clickable by adding an Anchor tag.
```html
<a href="https://example.com">
  <img src="img.jpg">
</a>
```

---

## 🧠 Q11: Image formats

- JPG → compressed
- PNG → transparency
- SVG → vector
- WebP → modern optimized

---

## 🧠 Q12: HTML5 semantic tags

Semantic tags clearly describe their meaning for both the browser and the user.

Examples: `<header>`, `<footer>`, `<section>`

---

## 🧠 Q13: script, async, defer

- `script` → blocks loading
- `async` → loads parallel
- `defer` → loads after HTML

---

## 🧠 Q14: Audio & Video
For Video:
```html
<video controls>
  <source src="video.mp4">
</video>
```
For Audio:
```html
<audio controls>
  <source src="audio.mp4">
</audio>
```

---

## 🧠 Q15: Relative vs Absolute paths

- Relative → Used by local files
- Absolute → Used by files with full URL

---

## 🧠 Q16: Data attributes

Custom attributes like `data-id` providing informative notes about the code same as comments in C Language.

---

## 🧠 Q17: Viewport

Controls responsive design making it easier for the website to be presented on both Mobile and PCs.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 🧠 Q18: SEO improvements

We can improve SEO by utilizing the following steps:
- Use semantic tags
- Add meta descriptions
- Use headings properly

---

## 🧠 Q19: Accessibility best practices
Accessibility can be best practised by the following steps:
- Use alt text
- Proper labels
- Semantic HTML

---

## 🧠 Q20: <strong> vs <b>, <em> vs <i>

- `<strong>` and `<em>` → semantic meaning
- `<b>` and `<i>` → visual only

---



> 💡 *"Consistency beats perfection — but this README delivers both."*
