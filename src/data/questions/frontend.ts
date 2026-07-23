import type { Question } from "@/types/question";

const now = "2026-07-12T00:00:00.000Z";

export const frontendQuestions: Question[] = [
  // ──────────────────────────────────────────────
  // HTML (fe-001 – fe-008)
  // ──────────────────────────────────────────────
  {
    id: "fe-001",
    title: "What is the difference between `block`, `inline`, and `inline-block` elements?",
    content: "What is the difference between `block`, `inline`, and `inline-block` elements in HTML/CSS? When would you use each?",
    difficulty: "beginner",
    track: "frontend",
    topic: "HTML",
    category: "HTML Fundamentals",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "Block elements take up the full width available and start on a new line. Inline elements only take up as much width as necessary and do not start on a new line. Inline-block elements flow with text but respect width/height.",
    detailedExplanation: "Block-level elements like `<div>`, `<p>`, `<h1>`–`<h6>`, and `<section>` always start on a new line and stretch to fill the available horizontal space. You can set width, height, margin, and padding on them.\n\nInline elements like `<span>`, `<a>`, `<strong>`, and `<em>` only take up the space defined by their content. They flow within surrounding text without breaking to a new line. Width and height properties have no effect on inline elements, and vertical margins/padding don't push other elements away.\n\nInline-block elements combine behaviors of both: they flow inline with surrounding text (no line break), but they respect width, height, margin, and padding properties. This makes them useful for creating grid-like layouts before Flexbox and Grid existed.",
    bestAnswer: "Block elements (`display: block`) take full available width and start on a new line — they stack vertically. Examples: `<div>`, `<p>`, `<section>`. You can set width, height, and all box-model properties.\n\nInline elements (`display: inline`) flow within surrounding text without breaking the line. They only size to their content. You cannot set width/height, and vertical margins/padding are ignored. Examples: `<span>`, `<a>`, `<strong>`.\n\nInline-block (`display: inline-block`) combines both: they flow inline but respect width, height, and box-model properties. Useful for horizontal navigation items, tag lists, or any layout where you need inline flow with block-level sizing control.",
    alternativeAnswers: [
      "I'd also mention that CSS Flexbox and Grid have largely replaced inline-block for layout purposes, but understanding these display types is still important for inline content flow and legacy codebases.",
      "Block elements can contain both block and inline children, inline elements should only contain other inline elements, and inline-block can contain both."
    ],
    commonMistakes: [
      "Confusing inline-block with inline — inline-block accepts width/height while inline does not.",
      "Forgetting that vertical margins on inline elements don't affect surrounding layout.",
      "Not mentioning that `<img>` is a replaced element that behaves somewhat like inline-block by default."
    ],
    followUpQuestions: [
      "How would you create a horizontal list of items with equal spacing using only inline-block?",
      "What happens when you set `display: inline-block` but add too much padding — does the text overflow?",
      "How do Flexbox and Grid compare to inline-block for layout?"
    ],
    relatedQuestionIds: ["fe-002"],
    references: [
      { title: "MDN Display", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display" },
      { title: "CSS Display Types", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display/display-outside" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-002",
    title: "What are semantic HTML elements and why do they matter?",
    content: "What are semantic HTML elements? Why should we use them instead of generic `<div>` and `<span>` elements?",
    difficulty: "beginner",
    track: "frontend",
    topic: "HTML",
    category: "HTML Fundamentals",
    companyTags: ["Meta", "Apple", "Google"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Semantic HTML elements clearly describe their meaning to both the browser and developers. Elements like `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`, and `<figcaption>` convey structure and purpose, unlike `<div>` and `<span>` which carry no inherent meaning.",
    detailedExplanation: "Semantic elements serve three key purposes. First, they improve accessibility: screen readers and assistive technologies rely on semantic markup to convey page structure to users with disabilities. A `<nav>` element tells a screen reader 'this is navigation,' while a `<div>` does not.\n\nSecond, they improve SEO: search engines use semantic structure to understand content hierarchy and importance. Using `<article>` for blog posts and `<h1>`–`<h6>` for headings helps search engines index content correctly.\n\nThird, they improve maintainability: developers reading the code can immediately understand the page structure without relying on class names like `class=\"header\"` or `class=\"nav-wrapper\"`.",
    bestAnswer: "Semantic HTML elements explicitly communicate their role and meaning to browsers, assistive technologies, and developers. Instead of `<div class=\"header\">`, you use `<header>`. Instead of `<div class=\"nav\">`, you use `<nav>`.\n\nKey benefits: (1) Accessibility — screen readers use landmarks like `<main>`, `<nav>`, `<aside>` to help users navigate. (2) SEO — search engines better understand content structure and relevance. (3) Readability — code self-documents its structure. (4) Browser features — elements like `<details>`, `<dialog>`, `<progress>` have built-in behavior without JavaScript.",
    alternativeAnswers: [
      "Beyond the standard landmarks, elements like `<time>`, `<mark>`, `<abbr>`, and `<cite>` add micro-semantics that help both machines and humans understand specific content types.",
      "HTML5 introduced over 30 new semantic elements. Using them is part of progressive enhancement — the page works everywhere but gains enhanced meaning for capable agents."
    ],
    commonMistakes: [
      "Overusing `<div>` with ARIA roles when native semantic elements already exist.",
      "Using semantic elements purely for styling hooks rather than for their meaning.",
      "Forgetting that `<main>` should appear only once per page and should not be nested inside `<article>`, `<aside>`, `<header>`, `<footer>`, or `<nav>`."
    ],
    followUpQuestions: [
      "What ARIA attributes would you add to enhance a custom widget's accessibility?",
      "How does using `<article>` differ from `<section>`?",
      "Can you explain the difference between ARIA roles and native HTML semantics?"
    ],
    relatedQuestionIds: ["fe-065", "fe-001"],
    references: [
      { title: "MDN HTML Elements Reference", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" },
      { title: "Using HTML sections and outlines", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Using_html_sections_and_outlines" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-003",
    title: "Explain the HTML5 `<canvas>` element and its rendering context.",
    content: "Explain the HTML5 `<canvas>` element. What is a rendering context? How do you draw on a canvas?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "HTML",
    category: "HTML5 Features",
    companyTags: ["Netflix", "Google", "Amazon"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "The `<canvas>` element provides a drawable region in the HTML document for rendering graphics, charts, images, or visualizations on the fly via JavaScript. You obtain a rendering context (typically `2d` or `webgl`) from the canvas element and use its API to draw.",
    detailedExplanation: "The `<canvas>` element by itself is just a transparent rectangle. You must use JavaScript to draw content. The `getContext('2d')` method returns a `CanvasRenderingContext2D` object with methods for drawing shapes, text, images, and other objects.\n\nThe 2D context provides primitives like `fillRect()`, `strokeRect()`, `beginPath()`, `lineTo()`, `arc()`, `fillText()`, `drawImage()`, and transformations like `translate()`, `rotate()`, and `scale()`. You can manipulate pixels directly with `getImageData()` and `putImageData()`.\n\nFor hardware-accelerated 3D graphics, `getContext('webgl')` or `getContext('webgl2')` gives access to the OpenGL ES API through JavaScript. Libraries like Three.js abstract the raw WebGL complexity.",
    bestAnswer: "The `<canvas>` element is an HTML5 feature that creates a fixed-size drawing surface rendered via JavaScript. Unlike SVG, canvas draws pixels (raster graphics) rather than DOM elements.\n\nTo use it, you get a rendering context: `const ctx = canvas.getContext('2d')`. This context exposes methods like `fillRect()`, `beginPath()`, `arc()`, `fillText()`, and `drawImage()`. You can set fill/stroke styles, apply transformations, and composite operations.\n\nCanvas is ideal for pixel-level manipulation, game rendering, data visualization (D3.js can target canvas), image processing, and real-time graphics. It's less suitable for content that needs DOM interaction, accessibility, or resolution independence (where SVG excels).",
    alternativeAnswers: [
      "Canvas can also be used with OffscreenCanvas for rendering in Web Workers, enabling heavy graphical computation off the main thread.",
      "For data visualization, libraries like Chart.js and D3.js can render to canvas for better performance with large datasets compared to SVG."
    ],
    commonMistakes: [
      "Confusing canvas with SVG — canvas is raster-based and drawn imperatively, while SVG is vector-based and DOM-based.",
      "Forgetting that canvas content is not accessible by default — you need to provide alternative text or ARIA attributes.",
      "Not handling HiDPI/Retina displays by scaling the canvas with `devicePixelRatio`."
    ],
    followUpQuestions: [
      "How would you optimize canvas rendering for animations at 60fps?",
      "What is OffscreenCanvas and when would you use it?",
      "How does WebGL differ from the 2D canvas context?"
    ],
    relatedQuestionIds: ["fe-063"],
    references: [
      { title: "MDN Canvas Tutorial", url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial" },
      { title: "Canvas Performance Tips", url: "https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-004",
    title: "What are Web Workers and when would you use them?",
    content: "What are Web Workers? How do they differ from Service Workers? When would you use them in a frontend application?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "HTML",
    category: "HTML5 Features",
    companyTags: ["Meta", "Google", "Amazon"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Web Workers run JavaScript in a background thread, separate from the main UI thread. They enable CPU-intensive computations without blocking the UI. Communication happens via `postMessage()` and `onmessage` handlers.",
    detailedExplanation: "The main thread handles the DOM, user interactions, and rendering. If you perform heavy computation (image processing, data parsing, complex calculations) on the main thread, the UI freezes. Web Workers solve this by offloading work to a background thread.\n\nWorkers have limitations: they cannot access the DOM, `window`, or `document` objects. They can make network requests (fetch, XMLHttpRequest), use IndexedDB, and import other scripts via `importScripts()`. Communication with the main thread is message-based using the structured clone algorithm.\n\nService Workers are a specialized type of worker focused on network requests, caching, and offline support. They act as a proxy between the browser and network. Unlike regular workers, they are registered for a specific scope and persist across page navigations.",
    bestAnswer: "Web Workers execute JavaScript on a background thread, keeping the main thread free for UI rendering and user interactions. You create one with `new Worker('script.js')` and communicate via `postMessage()`.\n\nUse cases: heavy data processing, image/video manipulation, cryptographic operations, complex algorithms, or any CPU-bound task that would block the main thread. Workers cannot access the DOM — they're purely for computation.\n\nService Workers are different: they're event-driven scripts that intercept network requests, enabling caching strategies and offline support. They run independently of the page and persist across navigations. Regular Web Workers are scoped to a single page instance.",
    alternativeAnswers: [
      "SharedWorker is another variant — it allows multiple browser tabs/windows to share a single worker instance, useful for shared state or connection pooling.",
      "OffscreenCanvas lets you transfer a canvas to a worker for GPU-accelerated rendering off the main thread, combining worker computation with graphics."
    ],
    commonMistakes: [
      "Confusing Web Workers with Service Workers — they serve different purposes.",
      "Trying to access DOM elements from within a worker, which will throw an error.",
      "Not understanding that workers use the structured clone algorithm, so you cannot send functions or DOM nodes via postMessage."
    ],
    followUpQuestions: [
      "How would you implement a web worker pool for parallel task execution?",
      "What is the structured clone algorithm and what can it serialize?",
      "How does the Cache API work with Service Workers for offline support?"
    ],
    relatedQuestionIds: ["fe-069", "fe-073"],
    references: [
      { title: "MDN Web Workers API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API" },
      { title: "Service Worker API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-005",
    title: "Explain the `<template>` and `<slot>` elements in HTML.",
    content: "What are the `<template>` and `<slot>` HTML elements? How do they work and what are their use cases?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "HTML",
    category: "HTML5 Features",
    companyTags: ["Google", "Vercel", "Microsoft"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "The `<template>` element holds HTML content that is not rendered when the page loads but can be instantiated dynamically via JavaScript. The `<slot>` element is used in Web Components to define placeholder content that can be filled by a component's consumer.",
    detailedExplanation: "The `<template>` element is parsed and its content is stored in a `DocumentFragment` accessible via the `content` property. Scripts, images, and other resources inside a template are not loaded until the template is cloned and inserted into the DOM. This makes it efficient for reusable UI patterns.\n\nYou typically use a template with a custom element: clone the template content, populate it with data, and append it to the DOM. Frameworks like Lit and Stencil rely heavily on templates.\n\nThe `<slot>` element is part of the Web Components shadow DOM specification. It defines named insertion points where external content can be projected. A component defines slots in its shadow DOM, and the consumer provides content that matches those slots by using the `slot` attribute.",
    bestAnswer: "The `<template>` element stores inert HTML that isn't rendered or loaded until activated via JavaScript (`template.content.cloneNode(true)`). It's useful for defining reusable markup patterns — table rows, modal dialogs, card layouts — without affecting the initial page render or triggering resource loads.\n\nThe `<slot>` element is a Web Component concept for content projection. A component author defines named slots in its shadow DOM: `<slot name=\"header\"></slot>`. The consumer fills them: `<div slot=\"header\">My Header</div>`. Unslotted content goes into the default slot.\n\nTogether, templates provide the markup blueprint and slots provide the customization points — a clean separation between component structure and consumer content.",
    alternativeAnswers: [
      "Templates are also useful for server-side rendering scenarios where you want to send markup to the client without it being visible until hydrated.",
      "Anonymous slots (no name attribute) act as default slots. Named slots allow precise content placement within a component."
    ],
    commonMistakes: [
      "Expecting `<template>` content to be visible — it's inert by design until cloned into the DOM.",
      "Confusing `<slot>` (Web Components) with React's children pattern or Vue's named slots — they're conceptually similar but technically different.",
      "Forgetting that slot content retains the styling of its original context, not the shadow DOM context, by default."
    ],
    followUpQuestions: [
      "How does shadow DOM encapsulation affect slot content styling?",
      "How do frameworks like Vue and React implement similar content projection?",
      "What is the difference between `<template>` and `<script type=\"text/template\">`?"
    ],
    relatedQuestionIds: ["fe-037", "fe-029"],
    references: [
      { title: "MDN template element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template" },
      { title: "MDN slot element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-006",
    title: "What is the difference between `defer` and `async` script loading?",
    content: "Explain the difference between `defer` and `async` attributes on `<script>` tags. When would you use each?",
    difficulty: "beginner",
    track: "frontend",
    topic: "HTML",
    category: "HTML Fundamentals",
    companyTags: ["Amazon", "Microsoft", "Apple"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "`async` downloads the script in parallel and executes it as soon as it's downloaded, blocking parsing. `defer` downloads in parallel but executes only after HTML parsing is complete, in order. Neither blocks rendering during download.",
    detailedExplanation: "Without `async` or `defer`, a `<script>` tag blocks HTML parsing while the browser downloads and executes the script. This can significantly slow down initial page render.\n\nThe `async` attribute tells the browser to download the script without blocking HTML parsing. However, once downloaded, the script executes immediately, which can interrupt parsing. Scripts execute in the order they finish downloading, not the order they appear in the HTML. This makes `async` suitable for independent scripts like analytics or ad scripts.\n\nThe `defer` attribute also downloads the script without blocking parsing, but defers execution until after the HTML has been fully parsed. Deferred scripts execute in the order they appear in the HTML, preserving dependencies. This makes `defer` suitable for scripts that interact with the DOM or depend on each other.",
    bestAnswer: "`async` downloads and executes as soon as possible — it doesn't wait for HTML parsing to finish, and execution can happen while parsing is still in progress. Execution order is not guaranteed.\n\n`defer` downloads in parallel with HTML parsing but defers execution until parsing completes. Deferred scripts execute in document order.\n\nUse `async` for independent, third-party scripts (analytics, ads, chat widgets) where you want them to run as soon as they're ready. Use `defer` for your application scripts that depend on the DOM being ready or on each other. Never use both on the same script — `async` wins if both are present.",
    alternativeAnswers: [
      "Modern browsers also support `<script type=\"module\">` which is deferred by default, so you often don't need `defer` with ES modules.",
      "I'd also mention that `defer` scripts fire a `DOMContentLoaded` event after all deferred scripts have run, which can affect timing."
    ],
    commonMistakes: [
      "Thinking `defer` downloads later — both async and defer download in parallel with HTML parsing; only execution timing differs.",
      "Using `async` for scripts that depend on the DOM or other scripts, leading to race conditions.",
      "Assuming scripts with `defer` always execute before DOMContentLoaded — they do, but in document order."
    ],
    followUpQuestions: [
      "How do ES module scripts (`type=\"module\"`) behave differently from `defer` scripts?",
      "What is the critical rendering path and how do script loading strategies affect it?",
      "How do bundlers like webpack or Vite handle script injection?"
    ],
    relatedQuestionIds: ["fe-017", "fe-061"],
    references: [
      { title: "MDN Script element", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" },
      { title: "Async vs Defer", url: "https://html.spec.whatwg.org/multipage/scripting.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-007",
    title: "What is the `contenteditable` attribute and what are its use cases?",
    content: "What is the `contenteditable` HTML attribute? What are its use cases and limitations?",
    difficulty: "beginner",
    track: "frontend",
    topic: "HTML",
    category: "HTML Fundamentals",
    companyTags: ["Notion", "Google", "Microsoft"],
    interviewRound: "Technical",
    frequency: 2,
    expectedAnswer: "`contenteditable` is an HTML attribute that makes an element's content editable by the user. When set to `true`, users can directly modify the text inside the element in the browser.",
    detailedExplanation: "The `contenteditable` attribute can be set to `true`, `false`, or `plain-only`. When `true`, the browser renders a cursor and allows the user to type, delete, copy, and paste text within the element. It works on any HTML element.\n\nThis is the foundation behind rich text editors like CKEditor, TinyMCE, and ProseMirror. The `document.execCommand()` API (now deprecated but still widely used) provides formatting operations like bold, italic, insertLink, etc., on contenteditable elements.\n\nLimitations include inconsistent behavior across browsers, limited undo/redo support, and difficulty with structured content. Modern rich text editors often use the Input Event API and Mutation Observers instead of `execCommand` for more reliable behavior.",
    bestAnswer: "`contenteditable` is an HTML attribute that enables in-browser editing of an element's content. Setting `contenteditable=\"true\"` lets users click and type directly in the element — it's the browser's built-in mechanism for editable content.\n\nUse cases: inline editing in CMS interfaces, collaborative documents (Google Docs-style), comment sections, title editing, note-taking apps, and rich text editors. Libraries like ProseMirror, Tiptap, and Slate build on top of contenteditable for production editors.\n\nKey considerations: behavior varies across browsers, undo/redo is fragile, and structured content manipulation is complex. The `document.execCommand` API that powers formatting is deprecated, so modern editors use Input Events and custom mutation handling.",
    alternativeAnswers: [
      "The `contenteditable=\"plaintext-only\"` value is a non-standard extension that prevents rich text pasting, useful for plain text fields.",
      "For simple text editing, `<input>` and `<textarea>` are more reliable. Use `contenteditable` only when you need rich text formatting."
    ],
    commonMistakes: [
      "Relying on `document.execCommand()` for production editors — it's deprecated and inconsistent across browsers.",
      "Not handling paste events to strip unwanted formatting when users paste from Word or web pages.",
      "Forgetting that contenteditable elements are not form elements and don't participate in standard form submission."
    ],
    followUpQuestions: [
      "How would you strip HTML formatting from pasted content in a contenteditable element?",
      "How do libraries like ProseMirror model document state for contenteditable editors?",
      "What is the Input Event API and how does it improve on execCommand?"
    ],
    relatedQuestionIds: ["fe-002", "fe-069"],
    references: [
      { title: "MDN contenteditable", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable" },
      { title: "ProseMirror Guide", url: "https://prosemirror.net/docs/guide/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-008",
    title: "What are the different input types available in HTML5?",
    content: "What are the new input types introduced in HTML5? How do they improve user experience and form validation?",
    difficulty: "beginner",
    track: "frontend",
    topic: "HTML",
    category: "HTML Forms",
    companyTags: ["Apple", "Google", "Amazon"],
    interviewRound: "Phone Screen",
    frequency: 3,
    expectedAnswer: "HTML5 introduced input types like `email`, `url`, `tel`, `number`, `range`, `date`, `time`, `datetime-local`, `month`, `week`, `color`, `search`, and `file`. These provide built-in validation, specialized keyboards on mobile, and native UI controls.",
    detailedExplanation: "HTML5 expanded the `<input>` element with new type values that serve two purposes: built-in form validation and enhanced user experience on mobile devices. For example, `type=\"email\"` validates that the entered text matches an email pattern and shows an email keyboard on mobile devices.\n\n`type=\"date\"`, `type=\"time\"`, and `type=\"datetime-local\"` provide native date/time pickers, eliminating the need for JavaScript date picker libraries on many platforms. `type=\"number\"` provides a numeric input with increment/decrement controls. `type=\"range\"` renders a slider control.\n\n`type=\"color\"` opens a native color picker, `type=\"search\"` may show a clear button and search-styled UI, and `type=\"tel\"` shows a phone keypad on mobile. All of these work with built-in constraint validation API attributes like `required`, `min`, `max`, `pattern`, `minlength`, and `maxlength`.",
    bestAnswer: "HTML5 added several input types: `email` (email validation + keyboard), `url` (URL validation), `tel` (phone keypad), `number` (spinners + numeric keyboard), `range` (slider), `date`/`time`/`datetime-local`/`month`/`week` (date pickers), `color` (color picker), and `search` (search-styled field).\n\nThese improve UX by providing appropriate mobile keyboards, native UI widgets (date pickers, sliders, color pickers), and built-in browser validation — reducing the need for JavaScript validation code.\n\nCoupled with attributes like `required`, `pattern`, `min`, `max`, `minlength`, and `step`, they enable client-side validation via the Constraint Validation API (`checkValidity()`, `setCustomValidity()`). Browser support varies for styling and UI across different browsers and platforms.",
    alternativeAnswers: [
      "The `<datalist>` element pairs with `<input>` to provide autocomplete suggestions, enhancing form UX without custom JavaScript.",
      "The Constraint Validation API (`validity` property, `reportValidity()`, `setCustomValidity()`) provides programmatic control over form validation beyond just HTML attributes."
    ],
    commonMistakes: [
      "Assuming all browsers render the same UI for date inputs — Safari has limited support for date pickers.",
      "Relying solely on client-side validation — server-side validation is always necessary for security.",
      "Not using `autocomplete` attributes alongside input types to help browsers and password managers autofill correctly."
    ],
    followUpQuestions: [
      "How does the Constraint Validation API work programmatically?",
      "How would you style date inputs consistently across browsers?",
      "What is progressive enhancement and how does it apply to HTML5 inputs?"
    ],
    relatedQuestionIds: ["fe-001", "fe-077"],
    references: [
      { title: "MDN Input types", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" },
      { title: "HTML5 Input Types", url: "https://html.spec.whatwg.org/multipage/input.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // CSS (fe-009 – fe-016)
  // ──────────────────────────────────────────────
  {
    id: "fe-009",
    title: "What is the CSS Box Model? Explain `content-box` vs `border-box`.",
    content: "Explain the CSS Box Model. What is the difference between `content-box` and `border-box`? Which should you use and why?",
    difficulty: "beginner",
    track: "frontend",
    topic: "CSS",
    category: "CSS Fundamentals",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "The CSS box model describes how elements are rendered as rectangular boxes. Each box has content, padding, border, and margin layers. `content-box` (default) sizes the content area and adds padding/border on top. `border-box` includes padding and border in the element's total width/height.",
    detailedExplanation: "Every HTML element generates a rectangular box consisting of four areas: content (the actual text/image), padding (space between content and border), border (the element's border), and margin (space between this element and its neighbors).\n\nWith `box-sizing: content-box` (the default), setting `width: 200px` makes the content area 200px. Padding and border are added on top, making the total visible width larger than 200px. This is unintuitive for layout calculations.\n\nWith `box-sizing: border-box`, setting `width: 200px` makes the total box (content + padding + border) exactly 200px. The content area shrinks to accommodate padding and border. This is much more predictable for layout.",
    bestAnswer: "The CSS box model defines the layers surrounding an element's content: content → padding → border → margin, from inside out.\n\n`content-box` (default): `width` and `height` apply only to the content area. Padding and border are additional, so total size = width + padding + border. This makes layout math tedious.\n\n`border-box`: `width` and `height` include content + padding + border. Padding and border shrink the content area. This is far more intuitive — if you set `width: 50%` with `border-box`, the element always occupies exactly 50% of its parent regardless of padding or border.\n\nAlmost every modern project starts with `*, *::before, *::after { box-sizing: border-box }`. It's the universally preferred default.",
    alternativeAnswers: [
      "I'd also mention that margin is never included in box-sizing — it's always outside the box, creating space between elements.",
      "The `box-sizing` property doesn't affect replaced elements like `<img>` or `<input>` in the same way, since their sizing behaves differently."
    ],
    commonMistakes: [
      "Thinking `border-box` includes margin in the width — it does not.",
      "Forgetting to apply border-box globally and then debugging layout width mismatches.",
      "Not understanding that percentage widths with content-box can lead to overflow when padding is added."
    ],
    followUpQuestions: [
      "How does margin collapsing work and when does it occur?",
      "How would you create a 3-column layout where each column is exactly 33.33% wide with padding?",
      "What are the `calc()` and `min()`/`max()` CSS functions and how do they help with sizing?"
    ],
    relatedQuestionIds: ["fe-010", "fe-011"],
    references: [
      { title: "MDN Box Model", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model" },
      { title: "CSS Box Sizing", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-010",
    title: "What is Flexbox and how does it work?",
    content: "Explain CSS Flexbox layout. What are flex containers and flex items? Describe the main axis and cross axis concepts.",
    difficulty: "intermediate",
    track: "frontend",
    topic: "CSS",
    category: "CSS Layout",
    companyTags: ["Google", "Meta", "Amazon", "Shopify"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. A flex container (`display: flex`) lays out its children along a main axis and cross axis. Items can grow, shrink, and align within the container.",
    detailedExplanation: "Flexbox operates on two axes: the main axis (horizontal by default) and the cross axis (vertical by default). The `flex-direction` property sets the main axis direction: `row` (default, horizontal), `column` (vertical), or their `reverse` variants.\n\nOn the container, key properties include: `justify-content` (alignment along main axis), `align-items` (alignment along cross axis), `flex-wrap` (whether items wrap to new lines), and `gap` (spacing between items).\n\nOn individual items, key properties include: `flex-grow` (how much the item should grow relative to siblings), `flex-shrink` (how much it should shrink), `flex-basis` (initial size before growing/shrinking), `align-self` (override container's cross axis alignment), and `order` (visual reordering).",
    bestAnswer: "Flexbox is a CSS layout model for arranging items in one dimension — either a row or a column. Set `display: flex` on a container to make its direct children flex items.\n\nThe container defines the layout context with two axes: main axis (default: horizontal) and cross axis (default: vertical). `flex-direction` controls which axis is the main axis.\n\nContainer properties: `justify-content` (main axis alignment: `flex-start`, `center`, `space-between`, `space-around`, `space-evenly`), `align-items` (cross axis alignment: `stretch`, `flex-start`, `center`, `flex-end`, `baseline`), `flex-wrap` (whether items wrap).\n\nItem properties: `flex-grow` (how to distribute extra space), `flex-shrink` (how to handle overflow), `flex-basis` (initial main-axis size), `align-self` (per-item cross-axis override).\n\nFlexbox excels at: navigation bars, card rows, centering content, equal-height columns, and any layout where items need to distribute space dynamically in one dimension.",
    alternativeAnswers: [
      "The shorthand `flex: 1` expands to `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`, making items share space equally.",
      "Flexbox also handles the case where items have different sizes — the browser distributes remaining space based on flex-grow values."
    ],
    commonMistakes: [
      "Using Flexbox for two-dimensional layouts where CSS Grid would be more appropriate.",
      "Not understanding that `flex-shrink: 1` is the default — items shrink to prevent overflow unless you set `flex-shrink: 0` or `min-width: 0`.",
      "Forgetting that `align-items: stretch` (the default) makes items stretch to fill the cross axis, which can cause unexpected heights."
    ],
    followUpQuestions: [
      "When would you choose CSS Grid over Flexbox?",
      "How would you build a sticky footer layout with Flexbox?",
      "What is the `flex` shorthand and how do its three values interact?"
    ],
    relatedQuestionIds: ["fe-011", "fe-009"],
    references: [
      { title: "MDN Flexbox Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox" },
      { title: "CSS Tricks Flexbox", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-011",
    title: "What is CSS Grid and how does it differ from Flexbox?",
    content: "Explain CSS Grid layout. How does it differ from Flexbox? When would you choose one over the other?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "CSS",
    category: "CSS Layout",
    companyTags: ["Google", "Meta", "Netflix", "Vercel"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "CSS Grid is a two-dimensional layout system that arranges items in rows and columns simultaneously. Flexbox works in one dimension (row OR column). Grid is ideal for page layouts; Flexbox is ideal for component-level layouts.",
    detailedExplanation: "CSS Grid provides a two-dimensional grid-based layout system. You define rows and columns on a container, then place items into specific grid cells. Unlike Flexbox, Grid can simultaneously control both the horizontal and vertical positioning of items.\n\nOn the container, you define the grid structure with `grid-template-columns`, `grid-template-rows`, `grid-gap`, and `grid-template-areas`. Items are placed with `grid-column` and `grid-row` (or shorthand `grid-area`).\n\nGrid's power comes from its ability to define layout independent of the source order. You can create complex magazine-style layouts, place items spanning multiple rows/columns, and rearrange layouts at different breakpoints without changing the HTML.",
    bestAnswer: "CSS Grid is a two-dimensional layout system — it controls both rows and columns simultaneously. Flexbox is one-dimensional — it handles either a row or a column at a time.\n\nUse Grid for: page-level layouts (header/main/sidebar/footer), image galleries, dashboards, card grids, and any layout where you need precise two-dimensional control.\n\nUse Flexbox for: navigation bars, centering content, distributing space among items in a single row/column, and component-level alignment.\n\nKey Grid properties: `grid-template-columns`/`grid-template-rows` (define the grid tracks), `gap` (spacing), `grid-area`/`grid-column`/`grid-row` (item placement), `auto-fit`/`auto-fill` + `minmax()` (responsive grids without media queries).\n\nGrid and Flexbox are complementary — most modern layouts use both. Grid for the overall page structure, Flexbox for the component internals.",
    alternativeAnswers: [
      "Subgrid allows a child grid to participate in the parent's grid tracks, solving alignment problems across nested components.",
      "Container queries (`@container`) combined with Grid layouts enable truly component-responsive designs that adapt to their container, not just the viewport."
    ],
    commonMistakes: [
      "Using Grid for everything when Flexbox is simpler for one-dimensional layouts.",
      "Not leveraging `auto-fit`/`auto-fill` with `minmax()` for responsive grids, and instead creating many breakpoint-specific grid definitions.",
      "Forgetting that `grid-gap` (now just `gap`) works with both Grid and Flexbox containers."
    ],
    followUpQuestions: [
      "How do `auto-fit` and `auto-fill` differ in a `minmax()` context?",
      "How would you create a holy grail layout (header, sidebar, main, footer) using Grid?",
      "What is subgrid and when would you use it?"
    ],
    relatedQuestionIds: ["fe-010", "fe-009"],
    references: [
      { title: "MDN CSS Grid", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" },
      { title: "Grid by Example", url: "https://gridbyexample.com/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-012",
    title: "What is the CSS `z-index` property and how does stacking context work?",
    content: "How does `z-index` work in CSS? What is a stacking context? Why might `z-index` not work as expected?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "CSS",
    category: "CSS Fundamentals",
    companyTags: ["Google", "Meta", "Apple"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "`z-index` controls the vertical stacking order of positioned elements. It only works on elements with a `position` value other than `static`. A stacking context is a self-contained layer where all descendants are stacked within it.",
    detailedExplanation: "By default, elements stack in source order — later elements appear on top of earlier ones. The `z-index` property changes this order for positioned elements (elements with `position: relative`, `absolute`, `fixed`, or `sticky`). Higher values appear in front of lower values.\n\nStacking contexts are created by elements with: `position` with `z-index` (not `auto`), `opacity` less than 1, `transform` (non-none), `filter` (non-none), `will-change` for certain properties, among others. When a stacking context is created, all its children are stacked as a group within the parent stacking context.\n\nThe key insight: a `z-index: 9999` on a child will NEVER appear above a sibling element in a parent stacking context that has a lower `z-index`. The child is trapped within its parent's stacking context.",
    bestAnswer: "`z-index` controls the front-to-back stacking order of positioned elements. It requires `position` to be `relative`, `absolute`, `fixed`, or `sticky` to take effect.\n\nStacking contexts are self-contained layers created by elements with properties like: positioned element with `z-index` ≠ auto, `opacity` < 1, `transform` ≠ none, `filter` ≠ none, `will-change` for opacity/transform/filter, and `mix-blend-mode` ≠ normal.\n\nWhy `z-index` 'doesn't work': a child element's `z-index` is evaluated within its parent stacking context. If the parent creates a stacking context with `z-index: 1`, no child can escape above a sibling with `z-index: 2`, regardless of the child's own z-index value. The solution is to either adjust the parent's z-index or restructure the DOM to avoid unwanted stacking contexts.",
    alternativeAnswers: [
      "The stacking order within a context follows: background/borders → negative z-index → block-level → floated → inline → positioned → positive z-index.",
      "Using the DevTools 3D view (Chrome) or layer inspection helps debug stacking issues visually."
    ],
    commonMistakes: [
      "Setting z-index on an element without setting position — z-index is ignored when position is static (default).",
      "Assuming z-index creates a global layer — it's always relative to the parent stacking context.",
      "Creating stacking contexts unintentionally with opacity, transform, or will-change and then wondering why z-index values aren't working."
    ],
    followUpQuestions: [
      "What properties create a stacking context besides z-index and position?",
      "How would you fix a modal that appears behind a header with z-index issues?",
      "What is the relationship between stacking contexts and compositing layers for GPU acceleration?"
    ],
    relatedQuestionIds: ["fe-010", "fe-013"],
    references: [
      { title: "MDN Stacking Context", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Stacking_context" },
      { title: "What No One Told You About Z-Index", url: "https://philipwalton.com/articles/what-no-one-told-you-about-z-index/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-013",
    title: "What are CSS media queries and how do you use them for responsive design?",
    content: "What are CSS media queries? How would you implement a responsive design using them?",
    difficulty: "beginner",
    track: "frontend",
    topic: "CSS",
    category: "Responsive Design",
    companyTags: ["Amazon", "Apple", "Shopify", "Stripe"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Media queries let you apply CSS styles based on device characteristics like viewport width, height, orientation, and resolution. They are the foundation of responsive design, allowing different layouts for different screen sizes.",
    detailedExplanation: "A media query evaluates a condition and applies the enclosed CSS rules only when the condition is true. The most common use is viewport width: `@media (min-width: 768px) { ... }` applies styles when the viewport is 768px or wider.\n\nResponsive design typically uses a mobile-first approach: base styles target mobile, then media queries add styles for larger screens. Common breakpoints: 640px (tablet), 768px (small laptop), 1024px (laptop), 1280px (desktop), 1536px (large desktop).\n\nModern responsive techniques also include container queries (`@container`), which respond to a parent container's size rather than the viewport, and the `clamp()` function for fluid typography and spacing.",
    bestAnswer: "Media queries conditionally apply CSS rules based on device/viewport characteristics. The syntax: `@media (condition) { rules }`. Most commonly, conditions target viewport width: `@media (min-width: 768px)`.\n\nResponsive design best practices:\n1. Mobile-first: write base styles for mobile, then use `min-width` queries to add complexity for larger screens.\n2. Use relative units (%, rem, vw) instead of fixed pixels.\n3. Flexible images with `max-width: 100%`.\n4. Common breakpoints align with content needs, not specific devices.\n\nModern alternatives: CSS `clamp()` for fluid values, container queries (`@container`) for component-level responsiveness, and `aspect-ratio` for proportional sizing. Grid's `auto-fit`/`auto-fill` with `minmax()` creates responsive grids without media queries.",
    alternativeAnswers: [
      "Container queries (`@container`) are the modern evolution — components adapt to their container, not the viewport, enabling truly reusable responsive components.",
      "Using `prefers-reduced-motion`, `prefers-color-scheme`, and `prefers-contrast` media queries for user preference adaptation."
    ],
    commonMistakes: [
      "Using too many breakpoints or targeting specific device sizes (e.g., 'iPhone width') instead of content-driven breakpoints.",
      "Not using the `mobile-first` approach — `max-width` queries require overriding styles, while `min-width` builds progressively.",
      "Forgetting that media queries affect CSS rules, not HTML structure — you can't conditionally render elements with CSS alone."
    ],
    followUpQuestions: [
      "How do CSS Container Queries differ from media queries?",
      "How would you implement responsive typography without media queries?",
      "What are the best practices for responsive images using `<picture>` and `srcset`?"
    ],
    relatedQuestionIds: ["fe-010", "fe-011"],
    references: [
      { title: "MDN Media Queries", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries" },
      { title: "Responsive Web Design Basics", url: "https://web.dev/responsive-web-design-basics/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-014",
    title: "Explain CSS specificity and the cascade.",
    content: "How does CSS specificity work? What determines which style rule wins when multiple rules apply to the same element?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "CSS",
    category: "CSS Fundamentals",
    companyTags: ["Google", "Microsoft", "Meta"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "CSS specificity determines which rule wins when multiple rules target the same element. It's calculated as a tuple of (inline styles, IDs, classes/attributes/pseudo-classes, elements/pseudo-elements). Higher specificity wins. Equal specificity: last rule wins. `!important` overrides everything.",
    detailedExplanation: "The cascade resolves conflicting CSS rules through three mechanisms: importance, specificity, and source order.\n\nSpecificity is calculated as a four-part value: (a, b, c, d) where a = inline styles (1 or 0), b = number of ID selectors, c = number of class/attribute/pseudo-class selectors, d = number of element/pseudo-element selectors. Each part is compared left to right — higher wins.\n\nExamples: `#header` = (0,1,0,0), `.nav .item` = (0,0,2,0), `div p` = (0,0,0,2). So `#header` beats `.nav .item` regardless of how many classes are chained.\n\n`!important` is a special declaration flag that overrides all normal specificity. Inline `!important` beats all. Using `!important` is generally discouraged — it creates maintenance problems and specificity wars.",
    bestAnswer: "CSS specificity is an algorithm that determines which declaration wins when multiple rules apply to the same element. It's expressed as a four-digit tuple: (inline, IDs, classes, elements).\n\nPriority order: (1) `!important` declarations, (2) inline styles, (3) specificity — higher tuple wins, (4) source order — later rules win when specificity is equal.\n\nExample: `#header .nav a` has specificity (0,1,1,1) vs `.content a` with (0,0,1,1). The first wins because it has an ID.\n\nBest practices: keep specificity low and consistent, use class-based selectors (BEM methodology helps), avoid `!important`, and use CSS custom properties for theming instead of specificity hacks.",
    alternativeAnswers: [
      "Modern CSS layers (`@layer`) add another dimension to specificity resolution — styles in later layers override earlier ones, regardless of specificity within layers.",
      "The `:where()` selector has zero specificity, useful for writing base styles that are easily overridden. `:is()` takes the specificity of its most specific argument."
    ],
    commonMistakes: [
      "Thinking specificity is simply 'more selectors = higher specificity' — it's the TYPE of selectors that matters, not the count.",
      "Using `!important` as a quick fix, which creates a cascading problem that becomes harder to fix over time.",
      "Not understanding that `#id` always beats `.class` regardless of how many classes you chain together."
    ],
    followUpQuestions: [
      "What is BEM and how does it help manage specificity?",
      "How do CSS `@layer` declarations affect specificity resolution?",
      "What is the difference between `:is()` and `:where()` in terms of specificity?"
    ],
    relatedQuestionIds: ["fe-009", "fe-012"],
    references: [
      { title: "MDN Specificity", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" },
      { title: "CSS Specificity Calculator", url: "https://specificity.keegan.st/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-015",
    title: "What are CSS transitions and animations? How do they differ?",
    content: "What is the difference between CSS transitions and CSS animations? When would you use each?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "CSS",
    category: "CSS Animations",
    companyTags: ["Apple", "Google", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "CSS transitions animate between two states when a property changes (triggered by hover, class change, etc.). CSS animations use `@keyframes` to define multi-step animations that can run automatically, loop, and have more control via `animation-*` properties.",
    detailedExplanation: "CSS Transitions define how a property changes from value A to value B. You specify the property, duration, timing function, and delay. Transitions are event-driven — they start when a state change occurs (e.g., `:hover`, adding a class).\n\n```css\n.btn { background: blue; transition: background 0.3s ease; }\n.btn:hover { background: red; }\n```\n\nCSS Animations use `@keyframes` to define intermediate states. They can have multiple steps (0%, 50%, 100%), run automatically, loop infinitely (`animation-iteration-count: infinite`), and play in reverse (`animation-direction: reverse`).\n\n```css\n@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } }\n.badge { animation: pulse 2s infinite; }\n```\n\nTransitions are simpler and best for state changes. Animations are more powerful and best for continuous or complex multi-step effects.",
    bestAnswer: "CSS Transitions smoothly animate a property change over time. They require a trigger (hover, focus, class change) and animate from current state to target state. Properties: `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`.\n\nCSS Animations use `@keyframes` to define a sequence of states. They can run without a trigger, loop, reverse, have multiple intermediate steps, and be paused/resumed. Properties: `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, `animation-play-state`.\n\nUse transitions for: hover effects, showing/hiding elements, toggling states. Use animations for: loading spinners, attention-grabbing effects, complex multi-step sequences, or effects that should run continuously.",
    alternativeAnswers: [
      "Web Animations API (`element.animate()`) provides JavaScript control over animations with the performance benefits of CSS animations.",
      "For scroll-driven animations, the new `animation-timeline: view()` CSS property lets animations progress based on scroll position without JavaScript."
    ],
    commonMistakes: [
      "Animating expensive properties like `width`, `height`, or `top/left` instead of `transform` and `opacity` which are GPU-accelerated.",
      "Forgetting `will-change` or `transform: translateZ(0)` to promote elements to compositing layers for smoother animations.",
      "Using animations for functional state changes where transitions would be more appropriate and simpler."
    ],
    followUpQuestions: [
      "Which CSS properties trigger layout recalculations and which are compositing-only?",
      "How does `will-change` affect rendering performance?",
      "How do you optimize CSS animations for 60fps performance?"
    ],
    relatedQuestionIds: ["fe-012", "fe-061"],
    references: [
      { title: "MDN Transitions", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions" },
      { title: "MDN Animations", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-016",
    title: "What are CSS custom properties (variables) and how do they differ from preprocessors?",
    content: "What are CSS custom properties (variables)? How do they compare to Sass/Less variables? What unique capabilities do they offer?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "CSS",
    category: "CSS Fundamentals",
    companyTags: ["Vercel", "Google", "Shopify"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "CSS custom properties (variables) are native CSS variables declared with `--` and accessed with `var()`. Unlike Sass/Less variables, they are scoped, cascade, can be modified at runtime with JavaScript, and respond to media queries and pseudo-class states.",
    detailedExplanation: "CSS custom properties are defined on any element: `--primary-color: blue;` and used with `var(--primary-color)`. They inherit down the DOM tree like any CSS property.\n\nKey differences from preprocessor variables:\n1. Scoped: variables defined on an element are available to its descendants.\n2. Dynamic: can be changed with JavaScript (`element.style.setProperty('--color', 'red')`).\n3. Reactive: can change based on media queries, pseudo-classes, or any CSS state.\n4. Cascade: can be overridden per-component for theming.\n5. No build step needed: they're native CSS.\n\nPreprocessor variables still have advantages: math operations, mixins, functions, and compile-time logic. But for theming, responsive design, and runtime customization, CSS custom properties are superior.",
    bestAnswer: "CSS custom properties are native CSS variables: `--spacing: 16px;` declared on an element, used with `var(--spacing)`. They inherit through the DOM tree and can be overridden by descendants.\n\nUnique advantages over Sass/Less variables:\n1. Runtime modification via JavaScript.\n2. Scoped to elements and cascade naturally.\n3. Change with CSS states (hover, media queries, dark mode).\n4. No build step required.\n\nExample — dark mode theming:\n```css\n:root { --bg: white; --text: black; }\n[data-theme=\"dark\"] { --bg: #1a1a1a; --text: white; }\nbody { background: var(--bg); color: var(--text); }\n```\n\nUse `var()` with a fallback: `var(--spacing, 16px)`. For design systems and component libraries, CSS custom properties enable runtime theming without JavaScript theme providers.",
    alternativeAnswers: [
      "CSS custom properties with `@property` declaration can have types, initial values, and inheritance control, enabling animated custom properties.",
      "Container queries combined with custom properties create truly adaptive components that adjust spacing, typography, and colors based on their container."
    ],
    commonMistakes: [
      "Using custom properties for static values that could be better handled by a design token system or preprocessor.",
      "Not providing fallback values with `var(--x, fallback)` which causes issues when the variable isn't defined.",
      "Overriding custom properties on every element instead of using the cascade and inheritance to let values propagate."
    ],
    followUpQuestions: [
      "How do you implement a dark mode toggle using CSS custom properties?",
      "What is `@property` and how does it extend custom properties?",
      "How do design systems like Tailwind CSS leverage custom properties?"
    ],
    relatedQuestionIds: ["fe-014", "fe-013"],
    references: [
      { title: "MDN CSS Custom Properties", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" },
      { title: "CSS Custom Properties for Cascading Variables", url: "https://www.w3.org/TR/css-variables-1/" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // JavaScript (fe-017 – fe-028)
  // ──────────────────────────────────────────────
  {
    id: "fe-017",
    title: "Explain event bubbling and event capturing in JavaScript.",
    content: "What is the difference between event bubbling and event capturing? How does `event.stopPropagation()` work?",
    difficulty: "beginner",
    track: "frontend",
    topic: "JavaScript",
    category: "DOM & Events",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "Event capturing goes from the root to the target element (top-down). Event bubbling goes from the target element back to the root (bottom-up). By default, handlers fire during bubbling. `stopPropagation()` prevents the event from reaching parent elements.",
    detailedExplanation: "When an event occurs on an element, it travels through three phases: capturing (root → target), at target, and bubbling (target → root).\n\nIn the capturing phase, the event travels down from the document root through each ancestor to the target. In the bubbling phase, it travels back up from the target through ancestors to the document root.\n\n`addEventListener` accepts a third parameter: `useCapture`. When `true`, the handler fires during the capturing phase. When `false` (default), it fires during bubbling.\n\n`event.stopPropagation()` stops the event from propagating further in the current phase. `event.stopImmediatePropagation()` stops propagation AND prevents other handlers on the same element from firing.",
    bestAnswer: "Event propagation has three phases: (1) Capturing — event travels from root down to the target element. (2) At target — event reaches the target element. (3) Bubbling — event travels back up from target to root.\n\nBy default, event listeners fire during the bubbling phase. You can make them fire during capture by passing `true` as the third argument to `addEventListener`, or using `{ capture: true }`.\n\n`event.stopPropagation()` prevents the event from reaching parent elements in the current phase. In the bubbling phase, this means ancestors won't receive the event. `stopImmediatePropagation()` goes further — it also stops other listeners on the same element.\n\nPractical use: stop propagation on a button click inside a card to prevent the card's click handler from firing, or use capture-phase listeners to intercept events before child elements process them.",
    alternativeAnswers: [
      "Event delegation leverages bubbling — attach one listener to a parent to handle events from all children, improving performance with many elements.",
      "The `event.target` (where the event originated) vs `event.currentTarget` (where the listener is attached) distinction is important in event delegation."
    ],
    commonMistakes: [
      "Confusing `stopPropagation` with `stopImmediatePropagation` — the latter also prevents other handlers on the same element from firing.",
      "Not understanding that `event.target` is the actual clicked element while `this`/`currentTarget` is the element with the listener.",
      "Overusing `stopPropagation` which can break third-party code that relies on event bubbling."
    ],
    followUpQuestions: [
      "How does event delegation improve performance when rendering lists with hundreds of items?",
    ],
    relatedQuestionIds: ["fe-018", "fe-023"],
    references: [
      { title: "MDN Event Target", url: "https://developer.mozilla.org/en-US/docs/Web/API/Event/target" },
      { title: "MDN Event bubbling", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting_events/Bubbling_and_capturing" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-018",
    title: "What is event delegation and why is it useful?",
    content: "What is event delegation in JavaScript? Why is it important for performance and memory management?",
    difficulty: "beginner",
    track: "frontend",
    topic: "JavaScript",
    category: "DOM & Events",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "Event delegation is a pattern where you attach a single event listener to a parent element instead of individual listeners to each child. The parent handles events from its children using event bubbling and `event.target` to identify the source.",
    detailedExplanation: "Instead of attaching click handlers to every list item in a 1000-item list, you attach one handler to the parent `<ul>`. When a child is clicked, the event bubbles up to the parent, where your handler checks `event.target` to determine which item was clicked.\n\nBenefits: (1) Memory efficiency — one listener vs. hundreds. (2) Dynamic content — new items added later are automatically covered. (3) Easier maintenance — add/remove logic in one place.\n\nEvent delegation works because of event bubbling — the event propagates from the target to ancestors. The `event.target` property tells you which element actually triggered the event, while `event.currentTarget` tells you where the listener is attached.",
    bestAnswer: "Event delegation leverages event bubbling to handle events at a parent level instead of on each child element. You attach one listener to a parent container and use `event.target` (or `event.target.closest(selector)`) to identify which child was interacted with.\n\nBenefits:\n1. Performance: one listener instead of N listeners — less memory, faster setup.\n2. Dynamic content: new children are handled automatically without re-attaching listeners.\n3. Simpler cleanup: one `removeEventListener` instead of many.\n\nExample: Instead of `items.forEach(item => item.addEventListener('click', handler))`, do `parent.addEventListener('click', e => { if (e.target.closest('.item')) handler(e); })`.\n\nCaveat: it doesn't work well for events that don't bubble (like `focus`, `blur`, `mouseenter`).",
    alternativeAnswers: [
      "React's synthetic event system uses event delegation internally — it attaches one listener at the root and dispatches to components.",
      "`element.closest(selector)` is the modern way to handle delegation with nested structures, replacing the common `matches()` + parent traversal pattern."
    ],
    commonMistakes: [
      "Using `event.target` without considering nested elements — `e.target` might be a child span inside the intended button. Use `e.target.closest()` instead.",
      "Applying delegation to non-bubbling events like `focus`, `blur`, or `mouseenter` which don't propagate up the DOM.",
      "Forgetting that `event.target` might be the deeply nested element, not the element with the intended handler."
    ],
    followUpQuestions: [
      "How does React's synthetic event system implement event delegation?",
      "When would you NOT use event delegation?",
      "How do you handle dynamic form validation with event delegation?"
    ],
    relatedQuestionIds: ["fe-017", "fe-037"],
    references: [
      { title: "JavaScript Event Delegation", url: "https://javascript.info/event-delegation" },
      { title: "MDN Event.target", url: "https://developer.mozilla.org/en-US/docs/Web/API/Event/target" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-019",
    title: "Explain closures in JavaScript with examples.",
    content: "What is a closure in JavaScript? Provide examples and explain practical use cases.",
    difficulty: "intermediate",
    track: "frontend",
    topic: "JavaScript",
    category: "Core Concepts",
    companyTags: ["Google", "Meta", "Amazon", "Apple"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "A closure is a function that retains access to variables from its enclosing scope even after the outer function has returned. Closures 'close over' the variables they reference, creating a persistent lexical environment.",
    detailedExplanation: "When a function is created, it retains a reference to the lexical scope in which it was defined. Even after the outer function completes and its execution context is popped off the stack, the inner function still has access to those variables because they exist in the closure.\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getCount: () => count\n  };\n}\nconst counter = createCounter();\ncounter.increment(); // 1\ncounter.getCount(); // 1\n```\n\nPractical uses: data privacy (module pattern), function factories, maintaining state in callbacks, currying, memoization, and event handlers that need to reference outer variables.",
    bestAnswer: "A closure is a function that captures and retains access to variables from its lexical (outer) scope, even after the outer function has finished executing. The closure 'closes over' those variables.\n\nExample — data encapsulation:\n```javascript\nfunction makeGreeter(greeting) {\n  return function(name) {\n    return `${greeting}, ${name}!`;\n  };\n}\nconst hello = makeGreeter('Hello');\nhello('Alice'); // 'Hello, Alice!'\n```\n\nPractical use cases:\n1. Data privacy / module pattern — hide state behind functions.\n2. Event handlers — callback retains access to variables at registration time.\n3. Function factories — create specialized functions from general ones.\n4. Currying and partial application.\n5. Memoization — cache results using captured variables.\n\nClosures are fundamental to JavaScript and underpin patterns like revealing module, partial application, and callbacks.",
    alternativeAnswers: [
      "Closures also explain why `var` in loops creates unexpected behavior — all callbacks share the same variable. `let` creates a new binding per iteration, solving this.",
      "WeakMap and WeakRef provide ways to create closures that don't prevent garbage collection of the captured objects."
    ],
    commonMistakes: [
      "Confusing closures with scope — all functions in JavaScript have scope, but closures specifically retain access to outer variables after the outer function returns.",
      "The classic `var` in loop problem — not understanding that `var` is function-scoped, so all iterations share the same variable.",
      "Memory leaks from closures that unintentionally capture large objects or DOM references."
    ],
    followUpQuestions: [
      "How does `let` vs `var` in a for loop affect closure behavior?",
      "How are closures used in the module pattern and revealing module pattern?",
      "Can you explain the relationship between closures and garbage collection?"
    ],
    relatedQuestionIds: ["fe-020", "fe-073"],
    references: [
      { title: "MDN Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" },
      { title: "JavaScript.info Closures", url: "https://javascript.info/closure" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-020",
    title: "What is the event loop in JavaScript?",
    content: "Explain the JavaScript event loop. What are the call stack, task queue, and microtask queue?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "JavaScript",
    category: "Core Concepts",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft", "Netflix"],
    interviewRound: "On-site",
    frequency: 5,
    expectedAnswer: "The event loop is JavaScript's concurrency model. The call stack executes synchronous code. The task queue (macrotask queue) holds callbacks from setTimeout, I/O, etc. The microtask queue holds Promise callbacks and MutationObserver callbacks. Microtasks are processed before each macrotask.",
    detailedExplanation: "JavaScript is single-threaded but non-blocking thanks to the event loop. Here's the flow:\n1. Execute all synchronous code on the call stack.\n2. When the call stack is empty, check the microtask queue. Execute ALL microtasks (Promise `.then()`, `queueMicrotask()`, `MutationObserver`).\n3. If the microtask queue is empty, take the next macrotask (setTimeout, setInterval, I/O, UI rendering) from the task queue and execute it.\n4. Repeat from step 2.\n\nThe key insight: microtasks have higher priority than macrotasks. All microtasks are processed before the next macrotask or rendering. This is why `Promise.resolve().then(...)` runs before `setTimeout(..., 0)`.\n\n`requestAnimationFrame` runs before rendering but after microtasks, and is separate from the macrotask queue.",
    bestAnswer: "The event loop manages JavaScript's single-threaded execution by coordinating the call stack, microtask queue, and macrotask queue.\n\nExecution order:\n1. Call stack: runs synchronous code to completion.\n2. Microtask queue: ALL pending microtasks are drained (Promise `.then`, `queueMicrotask`, `MutationObserver`, `process.nextTick` in Node).\n3. Macrotask queue: ONE macrotask is executed (`setTimeout`, `setInterval`, `setImmediate`, I/O callbacks).\n4. Browser renders if needed.\n5. Repeat.\n\nKey insight: microtasks always clear before the next macrotask or render. So `Promise.resolve().then(fn)` runs before `setTimeout(fn, 0)`.\n\n```javascript\nconsole.log('1');         // call stack\nsetTimeout(() => console.log('2'), 0); // macrotask\nPromise.resolve().then(() => console.log('3')); // microtask\nconsole.log('4');         // call stack\n// Output: 1, 4, 3, 2\n```",
    alternativeAnswers: [
      "requestAnimationFrame runs between microtasks and the render step — it's neither a microtask nor a macrotask, making it ideal for visual updates.",
      "In Node.js, the event loop has additional phases (timers, poll, check) and `process.nextTick` runs before other microtasks."
    ],
    commonMistakes: [
      "Thinking `setTimeout(fn, 0)` executes immediately — it doesn't; it schedules the callback for the next macrotask cycle.",
      "Not knowing that all microtasks execute before any macrotask — this is why Promise chains can delay rendering.",
      "Confusing `requestAnimationFrame` with the macrotask queue — it has its own timing separate from setTimeout."
    ],
    followUpQuestions: [
      "How does `requestAnimationFrame` fit into the event loop?",
      "What happens when a microtask schedules another microtask?",
      "How do Web Workers differ from the event loop model?"
    ],
    relatedQuestionIds: ["fe-073", "fe-004"],
    references: [
      { title: "MDN Event Loop", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop" },
      { title: "Tasks, microtasks, queues and schedules", url: "https://javascript.info/event-loop" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-021",
    title: "What is the difference between `var`, `let`, and `const`?",
    content: "Explain the differences between `var`, `let`, and `const` in JavaScript. When would you use each?",
    difficulty: "beginner",
    track: "frontend",
    topic: "JavaScript",
    category: "Core Concepts",
    companyTags: ["Google", "Amazon", "Microsoft", "Apple"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "`var` is function-scoped and hoisted. `let` is block-scoped, not hoisted to initialization, and can be reassigned. `const` is block-scoped, not hoisted to initialization, and cannot be reassigned (but objects/arrays it holds can still be mutated).",
    detailedExplanation: "`var` is function-scoped: it's visible throughout the entire function, regardless of block boundaries. It's hoisted to the top of its function and initialized as `undefined`.\n\n`let` and `const` are block-scoped: they're confined to the nearest `{ }` block (if, for, while, etc.). They're hoisted but not initialized — accessing them before declaration throws a `ReferenceError` (the temporal dead zone).\n\n`const` prevents reassignment of the variable binding. For objects and arrays, the contents can still be mutated (`const arr = []; arr.push(1)` works), but reassigning the variable itself does not (`arr = [2]` throws).\n\nModern convention: use `const` by default, `let` when reassignment is needed, never use `var`.",
    bestAnswer: "`var`: function-scoped, hoisted and initialized as `undefined`, can be redeclared and reassigned. Largely obsolete in modern JavaScript.\n\n`let`: block-scoped, hoisted but in the temporal dead zone (TDZ) until declaration, can be reassigned but not redeclared in the same scope. Use when a variable needs to change value.\n\n`const`: block-scoped, TDZ, cannot be reassigned or redeclared. For objects/arrays, the reference is constant but contents are mutable. Use by default.\n\n```javascript\nfor (var i = 0; i < 3; i++) {} \nconsole.log(i); // 3 — var leaks out of the loop block\n\nfor (let j = 0; j < 3; j++) {}\nconsole.log(j); // ReferenceError — let is block-scoped\n```\n\nRule of thumb: start with `const`, switch to `let` only when reassignment is needed, avoid `var`.",
    alternativeAnswers: [
      "The `const` reassignment restriction is a compile-time check — it prevents accidental reassignment bugs, making code more predictable.",
      "TDZ (Temporal Dead Zone) is the period between scope entry and the `let`/`const` declaration where the variable exists but cannot be accessed."
    ],
    commonMistakes: [
      "Assuming `const` makes objects immutable — `const obj = {}; obj.key = 'value'` is valid. Only reassignment is prevented.",
      "Not understanding TDZ — `let` variables exist in the scope but throw ReferenceError if accessed before declaration.",
      "Using `var` in modern code for its function-scoping behavior — use an IIFE or block scope instead."
    ],
    followUpQuestions: [
      "What is the temporal dead zone and why does it exist?",
      "How does `const` work with objects and why does `const` not make them immutable?",
      "How do `var` hoisting and `let` TDZ affect code that's been transpiled by Babel?"
    ],
    relatedQuestionIds: ["fe-019", "fe-022"],
    references: [
      { title: "MDN let", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let" },
      { title: "MDN const", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-022",
    title: "What is prototypal inheritance in JavaScript?",
    content: "Explain prototypal inheritance in JavaScript. How do prototypes differ from classical class-based inheritance?",
    difficulty: "advanced",
    track: "frontend",
    topic: "JavaScript",
    category: "Core Concepts",
    companyTags: ["Google", "Meta", "Apple"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "JavaScript uses prototypal inheritance where objects inherit directly from other objects. Each object has a `[[Prototype]]` (accessible via `Object.getPrototypeOf()` or `__proto__`). When a property is not found on an object, the engine walks up the prototype chain. ES6 classes are syntactic sugar over this mechanism.",
    detailedExplanation: "Unlike classical inheritance (Java, C++) where you define classes that other classes extend, JavaScript's prototypal model means any object can be the prototype of another object. There are no 'classes' in the traditional sense — just objects delegating to other objects.\n\nWhen you access a property that doesn't exist on an object, JavaScript looks up the prototype chain: `obj → Object.getPrototypeOf(obj) → Object.getPrototypeOf(proto) → ...` until it reaches `null`.\n\nES6 `class` syntax provides cleaner syntax for prototypal inheritance. Under the hood, `class` still uses prototypes. `class Foo extends Bar` creates `Foo.prototype.__proto__ = Bar.prototype` and sets up the constructor chain.\n\n`class` adds real constructors (you can't call without `new`), `super`, static methods, and `private` fields (#). But the underlying mechanism is still prototype delegation.",
    bestAnswer: "JavaScript's inheritance model is prototypal: objects inherit from objects. Every object has an internal `[[Prototype]]` link (accessed via `Object.getPrototypeOf()`). When accessing a property, the engine checks the object, then its prototype, then the prototype's prototype, up the chain until `null`.\n\n```javascript\nconst animal = { speak() { return this.name + ' speaks'; } };\nconst dog = Object.create(animal);\ndog.name = 'Rex';\ndog.speak(); // 'Rex speaks' — delegates to animal\n```\n\nES6 `class` is syntactic sugar:\n```javascript\nclass Dog extends Animal {\n  speak() { return this.name + ' barks'; }\n}\n```\n\nUnder the hood: `Dog.prototype.__proto__ === Animal.prototype`. The `extends` keyword sets up the prototype chain. `super()` calls the parent constructor.\n\nKey differences from classical inheritance: prototypal inheritance is more flexible (objects can inherit from any object, classes can be modified at runtime), but can be harder to reason about.",
    alternativeAnswers: [
      "The `Object.create()` pattern is the most explicit form of prototypal inheritance — you directly control the prototype of the new object.",
      "Modern JavaScript uses `class` syntax because it's cleaner and provides features like `super`, `static`, and `private` fields that the old prototype pattern lacks."
    ],
    commonMistakes: [
      "Confusing `prototype` property (a function's prototype for new instances) with `[[Prototype]]` (an object's actual prototype chain).",
      "Thinking `class` creates a new inheritance mechanism — it's still prototype-based under the hood.",
      "Using `__proto__` instead of `Object.getPrototypeOf()` — `__proto__` is a legacy accessor that's deprecated."
    ],
    followUpQuestions: [
      "How does `Object.create()` differ from using `new` with a constructor?",
      "What are the differences between `prototype`, `__proto__`, and `Object.getPrototypeOf()`?",
      "How do mixins work in JavaScript and how do they differ from class inheritance?"
    ],
    relatedQuestionIds: ["fe-019", "fe-029"],
    references: [
      { title: "MDN Inheritance and the prototype chain", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" },
      { title: "JavaScript.info Classes", url: "https://javascript.info/classes" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-023",
    title: "Explain `this` keyword in JavaScript.",
    content: "What is the `this` keyword in JavaScript? How does its value change in different contexts?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "JavaScript",
    category: "Core Concepts",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "`this` refers to the execution context of a function. Its value depends on how the function is called: global context (window/object), object method (the object), constructor (new instance), arrow function (lexical this), or explicit binding (call/apply/bind).",
    detailedExplanation: "The value of `this` is determined at call time, not definition time (except for arrow functions). There are four binding rules in order of priority:\n\n1. `new` binding: when called with `new`, `this` is the newly created object.\n2. Explicit binding: `call()`, `apply()`, or `bind()` set `this` to a specific object.\n3. Implicit binding: when called as an object method (`obj.fn()`), `this` is the object.\n4. Default binding: standalone function call, `this` is `undefined` (strict mode) or `window` (non-strict).\n\nArrow functions are special: they don't have their own `this`. They inherit `this` from the enclosing lexical scope (where they were defined, not where they were called).",
    bestAnswer: "`this` is determined by how a function is invoked, not where it's defined (except arrow functions). Four binding rules, in priority order:\n\n1. `new Foo()` → `this` is the new instance.\n2. `fn.call(obj)` / `fn.apply(obj)` / `fn.bind(obj)` → `this` is `obj`.\n3. `obj.method()` → `this` is `obj` (implicit).\n4. Standalone `fn()` → `this` is `undefined` (strict mode) or `window`.\n\nArrow functions (`() => {}`) capture `this` from their lexical scope — they can't be rebound. This makes them ideal for callbacks where you want the enclosing `this`:\n```javascript\nconst obj = {\n  items: [1, 2, 3],\n  log() { this.items.forEach(item => console.log(item, this)); }\n};\n```\n\nClass methods in React need `.bind(this)` or arrow functions to maintain the correct `this`.",
    alternativeAnswers: [
      "The `this` value in class fields (public and private) is determined at the class level, not the method level, which is why arrow functions in class fields work without binding.",
      "ES6 shorthand method definitions in objects automatically set `this` to the object, but this only works for direct method calls, not when the method is extracted."
    ],
    commonMistakes: [
      "Forgetting that `this` changes when a method is extracted from its object — `const fn = obj.method; fn()` loses the implicit binding.",
      "Using arrow functions as object methods — arrow functions capture the enclosing `this`, not the object.",
      "Not understanding that `this` in a React class component refers to the instance, but in event handlers it becomes undefined without binding."
    ],
    followUpQuestions: [
      "How does `this` binding work in React class components and event handlers?",
      "What is the relationship between `call`, `apply`, and `bind`?",
      "How do arrow functions in class fields differ from methods defined in the class body?"
    ],
    relatedQuestionIds: ["fe-019", "fe-022", "fe-037"],
    references: [
      { title: "MDN this", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" },
      { title: "JavaScript.info this", url: "https://javascript.info/this" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-024",
    title: "What is the spread operator and destructuring?",
    content: "Explain the spread operator (`...`) and destructuring assignment in JavaScript. Provide examples of both array and object usage.",
    difficulty: "beginner",
    track: "frontend",
    topic: "JavaScript",
    category: "Core Concepts",
    companyTags: ["Google", "Amazon", "Apple", "Shopify"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "The spread operator (`...`) expands iterables into individual elements. Destructuring extracts values from arrays/objects into distinct variables. Both work with arrays and objects.",
    detailedExplanation: "Spread (`...`) expands an iterable:\n- Arrays: `const copy = [...original]`\n- Objects: `const merged = { ...defaults, ...user }`\n- Function args: `fn(...args)`\n- Array literals: `[first, ...rest]`\n\nDestructuring extracts values:\n- Arrays: `const [a, b, ...rest] = [1, 2, 3, 4]` (a=1, b=2, rest=[3,4])\n- Objects: `const { name, age, address: addr } = person` (rename `address` to `addr`)\n- Function params: `function greet({ name, greeting = 'Hello' }) {}`\n- Nested: `const { user: { name } } = data`\n\nRest parameters (`...args` in function signatures) collect remaining elements — the inverse of spread.",
    bestAnswer: "Spread (`...`) and destructuring are ES6 syntax for working with arrays and objects.\n\n**Spread** expands iterables:\n```javascript\nconst arr = [1, 2, 3];\nconst copy = [...arr]; // [1, 2, 3]\nconst merged = [...arr, 4, 5]; // [1, 2, 3, 4, 5]\nconst objCopy = { ...obj, newKey: 'value' };\n```\n\n**Destructuring** extracts values:\n```javascript\nconst [first, second] = [1, 2, 3]; // first=1, second=2\nconst { name, age } = { name: 'Alice', age: 30, city: 'NYC' };\nconst { name: userName } = { name: 'Alice' }; // rename\nconst [head, ...tail] = [1, 2, 3]; // tail = [2, 3]\n```\n\n**Rest parameters** (function args) collect remaining items:\n```javascript\nfunction sum(...numbers) { return numbers.reduce((a, b) => a + b); }\n```\n\nThey're complementary: spread expands, destructuring extracts, rest collects.",
    alternativeAnswers: [
      "Object spread creates a shallow copy — nested objects are still referenced. Use structuredClone() for deep copies.",
      "Destructuring with defaults provides fallback values: `const { theme = 'light' } = {}` — theme will be 'light'."
    ],
    commonMistakes: [
      "Thinking spread creates a deep copy — it only copies the first level. Nested objects/arrays are still references.",
      "Confusing spread and rest — spread expands an existing iterable, rest collects remaining elements into a new array.",
      "Using spread for objects when you need to merge multiple sources — consider using a utility like Object.assign or a merge function."
    ],
    followUpQuestions: [
      "How would you deep clone an object using only spread (hint: you can't fully)?",
      "How do you swap two variables using destructuring?",
      "What is the performance impact of using spread to clone large objects?"
    ],
    relatedQuestionIds: ["fe-021", "fe-019"],
    references: [
      { title: "MDN Spread syntax", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" },
      { title: "MDN Destructuring", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-025",
    title: "What is the difference between `==` and `===`?",
    content: "What is the difference between loose equality (`==`) and strict equality (`===`) in JavaScript? When would you use each?",
    difficulty: "beginner",
    track: "frontend",
    topic: "JavaScript",
    category: "Core Concepts",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "`===` checks both value and type without coercion. `==` performs type coercion before comparing, which can lead to unexpected results. Always use `===` and `!==` to avoid subtle bugs.",
    detailedExplanation: "Strict equality (`===`) compares values without converting types. `1 === '1'` is `false` because the types differ (number vs string).\n\nLoose equality (`==`) performs type coercion before comparing. `1 == '1'` is `true` because the string `'1'` is coerced to the number `1`. This can produce surprising results: `'' == false` is `true`, `null == undefined` is `true`, `[] == false` is `true`.\n\nThe coercion rules are complex and often lead to bugs. The convention in modern JavaScript is to always use `===` and `!==`.\n\nThe `==` operator has a few legitimate uses: `value == null` checks for both `null` and `undefined` in one comparison, and `value == undefined` does the same.",
    bestAnswer: "`===` (strict equality): compares both value AND type. No type coercion occurs.\n```javascript\n1 === '1'  // false (number vs string)\ntrue === 1 // false (boolean vs number)\n```\n\n`==` (loose equality): applies type coercion before comparing, following complex Abstract Equality Comparison rules.\n```javascript\n1 == '1'   // true (string coerced to number)\n'' == false // true (both coerced to 0)\n[] == false // true ([] → '' → 0, false → 0)\n```\n\nBest practice: always use `===` and `!==`. The only common exception is `value == null` which checks for both `null` and `undefined` in a single expression.\n\nLinting tools like ESLint's `eqeqeq` rule enforce `===` usage to prevent coercion bugs.",
    alternativeAnswers: [
      "`Object.is()` is even stricter than `===` — it distinguishes `NaN === NaN` (false in ===, true in Object.is) and `+0 === -0` (true in ===, false in Object.is).",
      "The `==` coercion table is defined in the ECMAScript spec and follows specific rules: null/undefined are interchangeable, primitives are coerced to numbers, objects are converted via valueOf/toString."
    ],
    commonMistakes: [
      "Using `==` for convenience, leading to unexpected coercion behavior with types like `[]`, `''`, and `0`.",
      "Not knowing that `NaN !== NaN` — use `Number.isNaN()` instead.",
      "Thinking `===` prevents all comparison issues — it still has edge cases with floating-point precision."
    ],
    followUpQuestions: [
      "What is `Object.is()` and how does it differ from `===`?",
      "How does type coercion work with `==` for objects vs primitives?",
      "Why is `NaN !== NaN` and how do you properly check for NaN?"
    ],
    relatedQuestionIds: ["fe-021", "fe-017"],
    references: [
      { title: "MDN Equality", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality" },
      { title: "JavaScript type coercion", url: "https://javascript.info/type-conversions" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-026",
    title: "What are Higher-Order Functions in JavaScript?",
    content: "What are higher-order functions in JavaScript? Give examples using `map`, `filter`, and `reduce`.",
    difficulty: "intermediate",
    track: "frontend",
    topic: "JavaScript",
    category: "Functional Programming",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Higher-order functions either take functions as arguments, return functions, or both. Array methods like `map`, `filter`, `reduce`, `forEach`, `some`, `every`, and `find` are higher-order functions that take callback functions.",
    detailedExplanation: "A higher-order function is a function that operates on other functions. It either accepts a function as an argument or returns a function. This is a fundamental concept in functional programming.\n\n`map`: transforms each element and returns a new array of the same length.\n`filter`: tests each element and returns a new array with only elements that pass the test.\n`reduce`: accumulates array elements into a single value using a reducer function.\n\nThese encourage immutable data patterns: instead of modifying arrays in place, you create new arrays with transformed data.",
    bestAnswer: "Higher-order functions take or return functions. In JavaScript, common examples include array methods and function factories.\n\n```javascript\nconst numbers = [1, 2, 3, 4, 5];\n\n// map: transform each element\nconst doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]\n\n// filter: keep elements that pass a test\nconst evens = numbers.filter(n => n % 2 === 0); // [2, 4]\n\n// reduce: accumulate to single value\nconst sum = numbers.reduce((acc, n) => acc + n, 0); // 15\n```\n\nOther higher-order functions: `forEach`, `some`, `every`, `find`, `findIndex`, `sort`. Also, any function that returns a function (closures, currying, decorators).\n\nBenefits: declarative style, immutability, composability, and testability.",
    alternativeAnswers: [
      "The `pipe` and `compose` functions are classic higher-order functions that chain transformations: `pipe(f, g)(x)` is equivalent to `g(f(x))`.",
      "Event handlers and middleware patterns are higher-order function patterns — you pass behavior as a function parameter."
    ],
    commonMistakes: [
      "Using `forEach` when `map` is appropriate — `forEach` is for side effects, `map` is for transformation.",
      "Not returning a value from the `map` callback, resulting in an array of `undefined`.",
      "Using `reduce` for everything when `map` or `filter` would be more readable and appropriate."
    ],
    followUpQuestions: [
      "How would you implement `pipe` and `compose` utility functions?",
      "What is function currying and when is it useful?",
      "How do you handle asynchronous operations with `map` (e.g., `Promise.all(arr.map(...))`)?"
    ],
    relatedQuestionIds: ["fe-019", "fe-073"],
    references: [
      { title: "MDN Higher-order functions", url: "https://developer.mozilla.org/en-US/docs/Glossary/Higher-order_function" },
      { title: "JavaScript.info Methods of arrays", url: "https://javascript.info/array-methods" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-027",
    title: "What is a Promise and how does it work?",
    content: "What is a Promise in JavaScript? Explain its states, methods, and common patterns.",
    difficulty: "intermediate",
    track: "frontend",
    topic: "JavaScript",
    category: "Async JavaScript",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending (initial), fulfilled (resolved), and rejected. Promises have `.then()`, `.catch()`, and `.finally()` methods for handling results.",
    detailedExplanation: "A Promise is created with a function that receives `resolve` and `reject` callbacks:\n```javascript\nconst promise = new Promise((resolve, reject) => {\n  // async work...\n  if (success) resolve(value);\n  else reject(error);\n});\n```\n\nStates: pending (initial), fulfilled (resolved with a value), rejected (rejected with a reason).\n\nMethods:\n- `.then(onFulfilled, onRejected)`: chain handlers for the result.\n- `.catch(onRejected)`: handle errors (shorthand for `.then(null, onRejected)`).\n- `.finally(onFinally)`: run cleanup code regardless of outcome.\n\n`Promise.all()`: wait for all promises to fulfill (rejects if any rejects).\n`Promise.allSettled()`: wait for all to settle (fulfilled or rejected).\n`Promise.race()`: first to settle wins.\n`Promise.any()`: first to fulfill wins (rejects only if all reject).",
    bestAnswer: "A Promise represents a value that may not be available yet. It's created with `new Promise((resolve, reject) => {...})`.\n\nThree states: pending → fulfilled (resolved) or rejected. The transition is irreversible.\n\nKey methods:\n```javascript\nfetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error))\n  .finally(() => hideSpinner());\n```\n\nCombinators:\n- `Promise.all(promises)`: resolves when ALL resolve; rejects on first rejection.\n- `Promise.allSettled(promises)`: always resolves, returns status of each.\n- `Promise.race(promises)`: first to settle (fulfilled or rejected) wins.\n- `Promise.any(promises)`: first to fulfill wins; rejects only if all reject.\n\nPromises replaced callback hell with flat, chainable syntax and are the foundation of `async`/`await`.",
    alternativeAnswers: [
      "Promises are microtasks — they execute in the microtask queue before the next macrotask, which affects timing in the event loop.",
      "Error handling with Promises: unhandled rejections are caught by the `unhandledrejection` event, which Node.js and browsers handle differently."
    ],
    commonMistakes: [
      "Not returning values in `.then()` callbacks, which breaks promise chains.",
      "Swallowing errors by not attaching `.catch()` — unhandled promise rejections can crash applications.",
      "Using `Promise.all()` when `Promise.allSettled()` is more appropriate for independent operations."
    ],
    followUpQuestions: [
      "How does `async`/`await` relate to Promises?",
      "What is the unhandledrejection event and how should you handle it?",
      "How do you implement retry logic with Promises?"
    ],
    relatedQuestionIds: ["fe-073", "fe-074"],
    references: [
      { title: "MDN Promise", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" },
      { title: "JavaScript.info Promises", url: "https://javascript.info/promise-basics" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-028",
    title: "What is hoisting in JavaScript?",
    content: "What is hoisting in JavaScript? How does it affect `var`, `let`, `const`, and function declarations?",
    difficulty: "beginner",
    track: "frontend",
    topic: "JavaScript",
    category: "Core Concepts",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. `var` declarations are hoisted and initialized as `undefined`. `let`/`const` are hoisted but not initialized (temporal dead zone). Function declarations are fully hoisted.",
    detailedExplanation: "Before execution, JavaScript's engine scans the code and moves declarations to the top of their scope. This is a conceptual model — the code isn't physically moved, but declarations are processed before execution.\n\n`var x = 5;` is conceptually hoisted as: `var x; x = 5;`. So `x` can be accessed before its line but will be `undefined`.\n\n`let y = 10;` is hoisted but enters the 'temporal dead zone' (TDZ) — accessing it before the declaration throws `ReferenceError`.\n\nFunction declarations (`function foo() {}`) are fully hoisted — both the name and body are available anywhere in the scope.\n\nFunction expressions (`const foo = function() {}`) follow the hoisting rules of their declaration type (`const` → TDZ).",
    bestAnswer: "Hoisting is JavaScript's compile-time behavior of making declarations available throughout their scope before the code runs.\n\n`var` declarations are hoisted and initialized as `undefined` — you can use them before declaration, but they'll be `undefined`.\n\nFunction declarations are fully hoisted — you can call a function before it's defined in the code.\n\n`let` and `const` are hoisted but remain in the Temporal Dead Zone (TDZ) until their declaration line — accessing them early throws `ReferenceError`.\n\n```javascript\nconsole.log(a); // undefined (var is hoisted, initialized as undefined)\nvar a = 1;\n\nconsole.log(b); // ReferenceError (TDZ)\nlet b = 2;\n\nconsole.log(c()); // 'hello' (function declaration is fully hoisted)\nfunction c() { return 'hello'; }\n```\n\nBest practice: declare variables at the top of their scope and use `let`/`const` to avoid hoisting surprises.",
    alternativeAnswers: [
      "Module scope variables (ES modules) behave like `let` — they're in the TDZ at the top of the module.",
      "Class declarations are also hoisted but in the TDZ, similar to `let`/`const` — you can't use a class before its declaration."
    ],
    commonMistakes: [
      "Thinking `let`/`const` are not hoisted — they are, but they're in the TDZ until their declaration, which is different from not being hoisted.",
      "Using `var` for block-scoped variables — `var` is function-scoped, which can lead to unexpected behavior in loops and conditionals.",
      "Not understanding that function expressions follow the hoisting rules of their declaration type, not function hoisting rules."
    ],
    followUpQuestions: [
      "What is the temporal dead zone and how does it differ from hoisting?",
      "How does hoisting work in ES modules vs regular scripts?",
      "Why are function declarations hoisted but function expressions are not?"
    ],
    relatedQuestionIds: ["fe-021", "fe-023"],
    references: [
      { title: "MDN Hoisting", url: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting" },
      { title: "JavaScript.info Variables", url: "https://javascript.info/variables" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // TypeScript (fe-029 – fe-036)
  // ──────────────────────────────────────────────
  {
    id: "fe-029",
    title: "What is the difference between `interface` and `type` in TypeScript?",
    content: "What is the difference between `interface` and `type` in TypeScript? When should you use each?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "TypeScript",
    category: "TypeScript Basics",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Both `interface` and `type` define object shapes. `interface` supports declaration merging and is extendable with `extends`. `type` supports unions, intersections, mapped types, and conditional types. Use `interface` for object shapes and class contracts; use `type` for unions, primitives, and computed types.",
    detailedExplanation: "Key differences:\n\n1. Declaration merging: interfaces with the same name merge automatically; types with the same name cause an error.\n2. Extends vs intersection: interfaces use `extends`, types use `&` (intersection).\n3. Union types: only `type` supports `type A = B | C`.\n4. Mapped/conditional types: only `type` supports these advanced features.\n5. Implementation: classes can `implements` interfaces but not types.\n6. Performance: interfaces may be slightly faster in large codebases due to lazy evaluation.\n\nThe TypeScript team recommends using `interface` when possible for its extendability and declaration merging, falling back to `type` for unions and advanced type manipulation.",
    bestAnswer: "`interface` and `type` both describe object shapes, but differ in capabilities:\n\n**Interface**:\n- Declaration merging (same-named interfaces merge)\n- Extends other interfaces (`interface B extends A`)\n- Can be implemented by classes (`class C implements A`)\n- Better error messages in some cases\n\n**Type**:\n- Union types: `type Status = 'active' | 'inactive'`\n- Intersection types: `type Combined = A & B`\n- Mapped types: `{ [K in keyof T]: ... }`\n- Conditional types: `T extends U ? X : Y`\n- Tuple types: `type Pair = [string, number]`\n\nBest practice: use `interface` for object shapes, class contracts, and props. Use `type` for unions, primitives, tuples, and computed types. When in doubt, `interface` is the safer default for objects.",
    alternativeAnswers: [
      "Declaration merging with interfaces allows augmenting third-party library types without modifying their source code (module augmentation).",
      "The `interface` keyword generates better type hints in IDEs because TypeScript can display interface names directly, while type aliases sometimes show the expanded form."
    ],
    commonMistakes: [
      "Using `interface` when you need union types — `type` is required for `|` syntax.",
      "Assuming they're interchangeable in all cases — they have meaningful differences in declaration merging and extendability.",
      "Creating unnecessary type aliases for simple object shapes when an interface would be clearer."
    ],
    followUpQuestions: [
      "How does declaration merging work and when is it useful?",
      "What are discriminated unions and how do you implement them with `type`?",
      "How do conditional types differ from generics?"
    ],
    relatedQuestionIds: ["fe-030", "fe-031"],
    references: [
      { title: "TypeScript Interfaces vs Types", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" },
      { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/handbook/2/types-from-types.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-030",
    title: "What are TypeScript generics? Provide examples.",
    content: "What are generics in TypeScript? How do they enable reusable, type-safe code?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "TypeScript",
    category: "TypeScript Basics",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Generics allow you to write functions, classes, and interfaces that work with multiple types while preserving type safety. They're like type parameters — placeholders filled in at the call site.",
    detailedExplanation: "Generics use a type parameter (commonly `<T>`) to create reusable components that work with any type while maintaining type information.\n\n```typescript\nfunction identity<T>(value: T): T {\n  return value;\n}\nidentity<string>('hello'); // 'hello'\nidentity<number>(42); // 42\nidentity('hello'); // type inferred as 'hello'\n```\n\nGeneric constraints limit what types are accepted:\n```typescript\nfunction getLength<T extends { length: number }>(value: T): number {\n  return value.length;\n}\ngetLength('hello'); // 5\ngetLength([1, 2, 3]); // 3\n```\n\nGenerics are essential for utility types (`Partial<T>`, `Pick<T, K>`, `Omit<T, K>`), React components (`useState<T>`), and API response types.",
    bestAnswer: "Generics are type-level parameters that let you write reusable, type-safe code. They use angle bracket syntax: `<T>`, where `T` is a placeholder for a concrete type determined at the usage site.\n\n```typescript\n// Generic function\nfunction first<T>(arr: T[]): T | undefined {\n  return arr[0];\n}\nfirst([1, 2, 3]); // T = number\nfirst(['a', 'b']); // T = string\n\n// Generic interface\ninterface ApiResponse<T> {\n  data: T;\n  status: number;\n  message: string;\n}\n\n// Generic with constraints\nfunction merge<T extends object, U extends object>(a: T, b: U): T & U {\n  return { ...a, ...b };\n}\n```\n\nGenerics enable type-safe APIs like `Array<T>`, `Promise<T>`, `Map<K, V>`, `React.FC<Props>`, `useState<T>`, and utility types like `Partial<T>`, `Pick<T, K>`.",
    alternativeAnswers: [
      "Generic defaults: `<T = string>` provides a fallback type when none is specified, improving API ergonomics.",
      "Generic inference with `typeof` and `infer`: conditional types can extract types from complex structures at the type level."
    ],
    commonMistakes: [
      "Overusing `any` as a type parameter instead of using `<T>` — generics preserve type information.",
      "Not using constraints (`extends`) when the generic type needs specific properties, leading to runtime errors.",
      "Creating overly complex generic types that are hard to read — sometimes a simple union type is clearer."
    ],
    followUpQuestions: [
      "How do generic constraints with `extends` work?",
      "How do you type a generic React component with props?",
      "What is the difference between `<T>` and `<T extends X>`?"
    ],
    relatedQuestionIds: ["fe-029", "fe-031"],
    references: [
      { title: "TypeScript Generics", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html" },
      { title: "TypeScript Generic Classes", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-classes" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-031",
    title: "What are TypeScript utility types?",
    content: "What are TypeScript's built-in utility types? Explain `Partial`, `Required`, `Pick`, `Omit`, `Record`, and `Readonly`.",
    difficulty: "intermediate",
    track: "frontend",
    topic: "TypeScript",
    category: "TypeScript Advanced",
    companyTags: ["Google", "Meta", "Amazon", "Vercel"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Utility types are built-in type transformations in TypeScript. `Partial<T>` makes all properties optional. `Required<T>` makes all properties required. `Pick<T, K>` extracts a subset. `Omit<T, K>` removes properties. `Record<K, V>` creates an object type. `Readonly<T>` makes all properties readonly.",
    detailedExplanation: "TypeScript provides many built-in utility types that transform existing types:\n\n`Partial<T>`: all properties become optional. Useful for update functions where you pass only changed fields.\n`Required<T>`: all properties become required. Useful when you need to ensure all fields are present.\n`Pick<T, K>`: extracts only the specified keys. `Pick<User, 'name' | 'email'>`.\n`Omit<T, K>`: removes the specified keys. `Omit<User, 'password'>`.\n`Record<K, V>`: creates an object type with keys K and values V. `Record<string, number>`.\n`Readonly<T>`: all properties become readonly. Prevents mutation.\n\nOther useful utility types: `ReturnType<T>`, `Parameters<T>`, `Exclude<T, U>`, `Extract<T, U>`, `NonNullable<T>`, `Awaited<T>`.",
    bestAnswer: "TypeScript utility types are built-in type transformations:\n\n```typescript\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n  password: string;\n}\n\nPartial<User>     // { id?: number; name?: string; email?: string; password?: string; }\nRequired<Partial<User>> // back to all required\nPick<User, 'id' | 'name'>  // { id: number; name: string; }\nOmit<User, 'password'>  // { id: number; name: string; email: string; }\nReadonly<User>    // all properties readonly\nRecord<string, User> // { [key: string]: User }\n```\n\nCommon patterns:\n- `Partial<User>` for update functions (pass only changed fields).\n- `Omit<User, 'id'>` for create functions (ID is server-generated).\n- `Pick<User, 'name' | 'email'>` for display components.\n- `Record<string, Error>` for error maps.\n\nYou can create your own utility types using mapped types and conditional types.",
    alternativeAnswers: [
      "`ReturnType<typeof fn>` extracts the return type of a function, useful for typing callbacks and higher-order functions.",
      "`Awaited<T>` unwraps a Promise type — `Awaited<Promise<string>>` becomes `string`. Useful with async functions."
    ],
    commonMistakes: [
      "Using `Omit` when `Pick` is more appropriate — Pick is safer as it explicitly selects what you need.",
      "Not using `Partial` for update APIs, forcing consumers to send all fields even when updating one.",
      "Overusing utility types when a simple intersection type (`A & B`) would be clearer."
    ],
    followUpQuestions: [
      "How would you create a custom utility type like `DeepPartial<T>`?",
      "How do `Exclude` and `Extract` work?",
      "How do you type an async function's return type?"
    ],
    relatedQuestionIds: ["fe-030", "fe-029"],
    references: [
      { title: "TypeScript Utility Types", url: "https://www.typescriptlang.org/docs/handbook/utility-types.html" },
      { title: "Mapped Types", url: "https://www.typescriptlang.org/docs/handbook/2/mapped-types.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-032",
    title: "What are TypeScript type guards and narrowing?",
    content: "What are type guards in TypeScript? How do you narrow types using `typeof`, `instanceof`, `in`, and custom guards?",
    difficulty: "advanced",
    track: "frontend",
    topic: "TypeScript",
    category: "TypeScript Advanced",
    companyTags: ["Google", "Meta", "Microsoft"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "Type guards are expressions that narrow the type of a variable within a conditional block. TypeScript provides `typeof`, `instanceof`, `in`, equality checks, and custom predicate functions (`x is Type`) for type narrowing.",
    detailedExplanation: "TypeScript's control flow analysis narrows types in conditional blocks. Type guards are runtime checks that tell the compiler which branch of code you're in.\n\n`typeof`: `if (typeof x === 'string')` narrows to `string`.\n`instanceof`: `if (x instanceof Date)` narrows to `Date`.\n`in`: `if ('name' in x)` narrows to the type with `name` property.\nEquality: `if (x === null)` narrows to `null`.\nCustom predicates: `function isString(x: unknown): x is string { return typeof x === 'string'; }`.\n\nDiscriminated unions use a common literal property (tag) for exhaustive narrowing:\n```typescript\ntype Shape = { kind: 'circle'; radius: number } | { kind: 'square'; side: number };\nfunction area(shape: Shape) {\n  switch (shape.kind) {\n    case 'circle': return Math.PI * shape.radius ** 2;\n    case 'square': return shape.side ** 2;\n  }\n}\n```",
    bestAnswer: "Type guards narrow TypeScript types based on runtime checks within conditional blocks.\n\nBuilt-in guards:\n- `typeof x === 'string'` — narrows to primitive types.\n- `x instanceof Date` — narrows to class instances.\n- `'key' in obj` — narrows based on property existence.\n- `x === null` / `x === undefined` — narrows to null/undefined.\n\nCustom type guards use predicate functions:\n```typescript\nfunction isUser(obj: unknown): obj is User {\n  return typeof obj === 'object' && obj !== null && 'id' in obj && 'name' in obj;\n}\n```\n\nDiscriminated unions are the most powerful pattern:\n```typescript\ntype Result = \n  | { status: 'success'; data: User }\n  | { status: 'error'; error: string };\n\nfunction handle(result: Result) {\n  if (result.status === 'success') {\n    result.data; // narrowed to User\n  } else {\n    result.error; // narrowed to string\n  }\n}\n```\n\nThe `never` type enables exhaustive checking in switch statements.",
    alternativeAnswers: [
      "`asserts x is Type` is a special predicate that throws if the condition is false, narrowing the type in the remaining code.",
      "The `satisfies` operator (TS 4.9+) validates types without widening, preserving literal types while ensuring type safety."
    ],
    commonMistakes: [
      "Not using discriminated unions for state management — they're the most reliable way to narrow complex types.",
      "Writing type guards that don't actually check all necessary properties, leading to runtime errors.",
      "Forgetting to handle the exhaustive case with a `never` type in switch statements."
    ],
    followUpQuestions: [
      "How do you implement exhaustive checking with the `never` type?",
      "What is the difference between `x is Type` and `asserts x is Type`?",
      "How do discriminated unions help with Redux/Redux Toolkit state management?"
    ],
    relatedQuestionIds: ["fe-033", "fe-029"],
    references: [
      { title: "TypeScript Type Guards", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html" },
      { title: "Discriminated Unions", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-033",
    title: "What are TypeScript conditional types?",
    content: "What are conditional types in TypeScript? How do they work and what are practical use cases?",
    difficulty: "advanced",
    track: "frontend",
    topic: "TypeScript",
    category: "TypeScript Advanced",
    companyTags: ["Google", "Meta", "Apple"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Conditional types use the ternary operator syntax at the type level: `T extends U ? X : Y`. They enable type-level logic, creating types that depend on other types. Combined with `infer`, they can extract types from complex structures.",
    detailedExplanation: "Conditional types follow the pattern: `T extends U ? X : Y`. If `T` is assignable to `U`, the result is `X`; otherwise, it's `Y`.\n\n```typescript\ntype IsString<T> = T extends string ? 'yes' : 'no';\ntype A = IsString<string>; // 'yes'\ntype B = IsString<number>; // 'no'\n```\n\nWith `infer`, you can extract types:\n```typescript\ntype ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;\n```\n\nThe `infer` keyword introduces a type variable to be inferred from a position in the conditional type.\n\nPractical uses: `Exclude<T, U>` removes types from a union, `Extract<T, U>` extracts types, `NonNullable<T>` removes null/undefined, and custom utility types like `DeepPartial<T>` or `Optional<T, K>`.",
    bestAnswer: "Conditional types implement type-level if-else logic:\n```typescript\ntype TypeName<T> = \n  T extends string ? 'string' :\n  T extends number ? 'number' :\n  T extends boolean ? 'boolean' :\n  'object';\n```\n\n`infer` keyword extracts types from positions:\n```typescript\n// Extract array element type\ntype ElementType<T> = T extends (infer E)[] ? E : T;\ntype X = ElementType<string[]>; // string\n\n// Extract promise resolved type\ntype Unwrap<T> = T extends Promise<infer U> ? Unwrap<U> : T;\ntype Y = Unwrap<Promise<Promise<number>>>; // number\n```\n\nPractical uses: type-safe event emitters, form field types based on schema, conditional props in React components, and building complex utility types like `DeepReadonly<T>`.",
    alternativeAnswers: [
      "Distributive conditional types: when `T` is a naked type parameter, the condition distributes over union members: `T extends U ? X : Y` applied to `A | B` becomes `(A extends U ? X : Y) | (B extends U ? X : Y)`.",
      "Template literal types combined with conditional types enable string manipulation at the type level."
    ],
    commonMistakes: [
      "Not understanding distributive conditional types — naked type parameters distribute over unions automatically, which can cause unexpected results.",
      "Overcomplicating types when a simpler approach (like a function overload) would be more readable.",
      "Forgetting that `never` is the bottom type — it distributes as an empty union in conditional types."
    ],
    followUpQuestions: [
      "How does `infer` work and what types can you extract with it?",
      "What are distributive conditional types and when do they activate?",
      "How would you create a type-safe event emitter with conditional types?"
    ],
    relatedQuestionIds: ["fe-030", "fe-032"],
    references: [
      { title: "Conditional Types", url: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html" },
      { title: " infer Keyword", url: "https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-with-in" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-034",
    title: "How do you type React props and hooks with TypeScript?",
    content: "How do you type React components and hooks with TypeScript? Show examples of typing props, state, events, and refs.",
    difficulty: "intermediate",
    track: "frontend",
    topic: "TypeScript",
    category: "React + TypeScript",
    companyTags: ["Google", "Meta", "Amazon", "Vercel"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "React components with TypeScript use interface or type for props. `FC<Props>` or function syntax with typed parameters. `useState<T>` for state, `useRef<T>` for refs, event handlers use `React.ChangeEvent<HTMLInputElement>`, and so on.",
    detailedExplanation: "Typing React with TypeScript:\n\nProps:\n```typescript\ninterface ButtonProps {\n  label: string;\n  onClick: () => void;\n  variant?: 'primary' | 'secondary';\n}\nfunction Button({ label, onClick, variant = 'primary' }: ButtonProps) { ... }\n```\n\nState:\n```typescript\nconst [count, setCount] = useState<number>(0);\nconst [user, setUser] = useState<User | null>(null);\n```\n\nRefs:\n```typescript\nconst inputRef = useRef<HTMLInputElement>(null);\nconst timerRef = useRef<number | null>(null);\n```\n\nEvents:\n```typescript\nconst handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };\nconst handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { ... };\n```\n\nChildren:\n```typescript\ninterface CardProps {\n  children: React.ReactNode;\n}\n```",
    bestAnswer: "React + TypeScript typing patterns:\n\n**Props** — use interface or type:\n```typescript\ninterface UserCardProps {\n  name: string;\n  email: string;\n  avatar?: string;\n  onEdit: (userId: string) => void;\n}\nfunction UserCard({ name, email, avatar, onEdit }: UserCardProps) { ... }\n```\n\n**State** — provide type to `useState`:\n```typescript\nconst [user, setUser] = useState<User | null>(null);\nconst [items, setItems] = useState<Item[]>([]);\n```\n\n**Refs**:\n```typescript\nconst inputRef = useRef<HTMLInputElement>(null);  // DOM ref\nconst idRef = useRef(0);  // instance variable\n```\n\n**Events**:\n```typescript\nconst onChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... };\nconst onSubmit = (e: React.FormEvent<HTMLFormElement>) => { ... };\nconst onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => { ... };\n```\n\n**Children**: `children: React.ReactNode`. **Style props**: `style?: React.CSSProperties`.",
    alternativeAnswers: [
      "For generic components like `<List<T>>`, use function generics: `function List<T extends { id: string }>({ items }: { items: T[] }) { ... }`.",
      "React.ComponentProps<typeof Component> extracts the prop types from a component, useful for wrapper components."
    ],
    commonMistakes: [
      "Using `React.FC` when function declaration syntax is clearer and has better inference.",
      "Not typing event handlers, leading to implicit `any` for the event parameter.",
      "Overcomplicating props types when simpler types (string, number) are sufficient — don't over-engineer."
    ],
    followUpQuestions: [
      "How do you type a generic List component with TypeScript?",
      "How do you type custom hooks with TypeScript?",
      "How do you type a React context with TypeScript?"
    ],
    relatedQuestionIds: ["fe-037", "fe-030"],
    references: [
      { title: "TypeScript with React", url: "https://react.dev/learn/typescript" },
      { title: "React TypeScript Cheatsheet", url: "https://react-typescript-cheatsheet.netlify.app/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-035",
    title: "What is the `never` type in TypeScript?",
    content: "What is the `never` type in TypeScript? When does a function return `never`? How is it used exhaustively?",
    difficulty: "advanced",
    track: "frontend",
    topic: "TypeScript",
    category: "TypeScript Advanced",
    companyTags: ["Google", "Meta", "Apple"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "`never` represents values that never occur. A function returns `never` if it always throws an error or has an infinite loop. It's used for exhaustive checking in switch statements and for impossible code paths.",
    detailedExplanation: "`never` is the bottom type — it has no values. It appears in two scenarios:\n\n1. Functions that never return:\n   - Always throw: `function throwError(msg: string): never { throw new Error(msg); }`\n   - Infinite loops: `function infiniteLoop(): never { while (true) {} }`\n\n2. Exhaustive checking in discriminated unions:\n```typescript\ntype Shape = { kind: 'circle'; radius: number } | { kind: 'square'; side: number };\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case 'circle': return Math.PI * shape.radius ** 2;\n    case 'square': return shape.side ** 2;\n    default:\n      const exhaustive: never = shape; // Error if a case is missing\n      return exhaustive;\n  }\n}\n```\n\nIf you add a new shape type and forget to handle it, TypeScript will error on the `never` assignment, catching the bug at compile time.",
    bestAnswer: "`never` represents a value that never exists. It's the type of:\n\n1. Functions that always throw:\n```typescript\nfunction fail(msg: string): never {\n  throw new Error(msg);\n}\n```\n\n2. Functions that never return (infinite loops):\n```typescript\nfunction forever(): never {\n  while (true) { /* ... */ }\n}\n```\n\n3. Exhaustive checking — the primary use case:\n```typescript\ntype Shape = \n  | { kind: 'circle'; radius: number }\n  | { kind: 'square'; side: number };\n\nfunction area(shape: Shape): number {\n  switch (shape.kind) {\n    case 'circle': return Math.PI * shape.radius ** 2;\n    case 'square': return shape.side ** 2;\n    default:\n      const _exhaustive: never = shape;\n      return _exhaustive;\n  }\n}\n```\n\nIf a new `Shape` variant is added and not handled in the switch, TypeScript will error at the `never` assignment, catching missing cases at compile time.",
    alternativeAnswers: [
      "`never` is assignable to every type — `const x: string = fail('oops')` is valid because `fail` never returns.",
      "`void` vs `never`: `void` means 'returns undefined', `never` means 'never returns at all'. A function with no return has implicit `void`, not `never`."
    ],
    commonMistakes: [
      "Confusing `never` with `void` — `void` means the function returns undefined; `never` means it never completes.",
      "Not using `never` for exhaustive checking, which misses bugs when new union members are added.",
      "Forgetting that `never` is the bottom type — it's assignable to everything, which is why it works for exhaustive checking."
    ],
    followUpQuestions: [
      "How does `never` differ from `undefined` and `void`?",
      "How do you use `never` for type-level unreachable code?",
      "What happens when `never` appears in a union type?"
    ],
    relatedQuestionIds: ["fe-032", "fe-033"],
    references: [
      { title: "TypeScript never type", url: "https://www.typescriptlang.org/docs/handbook/basic-types.html#never" },
      { title: "TypeScript Exhaustive Checking", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html#exhaustiveness-checking" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-036",
    title: "What is declaration merging in TypeScript?",
    content: "What is declaration merging in TypeScript? How does it work and when is it useful?",
    difficulty: "advanced",
    track: "frontend",
    topic: "TypeScript",
    category: "TypeScript Advanced",
    companyTags: ["Google", "Microsoft", "Amazon"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Declaration merging occurs when TypeScript combines multiple declarations with the same name into a single definition. Interfaces merge naturally, namespaces can merge with classes/functions, and ambient declarations can augment existing types.",
    detailedExplanation: "TypeScript merges declarations with the same name in the same namespace:\n\n**Interface merging**: two interfaces with the same name automatically merge:\n```typescript\ninterface Window { title: string; }\ninterface Window { close(): void; }\n// Result: Window has title AND close()\n```\n\n**Module augmentation**: extend third-party types:\n```typescript\ndeclare module 'express' {\n  interface Request {\n    user: User;\n  }\n}\n```\n\n**Namespace merging**: namespaces can merge with classes, functions, and enums to create nested structures.\n\nDeclaration merging is especially useful for:\n- Extending library types (Express Request, Vue component options)\n- Creating rich type definitions from multiple sources\n- Adding methods to existing interfaces",
    bestAnswer: "Declaration merging is TypeScript's feature that combines multiple declarations of the same name into one definition.\n\n**Interface merging** (most common): interfaces with identical names automatically merge:\n```typescript\ninterface Cat { name: string; }\ninterface Cat { age: number; }\n// Cat = { name: string; age: number; }\n```\n\n**Module augmentation** — extend third-party library types without modifying their source:\n```typescript\n// Extend Express Request\ndeclare module 'express-serve-static-core' {\n  interface Request {\n    userId: string;\n  }\n}\n```\n\n**Namespace merging** with classes/functions:\n```typescript\nclass Album {\n  labelId: number;\n}\nnamespace Album {\n  export function create(title: string): Album { ... }\n}\n```\n\nKey use case: augmenting library types (Express, Next.js, Axios) to add custom properties without type casting.",
    alternativeAnswers: [
      "Non-exported interface members in a merged declaration are private to the module — only exported members extend the public interface.",
      "The `declare global` pattern is used in modules to augment the global scope, like extending the `Window` interface."
    ],
    commonMistakes: [
      "Accidentally merging interfaces with same names in different files, creating unexpected combined types.",
      "Not understanding that interface members with the same name must be compatible (same type) or TypeScript will error.",
      "Overusing module augmentation when a simpler approach (wrapping the library) would be better."
    ],
    followUpQuestions: [
      "How do you extend the global `Window` interface in a TypeScript module?",
      "How does module augmentation work with npm packages?",
      "What are the rules for interface member compatibility during merging?"
    ],
    relatedQuestionIds: ["fe-029", "fe-033"],
    references: [
      { title: "Declaration Merging", url: "https://www.typescriptlang.org/docs/handbook/declaration-merging.html" },
      { title: "Module Augmentation", url: "https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // React (fe-037 – fe-048)
  // ──────────────────────────────────────────────
  {
    id: "fe-037",
    title: "What is the Virtual DOM and how does React use it?",
    content: "What is the Virtual DOM in React? How does the reconciliation algorithm work? Why does React use a Virtual DOM?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "React",
    category: "React Fundamentals",
    companyTags: ["Meta", "Google", "Amazon", "Microsoft", "Netflix"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "The Virtual DOM is a lightweight JavaScript representation of the real DOM. React creates a virtual tree on state changes, diffs it against the previous virtual tree (reconciliation), and applies only the minimal set of real DOM operations needed. This is faster than directly manipulating the DOM for complex UIs.",
    detailedExplanation: "When state changes, React: (1) creates a new virtual DOM tree, (2) diffs it against the previous one (reconciliation/fiber), (3) computes the minimal set of DOM operations, and (4) batches and applies those operations.\n\nThe Fiber architecture (React 16+) replaced the previous stack reconciler. Fiber is a unit of work — each fiber node represents a component and its children. Fiber enables: incremental rendering (work can be split across frames), prioritization (urgent updates like user input take priority), and pausing/resuming.\n\nReact's diffing algorithm makes assumptions to keep O(n) complexity: elements of different types produce different trees, keys help identify which children changed, and components of the same type update in place.",
    bestAnswer: "The Virtual DOM is React's in-memory representation of the real DOM. When state changes:\n1. React creates a new virtual tree.\n2. It diffs the new tree against the previous one (reconciliation).\n3. It computes the minimal batch of real DOM updates needed.\n4. It applies those updates.\n\nThis is faster than raw DOM manipulation because: DOM operations are expensive (layout reflows, repaints), and React minimizes them by computing the optimal update strategy.\n\nReact's Fiber architecture (React 16+) enables: incremental rendering (split work across frames), priority scheduling (user input > animations > data updates), and concurrency (multiple state updates in one render).\n\nThe diffing algorithm is O(n) due to two assumptions: (1) different element types produce different trees, (2) keys help identify which items moved, were added, or removed in a list.",
    alternativeAnswers: [
      "React doesn't just compare virtual trees — it uses a fiber tree with linked lists that can be traversed, paused, and resumed, enabling concurrent features.",
      "Other frameworks take different approaches: Svelte compiles to direct DOM updates, Vue 3 uses a similar virtual DOM with optimizations, Solid.js uses fine-grained reactivity without a virtual DOM."
    ],
    commonMistakes: [
      "Saying React is faster than the DOM — React is slower than direct DOM manipulation for trivial cases, but faster for complex UIs where diffing saves work.",
      "Not understanding that the virtual DOM is not the same as the real DOM — it's a JavaScript object tree that represents what the real DOM should look like.",
      "Forgetting that keys in lists should be stable IDs, not array indices, to avoid unnecessary re-renders."
    ],
    followUpQuestions: [
      "How does React Fiber differ from the old stack reconciler?",
      "When would you bypass React's virtual DOM (e.g., for animations)?",
      "How do React's concurrent features (useTransition, useDeferredValue) work with Fiber?"
    ],
    relatedQuestionIds: ["fe-061", "fe-038"],
    references: [
      { title: "React Reconciliation", url: "https://react.dev/reference/react/reconciler" },
      { title: "Inside Fiber: In-depth overview of React's new core architecture", url: "https://github.com/facebook/react/blob/main/packages/react-reconciler/README.md" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-038",
    title: "Explain React's `useState` and `useEffect` hooks.",
    content: "How do `useState` and `useEffect` work in React? What are their rules, common patterns, and pitfalls?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "React",
    category: "React Hooks",
    companyTags: ["Meta", "Google", "Amazon", "Microsoft", "Vercel"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "`useState` manages component state — it returns the current state and a setter function. `useEffect` handles side effects — it runs after render and can return a cleanup function. Both follow the Rules of Hooks.",
    detailedExplanation: "`useState`:\n```javascript\nconst [count, setCount] = useState(0);\nconst [user, setUser] = useState(null);\nsetCount(prev => prev + 1); // functional update\n```\nLazy initialization: `useState(() => computeExpensiveValue())`.\n\n`useEffect`:\n```javascript\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n  return () => { /* cleanup */ };\n}, [count]); // dependency array\n```\n\nDependency array:\n- `[]`: runs once after mount.\n- `[dep1, dep2]`: runs when dependencies change.\n- No array: runs after every render (usually unwanted).\n\nRules of Hooks: (1) only call hooks at the top level, (2) only call hooks from React functions (components or custom hooks).",
    bestAnswer: "`useState` manages local component state:\n```javascript\nconst [state, setState] = useState(initialValue);\n// Functional update for state based on previous state:\nsetState(prev => prev + 1);\n```\n\n`useEffect` runs side effects after render:\n```javascript\nuseEffect(() => {\n  // Side effect: fetch, subscribe, DOM manipulation\n  const subscription = api.subscribe(id);\n  return () => subscription.unsubscribe(); // cleanup\n}, [id]); // re-run when id changes\n```\n\nDependency array rules:\n- `[]` → runs once on mount.\n- `[a, b]` → runs when a or b changes.\n- Omitted → runs after every render (rarely correct).\n\nCommon patterns: data fetching with cleanup, subscriptions, document title updates, analytics. Common pitfalls: stale closures, infinite loops from missing deps, not cleaning up subscriptions.",
    alternativeAnswers: [
      "The `useEffectEvent` proposal (React canary) would allow reading latest values inside effects without listing them as dependencies, solving stale closure issues.",
      "`useLayoutEffect` runs synchronously before the browser paints — use it only when you need to measure or mutate the DOM before paint."
    ],
    commonMistakes: [
      "Missing dependencies in the useEffect dependency array, leading to stale closures and bugs.",
      "Not returning a cleanup function when the effect sets up subscriptions or timers.",
      "Using useEffect for events (use onClick instead) or for computations that should be useMemo'd."
    ],
    followUpQuestions: [
      "What is the stale closure problem and how do you fix it?",
      "How do you fetch data with useEffect without creating infinite loops?",
      "What is the difference between useEffect and useLayoutEffect?"
    ],
    relatedQuestionIds: ["fe-037", "fe-039"],
    references: [
      { title: "React useState", url: "https://react.dev/reference/react/useState" },
      { title: "React useEffect", url: "https://react.dev/reference/react/useEffect" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-039",
    title: "What are React Keys and why are they important?",
    content: "What are `key` props in React? Why shouldn't you use array indices as keys? What problems occur with incorrect keys?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "React",
    category: "React Fundamentals",
    companyTags: ["Meta", "Google", "Amazon", "Apple"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "Keys help React identify which items in a list changed, were added, or removed. They enable efficient re-rendering by matching old and new elements. Keys should be stable, unique, and not use array indices when the list order changes.",
    detailedExplanation: "When rendering lists, React uses keys to match elements between the old and new virtual trees. Without keys, React would need to re-render every list item when the list changes.\n\nUsing array indices as keys causes problems when items are reordered, inserted, or removed. The index stays the same for the position, not the item, so React may reuse wrong component instances, lose local state, and cause animations to break.\n\nGood keys: unique IDs from your data (database IDs, UUIDs). Bad keys: Math.random(), array indices (for mutable lists), non-unique values.\n\nKeys also help React's reconciliation avoid unnecessary work — stable keys mean React can update the specific item that changed without touching the others.",
    bestAnswer: "Keys help React's reconciler identify which list items changed, enabling efficient re-rendering.\n\n```jsx\n// Good: stable unique IDs\n{items.map(item => <ListItem key={item.id} item={item} />)}\n\n// Bad: array indices (causes bugs when list reorders)\n{items.map((item, i) => <ListItem key={i} item={item} />)}\n```\n\nWhy indices are bad: if you insert an item at the beginning, every key shifts — React thinks every item changed and re-renders all of them. Local state (input values, scroll position) may transfer to the wrong component.\n\nRules:\n- Keys must be unique among siblings (not globally).\n- Keys should be stable (don't change between renders).\n- Keys should come from your data, not generated during render.\n\nCommon bug: using `Date.now()` or `Math.random()` as keys causes the entire list to re-render every time.",
    alternativeAnswers: [
      "Fragments can receive keys too: `<React.Fragment key={id}>...</React.Fragment>` or `<>` shorthand (but the shorthand doesn't support keys).",
      "When you need both an index and a unique key, use the unique ID as key and the index as a separate prop: `<Item key={item.id} index={i} />`."
    ],
    commonMistakes: [
      "Using array indices as keys when items can be reordered, inserted, or deleted.",
      "Using non-unique values as keys (like duplicate names or categories).",
      "Generating keys inside render (like `key={Math.random()}`) which causes re-renders every render."
    ],
    followUpQuestions: [
      "How does React handle keys when switching between conditional components?",
      "What happens to component state when a key changes?",
      "How do you handle keys in nested lists?"
    ],
    relatedQuestionIds: ["fe-037", "fe-040"],
    references: [
      { title: "React Keys", url: "https://react.dev/learn/rendering-lists#why-does-react-need-keys" },
      { title: "React Reconciliation", url: "https://react.dev/reference/react/reconciler" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-040",
    title: "What is prop drilling and how do you avoid it?",
    content: "What is prop drilling in React? What are the alternatives (Context, state management libraries)?",
    difficulty: "beginner",
    track: "frontend",
    topic: "React",
    category: "React Patterns",
    companyTags: ["Meta", "Google", "Amazon", "Netflix"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "Prop drilling is passing props through multiple component layers that don't use them, just to reach deeply nested children. Alternatives include React Context, state management libraries (Redux, Zustand, Jotai), and component composition patterns.",
    detailedExplanation: "When a deeply nested component needs data that lives at the top, you pass props through every intermediate component, even if they don't need the data. This makes components less reusable and harder to maintain.\n\nSolutions:\n1. React Context: `createContext` + `useContext` to share data without prop drilling.\n2. State management: Redux, Zustand, Jotai, Recoil for global state.\n3. Component composition: restructuring to avoid deep nesting.\n4. Custom hooks with context: encapsulate the context logic.\n\nContext is good for theme, auth, locale, and other app-wide data. For frequently updated state, context can cause unnecessary re-renders — use state management or splitting contexts.",
    bestAnswer: "Prop drilling occurs when you pass props through intermediate components that don't need them, just to reach deeply nested children. It makes components tightly coupled and hard to maintain.\n\n**Alternatives:**\n1. **React Context** — for app-wide data (theme, auth, locale):\n```jsx\nconst ThemeContext = createContext('light');\n// Provider at top, useContext() in any descendant\n```\n2. **State management libraries** — Redux, Zustand, Jotai, Recoil for complex global state.\n3. **Component composition** — restructure so data doesn't need to travel as far.\n4. **Custom hooks** — encapsulate state logic and share via context.\n\n**When to use what:**\n- Context: theme, auth, locale — rarely changing values.\n- Zustand/Jotai: frequently updated shared state with selective re-rendering.\n- Redux: complex state logic, many actions, need for middleware.\n- Avoid context for rapidly changing state (causes all consumers to re-render).",
    alternativeAnswers: [
      "Zustand and Jotai are lightweight alternatives to Redux that solve the re-render problem through selective subscription — only components that use specific state slices re-render.",
      "Component composition can sometimes eliminate prop drilling entirely — for example, passing render props or children instead of data props."
    ],
    commonMistakes: [
      "Using Context for all shared state, including frequently changing data, which causes unnecessary re-renders in all consumers.",
      "Over-engineering the solution — sometimes prop drilling through 1-2 levels is fine and simpler than adding context or a store.",
      "Not splitting context providers for different concerns (theme vs auth vs data) which can cause cascading re-renders."
    ],
    followUpQuestions: [
      "How does React Context cause unnecessary re-renders and how do you mitigate it?",
      "When would you choose Zustand over Redux?",
      "How do you split context to avoid cascading re-renders?"
    ],
    relatedQuestionIds: ["fe-042", "fe-057"],
    references: [
      { title: "React Passing Data Deeply", url: "https://react.dev/learn/passing-data-deeply-with-context" },
      { title: "React Context", url: "https://react.dev/reference/react/createContext" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-041",
    title: "What are React custom hooks?",
    content: "What are custom hooks in React? How do you create one? What are the rules and best practices?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "React",
    category: "React Hooks",
    companyTags: ["Meta", "Google", "Amazon", "Vercel", "Shopify"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Custom hooks are JavaScript functions that use other hooks and can be shared between components. They start with 'use' and follow the Rules of Hooks. They encapsulate stateful logic for reuse without changing component hierarchy.",
    detailedExplanation: "Custom hooks extract component logic into reusable functions:\n```javascript\nfunction useWindowSize() {\n  const [size, setSize] = useState({ width: 0, height: 0 });\n  useEffect(() => {\n    const handler = () => setSize({ width: window.innerWidth, height: window.innerHeight });\n    window.addEventListener('resize', handler);\n    return () => window.removeEventListener('resize', handler);\n  }, []);\n  return size;\n}\n```\n\nRules: (1) start with 'use', (2) only call at top level, (3) only from React functions. Each component gets its own hook state — hooks don't share state between components.\n\nCustom hooks enable: logic reuse without HOCs or render props, separation of concerns, and testability.",
    bestAnswer: "Custom hooks are reusable functions that use React's built-in hooks. They encapsulate stateful logic that can be shared across components.\n\n```javascript\n// Custom hook\nfunction useFetch(url) {\n  const [data, setData] = useState(null);\n  const [loading, setLoading] = useState(true);\n  const [error, setError] = useState(null);\n  useEffect(() => {\n    fetch(url)\n      .then(res => res.json())\n      .then(setData)\n      .catch(setError)\n      .finally(() => setLoading(false));\n  }, [url]);\n  return { data, loading, error };\n}\n\n// Usage\nfunction UserProfile({ userId }) {\n  const { data, loading } = useFetch(`/api/users/${userId}`);\n  if (loading) return <Spinner />;\n  return <div>{data.name}</div>;\n}\n```\n\nBest practices:\n- Start with 'use' prefix.\n- Return an object for multiple values.\n- Accept parameters for configurability.\n- Extract one concern per hook.\n- Test hooks with React Testing Library's `renderHook`.",
    alternativeAnswers: [
      "Custom hooks can call other custom hooks, creating a composition hierarchy similar to component composition.",
      "Libraries like React Query (TanStack Query), SWR, and usehooks.com provide battle-tested custom hooks for common patterns."
    ],
    commonMistakes: [
      "Creating a 'god hook' that does too many things — each hook should have a single responsibility.",
      "Not cleaning up side effects in useEffect (event listeners, timers, subscriptions).",
      "Assuming hooks share state across components — each component call creates independent hook state."
    ],
    followUpQuestions: [
      "How do you test custom hooks with React Testing Library?",
      "How do you handle error boundaries with custom hooks?",
      "How do libraries like React Query differ from custom fetch hooks?"
    ],
    relatedQuestionIds: ["fe-038", "fe-037"],
    references: [
      { title: "React Custom Hooks", url: "https://react.dev/learn/reusing-logic-with-custom-hooks" },
      { title: "usehooks.com", url: "https://usehooks.com/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-042",
    title: "What is React Context and when should you use it?",
    content: "How does React Context work? When should you use it versus state management libraries?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "React",
    category: "React Patterns",
    companyTags: ["Meta", "Google", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "React Context provides a way to pass data through the component tree without prop drilling. It uses a Provider-Consumer pattern. Good for infrequently changing data like theme, auth, and locale. Not ideal for frequently updated state due to re-render behavior.",
    detailedExplanation: "Context is created with `createContext(defaultValue)`. A Provider wraps part of the tree and provides a value. Consumers use `useContext(MyContext)` to access the value.\n\n```javascript\nconst ThemeContext = createContext('light');\n\nfunction App() {\n  const [theme, setTheme] = useState('light');\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      <Main />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Button() {\n  const { theme } = useContext(ThemeContext);\n  return <button className={theme}>Click</button>;\n}\n```\n\nLimitations: when the Provider's value changes, ALL consumers re-render. For frequently changing state, this causes performance issues — use state management libraries instead.",
    bestAnswer: "React Context provides dependency injection for the component tree — data flows from Provider to any descendant without prop drilling.\n\n```jsx\nconst AuthContext = createContext(null);\n\nfunction App() {\n  const [user, setUser] = useState(null);\n  return (\n    <AuthContext.Provider value={{ user, setUser }}>\n      <Router />\n    </AuthContext.Provider>\n  );\n}\n\n// In any descendant:\nfunction Navbar() {\n  const { user } = useContext(AuthContext);\n  return <span>{user?.name}</span>;\n}\n```\n\n**Use Context for:** theme, auth, locale, feature flags — infrequently changing values.\n\n**Avoid Context for:** frequently changing state (form inputs, real-time data). When the Provider value changes, all consumers re-render, even if they don't use the changed part.\n\n**Alternatives:** Zustand (selective subscription, no re-render cascade), Jotai (atomic state), Redux (complex state with middleware).",
    alternativeAnswers: [
      "Splitting context into separate providers for different concerns (ThemeContext, AuthContext) reduces unnecessary re-renders — consumers only re-render when their specific context changes.",
      "useSyncExternalStore (React 18) is designed for subscribing to external stores with concurrent rendering support, offering better performance than Context for certain use cases."
    ],
    commonMistakes: [
      "Putting frequently changing state in context, causing all consumers to re-render on every change.",
      "Not memoizing the context value — `value={{ theme }}` creates a new object every render, re-rendering all consumers.",
      "Using context as a replacement for state management when a more specialized tool would be better."
    ],
    followUpQuestions: [
      "How do you prevent unnecessary re-renders with Context?",
      "What is useSyncExternalStore and how does it compare to Context?",
      "How do you split context to minimize re-renders?"
    ],
    relatedQuestionIds: ["fe-040", "fe-057"],
    references: [
      { title: "React Context", url: "https://react.dev/reference/react/createContext" },
      { title: "React useContext", url: "https://react.dev/reference/react/useContext" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-043",
    title: "Explain React's component lifecycle.",
    content: "What is the React component lifecycle? How do the phases (mounting, updating, unmounting) map to hooks?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "React",
    category: "React Fundamentals",
    companyTags: ["Meta", "Google", "Amazon"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "The React lifecycle has three phases: mounting (component appears), updating (props/state change), and unmounting (component disappears). In class components: componentDidMount, componentDidUpdate, componentWillUnmount. In hooks: useEffect with different dependency patterns.",
    detailedExplanation: "Class component lifecycle methods:\n- Mounting: `constructor`, `render`, `componentDidMount`\n- Updating: `shouldComponentUpdate`, `render`, `componentDidUpdate`\n- Unmounting: `componentWillUnmount`\n- Error: `componentDidCatch`, `getDerivedStateFromError`\n\nHooks equivalents:\n- Mount: `useEffect(() => {...}, [])`\n- Update: `useEffect(() => {...}, [deps])`\n- Unmount: return cleanup from useEffect\n- Layout effects: `useLayoutEffect` (before paint)\n\nThe render phase is pure and can be called multiple times. The commit phase is when React applies changes to the DOM (synchronous).",
    bestAnswer: "React components go through three lifecycle phases:\n\n**Mounting**: component is created and inserted into the DOM.\n- Class: `constructor → render → componentDidMount`\n- Hooks: `useState` initial → `useEffect(() => {...}, [])`\n\n**Updating**: re-rendered due to props, state, or parent re-render.\n- Class: `shouldComponentUpdate → render → componentDidUpdate`\n- Hooks: `useEffect(() => {...}, [deps])`\n\n**Unmounting**: removed from the DOM.\n- Class: `componentWillUnmount`\n- Hooks: cleanup function returned from useEffect\n\n**Error handling**:\n- Class: `componentDidCatch`\n- Hooks: `<ErrorBoundary>` (no hook equivalent)\n\nModern React encourages functional components with hooks. The lifecycle is implicit — `useEffect` with different dependency arrays handles mounting, updating, and cleanup.",
    alternativeAnswers: [
      "React 18's concurrent features add new lifecycle considerations: components may render multiple times before committing, so side effects should be in useEffect, not in the render body.",
      "getDerivedStateFromProps and getSnapshotBeforeUpdate are rarely used lifecycle methods that can usually be replaced with simpler patterns."
    ],
    commonMistakes: [
      "Putting side effects in the render body — they should be in useEffect or useLayoutEffect to avoid running on every render.",
      "Not understanding that useEffect cleanup runs before the next effect, not on unmount (though it also runs on unmount).",
      "Using class component lifecycle patterns in functional components without adapting to the hooks model."
    ],
    followUpQuestions: [
      "How does React's concurrent rendering affect the lifecycle?",
      "What is getDerivedStateFromProps and when would you use it?",
      "How do you handle errors in React components without class components?"
    ],
    relatedQuestionIds: ["fe-038", "fe-037"],
    references: [
      { title: "React Lifecycle", url: "https://react.dev/reference/react/Component#updating" },
      { title: "You Might Not Need an Effect", url: "https://react.dev/learn/you-might-not-need-an-effect" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-044",
    title: "What is `useMemo` and `useCallback`?",
    content: "What are `useMemo` and `useCallback` in React? When should you use them and when shouldn't you?",
    difficulty: "advanced",
    track: "frontend",
    topic: "React",
    category: "React Performance",
    companyTags: ["Meta", "Google", "Amazon", "Netflix"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "`useMemo` caches a computed value between re-renders, recomputing only when dependencies change. `useCallback` caches a function reference, preventing unnecessary child re-renders. Both are performance optimizations that should be used judiciously.",
    detailedExplanation: "`useMemo` memoizes a computed value:\n```javascript\nconst sorted = useMemo(() => items.sort(compareFn), [items]);\n```\n\n`useCallback` memoizes a function:\n```javascript\nconst handleClick = useCallback(() => {\n  setCount(c => c + 1);\n}, []);\n```\n\n`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`.\n\nWhen to use:\n- Expensive computations that shouldn't run every render.\n- Functions passed as props to memoized children to prevent re-renders.\n- Dependencies used in useEffect to avoid unnecessary effect runs.\n\nWhen NOT to use:\- Simple computations (the memoization overhead is worse).\n- Functions not passed as props.\n- Premature optimization without measuring first.",
    bestAnswer: "`useMemo` caches expensive computations:\n```javascript\n// Without useMemo: recomputes every render\nconst sorted = items.sort(compareFn);\n// With useMemo: only recomputes when items changes\nconst sorted = useMemo(() => items.sort(compareFn), [items]);\n```\n\n`useCallback` caches function references:\n```javascript\n// Without useCallback: new function every render → child re-renders\nconst onClick = () => handleClick(id);\n// With useCallback: same function reference → child doesn't re-render\nconst onClick = useCallback(() => handleClick(id), [id]);\n```\n\n**Use when:**\n- Passing callbacks to memoized children (`React.memo`).\n- Expensive computations (sorting large lists, complex calculations).\n- Dependencies in useEffect to avoid unnecessary effect triggers.\n\n**Don't use when:**\n- The computation is cheap (memoization overhead > benefit).\n- The component doesn't re-render frequently.\n- Without measuring — profile first, optimize second.",
    alternativeAnswers: [
      "React Compiler (React 19+) automatically memoizes values and functions, potentially making useMemo/useCallback unnecessary in the future.",
      "`useRef` can be used as an instance variable for values that don't trigger re-renders, which is sometimes more appropriate than useMemo."
    ],
    commonMistakes: [
      "Using useMemo/useCallback everywhere as a blanket optimization — they add complexity and can hurt performance for cheap operations.",
      "Forgetting that useMemo returns the memoized value (not a function), while useCallback returns the memoized function.",
      "Not including all dependencies, leading to stale values."
    ],
    followUpQuestions: [
      "How does React Compiler (React 19) change the need for useMemo/useCallback?",
      "How do you profile React component renders?",
      "What is React.memo and how does it interact with useCallback?"
    ],
    relatedQuestionIds: ["fe-061", "fe-038"],
    references: [
      { title: "React useMemo", url: "https://react.dev/reference/react/useMemo" },
      { title: "React useCallback", url: "https://react.dev/reference/react/useCallback" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-045",
    title: "What is React.memo and when should you use it?",
    content: "What does `React.memo` do? How does it differ from `shouldComponentUpdate` and `useMemo`?",
    difficulty: "advanced",
    track: "frontend",
    topic: "React",
    category: "React Performance",
    companyTags: ["Meta", "Google", "Amazon", "Netflix"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "React.memo is a higher-order component that skips re-rendering if props haven't changed (shallow comparison). It's the function component equivalent of shouldComponentUpdate. Combined with useCallback, it prevents unnecessary child re-renders.",
    detailedExplanation: "`React.memo(Component)` wraps a component to skip re-renders when props are shallowly equal to the previous render's props. Shallow comparison checks each prop with `Object.is()`.\n\n```javascript\nconst ExpensiveChild = React.memo(function Child({ onClick, data }) {\n  console.log('Child rendered');\n  return <button onClick={onClick}>{data.label}</button>;\n});\n```\n\nTo prevent re-renders: the parent must memoize the props passed to the memoized child.\n```javascript\nconst handleClick = useCallback(() => { /* ... */ }, []);\nreturn <ExpensiveChild onClick={handleClick} data={data} />;\n```\n\nCustom comparison function:\n```javascript\nReact.memo(Component, (prevProps, nextProps) => {\n  return prevProps.id === nextProps.id; // only re-render if id changes\n});\n```\n\nDon't overuse: React.memo has overhead and is only beneficial for expensive renders.",
    bestAnswer: "`React.memo` is a higher-order component that wraps a function component to skip re-renders when props are shallowly unchanged.\n\n```javascript\nconst ExpensiveList = React.memo(function List({ items }) {\n  // Expensive rendering...\n  return items.map(item => <Item key={item.id} {...item} />);\n});\n```\n\n**How it works:** On each parent re-render, React compares new props to old props using shallow equality (`Object.is` for each prop). If all props are equal, the component is skipped entirely.\n\n**To be effective, parents must also memoize props:**\n```javascript\nconst MemoizedChild = React.memo(Child);\n// Parent:\nconst handleClick = useCallback(() => doSomething(id), [id]);\n<MemoizedChild onClick={handleClick} /> // won't re-render if handleClick reference is stable\n```\n\n**Custom comparator:**\n```javascript\nReact.memo(Child, (prev, next) => prev.id === next.id);\n```\n\n**Use for:** expensive components, lists with many items, components passed as props to other memoized components. **Don't use for:** cheap renders, components that always re-render anyway.",
    alternativeAnswers: [
      "React Compiler (React 19+) automatically applies memoization, making manual React.memo unnecessary in many cases.",
      "`shouldComponentUpdate` in class components serves the same purpose as React.memo but gives you more control over the comparison."
    ],
    commonMistakes: [
      "Using React.memo without memoizing props — a new object/array/function prop every render defeats the purpose.",
      "Memoizing every component — the comparison overhead can be worse than a simple re-render for cheap components.",
      "Forgetting that React.memo uses shallow comparison — deeply nested objects with the same values are considered different."
    ],
    followUpQuestions: [
      "How does React Compiler change the need for React.memo?",
      "How do you memoize objects and arrays passed as props?",
      "What is the performance cost of React.memo's comparison?"
    ],
    relatedQuestionIds: ["fe-044", "fe-061"],
    references: [
      { title: "React.memo", url: "https://react.dev/reference/react/memo" },
      { title: "Optimizing Re-rendering", url: "https://react.dev/reference/react/memo#alternatives" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-046",
    title: "What are React fragments and when would you use them?",
    content: "What are React Fragments? When would you use `<React.Fragment>` versus a `<div>` wrapper?",
    difficulty: "beginner",
    track: "frontend",
    topic: "React",
    category: "React Fundamentals",
    companyTags: ["Google", "Amazon", "Apple"],
    interviewRound: "Phone Screen",
    frequency: 3,
    expectedAnswer: "Fragments let you group multiple elements without adding an extra DOM node. They're useful when a component needs to return multiple elements but you don't want to introduce a wrapper div that affects layout or styling.",
    detailedExplanation: "React components must return a single root element. Without fragments, you'd need a wrapper div:\n```jsx\n// With wrapper div (adds unnecessary DOM node)\nreturn (\n  <div>\n    <dt>Term</dt>\n    <dd>Definition</dd>\n  </div>\n);\n```\n\nWith fragments:\n```jsx\nreturn (\n  <>\n    <dt>Term</dt>\n    <dd>Definition</dd>\n  </>\n);\n```\n\nFragments don't create DOM elements, so they don't affect layout, styling, or accessibility. Short syntax `<>...</>` doesn't support keys. Use `<React.Fragment key={...}>` when mapping lists.",
    bestAnswer: "Fragments group elements without adding DOM nodes. They solve the problem of returning multiple elements from a component without introducing wrapper divs.\n\n```jsx\n// Bad: adds unnecessary <div> that can break table/list layout\nfunction TableRow() {\n  return <div><td>Cell 1</td><td>Cell 2</td></div>;\n}\n\n// Good: no extra DOM node\nfunction TableRow() {\n  return <><td>Cell 1</td><td>Cell 2</td></>;\n}\n```\n\n**Use fragments when:**\n- A component needs to return multiple elements.\n- Wrapper divs would break layout (tables, flex, grid).\n- Adding a div would affect styling or accessibility.\n\n**Syntax:**\n- `<>...</>` — short syntax, no key support.\n- `<React.Fragment key={id}>...</Fragment>` — full syntax, supports keys (needed in lists).",
    alternativeAnswers: [
      "Fragments are invisible in the DOM — they render their children directly without a wrapping element, unlike divs which create visible nodes.",
      "Custom components that return multiple elements don't need fragments at the component level — the parent handles the grouping."
    ],
    commonMistakes: [
      "Using `<div>` wrappers when fragments would suffice, adding unnecessary DOM nodes that affect layout.",
      "Using short fragment syntax `<>` with keys — it doesn't support the key prop; use `<React.Fragment key={...}>` instead.",
      "Overusing fragments — sometimes a semantic wrapper like `<section>`, `<ul>`, or `<article>` is more appropriate."
    ],
    followUpQuestions: [
      "How do fragments affect the virtual DOM diffing process?",
      "When would you use a semantic wrapper instead of a fragment?",
      "How do fragments work with React Router's Switch or Routes?"
    ],
    relatedQuestionIds: ["fe-037", "fe-002"],
    references: [
      { title: "React Fragments", url: "https://react.dev/reference/react/Fragment" },
      { title: "Fragments in JSX", url: "https://react.dev/learn/conditional-rendering#fragment" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-047",
    title: "What is the React Fiber architecture?",
    content: "Explain React Fiber. What problems does it solve? What features does it enable?",
    difficulty: "advanced",
    track: "frontend",
    topic: "React",
    category: "React Internals",
    companyTags: ["Meta", "Google", "Netflix"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "React Fiber is the reconciliation engine introduced in React 16. It represents each component as a fiber node with linked lists, enabling incremental rendering, prioritization, and pausing. It enables concurrent features like Suspense and transitions.",
    detailedExplanation: "Fiber is React's reimplemented core algorithm. Each fiber node represents a unit of work with:\n- Type (function, class, host element)\n- State node (instance)\n- Return (parent fiber)\n- Child (first child fiber)\n- Sibling (next sibling fiber)\n- Effect tag (placement, update, deletion)\n\nFiber enables:\n1. Incremental rendering: work can be split across multiple frames.\n2. Priority scheduling: urgent updates (user input) can interrupt low-priority work (data fetching).\n3. Pausing and resuming: React can pause rendering and resume later.\n4. Concurrency: multiple versions of the UI can be in progress simultaneously.\n\nFeatures enabled by Fiber: Suspense, useTransition, useDeferredValue, startTransition, and React 18's concurrent rendering.",
    bestAnswer: "React Fiber is the reconciliation engine (React 16+) that restructured React's core algorithm using a linked-list tree structure.\n\n**What each fiber node contains:**\n- Component type, state, props\n- Return pointer (parent), child pointer, sibling pointer\n- Effect tag (what DOM operation to perform)\n- Priority lane (update urgency)\n\n**Key improvements over the old stack reconciler:**\n1. **Incremental rendering**: break work into small units, yield to the browser between units.\n2. **Priority scheduling**: user input > animations > data updates.\n3. **Pausing and resuming**: can stop mid-render and resume later.\n4. **Concurrency**: render multiple UI versions simultaneously.\n\n**Enabled features:**\n- `useTransition` / `startTransition` — mark updates as non-urgent.\n- `useDeferredValue` — defer expensive renders.\n- `<Suspense>` — declarative loading states.\n- Automatic batching (React 18).\n\nFiber doesn't change the React API — it's an internal optimization engine.",
    alternativeAnswers: [
      "Fiber's linked-list structure (child/sibling/return pointers) enables efficient tree traversal without recursion, preventing stack overflow in deep component trees.",
      "The priority lanes model (React 18) assigns discrete lanes to different types of updates, enabling fine-grained scheduling."
    ],
    commonMistakes: [
      "Confusing Fiber with the virtual DOM — Fiber is the algorithm that processes the virtual DOM, not the virtual DOM itself.",
      "Assuming Fiber changes the React API — it's an internal implementation detail that enables new features.",
      "Not understanding that Fiber enables concurrent rendering by splitting work, not by using multiple threads."
    ],
    followUpQuestions: [
      "How do useTransition and useDeferredValue leverage Fiber?",
      "What are priority lanes in React 18?",
      "How does Suspense work internally with Fiber?"
    ],
    relatedQuestionIds: ["fe-037", "fe-061"],
    references: [
      { title: "React Fiber Architecture", url: "https://github.com/acdlite/react-fiber-architecture" },
      { title: "React 18 Concurrent Features", url: "https://react.dev/reference/react/useTransition" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-048",
    title: "What are React Server Components?",
    content: "What are React Server Components (RSC)? How do they differ from client components? What are their benefits?",
    difficulty: "expert",
    track: "frontend",
    topic: "React",
    category: "React Advanced",
    companyTags: ["Meta", "Vercel", "Netflix", "Shopify"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "React Server Components run on the server and send rendered HTML to the client. They cannot use hooks, event handlers, or browser APIs. Client components run in the browser as usual. RSC reduce bundle size, enable direct data access, and improve performance.",
    detailedExplanation: "Server Components (RSC) render on the server and send serialized output to the client. They can:\n- Access databases, file systems, and APIs directly.\n- Import server-only libraries.\n- Reduce client bundle size (no component code sent to browser).\n\nClient Components (`'use client'`) run in the browser and can use hooks, event handlers, and browser APIs.\n\nIn Next.js App Router, components are Server Components by default. To make a component a Client Component, add `'use client'` at the top of the file.\n\nServer Components can pass serializable data to Client Components as props. Client Components cannot be imported by Server Components (but can be rendered as children).",
    bestAnswer: "React Server Components (RSC) are components that render only on the server. They send their output as a serialized format to the client, where the client component tree hydrates.\n\n**Server Components can:**\n- Access databases, filesystems, environment variables.\n- Import server-only packages (no bundle bloat).\n- Be async (`async function ServerComponent() { const data = await db.query(); }`).\n\n**Server Components cannot:**\n- Use hooks (useState, useEffect).\n- Use event handlers (onClick).\n- Use browser APIs.\n- Be interactive.\n\n**Client Components** (`'use client'` directive) run in the browser with full interactivity.\n\n**Benefits:**\n1. Zero client-side JavaScript for server components.\n2. Direct database access without API routes.\n3. Streaming and Suspense integration.\n4. Automatic code splitting.\n\nIn Next.js 13+ (App Router), all components are Server Components by default.",
    alternativeAnswers: [
      "Server Actions (React 19) extend RSC to handle form submissions — functions marked with 'use server' can be called from client components, eliminating the need for API routes.",
      "Partial hydration means only client components are hydrated, not the entire page, significantly reducing client-side JavaScript."
    ],
    commonMistakes: [
      "Trying to use useState or onClick in a Server Component — it will error. Use 'use client' for interactive components.",
      "Importing a Client Component in a Server Component and trying to pass non-serializable props (functions, class instances).",
      "Not understanding the boundary — Server Components can render Client Components, but Client Components cannot import Server Components."
    ],
    followUpQuestions: [
      "How do Server Actions work with React Server Components?",
      "How does partial hydration work in the App Router?",
      "What are the serialization boundaries between server and client components?"
    ],
    relatedQuestionIds: ["fe-049", "fe-062"],
    references: [
      { title: "React Server Components", url: "https://react.dev/reference/rsc/server-components" },
      { title: "Next.js App Router", url: "https://nextjs.org/docs/app/building-your-application/rendering" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Next.js (fe-049 – fe-056)
  // ──────────────────────────────────────────────
  {
    id: "fe-049",
    title: "What is the difference between the Pages Router and App Router in Next.js?",
    content: "What are the differences between the Next.js Pages Router and App Router? Which should you choose for a new project?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Next.js",
    category: "Next.js Fundamentals",
    companyTags: ["Vercel", "Google", "Amazon", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "The Pages Router (pages/) uses getServerSideProps/getStaticProps for data fetching and runs only on the client after hydration. The App Router (app/) uses React Server Components by default, supports nested layouts, streaming, and server-side data fetching without API routes.",
    detailedExplanation: "Pages Router (legacy, still stable):\n- File-based routing in `pages/` directory.\n- Data fetching: `getServerSideProps`, `getStaticProps`, `getStaticPaths`.\n- No server components — all components run on client after hydration.\n- Layouts are per-page, not nested.\n\nApp Router (recommended for new projects):\n- File-based routing in `app/` directory.\n- React Server Components by default.\n- Nested layouts with `layout.tsx`.\n- Server-side data fetching without API routes (async components).\n- Streaming with Suspense.\n- Server Actions for form handling.\n- Uses `loading.tsx`, `error.tsx`, `not-found.tsx` for loading/error states.",
    bestAnswer: "**Pages Router** (`pages/`):\n- File-based routing with `getServerSideProps`, `getStaticProps`.\n- All components are client components.\n- Layouts are per-page (no nesting).\n- Stable and well-documented.\n\n**App Router** (`app/`):\n- React Server Components by default.\n- Nested layouts (`layout.tsx` at each route level).\n- Async server components for direct data fetching.\n- Streaming with `<Suspense>` and `loading.tsx`.\n- Server Actions for mutations.\n- Route groups, parallel routes, intercepting routes.\n\n**Recommendation:** App Router for new projects. It's the future of Next.js with better performance, DX, and features. Pages Router for existing projects or when you need specific Pages Router features.\n\nKey difference: Pages Router sends JavaScript for all components to the client; App Router sends only client component JavaScript, reducing bundle size.",
    alternativeAnswers: [
      "The App Router uses React 18's streaming and Suspense features, enabling progressive page rendering where HTML streams as data becomes available.",
      "Route groups `(group)` and parallel routes `@slot` are App Router features that enable complex layouts without nested routes."
    ],
    commonMistakes: [
      "Assuming the App Router is just a rebranding — it's a fundamentally different rendering architecture with Server Components.",
      "Trying to use getServerSideProps/getStaticProps in the App Router — these don't exist there; use async server components instead.",
      "Not understanding that 'use client' is a boundary, not a directive — it marks the client-component subtree, not the file."
    ],
    followUpQuestions: [
      "How do nested layouts work in the App Router?",
      "What are Server Actions and how do they replace API routes?",
      "How does streaming work in the App Router?"
    ],
    relatedQuestionIds: ["fe-048", "fe-050"],
    references: [
      { title: "Next.js App Router", url: "https://nextjs.org/docs/app" },
      { title: "Next.js Pages Router", url: "https://nextjs.org/docs/pages" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-050",
    title: "How does data fetching work in the Next.js App Router?",
    content: "How do you fetch data in the Next.js App Router? What are the patterns for server components, caching, and revalidation?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Next.js",
    category: "Next.js Data Fetching",
    companyTags: ["Vercel", "Google", "Amazon"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "In the App Router, data fetching happens directly in server components using async/await. Components can fetch data, render it, and the client never sees the fetching code. Next.js provides caching, revalidation, and streaming patterns.",
    detailedExplanation: "Server components can be async and fetch directly:\n```tsx\nasync function UserList() {\n  const users = await fetch('https://api.example.com/users');\n  const data = await users.json();\n  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;\n}\n```\n\nCaching with `fetch` options:\n```tsx\nawait fetch(url, { next: { revalidate: 3600 } }); // ISR: revalidate every hour\nawait fetch(url, { next: { tags: ['users'] } }); // tag-based revalidation\n```\n\nServer-side-only databases: connect directly in server components.\n\nStreaming: wrap slow data fetches in `<Suspense>` boundaries with `loading.tsx` fallbacks.",
    bestAnswer: "In the App Router, data fetching is done directly in async server components:\n\n```tsx\n// app/users/page.tsx\nasync function UsersPage() {\n  const users = await db.users.findMany();\n  return (\n    <ul>\n      {users.map(user => <li key={user.id}>{user.name}</li>)}\n    </ul>\n  );\n}\n```\n\n**Caching patterns:**\n- `fetch(url, { next: { revalidate: 3600 } })` — ISR: revalidate every hour.\n- `fetch(url, { next: { tags: ['users'] } })` — tag-based revalidation.\n- `revalidateTag('users')` — on-demand revalidation from Server Actions.\n- `fetch(url, { cache: 'no-store' })` — always fresh, no cache.\n\n**Streaming:**\n```tsx\n<Suspense fallback={<Skeleton />}>\n  <SlowDataComponent />\n</Suspense>\n```\n\n**Direct database access:** server components can connect to databases directly — no API layer needed.\n\n**Route-level:** `loading.tsx` provides instant loading UI, `error.tsx` catches errors, `not-found.tsx` for 404.",
    alternativeAnswers: [
      "use client-side fetching (SWR, React Query) in Client Components when you need real-time updates or user-triggered refetches.",
      "Server Actions can mutate data and trigger revalidation: `revalidatePath('/users')` after creating/updating data."
    ],
    commonMistakes: [
      "Using getServerSideProps/getStaticProps — these don't exist in the App Router.",
      "Fetching in client components when server components could handle it, sending unnecessary data over the network.",
      "Not using Suspense boundaries for slow data fetches, causing the entire page to wait."
    ],
    followUpQuestions: [
      "How does on-demand revalidation work with Server Actions?",
      "When would you use client-side data fetching instead of server components?",
      "How does caching work across renders in the App Router?"
    ],
    relatedQuestionIds: ["fe-049", "fe-048"],
    references: [
      { title: "Next.js Data Fetching", url: "https://nextjs.org/docs/app/building-your-application/data-fetching" },
      { title: "Next.js Caching", url: "https://nextjs.org/docs/app/building-your-application/caching" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-051",
    title: "What are Next.js Server Actions?",
    content: "What are Server Actions in Next.js? How do they replace API routes for mutations?",
    difficulty: "advanced",
    track: "frontend",
    topic: "Next.js",
    category: "Next.js Advanced",
    companyTags: ["Vercel", "Google", "Amazon", "Stripe"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Server Actions are async functions that run on the server, callable from client components. They replace API routes for form submissions and mutations. Mark functions with 'use server' to make them server-only.",
    detailedExplanation: "Server Actions are defined with the 'use server' directive:\n```tsx\n// actions.ts\n'use server'\nexport async function createUser(formData: FormData) {\n  const name = formData.get('name') as string;\n  await db.users.create({ data: { name } });\n  revalidatePath('/users');\n}\n```\n\nUsed in forms:\n```tsx\n<form action={createUser}>\n  <input name=\"name\" />\n  <button type=\"submit\">Create</button>\n</form>\n```\n\nOr called programmatically:\n```tsx\nconst [isPending, startTransition] = useTransition();\nstartTransition(async () => {\n  await createUser(formData);\n});\n```\n\nBenefits: no manual fetch/API route code, automatic revalidation, progressive enhancement (forms work without JS), and streaming responses.",
    bestAnswer: "Server Actions are functions marked with `'use server'` that execute on the server. They enable mutations directly from client components without creating API routes.\n\n```tsx\n// app/actions.ts\n'use server'\n\nexport async function addTodo(formData: FormData) {\n  const text = formData.get('text') as string;\n  await db.todos.create({ data: { text } });\n  revalidatePath('/todos');\n}\n```\n\n**Usage in forms (progressive enhancement):**\n```tsx\n<form action={addTodo}>\n  <input name=\"text\" required />\n  <button>Add</button>\n</form>\n```\n\n**Programmatic usage:**\n```tsx\n'use client'\nfunction AddButton() {\n  const [isPending, startTransition] = useTransition();\n  return (\n    <button onClick={() => startTransition(() => addTodo(formData))}>\n      {isPending ? 'Adding...' : 'Add'}\n    </button>\n  );\n}\n```\n\n**Advantages over API routes:** no boilerplate, automatic revalidation, progressive enhancement, integrates with React transitions.",
    alternativeAnswers: [
      "Server Actions can return serializable values, enabling optimistic updates by passing the return value back to the client.",
      "Server Actions support cookies and headers for authentication, session management, and redirects."
    ],
    commonMistakes: [
      "Using 'use server' in client components — it's a module-level directive that marks all exported functions in the file as server-only.",
      "Not using revalidatePath/revalidateCache after mutations, causing stale data on subsequent page loads.",
      "Passing non-serializable data (functions, class instances) to Server Actions."
    ],
    followUpQuestions: [
      "How do Server Actions integrate with React transitions and useTransition?",
      "How do you handle authentication in Server Actions?",
      "How do Server Actions compare to tRPC or GraphQL mutations?"
    ],
    relatedQuestionIds: ["fe-049", "fe-050"],
    references: [
      { title: "Next.js Server Actions", url: "https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations" },
      { title: "React Server Actions", url: "https://react.dev/reference/rsc/use-server" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-052",
    title: "How does Next.js handle image optimization?",
    content: "How does the Next.js `Image` component work? What optimizations does it provide?",
    difficulty: "beginner",
    track: "frontend",
    topic: "Next.js",
    category: "Next.js Fundamentals",
    companyTags: ["Vercel", "Google", "Amazon", "Apple"],
    interviewRound: "Phone Screen",
    frequency: 3,
    expectedAnswer: "The Next.js `Image` component (`next/image`) automatically optimizes images: lazy loading, resizing for different devices, serving modern formats (WebP/AVIF), and preventing layout shift with aspect ratio preservation.",
    detailedExplanation: "The `next/image` component provides:\n1. **Automatic WebP/AVIF conversion**: serves modern formats to browsers that support them.\n2. **Lazy loading**: images load only when they enter the viewport.\n3. **Responsive sizing**: generates srcset for different viewport widths.\n4. **Layout shift prevention**: reserves space based on width/height or aspect ratio.\n5. **CDN optimization**: images can be cached and optimized at the edge.\n\n```tsx\nimport Image from 'next/image';\n\n<Image\n  src=\"/hero.jpg\"\n  width={800}\n  height={400}\n  alt=\"Hero image\"\n  priority // for above-the-fold images\n/>\n```\n\nThe `fill` prop makes the image fill its parent container. `sizes` prop tells the browser which image size to use.",
    bestAnswer: "The `next/image` component provides automatic image optimization:\n\n```tsx\nimport Image from 'next/image';\n\n// Fixed size\n<Image src=\"/photo.jpg\" width={400} height={300} alt=\"Photo\" />\n\n// Fill parent container\n<div style={{ position: 'relative', width: '100%', height: '300px' }}>\n  <Image src=\"/photo.jpg\" fill alt=\"Photo\" sizes=\"(max-width: 768px) 100vw, 50vw\" />\n</div>\n```\n\n**Optimizations:**\n1. Format conversion (WebP/AVIF) based on browser support.\n2. Lazy loading by default (`loading=\"lazy\"`).\n3. Responsive srcset generation for different viewports.\n4. Layout shift prevention with automatic aspect ratio.\n5. Size-based serving (avoids sending 4K images to mobile).\n6. Caching and edge optimization.\n\n**Priority:** use for above-the-fold images (hero, LCP) to skip lazy loading.\n**Placeholder:** `placeholder=\"blur\"` shows a blur-up effect while loading.",
    alternativeAnswers: [
      "The `sizes` prop is critical for performance — it tells the browser which image size to request, preventing oversized downloads on small screens.",
      "Next.js Image Optimization can use an external image loader (Cloudinary, imgix) instead of the built-in optimization."
    ],
    commonMistakes: [
      "Not providing width/height or fill, which causes layout shift and prevents optimization.",
      "Using priority on all images — it should only be used for above-the-fold/LCP images.",
      "Not using `sizes` with the `fill` prop, leading to suboptimal image selection."
    ],
    followUpQuestions: [
      "How do you configure a custom image loader for Cloudinary or imgix?",
      "What is the Largest Contentful Paint (LCP) and how does Image component help?",
      "How do you handle user-uploaded images with the Image component?"
    ],
    relatedQuestionIds: ["fe-063", "fe-013"],
    references: [
      { title: "Next.js Image", url: "https://nextjs.org/docs/app/building-your-application/optimizing/images" },
      { title: "MDN lazy loading", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-053",
    title: "What is Incremental Static Regeneration (ISR)?",
    content: "What is Incremental Static Regeneration in Next.js? How does it differ from SSR and SSG?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Next.js",
    category: "Next.js Data Fetching",
    companyTags: ["Vercel", "Google", "Amazon", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "ISR generates static pages at build time but regenerates them in the background after a specified time interval or on-demand. It combines the performance of static sites with the freshness of server-rendered pages.",
    detailedExplanation: "Three rendering strategies in Next.js:\n\n1. **SSG (Static Site Generation)**: pages generated at build time. Fast but stale until rebuild.\n2. **SSR (Server-Side Rendering)**: pages generated on every request. Fresh but slower.\n3. **ISR**: static pages that regenerate in the background.\n\nISR in Pages Router:\n```javascript\nexport async function getStaticProps() {\n  return {\n    props: { data },\n    revalidate: 60, // regenerate every 60 seconds\n  };\n}\n```\n\nISR in App Router:\n```typescript\nasync function Page() {\n  const data = await fetch(url, { next: { revalidate: 60 } });\n  // ...\n}\n```\n\nOn-demand revalidation: `revalidatePath('/products')` or `revalidateTag('products')` triggered from Server Actions or API routes.",
    bestAnswer: "ISR blends static generation with dynamic updates. Pages are statically generated at build time, then regenerated in the background after a time interval or on-demand.\n\n**Pages Router:**\n```javascript\nexport async function getStaticProps() {\n  const data = await fetchData();\n  return { props: { data }, revalidate: 60 };\n}\n```\n\n**App Router:**\n```typescript\nasync function ProductPage({ params }) {\n  const product = await fetch(`/api/products/${params.id}`, { next: { revalidate: 60 } });\n  // ...\n}\n```\n\n**ISR vs SSR vs SSG:**\n- SSG: built once, serves static HTML. Fastest but stale.\n- SSR: built per request. Fresh but slower.\n- ISR: built once, regenerated periodically. Fast AND fresh.\n\n**On-demand revalidation:**\n```typescript\n// In a Server Action\nawait revalidatePath('/products');\nawait revalidateTag('product-123');\n```\n\nISR is ideal for e-commerce, blogs, and CMS-driven sites where content changes frequently but doesn't need real-time freshness.",
    alternativeAnswers: [
      "Stale-while-revalidate: ISR serves the stale page immediately while regenerating in the background, so users always get a fast response.",
      "Tag-based revalidation provides more granular control than time-based — revalidate specific content when it changes, not on a fixed timer."
    ],
    commonMistakes: [
      "Confusing time-based revalidation with cache expiration — ISR serves stale content immediately while regenerating in the background.",
      "Not using on-demand revalidation for content that changes unpredictably (user actions, CMS updates).",
      "Setting revalidate too low (1-2 seconds) which defeats the purpose of static generation."
    ],
    followUpQuestions: [
      "How does on-demand revalidation work with Server Actions?",
      "What happens when a page is being regenerated and a user requests it?",
      "How do you handle ISR with authentication?"
    ],
    relatedQuestionIds: ["fe-050", "fe-049"],
    references: [
      { title: "Next.js ISR", url: "https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration" },
      { title: "Vercel ISR", url: "https://vercel.com/docs/incremental-static-regeneration" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-054",
    title: "How does Next.js middleware work?",
    content: "What is Next.js middleware? When and how would you use it?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Next.js",
    category: "Next.js Advanced",
    companyTags: ["Vercel", "Google", "Amazon"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Next.js middleware runs before a request is completed, allowing you to modify the response, rewrite URLs, redirect, set headers, or implement authentication. It's defined in middleware.ts at the project root.",
    detailedExplanation: "Middleware runs at the edge (before caching), allowing you to:\n- Redirect users based on conditions.\n- Rewrite URLs.\n- Set custom headers.\n- Implement authentication/authorization.\n- A/B testing.\n- Geolocation-based routing.\n\n```typescript\n// middleware.ts\nimport { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\n\nexport function middleware(request: NextRequest) {\n  const token = request.cookies.get('token');\n  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {\n    return NextResponse.redirect(new URL('/login', request.url));\n  }\n  return NextResponse.next();\n}\n\nexport const config = {\n  matcher: ['/dashboard/:path*', '/admin/:path*'],\n};\n```\n\nMiddleware runs on every matched request. It's lightweight and should be kept minimal.",
    bestAnswer: "Middleware runs before a request reaches the route handler, at the edge.\n\n```typescript\n// middleware.ts (project root)\nimport { NextResponse } from 'next/server';\nimport type { NextRequest } from 'next/server';\n\nexport function middleware(request: NextRequest) {\n  // Authentication check\n  const token = request.cookies.get('session');\n  if (!token && request.nextUrl.pathname.startsWith('/protected')) {\n    return NextResponse.redirect(new URL('/login', request.url));\n  }\n\n  // Add custom header\n  const response = NextResponse.next();\n  response.headers.set('x-request-id', crypto.randomUUID());\n  return response;\n}\n\n// Only run on specific paths\nexport const config = {\n  matcher: ['/protected/:path*', '/api/:path*'],\n};\n```\n\n**Use cases:** authentication, redirects, A/B testing, geolocation routing, headers, geolocation-based content.\n\n**Key:** middleware runs at the edge (before caching), is lightweight, and should not do heavy computation or database queries.",
    alternativeAnswers: [
      "Route Handlers (app/api/route.ts) are the App Router equivalent of API routes, while middleware handles request-level concerns before routing.",
      "The ` matcher ` config supports complex patterns: `/((?!api|_next/static|_next/image|favicon.ico).*)` excludes specific paths."
    ],
    commonMistakes: [
      "Doing heavy computation or database queries in middleware — it should be lightweight and fast since it runs on every matched request.",
      "Not using the matcher config, causing middleware to run on every request including static assets.",
      "Forgetting that middleware runs at the edge, so it has access to request/response but not Node.js APIs."
    ],
    followUpQuestions: [
      "How do you implement A/B testing with middleware?",
      "How does middleware interact with caching and ISR?",
      "What are edge functions and how do they relate to middleware?"
    ],
    relatedQuestionIds: ["fe-049", "fe-055"],
    references: [
      { title: "Next.js Middleware", url: "https://nextjs.org/docs/app/building-your-application/routing/middleware" },
      { title: "Edge Runtime", url: "https://nextjs.org/docs/app/building-your-application/rendering/edge-and-nodejs-runtimes" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-055",
    title: "What are parallel routes and intercepted routes in Next.js?",
    content: "What are parallel routes and intercepted routes in Next.js App Router? When would you use them?",
    difficulty: "advanced",
    track: "frontend",
    topic: "Next.js",
    category: "Next.js Advanced",
    companyTags: ["Vercel", "Google"],
    interviewRound: "On-site",
    frequency: 2,
    expectedAnswer: "Parallel routes allow rendering multiple pages simultaneously in the same layout using named slots (`@analytics`, `@team`). Intercepted routes show a route's content while keeping another route visible in the background, using `(.)` convention.",
    detailedExplanation: "Parallel routes use named slots in the layout:\n```tsx\n// app/layout.tsx\nexport default function Layout({ children, analytics, team }) {\n  return (\n    <div>\n      {children}\n      <div>{analytics}</div>\n      <div>{team}</div>\n    </div>\n  );\n}\n```\nEach slot has its own loading and error states, and each can be independently loaded or show `default.tsx`.\n\nIntercepted routes use `(.)` to intercept a route while keeping the current page visible:\n```\napp/\n  feed/\n    page.tsx\n  photo/\n    (.)photo/\n      [id]/\n        page.tsx  // intercepts /photo/123, shows as modal over /feed\n```\n\nThis enables patterns like modals over list pages without losing state.",
    bestAnswer: "**Parallel routes** render multiple pages simultaneously in one layout using named slots:\n\n```tsx\n// app/layout.tsx\nexport default function Layout({ children, analytics }) {\n  return <>{children}{analytics}</>;\n}\n// app/analytics/page.tsx → renders in @analytics slot\n```\nEach slot can have its own loading/error states. Useful for dashboards, split views, or showing multiple pages side by side.\n\n**Intercepted routes** display a route's content over the current page:\n```\napp/\n  feed/page.tsx           // /feed\n  photo/[id]/(.)photo/   // intercepts /photo/[id]\n    page.tsx             // renders as modal over /feed\n```\n\nUse `(.)` for same-level interception, `(..)` for one level up, and `(..)(..)` for two levels up.\n\n**Common pattern:** clicking a photo in a feed shows a modal (intercepted route) instead of navigating away. The URL changes but the feed stays visible behind the modal.",
    alternativeAnswers: [
      "Parallel routes enable advanced dashboard layouts where sidebar, main content, and analytics panel each have independent routes and loading states.",
      "The `default.tsx` file in a slot provides fallback content when the slot's URL doesn't match — essential for intercepted routes' unmatched state."
    ],
    commonMistakes: [
      "Using parallel routes when nested layouts or route groups would be simpler.",
      "Forgetting that intercepted routes need `default.tsx` to handle the unmatched state when the user navigates directly to the intercepted URL.",
      "Overcomplicating route structure when simpler solutions exist for most use cases."
    ],
    followUpQuestions: [
      "How do you implement a modal-over-list pattern with intercepted routes?",
      "When would you use parallel routes versus regular nested routes?",
      "How do intercepted routes handle browser navigation (back/forward)?"
    ],
    relatedQuestionIds: ["fe-049", "fe-050"],
    references: [
      { title: "Parallel Routes", url: "https://nextjs.org/docs/app/building-your-application/routing/parallel-routes" },
      { title: "Intercepted Routes", url: "https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-056",
    title: "How does Next.js handle API routes?",
    content: "How do you create API routes in Next.js? What are the differences between Pages Router and App Router API routes?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Next.js",
    category: "Next.js Fundamentals",
    companyTags: ["Vercel", "Google", "Amazon"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Pages Router: files in `pages/api/` export handler functions. App Router: files in `app/api/` export named functions for each HTTP method (GET, POST, etc.). App Router API routes can be edge or Node.js runtime.",
    detailedExplanation: "Pages Router API routes:\n```javascript\n// pages/api/users.js\nexport default function handler(req, res) {\n  if (req.method === 'GET') {\n    res.status(200).json({ users: [] });\n  } else {\n    res.status(405).end();\n  }\n}\n```\n\nApp Router Route Handlers:\n```typescript\n// app/api/users/route.ts\nimport { NextResponse } from 'next/server';\n\nexport async function GET() {\n  const users = await db.users.findMany();\n  return NextResponse.json(users);\n}\n\nexport async function POST(request: Request) {\n  const body = await request.json();\n  const user = await db.users.create({ data: body });\n  return NextResponse.json(user, { status: 201 });\n}\n```\n\nRoute Handlers support: Edge runtime, streaming responses, Web Request/Response APIs.",
    bestAnswer: "**Pages Router** (`pages/api/`):\n```javascript\nexport default function handler(req, res) {\n  res.status(200).json({ message: 'Hello' });\n}\n```\nSingle function per file, manual method checking.\n\n**App Router** (`app/api/`):\n```typescript\n// app/api/users/route.ts\nexport async function GET(request: Request) {\n  return NextResponse.json({ users: [] });\n}\n\nexport async function POST(request: Request) {\n  const body = await request.json();\n  return NextResponse.json({ created: true }, { status: 201 });\n}\n```\nNamed exports per HTTP method — cleaner, type-safe.\n\n**Key differences:**\n- App Router uses Web-standard Request/Response.\n- Supports Edge runtime (`export const runtime = 'edge'`).\n- Can use streaming responses.\n- Integrates with Server Actions for form mutations.\n\n**Note:** Server Actions are often preferred over API routes for mutations in the App Router.",
    alternativeAnswers: [
      "Route Handlers can use dynamic segments: `app/api/users/[id]/route.ts` with `params` for dynamic routing.",
      "The Edge runtime for Route Handlers enables low-latency responses at the edge, ideal for geographically distributed APIs."
    ],
    commonMistakes: [
      "Using Pages Router API routes in a new App Router project — prefer App Router Route Handlers.",
      "Not using NextResponse — it handles headers, cookies, and redirects more conveniently than raw Response.",
      "Forgetting that API routes in the App Router use Web-standard APIs, not Node.js-specific APIs."
    ],
    followUpQuestions: [
      "When would you use API routes versus Server Actions?",
      "How do you handle authentication in API routes?",
      "How does the Edge runtime differ from Node.js runtime for API routes?"
    ],
    relatedQuestionIds: ["fe-051", "fe-054"],
    references: [
      { title: "Next.js Route Handlers", url: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers" },
      { title: "Next.js API Routes", url: "https://nextjs.org/docs/pages/building-your-application/routing/api-routes" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // State Management (fe-057 – fe-060)
  // ──────────────────────────────────────────────
  {
    id: "fe-057",
    title: "What are the trade-offs between Redux, Zustand, and Jotai?",
    content: "Compare Redux, Zustand, and Jotai for state management in React. What are the trade-offs of each approach?",
    difficulty: "advanced",
    track: "frontend",
    topic: "State Management",
    category: "State Management",
    companyTags: ["Meta", "Google", "Amazon", "Netflix"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "Redux is a predictable state container with actions, reducers, and middleware. Zustand is a minimal store with hooks-based API and selective re-rendering. Jotai is atomic state management where each piece of state is an independent atom.",
    detailedExplanation: "Redux (with Redux Toolkit):\n- Centralized store with strict unidirectional data flow.\n- Predictable state changes via pure reducer functions.\n- Middleware for async operations (thunk, saga).\n- DevTools for debugging and time-travel.\n- More boilerplate but well-established patterns.\n\nZustand:\n- Minimal API: `create` function returns a hook.\n- Selective re-rendering via selector functions.\n- No providers or boilerplate.\n- Built-in middleware (devtools, persist, immer).\n- Good for medium-complexity state.\n\nJotai:\- Atomic model: each atom is independent.\n- Only components that read a specific atom re-render.\n- Derived/computed atoms for derived state.\n- No actions/reducers — direct atom updates.\n- Best for fine-grained reactivity.",
    bestAnswer: "**Redux (Toolkit)**:\n- Predictable: strict unidirectional data flow, pure reducers.\n- DevTools: time-travel debugging, action logging.\n- Best for: complex apps with many interactions, team projects needing clear patterns.\n- Downside: more boilerplate, steeper learning curve.\n\n**Zustand**:\n- Minimal: `const useStore = create((set) => ({ count: 0, inc: () => set(s => ({ count: s.count + 1 })) }))`.\n- Selective rendering: `const count = useStore(s => s.count)` — only re-renders when count changes.\n- Best for: small to medium apps, teams wanting simplicity.\n- Downside: less structured for complex state logic.\n\n**Jotai**:\n- Atomic: `const countAtom = atom(0)`.\n- Fine-grained: only components using specific atoms re-render.\n- Derived: `const doubleAtom = atom((get) => get(countAtom) * 2)`.\n- Best for: apps with many independent state pieces, performance-critical UIs.\n- Downside: less familiar mental model, can be harder to debug.\n\nChoose based on app complexity, team experience, and performance needs.",
    alternativeAnswers: [
      "Recoil (Meta's atomic state) is similar to Jotai but with more features. Jotai is a simpler, more lightweight alternative.",
      "Signals (TC39 proposal) and frameworks like SolidJS/Svelte use fine-grained reactivity natively, which is where the industry is heading."
    ],
    commonMistakes: [
      "Choosing Redux for a simple app where Zustand or Context would suffice.",
      "Not considering the learning curve — Redux has more concepts (actions, reducers, middleware, thunks) than Zustand/Jotai.",
      "Ignoring bundle size — Redux + RTK is larger than Zustand or Jotai."
    ],
    followUpQuestions: [
      "When would you choose Redux over Zustand for a new project?",
      "How does Zustand's selective re-rendering compare to React Context?",
      "How do you persist state with Zustand?"
    ],
    relatedQuestionIds: ["fe-040", "fe-042"],
    references: [
      { title: "Redux Toolkit", url: "https://redux-toolkit.js.org/" },
      { title: "Zustand", url: "https://github.com/pmndrs/zustand" },
      { title: "Jotai", url: "https://jotai.org/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-058",
    title: "What is the Flux architecture pattern?",
    content: "What is the Flux architecture? How does it differ from MVC? How does Redux implement Flux?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "State Management",
    category: "State Management",
    companyTags: ["Meta", "Google", "Amazon"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "Flux is a unidirectional data flow architecture: Action → Dispatcher → Store → View. Views dispatch actions, the dispatcher sends them to stores, stores update and notify views. Unlike MVC, data flows in one direction, making state changes predictable.",
    detailedExplanation: "Flux components:\n1. **View**: React components that dispatch actions and render based on store state.\n2. **Action**: plain objects describing what happened (type + payload).\n3. **Dispatcher**: central hub that receives actions and broadcasts to stores.\n4. **Store**: holds application state and logic, notifies views of changes.\n\nData flow: View → Action → Dispatcher → Store → View (one direction).\n\nContrast with MVC: in MVC, models, views, and controllers can update each other, creating complex bidirectional dependencies. Flux eliminates this with strict unidirectional flow.\n\nRedux simplifies Flux: it merges the dispatcher and store, uses pure reducer functions, and adds a single store with immutable state updates.",
    bestAnswer: "Flux enforces unidirectional data flow:\n\n```\nView → dispatch(Action) → Dispatcher → Store → View (notify)\n```\n\n1. **View** (React component) dispatches an action when something happens.\n2. **Action** describes the event: `{ type: 'ADD_TODO', text: 'Learn Flux' }`.\n3. **Dispatcher** broadcasts the action to all registered stores.\n4. **Store** handles the action, updates state, and notifies listeners.\n5. **View** re-renders with new store state.\n\n**Flux vs MVC:**\n- MVC: bidirectional updates (model → view, view → controller → model). Hard to predict state changes.\n- Flux: one direction only. Predictable and easier to debug.\n\n**Redux simplifies Flux:**\n- Single store (Flux can have multiple).\n- Pure reducer functions (Flux stores have mutable logic).\n- Middleware replaces the dispatcher for side effects.\n- DevTools for time-travel debugging.",
    alternativeAnswers: [
      "Redux Toolkit's `createSlice` generates action creators and reducers automatically, reducing boilerplate significantly compared to raw Redux.",
      "Modern state management (Zustand, Jotai) moves away from the Flux pattern toward more direct state access, but Flux's unidirectional principle remains influential."
    ],
    commonMistakes: [
      "Confusing Flux with Redux — Flux is the pattern, Redux is one implementation of it.",
      "Using Flux for simple apps where local state or Context would be more appropriate.",
      "Not understanding why unidirectional flow matters — it makes state changes traceable and debuggable."
    ],
    followUpQuestions: [
      "How does Redux Toolkit differ from vanilla Redux?",
      "What is the role of middleware in Redux?",
      "When would you choose Flux/Redux over Zustand or Context?"
    ],
    relatedQuestionIds: ["fe-057", "fe-040"],
    references: [
      { title: "Flux Architecture", url: "https://facebook.github.io/flux/" },
      { title: "Redux Documentation", url: "https://redux.js.org/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-059",
    title: "How do you manage server state in React?",
    content: "How do you manage server state in React? Compare React Query (TanStack Query), SWR, and manual useEffect for data fetching.",
    difficulty: "intermediate",
    track: "frontend",
    topic: "State Management",
    category: "Data Fetching",
    companyTags: ["Meta", "Google", "Amazon", "Vercel", "Shopify"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Server state (data from APIs) is different from client state. React Query and SWR provide caching, background refetching, deduplication, and optimistic updates. Manual useEffect requires implementing all of this yourself.",
    detailedExplanation: "React Query (TanStack Query):\n- Caching with stale-while-revalidate.\n- Background refetching on window focus, interval, or stale time.\n- Automatic deduplication of identical requests.\n- Optimistic updates with rollback.\n- DevTools for debugging.\n- Mutations with invalidation.\n\nSWR:\n- Similar to React Query but lighter.\n- Uses the SWR (stale-while-revalidate) strategy.\n- Simpler API for basic use cases.\n\nManual useEffect:\n- You implement caching, deduplication, and refetching yourself.\n- Error and loading state management.\n- Race condition handling.\n- Much more code and potential bugs.",
    bestAnswer: "Server state (fetched data) differs from client state (UI state) — it's asynchronous, shared, and can become stale. Dedicated libraries handle this complexity:\n\n**TanStack Query (React Query):**\n```typescript\nconst { data, isLoading, error } = useQuery({\n  queryKey: ['users'],\n  queryFn: () => fetch('/api/users').then(r => r.json()),\n  staleTime: 5 * 60 * 1000, // 5 minutes\n});\n```\nFeatures: caching, background refetching, deduplication, optimistic updates, pagination, infinite scroll, devtools.\n\n**SWR:**\n```typescript\nconst { data, error, isLoading } = useSWR('/api/users', fetcher);\n```\nLighter than React Query, similar stale-while-revalidate strategy.\n\n**Manual useEffect:**\n```typescript\nuseEffect(() => {\n  setLoading(true);\n  fetch('/api/users')\n    .then(r => r.json())\n    .then(setData)\n    .catch(setError)\n    .finally(() => setLoading(false));\n}, []);\n```\nYou handle caching, deduplication, refetching, and error recovery yourself.\n\n**Recommendation:** TanStack Query for most apps. SWR for simpler needs. Manual only for trivial cases.",
    alternativeAnswers: [
      "Server Components (Next.js App Router) eliminate the need for client-side data fetching for many cases — fetch directly in async components.",
      "SWR's `mutate()` function enables optimistic updates similar to React Query's `useMutation`."
    ],
    commonMistakes: [
      "Managing server state with useState/useEffect when React Query or SWR would handle caching, refetching, and deduplication automatically.",
      "Not considering stale-while-revalidate — fetching data that could be served from cache instead.",
      "Forgetting to handle error states and loading states in manual data fetching."
    ],
    followUpQuestions: [
      "How does React Query handle cache invalidation after mutations?",
      "What is optimistic update and how do you implement it with React Query?",
      "How do you handle infinite scrolling with React Query?"
    ],
    relatedQuestionIds: ["fe-038", "fe-057"],
    references: [
      { title: "TanStack Query", url: "https://tanstack.com/query/latest" },
      { title: "SWR", url: "https://swr.vercel.app/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-060",
    title: "What is state machines and how do they apply to frontend?",
    content: "What are state machines in frontend development? How do XState and reducer patterns help manage complex UI states?",
    difficulty: "expert",
    track: "frontend",
    topic: "State Management",
    category: "State Management",
    companyTags: ["Meta", "Google", "Netflix", "Stripe"],
    interviewRound: "On-site",
    frequency: 2,
    expectedAnswer: "State machines model UI as finite states with defined transitions. XState implements statecharts — hierarchical state machines with guards, actions, and parallel states. They eliminate impossible states and make complex UI logic predictable.",
    detailedExplanation: "A state machine defines: finite states, events that trigger transitions, and guard conditions. Instead of multiple boolean flags (isLoading, isError, isSuccess), you have a single state that can only be in one of these at a time.\n\n```typescript\nconst fetchMachine = createMachine({\n  id: 'fetch',\n  initial: 'idle',\n  states: {\n    idle: { on: { FETCH: 'loading' } },\n    loading: {\n      on: {\n        SUCCESS: 'success',\n        FAILURE: 'error'\n      }\n    },\n    success: { on: { FETCH: 'loading' } },\n    error: { on: { FETCH: 'loading' } },\n  }\n});\n```\n\nThis eliminates invalid states: you can't be both loading AND error, you can't go from idle to success without loading first.\n\nXState adds: hierarchical states (nested machines), parallel states, history states, actions (side effects), and guards (conditional transitions).",
    bestAnswer: "State machines model UI as discrete states with explicit transitions triggered by events.\n\n**Problem they solve:** boolean flags create impossible states:\n```typescript\n// Can be isLoading AND isError at the same time — bug!\nconst [isLoading, setIsLoading] = useState(false);\nconst [isError, setIsError] = useState(false);\n```\n\n**State machine solution:**\n```typescript\nconst machine = createMachine({\n  id: 'form',\n  initial: 'idle',\n  states: {\n    idle: { on: { SUBMIT: 'submitting' } },\n    submitting: {\n      on: { SUCCESS: 'success', FAILURE: 'error' }\n    },\n    success: { type: 'final' },\n    error: { on: { RETRY: 'submitting' } },\n  }\n});\n```\n\n**Benefits:**\n1. Eliminates impossible states.\n2. Documents all possible states and transitions.\n3. Makes complex logic testable (predictable transitions).\n4. Visualizable (XState Inspector).\n\n**XState features:** hierarchical states (nested machines), parallel states, guards (conditional transitions), actions (side effects), and services (async logic).\n\n**When to use:** complex forms, multi-step flows, media players, drag-and-drop, authentication flows — any UI with more than 3-4 states.",
    alternativeAnswers: [
      "useReducer is a lightweight state machine for simple cases — the reducer function IS the transition table.",
      "Statecharts (XState) extend finite state machines with hierarchy and parallelism, making them practical for real-world UIs."
    ],
    commonMistakes: [
      "Using state machines for simple states — the overhead isn't justified for 2-3 boolean flags.",
      "Not leveraging XState's visualization and debugging tools — the Inspector is one of the biggest benefits.",
      "Creating overly complex machines when breaking into smaller machines would be clearer."
    ],
    followUpQuestions: [
      "How do you test state machines?",
      "How does XState handle async operations (services)?",
      "When would you use useReducer versus XState?"
    ],
    relatedQuestionIds: ["fe-057", "fe-032"],
    references: [
      { title: "XState Documentation", url: "https://xstate.js.org/docs/" },
      { title: "Statecharts.dev", url: "https://statecharts.dev/" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Performance (fe-061 – fe-064)
  // ──────────────────────────────────────────────
  {
    id: "fe-061",
    title: "How do you optimize React rendering performance?",
    content: "What are the key techniques for optimizing React rendering performance? How do you identify and fix performance bottlenecks?",
    difficulty: "advanced",
    track: "frontend",
    topic: "Performance",
    category: "React Performance",
    companyTags: ["Meta", "Google", "Amazon", "Netflix"],
    interviewRound: "On-site",
    frequency: 5,
    expectedAnswer: "Key techniques: React.memo for component memoization, useMemo/useCallback for expensive computations, virtualization for long lists, code splitting with lazy/Suspense, avoiding unnecessary re-renders with state colocation, and profiling with React DevTools.",
    detailedExplanation: "Performance optimization techniques:\n\n1. **Avoid unnecessary re-renders:** colocate state, use React.memo, avoid inline objects/functions in props.\n2. **Virtualize long lists:** react-window or react-virtuoso render only visible items.\n3. **Memoize expensive computations:** useMemo for calculations, useCallback for functions passed to children.\n4. **Code splitting:** React.lazy + Suspense load components on demand.\n5. **Profile:** React DevTools Profiler identifies which components re-render and why.\n6. **Avoid large context values:** split context, use state management with selective subscription.\n7. **Virtualize images:** lazy load images, use next/image or similar.\n\nThe most impactful: avoiding unnecessary re-renders (state colocation) and virtualizing long lists.",
    bestAnswer: "React rendering optimization techniques, ordered by impact:\n\n1. **Profile first** — use React DevTools Profiler to identify actual bottlenecks. Don't optimize prematurely.\n\n2. **Avoid unnecessary re-renders:**\n   - Colocate state near where it's used.\n   - Memoize components with `React.memo`.\n   - Memoize expensive computations with `useMemo`.\n   - Stabilize function references with `useCallback`.\n   - Avoid creating new objects/arrays in render.\n\n3. **Virtualize long lists** — `react-window` or `react-virtuoso` render only visible items.\n\n4. **Code splitting** — `React.lazy()` + `<Suspense>` for route-based or component-based splitting.\n\n5. **Reduce bundle size** — analyze with `next/bundle-analyzer`, tree-shake unused code.\n\n6. **Optimize re-renders** — use `useTransition` for non-urgent updates, `useDeferredValue` for deferred rendering.\n\n7. **Avoid large Context providers** — split by concern, or use Zustand/Jotai with selective subscription.",
    alternativeAnswers: [
      "React Compiler (React 19+) automatically applies memoization, potentially making manual useMemo/useCallback unnecessary.",
      "Streaming SSR with Suspense enables progressive rendering — users see content as it becomes available instead of waiting for the slowest data fetch."
    ],
    commonMistakes: [
      "Optimizing without profiling — you might optimize the wrong thing.",
      "Overusing React.memo — the comparison overhead can be worse than a simple re-render for cheap components.",
      "Creating objects/functions in render that defeat React.memo — `prop={{ key: 'value' }}` creates a new reference every render."
    ],
    followUpQuestions: [
      "How do you use React DevTools Profiler to identify bottlenecks?",
      "How does React Compiler change performance optimization?",
      "How do you optimize bundle size in a Next.js app?"
    ],
    relatedQuestionIds: ["fe-044", "fe-045"],
    references: [
      { title: "React Optimizing Performance", url: "https://react.dev/reference/react/profile" },
      { title: "React DevTools Profiler", url: "https://react.dev/learn/react-devtools" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-062",
    title: "What is Core Web Vitals and how do you improve them?",
    content: "What are Core Web Vitals (LCP, FID, CLS)? How do you measure and improve each metric?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Performance",
    category: "Web Performance",
    companyTags: ["Google", "Vercel", "Amazon", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Core Web Vitals are Google's metrics for user experience: Largest Contentful Paint (LCP) measures loading, Interaction to Next Paint (INP) measures responsiveness, and Cumulative Layout Shift (CLS) measures visual stability.",
    detailedExplanation: "Core Web Vitals (as of 2024):\n\n1. **LCP (Largest Contentful Paint)**: time for the largest content element to become visible. Target: < 2.5s.\n   - Optimize: preload hero images, use next/image, inline critical CSS, use CDN.\n\n2. **INP (Interaction to Next Paint)**: latency of all interactions. Target: < 200ms.\n   - Optimize: avoid long tasks, use web workers, reduce JavaScript execution time.\n\n3. **CLS (Cumulative Layout Shift)**: sum of layout shifts. Target: < 0.1.\n   - Optimize: set explicit width/height on images/videos, use aspect-ratio CSS, avoid inserting content above existing content.\n\nMeasurement: Lighthouse, Chrome DevTools Performance tab, web-vitals library, CrUX.",
    bestAnswer: "**Core Web Vitals** are Google's metrics for real-world user experience:\n\n**LCP (Largest Contentful Paint)** — loading speed. Target: < 2.5s.\n- Measures when the largest visible element renders.\n- Optimize: preload key resources, optimize images (next/image), minimize render-blocking resources, use CDN.\n\n**INP (Interaction to Next Paint)** — responsiveness. Target: < 200ms.\n- Measures latency of all user interactions.\n- Optimize: break up long tasks, use web workers, defer non-critical JavaScript, minimize main thread work.\n\n**CLS (Cumulative Layout Shift)** — visual stability. Target: < 0.1.\n- Measures unexpected layout shifts.\n- Optimize: set explicit width/height on images, use `aspect-ratio`, preload fonts with `font-display: swap`, avoid dynamic content injection above the fold.\n\n**Measurement:** Lighthouse, Chrome DevTools, `web-vitals` npm package, PageSpeed Insights, CrUX data.",
    alternativeAnswers: [
      "The `web-vitals` library sends metrics to analytics: `onLCP(console.log)` for LCP, `onINP(console.log)` for INP, `onCLS(console.log)` for CLS.",
      "Next.js Image component automatically optimizes LCP by handling lazy loading, responsive sizing, and format conversion."
    ],
    commonMistakes: [
      "Optimizing CLS without setting explicit dimensions on images — the most common cause of layout shift.",
      "Ignoring INP — it replaced FID in 2024 and measures overall responsiveness, not just first interaction.",
      "Only testing in Lighthouse lab conditions — real-world CrUX data is what Google uses for ranking."
    ],
    followUpQuestions: [
      "How do you measure CLS in a React application?",
      "How does lazy loading affect LCP and how do you optimize it?",
      "What is the difference between lab data (Lighthouse) and field data (CrUX)?"
    ],
    relatedQuestionIds: ["fe-052", "fe-013"],
    references: [
      { title: "Core Web Vitals", url: "https://web.dev/vitals/" },
      { title: "web-vitals library", url: "https://github.com/GoogleChrome/web-vitals" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-063",
    title: "What is lazy loading and how do you implement it?",
    content: "What is lazy loading in frontend development? How do you lazy load components, images, and routes?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Performance",
    category: "Web Performance",
    companyTags: ["Google", "Amazon", "Netflix", "Shopify"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Lazy loading defers loading non-critical resources until they're needed. React.lazy for components, native `loading='lazy'` for images, dynamic imports for routes. Intersection Observer API enables custom lazy loading patterns.",
    detailedExplanation: "Lazy loading strategies:\n\n1. **Component lazy loading:**\n```javascript\nconst HeavyComponent = React.lazy(() => import('./HeavyComponent'));\n<Suspense fallback={<Spinner />}>\n  <HeavyComponent />\n</Suspense>\n```\n\n2. **Route-based lazy loading:**\n```javascript\nconst Dashboard = React.lazy(() => import('./pages/Dashboard'));\n```\n\n3. **Image lazy loading:**\n```html\n<img src=\"photo.jpg\" loading=\"lazy\" alt=\"Photo\" />\n```\n\n4. **Custom lazy loading (Intersection Observer):**\n```javascript\nconst observer = new IntersectionObserver((entries) => {\n  if (entries[0].isIntersecting) {\n    loadImage();\n    observer.disconnect();\n  }\n});\n```\n\n5. **Virtualization:** render only visible items in long lists.",
    bestAnswer: "Lazy loading defers loading resources until they're needed, reducing initial bundle size and improving performance.\n\n**React components:**\n```javascript\nconst Modal = React.lazy(() => import('./Modal'));\n// Usage:\n<Suspense fallback={<Spinner />}>\n  {showModal && <Modal />}\n</Suspense>\n```\n\n**Routes:**\n```javascript\nconst Dashboard = React.lazy(() => import('./pages/Dashboard'));\nconst Settings = React.lazy(() => import('./pages/Settings'));\n```\n\n**Images (native):**\n```html\n<img src=\"hero.jpg\" loading=\"lazy\" width=\"800\" height=\"400\" alt=\"Hero\" />\n```\n\n**Intersection Observer (custom):**\n```javascript\nuseEffect(() => {\n  const observer = new IntersectionObserver(([entry]) => {\n    if (entry.isIntersecting) {\n      loadMore();\n      observer.disconnect();\n    }\n  });\n  observer.observe(sentinelRef.current);\n  return () => observer.disconnect();\n}, []);\n```\n\n**Virtualization:** react-window renders only visible rows — essential for lists with 1000+ items.",
    alternativeAnswers: [
      "Dynamic imports (`import()`) work at the module level, enabling code splitting without React.lazy for non-component code.",
      "Intersection Observer with `rootMargin` can preload resources before they enter the viewport, creating a smoother experience."
    ],
    commonMistakes: [
      "Lazy loading above-the-fold content — it should be loaded eagerly for LCP optimization.",
      "Not providing fallbacks (Suspense, loading states) for lazy-loaded components.",
      "Lazy loading images without setting explicit dimensions, causing CLS."
    ],
    followUpQuestions: [
      "How do you implement infinite scrolling with Intersection Observer?",
      "How does route-based code splitting work with React Router?",
      "How do you lazy load third-party scripts?"
    ],
    relatedQuestionIds: ["fe-062", "fe-061"],
    references: [
      { title: "React Lazy Loading", url: "https://react.dev/reference/react/lazy" },
      { title: "MDN Lazy Loading", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-064",
    title: "How do you analyze and optimize bundle size?",
    content: "How do you analyze and reduce JavaScript bundle size in a frontend application?",
    difficulty: "advanced",
    track: "frontend",
    topic: "Performance",
    category: "Web Performance",
    companyTags: ["Google", "Vercel", "Amazon", "Shopify"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "Analyze bundle with webpack-bundle-analyzer or source-map-explorer. Optimize by tree-shaking, code splitting, dynamic imports, removing unused dependencies, and using lighter alternatives. Next.js provides built-in bundle analysis.",
    detailedExplanation: "Bundle analysis tools:\n- `next/bundle-analyzer` for Next.js.\n- `webpack-bundle-analyzer` for webpack.\n- `source-map-explorer` for any bundle.\n- Chrome DevTools Coverage tab.\n\nOptimization strategies:\n1. **Tree shaking:** ensure ESM imports, avoid barrel files with unused exports.\n2. **Code splitting:** route-based and component-based lazy loading.\n3. **Dynamic imports:** load heavy libraries only when needed.\n4. **Replace heavy deps:** date-fns instead of moment.js, lodash-es instead of lodash.\n5. **Analyze dependencies:** `npm ls --all` to find and remove unnecessary packages.\n6. **Compression:** gzip/brotli on the server.\n7. **CDN:** serve static assets from edge locations.",
    bestAnswer: "**Step 1: Analyze**\n```bash\n# Next.js\nANALYZE=true next build\n\n# Webpack\nnpx webpack-bundle-analyzer stats.json\n```\n\n**Step 2: Optimize**\n\n1. **Tree shaking:** use named imports (`import { debounce } from 'lodash-es'`), not default imports (`import _ from 'lodash'`).\n\n2. **Code splitting:** lazy load routes and heavy components.\n\n3. **Replace heavy libraries:**\n   - moment.js (300KB) → date-fns (tree-shakeable)\n   - lodash (70KB) → lodash-es (tree-shakeable)\n   - axios (14KB) → fetch API (built-in)\n\n4. **Dynamic imports for heavy features:**\n```javascript\nconst PDFViewer = dynamic(() => import('./PDFViewer'), { ssr: false });\n```\n\n5. **Analyze with Coverage tab:** Chrome DevTools → Coverage shows unused code.\n\n6. **Server-side:** enable Brotli/Gzip compression, use CDN for static assets.\n\n7. **Next.js specific:** use `next/dynamic` for component splitting, `next/image` for optimized images.",
    alternativeAnswers: [
      "Bundlephobia.com lets you check the size of npm packages before adding them to your project.",
      "Import maps and CDN-based imports (esm.sh) can offload heavy libraries to CDNs instead of bundling them."
    ],
    commonMistakes: [
      "Importing entire libraries when only a few functions are needed (e.g., `import _ from 'lodash'`).",
      "Not analyzing the bundle — you can't optimize what you don't measure.",
      "Ignoring server-side bundle size in SSR/SSG applications — it affects server response time."
    ],
    followUpQuestions: [
      "How do you use the Coverage tab in Chrome DevTools?",
      "How do you set up dynamic imports with React Router?",
      "What is the difference between gzip and Brotli compression?"
    ],
    relatedQuestionIds: ["fe-062", "fe-063"],
    references: [
      { title: "webpack-bundle-analyzer", url: "https://github.com/webpack-contrib/webpack-bundle-analyzer" },
      { title: "Bundlephobia", url: "https://bundlephobia.com/" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Accessibility (fe-065 – fe-068)
  // ──────────────────────────────────────────────
  {
    id: "fe-065",
    title: "What is ARIA and when should you use it?",
    content: "What are ARIA attributes? When should you use them versus native HTML semantics?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Accessibility",
    category: "Accessibility",
    companyTags: ["Google", "Apple", "Microsoft", "Meta"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "ARIA (Accessible Rich Internet Applications) attributes add semantic meaning to HTML elements for screen readers. They have three roles: states (aria-checked), properties (aria-label), and roles (role='button'). Use native HTML first, ARIA only when native semantics are insufficient.",
    detailedExplanation: "The first rule of ARIA: don't use ARIA if you can use native HTML. A `<button>` is always better than `<div role='button'>`.\n\nARIA categories:\n1. **Roles:** define what an element is: `role='tab'`, `role='dialog'`, `role='navigation'`.\n2. **Properties:** define characteristics: `aria-label`, `aria-labelledby`, `aria-describedby`.\n3. **States:** define current condition: `aria-checked`, `aria-expanded`, `aria-hidden`, `aria-disabled`.\n\nCommon patterns:\n- `aria-label` for elements without visible text (icon buttons).\n- `aria-expanded` for expandable sections.\n- `aria-live` for dynamic content updates.\n- `aria-hidden` to hide decorative elements.\n- `aria-describedby` for additional descriptions.",
    bestAnswer: "ARIA provides semantic information for assistive technologies when native HTML isn't sufficient.\n\n**The First Rule of ARIA:** don't use ARIA if a native HTML element provides the semantics. `<button>` > `<div role='button'>`.\n\n**When to use ARIA:**\n- Icon-only buttons: `<button aria-label='Close'>X</button>`\n- Custom widgets: tabs, accordions, modals, dropdowns.\n- Dynamic content: `aria-live='polite'` for screen reader announcements.\n- State communication: `aria-expanded`, `aria-checked`, `aria-selected`.\n\n**ARIA categories:**\n- Roles: `role='dialog'`, `role='tablist'`\n- Properties: `aria-label`, `aria-labelledby`, `aria-describedby`\n- States: `aria-hidden`, `aria-disabled`, `aria-busy`\n\n**Example:**\n```html\n<button aria-expanded=\"false\" aria-controls=\"menu-1\">\n  Menu\n</button>\n<div id=\"menu-1\" role=\"menu\" hidden>\n  <div role=\"menuitem\">Item 1</div>\n</div>\n```\n\n**Key principle:** ARIA supplements, never replaces, native HTML semantics.",
    alternativeAnswers: [
      "aria-live regions (`polite`, `assertive`, `off`) control how screen readers announce dynamic content updates without user focus change.",
      "The `aria-roledescription` and `aria-valuetext` properties provide custom descriptions for complex widgets."
    ],
    commonMistakes: [
      "Using ARIA to fix inaccessible HTML — the HTML itself should be semantic first.",
      "Adding ARIA attributes without understanding their semantics — incorrect ARIA is worse than no ARIA.",
      "Not testing with actual screen readers (VoiceOver, NVDA) to verify the ARIA works correctly."
    ],
    followUpQuestions: [
      "How do you make a custom modal dialog accessible with ARIA?",
      "What is aria-live and how do you announce dynamic content changes?",
      "How do you test accessibility with screen readers?"
    ],
    relatedQuestionIds: ["fe-002", "fe-066"],
    references: [
      { title: "MDN ARIA", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" },
      { title: "WAI-ARIA Practices", url: "https://www.w3.org/WAI/ARIA/apg/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-066",
    title: "How do you create an accessible form in HTML?",
    content: "How do you make HTML forms accessible? What are best practices for labels, error messages, and validation?",
    difficulty: "beginner",
    track: "frontend",
    topic: "Accessibility",
    category: "Accessibility",
    companyTags: ["Google", "Apple", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "Accessible forms use associated `<label>` elements, fieldset/legend for grouping, aria-describedby for error messages, aria-invalid for invalid fields, and aria-required for required fields. Error messages should be programmatically associated with their inputs.",
    detailedExplanation: "Key accessibility practices for forms:\n\n1. **Labels:** every input needs a label, associated via `for`/`id`:\n```html\n<label for=\"email\">Email</label>\n<input id=\"email\" type=\"email\" aria-required=\"true\" />\n```\n\n2. **Grouping:** use `<fieldset>` and `<legend>` for related fields:\n```html\n<fieldset>\n  <legend>Preferred contact method</legend>\n  <input type=\"radio\" id=\"email\" name=\"contact\" value=\"email\" />\n  <label for=\"email\">Email</label>\n</fieldset>\n```\n\n3. **Error messages:** associate via `aria-describedby`:\n```html\n<input id=\"email\" aria-describedby=\"email-error\" aria-invalid=\"true\" />\n<span id=\"email-error\" role=\"alert\">Email is required</span>\n```\n\n4. **Required fields:** `aria-required=\"true\"`.\n5. **Instructions:** use `aria-describedby` to link help text.",
    bestAnswer: "Accessible forms require proper labels, error handling, and semantics:\n\n```html\n<form>\n  <label for=\"name\">Name <span aria-hidden=\"true\">*</span></label>\n  <input id=\"name\" type=\"text\" aria-required=\"true\" aria-describedby=\"name-help\" />\n  <span id=\"name-help\">Enter your full name</span>\n\n  <label for=\"email\">Email</label>\n  <input id=\"email\" type=\"email\" aria-required=\"true\" aria-describedby=\"email-error\" aria-invalid=\"true\" />\n  <span id=\"email-error\" role=\"alert\">Please enter a valid email</span>\n\n  <fieldset>\n    <legend>Notifications</legend>\n    <input type=\"checkbox\" id=\"notifications\" />\n    <label for=\"notifications\">Enable notifications</label>\n  </fieldset>\n\n  <button type=\"submit\">Submit</button>\n</form>\n```\n\n**Key rules:**\n- Every input must have a visible `<label>` (not just placeholder).\n- Error messages must be linked via `aria-describedby`.\n- `aria-invalid='true'` indicates invalid fields.\n- `role='alert'` announces errors to screen readers.\n- Don't rely solely on color to indicate errors.",
    alternativeAnswers: [
      "HTML5 constraint validation (`required`, `pattern`, `minlength`) provides built-in browser validation with accessible error messages.",
      "Custom validation libraries (Zod, Yup) can be combined with aria-invalid and aria-describedby for accessible error states."
    ],
    commonMistakes: [
      "Using placeholder text as the only label — placeholders disappear on input and aren't reliable labels.",
      "Not associating error messages with inputs — screen readers can't connect errors to their fields.",
      "Using color alone to indicate required fields or errors — also use text/icons."
    ],
    followUpQuestions: [
      "How do you handle client-side validation errors accessibly?",
      "How do you make a custom select/combobox accessible?",
      "How do you handle multi-step forms accessibly?"
    ],
    relatedQuestionIds: ["fe-065", "fe-008"],
    references: [
      { title: "MDN Forms Guide", url: "https://developer.mozilla.org/en-US/docs/Learn/Forms" },
      { title: "WAI Forms Tutorial", url: "https://www.w3.org/WAI/tutorials/forms/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-067",
    title: "What is WCAG and how do you test for compliance?",
    content: "What is WCAG? What are the key principles and how do you test a web application for accessibility compliance?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Accessibility",
    category: "Accessibility",
    companyTags: ["Google", "Apple", "Microsoft", "Amazon"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "WCAG (Web Content Accessibility Guidelines) is the international standard for web accessibility. It has four principles (POUR): Perceivable, Operable, Understandable, and Robust. Compliance levels are A, AA, and AAA.",
    detailedExplanation: "WCAG 2.1/2.2 principles (POUR):\n\n1. **Perceivable:** information must be presentable in ways all users can perceive.\n   - Text alternatives for images.\n   - Captions for video.\n   - Sufficient color contrast.\n   - Content adapts to different presentations.\n\n2. **Operable:** UI components must be operable by all users.\n   - All functionality via keyboard.\n   - Enough time to read content.\n   - No content that causes seizures.\n   - Users can navigate and find content.\n\n3. **Understandable:** information and UI operation must be understandable.\n   - Text is readable.\n   - Pages appear and operate predictably.\n   - Users are helped to avoid and correct mistakes.\n\n4. **Robust:** content must be interpreted by a wide variety of user agents.\n   - Compatible with assistive technologies.\n   - Valid HTML.\n\nCompliance levels: A (minimum), AA (standard for most organizations), AAA (highest).\n\nTesting tools: axe-core, Lighthouse, WAVE, Screen readers (VoiceOver, NVDA), keyboard testing.",
    bestAnswer: "**WCAG** (Web Content Accessibility Guidelines) is the international standard for web accessibility.\n\n**Four principles (POUR):**\n1. **Perceivable** — content available to all senses (text alternatives, captions, contrast).\n2. **Operable** — keyboard accessible, no timing traps, no seizure-inducing content.\n3. **Understandable** — readable text, predictable navigation, input assistance.\n4. **Robust** — works with assistive technologies, valid HTML.\n\n**Compliance levels:** A (minimum), AA (industry standard), AAA (enhanced).\n\n**Testing tools:**\n- **Automated:** axe-core (browser extension), Lighthouse accessibility audit, WAVE.\n- **Manual:** keyboard navigation testing, screen reader testing (VoiceOver on Mac, NVDA on Windows).\n- **CI integration:** axe-core in tests, `@axe-core/react` for development.\n\n**Key tests:**\n- Tab through entire page — is focus visible and logical?\n- Color contrast ratios (4.5:1 for text, 3:1 for large text).\n- All images have alt text.\n- Form fields have labels.\n- Page has proper heading hierarchy.",
    alternativeAnswers: [
      "WCAG 2.2 added new success criteria like focus appearance, dragging movements, and consistent help — it's the latest recommended version.",
      "Accessible Rich Internet Applications (WAI-ARIA) complements WCAG by providing roles, states, and properties for dynamic content."
    ],
    commonMistakes: [
      "Relying solely on automated tools — they catch ~30% of issues; manual testing with screen readers and keyboards is essential.",
      "Ignoring AA compliance — it's the standard for most legal requirements and should be the minimum target.",
      "Not testing with actual assistive technologies — screen reader behavior can differ from what you expect."
    ],
    followUpQuestions: [
      "How do you integrate axe-core into a React test suite?",
      "What are the most common accessibility violations you find?",
      "How do you handle accessibility in a design system?"
    ],
    relatedQuestionIds: ["fe-065", "fe-066"],
    references: [
      { title: "WCAG 2.2", url: "https://www.w3.org/TR/WCAG22/" },
      { title: "axe-core", url: "https://github.com/dequelabs/axe-core" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-068",
    title: "How do you make a React application keyboard accessible?",
    content: "How do you ensure keyboard accessibility in a React application? What are focus management and focus trapping?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Accessibility",
    category: "Accessibility",
    companyTags: ["Google", "Apple", "Microsoft"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "Keyboard accessibility requires all interactive elements to be reachable via Tab, have visible focus indicators, support Enter/Space activation, and use proper focus management for dynamic content like modals and menus.",
    detailedExplanation: "Key requirements:\n\n1. **Tab order:** all interactive elements must be in logical tab order. Use `tabIndex={0}` for custom interactive elements, avoid `tabIndex` > 0.\n\n2. **Focus indicators:** visible focus styles. Never use `outline: none` without a replacement.\n\n3. **Keyboard activation:** buttons respond to Enter/Space, links to Enter, custom widgets to arrow keys.\n\n4. **Focus trapping:** modals and dialogs trap focus within them until closed.\n\n5. **Focus management:** when content changes (modals open, route changes), manage focus to the new content.\n\n6. **Skip links:** provide a 'Skip to main content' link at the top.\n\nLibraries: `@reach/focus-trap`, `react-focus-lock`, `@radix-ui/react-dialog` (built-in focus management).",
    bestAnswer: "Keyboard accessibility ensures all functionality is available without a mouse:\n\n**1. Focus visibility:**\n```css\n:focus-visible {\n  outline: 2px solid blue;\n  outline-offset: 2px;\n}\n```\n\n**2. Custom interactive elements:**\n```jsx\n// Bad: div isn't keyboard accessible\n<div onClick={handleClick}>Click me</div>\n// Good: button is naturally keyboard accessible\n<button onClick={handleClick}>Click me</button>\n// Or add keyboard handler to custom element\n<div role=\"button\" tabIndex={0} onClick={handleClick} onKeyDown={e => e.key === 'Enter' && handleClick()}>Click me</div>\n```\n\n**3. Focus trapping in modals:**\n```jsx\nimport FocusLock from 'react-focus-lock';\nfunction Modal({ children, onClose }) {\n  return (\n    <FocusLock>\n      <div role=\"dialog\" aria-modal=\"true\">\n        {children}\n        <button onClick={onClose}>Close</button>\n      </div>\n    </FocusLock>\n  );\n}\n```\n\n**4. Skip links:**\n```html\n<a href=\"#main-content\" class=\"skip-link\">Skip to main content</a>\n<main id=\"main-content\">...</main>\n```\n\n**5. Focus management on route changes:**\n```javascript\nuseEffect(() => {\n  headingRef.current?.focus();\n}, [pathname]);\n```",
    alternativeAnswers: [
      "Radix UI, Headless UI, and React Aria provide accessible components with built-in keyboard navigation and focus management.",
      "The `inert` attribute (HTML5) makes elements non-interactive and removes them from the tab order — useful for background content when a modal is open."
    ],
    commonMistakes: [
      "Using `outline: none` without providing an alternative focus indicator.",
      "Creating custom widgets (tabs, accordions, dropdowns) without proper keyboard support (arrow keys, Escape, Tab).",
      "Not managing focus when modals open/close or when content is dynamically added."
    ],
    followUpQuestions: [
      "How do you implement keyboard navigation for a custom dropdown/combobox?",
      "How does the `inert` attribute help with focus management?",
      "How do you test keyboard accessibility in a React app?"
    ],
    relatedQuestionIds: ["fe-065", "fe-067"],
    references: [
      { title: "WAI-ARIA Authoring Practices", url: "https://www.w3.org/WAI/ARIA/apg/" },
      { title: "React Focus Management", url: "https://react.dev/reference/react/useEffect#controlling-focus" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Browser APIs (fe-069 – fe-072)
  // ──────────────────────────────────────────────
  {
    id: "fe-069",
    title: "How does the browser rendering pipeline work?",
    content: "Explain the browser rendering pipeline: DOM, CSSOM, Render Tree, Layout, Paint, and Composite. What triggers reflows and repaints?",
    difficulty: "advanced",
    track: "frontend",
    topic: "Browser APIs",
    category: "Browser Internals",
    companyTags: ["Google", "Meta", "Apple", "Netflix"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "The browser pipeline: HTML → DOM, CSS → CSSOM, DOM + CSSOM → Render Tree → Layout (geometry) → Paint (pixels) → Composite (layers). JavaScript can trigger reflows (layout recalculation) and repaints (pixel repainting), which are expensive.",
    detailedExplanation: "Rendering pipeline steps:\n1. **DOM:** HTML is parsed into a tree of DOM nodes.\n2. **CSSOM:** CSS is parsed into a tree of style rules.\n3. **Render Tree:** DOM + CSSOM combined, including only visible elements (no `display: none`).\n4. **Layout (Reflow):** calculate exact positions and sizes of each element.\n5. **Paint:** fill in pixels — draw text, colors, borders, shadows.\n6. **Composite:** combine layers, handle transforms, opacity, z-index.\n\n**Reflows** (expensive): change geometry (width, height, position, margin, padding). Triggers: resize, font change, DOM manipulation.\n\n**Repaints** (less expensive): change visual properties. Triggers: color, visibility, shadows.\n\n**Optimization:** batch DOM reads and writes, use `transform`/`opacity` for animations (compositing only), use `will-change` to promote elements to layers.",
    bestAnswer: "The browser rendering pipeline processes HTML/CSS/JS into visible pixels:\n\n```\nHTML → DOM → Render Tree → Layout → Paint → Composite → Screen\nCSS → CSSOM ↗\n```\n\n1. **DOM/CSSOM:** parse HTML and CSS into tree structures.\n2. **Render Tree:** combine DOM + CSSOM, exclude hidden elements (`display: none`).\n3. **Layout (Reflow):** calculate exact geometry (position, size) for each element.\n4. **Paint:** rasterize elements — draw text, gradients, borders, shadows into layers.\n5. **Composite:** combine layers in correct z-order, apply transforms.\n\n**Performance tiers (best to worst):**\n- **Composite-only:** `transform`, `opacity` — GPU-accelerated, no layout/paint.\n- **Paint-only:** `color`, `background`, `box-shadow` — triggers repaint but no layout.\n- **Layout (Reflow):** `width`, `height`, `margin`, `padding`, `position` — triggers full reflow.\n\n**Optimization:**\n- Use `transform` and `opacity` for animations.\n- Batch DOM reads before writes to avoid layout thrashing.\n- Use `will-change` to promote elements to compositing layers.\n- Use `content-visibility: auto` for off-screen content.",
    alternativeAnswers: [
      "The `requestAnimationFrame` callback runs before the browser paints, making it the ideal place for visual updates to stay in sync with the display refresh rate.",
      "Layout thrashing occurs when you interleave DOM reads and writes in a loop — each write forces an immediate reflow before the next read."
    ],
    commonMistakes: [
      "Animating layout properties (width, height, top, left) instead of compositing-only properties (transform, opacity).",
      "Not batching DOM reads and writes, causing layout thrashing.",
      "Forgetting that `getBoundingClientRect()` forces a synchronous reflow."
    ],
    followUpQuestions: [
      "What is layout thrashing and how do you prevent it?",
      "How does `will-change` affect the rendering pipeline?",
      "What are compositing layers and how do you create them?"
    ],
    relatedQuestionIds: ["fe-062", "fe-015"],
    references: [
      { title: "Web Performance: Rendering", url: "https://web.dev/rendering-performance/" },
      { title: "Inside Browser Rendering", url: "https://www.html5rocks.com/en/tutorials/speed/rendering/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-070",
    title: "What is the Intersection Observer API?",
    content: "What is the Intersection Observer API? How is it used for lazy loading, infinite scroll, and ad tracking?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Browser APIs",
    category: "Browser APIs",
    companyTags: ["Google", "Meta", "Amazon", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Intersection Observer asynchronously observes changes in intersection of a target element with an ancestor or viewport. It's used for lazy loading, infinite scroll, visibility tracking, and parallax effects — replacing expensive scroll event listeners.",
    detailedExplanation: "Intersection Observer fires a callback when a target element intersects with a root (default: viewport) or a specified ancestor.\n\n```javascript\nconst observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      loadImage(entry.target);\n      observer.unobserve(entry.target); // observe once\n    }\n  });\n}, { threshold: 0.1 });\n\nobserver.observe(imageElement);\n```\n\nUse cases:\n1. **Lazy loading:** load images/content when they enter viewport.\n2. **Infinite scroll:** detect when user reaches bottom of list.\n3. **Ad tracking:** measure ad visibility.\n4. **Analytics:** track which content users actually see.\n5. **Animations:** trigger animations when elements come into view.\n6. **Parallax:** measure scroll position for parallax effects.",
    bestAnswer: "Intersection Observer asynchronously detects when elements enter/leave the viewport (or a scrollable container):\n\n```javascript\nconst observer = new IntersectionObserver(\n  (entries) => {\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        // Element is visible\n        entry.target.src = entry.target.dataset.src; // lazy load\n        observer.unobserve(entry.target);\n      }\n    });\n  },\n  { threshold: 0.1, rootMargin: '100px' } // trigger 100px before visible\n);\n\ndocument.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));\n```\n\n**Properties:**\n- `entry.isIntersecting` — boolean, is element visible?\n- `entry.intersectionRatio` — how much is visible (0-1).\n- `entry.rootBounds` — root element's bounds.\n- `rootMargin` — offset for preloading.\n- `threshold` — visibility ratio to trigger (array of values).\n\n**Use cases:** lazy loading, infinite scroll, ad visibility tracking, scroll-triggered animations, analytics (which content is actually viewed).",
    alternativeAnswers: [
      "Intersection Observer is more performant than scroll event listeners because it's asynchronous and doesn't cause layout thrashing.",
      "The `rootMargin` property enables preloading — set a negative margin to trigger before the element enters the viewport."
    ],
    commonMistakes: [
      "Not calling `unobserve()` after the element has been handled — the observer keeps running unnecessarily.",
      "Not handling the `root` option — default is viewport, but for scroll containers you need to specify the root element.",
      "Confusing `isIntersecting` with `intersectionRatio` — the former is boolean, the latter is a ratio."
    ],
    followUpQuestions: [
      "How do you implement infinite scroll with Intersection Observer?",
      "How do you handle lazy loading with Intersection Observer and error boundaries?",
      "What are the performance differences between Intersection Observer and scroll event listeners?"
    ],
    relatedQuestionIds: ["fe-063", "fe-004"],
    references: [
      { title: "MDN Intersection Observer", url: "https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" },
      { title: "web.dev Intersection Observer", url: "https://web.dev/intersection-observer/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-071",
    title: "What is the Fetch API and how does it differ from XMLHttpRequest?",
    content: "What is the Fetch API? How does it differ from XMLHttpRequest? What are its advantages?",
    difficulty: "beginner",
    track: "frontend",
    topic: "Browser APIs",
    category: "Browser APIs",
    companyTags: ["Google", "Amazon", "Apple", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "The Fetch API is a modern, promise-based HTTP client that replaces XMLHttpRequest. It returns Promises, supports streaming, has a cleaner API, and works with async/await. Unlike XHR, it doesn't automatically reject on HTTP errors (4xx, 5xx).",
    detailedExplanation: "Fetch API basics:\n```javascript\nconst response = await fetch('https://api.example.com/data');\nconst data = await response.json();\n```\n\nKey differences from XMLHttpRequest:\n1. Promise-based (not event-based).\n2. Cleaner, more composable API.\n3. Supports streaming (ReadableStream).\n4. Request/Response objects are standardized.\n5. Works natively with async/await.\n\nFetch quirks:\n- Does NOT reject on HTTP errors (404, 500). Only rejects on network errors.\n- You must check `response.ok` or `response.status`.\n- Cookies, credentials require `credentials: 'include'`.",
    bestAnswer: "The Fetch API is the modern replacement for XMLHttpRequest:\n\n```javascript\n// Basic GET\nconst res = await fetch('/api/users');\nconst users = await res.json();\n\n// POST with JSON\nconst res = await fetch('/api/users', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({ name: 'Alice' }),\n});\n\n// Check for errors\nif (!res.ok) throw new Error(`HTTP ${res.status}`);\n```\n\n**Fetch vs XHR:**\n| Feature | Fetch | XHR |\n|---------|-------|-----|\n| API | Promise-based | Event-based |\n| Streaming | Yes (ReadableStream) | No |\n| Cancellation | AbortController | .abort() |\n| Credentials | `credentials: 'include'` | `.withCredentials` |\n| Simplicity | Clean, composable | Verbose |\n\n**Key quirk:** Fetch does NOT reject on 4xx/5xx status codes — only on network failures. Always check `response.ok`.\n\n**Abort:**\n```javascript\nconst controller = new AbortController();\nfetch(url, { signal: controller.signal });\ncontroller.abort(); // cancel\n```",
    alternativeAnswers: [
      "AbortController can cancel fetch requests, XHR, and even service worker fetch events — it's the standard cancellation mechanism.",
      "Fetch supports streaming with ReadableStream, enabling progressive data processing for large responses."
    ],
    commonMistakes: [
      "Assuming fetch rejects on HTTP errors (404, 500) — it only rejects on network failures. Always check `response.ok`.",
      "Not handling errors — try/catch with `response.ok` check is essential.",
      "Forgetting `credentials: 'include'` when making cross-origin requests that need cookies."
    ],
    followUpQuestions: [
      "How do you cancel a fetch request with AbortController?",
      "How does fetch handle streaming responses?",
      "When would you use a library like axios instead of fetch?"
    ],
    relatedQuestionIds: ["fe-073", "fe-076"],
    references: [
      { title: "MDN Fetch API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" },
      { title: "JavaScript.info Fetch", url: "https://javascript.info/fetch" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-072",
    title: "What are Web Storage APIs (localStorage, sessionStorage, IndexedDB)?",
    content: "Compare localStorage, sessionStorage, and IndexedDB. When would you use each?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Browser APIs",
    category: "Browser APIs",
    companyTags: ["Google", "Amazon", "Microsoft", "Meta"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "localStorage persists data across sessions (5-10MB limit). sessionStorage is per-tab and cleared when tab closes. IndexedDB is a full client-side database (no size limit) for structured data. All are synchronous except IndexedDB which uses async API.",
    detailedExplanation: "Comparison:\n\n**localStorage:**\n- Persistent across sessions and tabs.\n- ~5-10MB storage limit.\n- Synchronous API.\n- Key-value pairs (strings only).\n- Same-origin access.\n- Use: user preferences, theme settings, auth tokens.\n\n**sessionStorage:**\n- Per-tab, cleared when tab closes.\n- ~5-10MB limit.\n- Synchronous API.\n- Key-value pairs (strings).\n- Use: form state, temporary data.\n\n**IndexedDB:**\n- Persistent, no practical size limit.\n- Asynchronous API.\n- Structured data (objects, arrays).\n- Supports indexes, transactions.\n- Use: offline storage, large datasets, caching.\n\nLibraries like `localforage`, `idb`, and `Dexie.js` simplify IndexedDB usage.",
    bestAnswer: "Three client-side storage mechanisms:\n\n| Feature | localStorage | sessionStorage | IndexedDB |\n|---------|-------------|----------------|-----------|\n| Persistence | Permanent | Tab only | Permanent |\n| Size | ~5-10MB | ~5-10MB | 60%+ disk |\n| API | Sync | Sync | Async |\n| Data types | Strings only | Strings only | Any (structured) |\n| Use | Preferences, auth | Form state | Large data, offline |\n\n**localStorage:**\n```javascript\nlocalStorage.setItem('theme', 'dark');\nconst theme = localStorage.getItem('theme');\n```\nPersistent across sessions. Good for user settings, cached data, JWT tokens.\n\n**sessionStorage:**\n```javascript\nsessionStorage.setItem('formDraft', JSON.stringify(formData));\n```\nPer-tab, cleared on close. Good for temporary form state.\n\n**IndexedDB:**\n```javascript\nconst db = await idb.openDB('mydb', 1, {\n  upgrade(db) { db.createObjectStore('users', { keyPath: 'id' }); },\n});\nawait db.put('users', { id: 1, name: 'Alice' });\n```\nFull database with transactions and indexes. Good for offline apps, large datasets, caching.",
    alternativeAnswers: [
      "Service Worker Cache API provides another storage layer optimized for network requests — it can cache API responses, images, and entire pages for offline use.",
      "Cookies store small amounts of data (4KB) that are sent with every HTTP request — essential for authentication but not suitable for general storage."
    ],
    commonMistakes: [
      "Storing sensitive data (tokens, passwords) in localStorage — it's accessible to any JavaScript on the page, making it vulnerable to XSS.",
      "Not handling the synchronous nature of localStorage — it blocks the main thread during large read/writes.",
      "Assuming localStorage is available everywhere — it can be disabled in private browsing or when storage is full."
    ],
    followUpQuestions: [
      "How do you implement offline support with Service Workers and Cache API?",
      "What are the security implications of storing JWT tokens in localStorage?",
      "How do you handle storage quota limits?"
    ],
    relatedQuestionIds: ["fe-004", "fe-076"],
    references: [
      { title: "MDN Web Storage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" },
      { title: "MDN IndexedDB", url: "https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Async JavaScript (fe-073 – fe-076)
  // ──────────────────────────────────────────────
  {
    id: "fe-073",
    title: "What is `async`/`await` and how does it relate to Promises?",
    content: "How does `async`/`await` work in JavaScript? How does it relate to Promises? What are common patterns and pitfalls?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Async JavaScript",
    category: "Async JavaScript",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft", "Netflix"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "`async`/`await` is syntactic sugar over Promises. `async` functions always return a Promise. `await` pauses execution until a Promise resolves, making asynchronous code read like synchronous code. Errors are caught with try/catch.",
    detailedExplanation: "`async`/`await` simplifies Promise usage:\n```javascript\n// Promise chain\nfetch(url)\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));\n\n// async/await equivalent\nasync function getData() {\n  try {\n    const res = await fetch(url);\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error(err);\n  }\n}\n```\n\nKey points:\n- `await` only works inside `async` functions (or at module top level in modern JS).\n- `async` functions always return a Promise.\n- `await` unwraps the Promise value.\n- Errors are caught with try/catch (instead of .catch()).",
    bestAnswer: "`async`/`await` is syntactic sugar that makes Promise-based code cleaner and more readable:\n\n```javascript\n// Before: Promise chains\nfetch('/api/user')\n  .then(r => r.json())\n  .then(user => fetch(`/api/posts/${user.id}`))\n  .then(r => r.json())\n  .then(posts => console.log(posts));\n\n// After: async/await\nasync function getUserPosts() {\n  const userRes = await fetch('/api/user');\n  const user = await userRes.json();\n  const postsRes = await fetch(`/api/posts/${user.id}`);\n  const posts = await postsRes.json();\n  return posts;\n}\n```\n\n**Key rules:**\n- `async` function always returns a Promise.\n- `await` pauses until Promise resolves, returns the value.\n- Errors caught with try/catch.\n\n**Parallel execution:**\n```javascript\n// Sequential (slow)\nconst a = await fetchA();\nconst b = await fetchB();\n\n// Parallel (fast)\nconst [a, b] = await Promise.all([fetchA(), fetchB()]);\n```\n\n**Common pitfall:** unnecessary sequential awaits when operations are independent.",
    alternativeAnswers: [
      "Top-level `await` is supported in ES modules — you can use `await` at the module level without wrapping in an async function.",
      "Async generators (`async function*`) combine async iteration with Promises, useful for streaming data processing."
    ],
    commonMistakes: [
      "Using sequential `await` when operations could run in parallel — `Promise.all()` for independent operations.",
      "Not wrapping `await` in try/catch, leading to unhandled Promise rejections.",
      "Forgetting that `async` functions always return a Promise — even `return 42` returns `Promise<42>`."
    ],
    followUpQuestions: [
      "How do you run async operations in parallel vs sequentially?",
      "What is top-level await and when is it useful?",
      "How do you handle errors in async/await with a global error handler?"
    ],
    relatedQuestionIds: ["fe-027", "fe-020"],
    references: [
      { title: "MDN async/await", url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises" },
      { title: "JavaScript.info async/await", url: "https://javascript.info/async-await" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-074",
    title: "How do you handle errors in async JavaScript?",
    content: "What are the best practices for error handling in async JavaScript? How do you handle errors in Promise chains and async/await?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Async JavaScript",
    category: "Async JavaScript",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Use try/catch with async/await, .catch() with Promise chains, and always handle errors at appropriate boundaries. Use global handlers (window.onunhandledrejection) as a safety net. Distinguish between expected errors (validation) and unexpected errors (network failures).",
    detailedExplanation: "Error handling patterns:\n\n1. **try/catch with async/await:**\n```javascript\nasync function fetchData() {\n  try {\n    const res = await fetch(url);\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    return await res.json();\n  } catch (error) {\n    console.error('Fetch failed:', error);\n    throw error; // re-throw or return fallback\n  }\n}\n```\n\n2. **Promise .catch():**\n```javascript\nfetch(url)\n  .then(res => res.json())\n  .catch(error => console.error(error));\n```\n\n3. **Global handler:**\n```javascript\nwindow.addEventListener('unhandledrejection', event => {\n  console.error('Unhandled rejection:', event.reason);\n});\n```\n\n4. **Error boundaries (React):** catch render-time errors.\n\n5. **AbortError handling:** distinguish between user cancellation and real errors.",
    bestAnswer: "Async error handling best practices:\n\n**With async/await:**\n```javascript\nasync function getData() {\n  try {\n    const res = await fetch(url);\n    if (!res.ok) throw new ApiError(res.status, await res.text());\n    return await res.json();\n  } catch (error) {\n    if (error.name === 'AbortError') return null; // user cancelled\n    reportError(error); // analytics\n    throw error; // propagate or return fallback\n  }\n}\n```\n\n**With React Query / TanStack Query:**\n```typescript\nconst { error, isError } = useQuery({\n  queryKey: ['data'],\n  queryFn: fetchData,\n  retry: 2,\n});\n```\n\n**Global safety net:**\n```javascript\nwindow.addEventListener('unhandledrejection', e => {\n  e.preventDefault(); // prevent console error\n  logError(e.reason);\n});\n```\n\n**Error boundaries (React):**\n```jsx\nclass ErrorBoundary extends React.Component {\n  state = { error: null };\n  static getDerivedStateFromError(error) { return { error }; }\n  render() { return this.state.error ? <Fallback error={this.state.error} /> : this.props.children; }\n}\n```\n\n**Principles:** handle at the right boundary, distinguish expected vs unexpected errors, never silently swallow errors.",
    alternativeAnswers: [
      "Error classes (NotFoundError, ValidationError, NetworkError) enable different handling strategies for different error types.",
      "The `AbortController` pattern for cancellation requires special handling — check `error.name === 'AbortError'` to distinguish from real errors."
    ],
    commonMistakes: [
      "Silently catching and swallowing errors without logging or reporting them.",
      "Not distinguishing between abort errors (user action) and real errors (network failure).",
      "Using `catch` without re-throwing or returning a fallback — the caller has no idea something went wrong."
    ],
    followUpQuestions: [
      "How do error boundaries work in React?",
      "How do you implement retry logic for failed requests?",
      "How do you handle errors in Promise.all (one failure fails all)?"
    ],
    relatedQuestionIds: ["fe-073", "fe-027"],
    references: [
      { title: "MDN Error Handling", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch" },
      { title: "JavaScript.info Error Handling", url: "https://javascript.info/try-catch" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-075",
    title: "What is the difference between microtasks and macrotasks?",
    content: "What are microtasks and macrotasks in JavaScript? How do they relate to the event loop?",
    difficulty: "advanced",
    track: "frontend",
    topic: "Async JavaScript",
    category: "Async JavaScript",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "Microtasks (Promise callbacks, queueMicrotask, MutationObserver) have higher priority than macrotasks (setTimeout, setInterval, I/O). All microtasks execute before the next macrotask or browser render.",
    detailedExplanation: "Microtasks include: Promise.then/catch/finally callbacks, queueMicrotask(), MutationObserver callbacks, and process.nextTick (Node.js).\n\nMacrotasks include: setTimeout/setInterval callbacks, I/O callbacks, UI rendering, requestAnimationFrame (separate queue), MessageChannel.\n\nExecution order within one event loop iteration:\n1. Execute all synchronous code (call stack).\n2. Drain ALL microtasks.\n3. Execute ONE macrotask.\n4. Render if needed.\n5. Repeat.\n\nKey insight: microtasks always clear completely before the next macrotask. This means Promise chains can delay rendering and other macrotasks.",
    bestAnswer: "**Microtasks** have higher priority and always clear before the next macrotask:\n- Promise `.then()`, `.catch()`, `.finally()`\n- `queueMicrotask()`\n- `MutationObserver` callbacks\n\n**Macrotasks** are lower priority, one executes per event loop iteration:\n- `setTimeout`, `setInterval`\n- I/O callbacks\n- UI rendering\n- `MessageChannel`\n\n**Execution order per event loop tick:**\n1. Run all synchronous code.\n2. Drain ALL microtasks (including microtasks spawned by microtasks).\n3. Run ONE macrotask.\n4. Render (if needed).\n5. Repeat.\n\n```javascript\nconsole.log('1'); // sync\nsetTimeout(() => console.log('2'), 0); // macrotask\nPromise.resolve().then(() => console.log('3')); // microtask\nconsole.log('4'); // sync\n// Output: 1, 4, 3, 2\n```\n\n`requestAnimationFrame` runs between microtasks and the render step — it's neither a microtask nor a macrotask.",
    alternativeAnswers: [
      "Microtask starvation: an infinite loop of microtasks can block macrotasks and rendering indefinitely.",
      "`queueMicrotask()` is the preferred way to schedule microtasks — it's cleaner than `Promise.resolve().then()`."
    ],
    commonMistakes: [
      "Thinking setTimeout(fn, 0) runs immediately — it's a macrotask and runs after all microtasks clear.",
      "Not knowing that microtasks spawned by other microtasks also run before the next macrotask.",
      "Confusing requestAnimationFrame with macrotasks — it has its own timing in the rendering pipeline."
    ],
    followUpQuestions: [
      "How does microtask starvation work and when can it happen?",
      "How does requestAnimationFrame fit between microtasks and rendering?",
      "What is the difference between microtask queue and job queue?"
    ],
    relatedQuestionIds: ["fe-020", "fe-073"],
    references: [
      { title: "MDN Microtasks", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop" },
      { title: "Tasks, microtasks, queues", url: "https://javascript.info/event-loop" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-076",
    title: "How do you implement debouncing and throttling?",
    content: "What are debouncing and throttling? How do you implement them? When would you use each?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Async JavaScript",
    category: "Async JavaScript",
    companyTags: ["Google", "Amazon", "Microsoft", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Debouncing delays execution until activity stops for a period (e.g., search input). Throttling limits execution to once per period (e.g., scroll handlers). Both prevent excessive function calls during rapid events.",
    detailedExplanation: "**Debouncing:** waits until a pause in events before executing. If events keep coming, the timer resets.\n```javascript\nfunction debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n```\nUse: search input, window resize, form validation.\n\n**Throttling:** executes at most once per interval, regardless of how many events fire.\n```javascript\nfunction throttle(fn, limit) {\n  let inThrottle;\n  return (...args) => {\n    if (!inThrottle) {\n      fn(...args);\n      inThrottle = true;\n      setTimeout(() => inThrottle = false, limit);\n    }\n  };\n}\n```\nUse: scroll handlers, mousemove, button clicks.\n\nLodash provides `_.debounce()` and `_.throttle()`.",
    bestAnswer: "**Debouncing** delays execution until events stop for a specified period:\n```javascript\nfunction debounce(fn, ms = 300) {\n  let timeoutId;\n  return (...args) => {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn(...args), ms);\n  };\n}\n\n// Usage: search input\nconst debouncedSearch = debounce(search, 500);\ninput.addEventListener('input', debouncedSearch);\n```\nUse for: search autocomplete, form validation, resize handlers.\n\n**Throttling** ensures execution at most once per interval:\n```javascript\nfunction throttle(fn, ms = 100) {\n  let lastCall = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - lastCall >= ms) {\n      lastCall = now;\n      fn(...args);\n    }\n  };\n}\n\n// Usage: scroll handler\nconst throttledScroll = throttle(handleScroll, 200);\nwindow.addEventListener('scroll', throttledScroll);\n```\nUse for: scroll handlers, mousemove tracking, button click prevention.\n\n**Debounce = wait for pause. Throttle = execute at intervals.**",
    alternativeAnswers: [
      "React Hook: `useDebouncedValue` from react-use or `useDebouncedCallback` from use-debounce provide hook-based implementations.",
      "requestAnimationFrame-based throttling synchronizes with the browser's paint cycle for smooth animations."
    ],
    commonMistakes: [
      "Using debounce when throttle is needed (and vice versa) — debounce waits for a pause, throttle runs at intervals.",
      "Debouncing event handlers that need immediate feedback (like form validation on blur).",
      "Not canceling debounce timers on component unmount, leading to updates on unmounted components."
    ],
    followUpQuestions: [
      "How do you implement a trailing-edge throttle (execute after the interval, not at the start)?",
      "How do you debounce React state updates?",
      "What is the difference between leading-edge and trailing-edge debounce?"
    ],
    relatedQuestionIds: ["fe-020", "fe-071"],
    references: [
      { title: "Lodash debounce", url: "https://lodash.com/docs/4.17.15#debounce" },
      { title: "JavaScript.info Throttle", url: "https://javascript.info/throttle" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Web Security (fe-077 – fe-080)
  // ──────────────────────────────────────────────
  {
    id: "fe-077",
    title: "What is Cross-Site Scripting (XSS) and how do you prevent it?",
    content: "What is XSS (Cross-Site Scripting)? What are the different types and how do you prevent them?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Web Security",
    category: "Web Security",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft", "Stripe"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "XSS injects malicious scripts into web pages viewed by other users. Types: Stored (persistent), Reflected (URL-based), and DOM-based. Prevention: sanitize user input, use Content Security Policy, escape output, use framework built-in protections.",
    detailedExplanation: "XSS types:\n\n1. **Stored XSS:** malicious script is permanently stored (database, comment field). Served to every user who views the affected page.\n\n2. **Reflected XSS:** script is reflected off the server (URL parameter, form submission). Victim clicks a crafted link.\n\n3. **DOM-based XSS:** script executes entirely in the client by manipulating the DOM. The server doesn't see the payload.\n\nPrevention:\n1. **Sanitize input:** validate and sanitize all user input on the server.\n2. **Escape output:** encode special characters (`<`, `>`, `&`, `\"`, `'`).\n3. **Content Security Policy (CSP):** restrict script sources.\n4. **Framework protections:** React escapes JSX by default, Angular sanitizes automatically.\n5. **HttpOnly cookies:** prevent JavaScript access to auth tokens.\n6. **Use DOMPurify:** for sanitizing HTML content.",
    bestAnswer: "XSS injects malicious scripts into web pages, executed in users' browsers:\n\n**Types:**\n- **Stored XSS:** payload stored in database, served to all users. Most dangerous.\n- **Reflected XSS:** payload in URL/form, reflected back by server.\n- **DOM-based XSS:** payload manipulates DOM via client-side JavaScript.\n\n**Prevention:**\n1. **Output encoding:** escape `<`, `>`, `&`, `\"`, `'` when rendering user content.\n2. **Content Security Policy (CSP):**\n```http\nContent-Security-Policy: default-src 'self'; script-src 'self'\n```\n3. **Sanitize HTML:** use DOMPurify for user-generated HTML content.\n4. **Framework defaults:** React escapes JSX expressions; avoid `dangerouslySetInnerHTML`.\n5. **HttpOnly cookies:** prevent JavaScript access to auth tokens.\n6. **Input validation:** validate on server, not just client.\n\n**React-specific:**\n```jsx\n// Safe: React escapes this\n<div>{userInput}</div>\n\n// Dangerous: bypasses escaping\n<div dangerouslySetInnerHTML={{ __html: userInput }} />\n// Only use with sanitized content (DOMPurify)\n```",
    alternativeAnswers: [
      "Trusted Types API is a browser feature that prevents DOM XSS by requiring developers to use typed objects instead of strings for dangerous sinks (innerHTML, eval, etc.).",
      "Sanitization libraries like DOMPurify parse and allow only safe HTML tags and attributes."
    ],
    commonMistakes: [
      "Trusting client-side validation alone — server-side validation is essential for XSS prevention.",
      "Using `dangerouslySetInnerHTML` without sanitizing with DOMPurify.",
      "Not implementing CSP headers — they're the defense-in-depth layer against XSS."
    ],
    followUpQuestions: [
      "How does Content Security Policy (CSP) work?",
      "What is DOMPurify and how do you use it?",
      "How do you prevent XSS in a React application using dangerouslySetInnerHTML?"
    ],
    relatedQuestionIds: ["fe-078", "fe-079"],
    references: [
      { title: "OWASP XSS Prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Scripting_Prevention_Cheat_Sheet.html" },
      { title: "DOMPurify", url: "https://github.com/cure53/DOMPurify" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-078",
    title: "What is Cross-Site Request Forgery (CSRF) and how do you prevent it?",
    content: "What is CSRF? How does it work and what are the prevention strategies?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Web Security",
    category: "Web Security",
    companyTags: ["Google", "Amazon", "Microsoft", "Stripe"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "CSRF tricks authenticated users into submitting unintended requests. An attacker embeds a form or image that triggers a state-changing request to the target site using the user's cookies. Prevention: CSRF tokens, SameSite cookies, checking Origin/Referer headers.",
    detailedExplanation: "How CSRF works:\n1. User logs into bank.com, session cookie is set.\n2. User visits malicious site.\n3. Malicious site contains: `<img src=\"https://bank.com/transfer?to=attacker&amount=1000\">` or a hidden form.\n4. Browser sends the request to bank.com WITH the user's cookies.\n5. Bank.com processes the transfer.\n\nPrevention:\n1. **CSRF tokens:** server generates unique tokens, embedded in forms, validated on submission.\n2. **SameSite cookies:** `SameSite=Strict` or `SameSite=Lax` prevents cookies from being sent cross-site.\n3. **Origin/Referer header checks:** verify requests come from your domain.\n4. **Double-submit cookie:** send token in both cookie and header.\n5. **Custom request headers:** require custom headers that simple forms can't send.",
    bestAnswer: "CSRF exploits the browser's automatic cookie inclusion — when a user visits a malicious site, their browser sends cookies to your site, enabling unauthorized state-changing requests.\n\n**Attack example:**\n```html\n<!-- On evil.com -->\n<img src=\"https://bank.com/api/transfer?to=attacker&amount=1000\">\n<!-- User's cookies are sent automatically -->\n```\n\n**Prevention strategies:**\n\n1. **CSRF Tokens:** server generates unique token per session, embedded in forms:\n```html\n<form action=\"/transfer\" method=\"POST\">\n  <input type=\"hidden\" name=\"_csrf\" value=\"abc123\">\n  <!-- ... -->\n</form>\n```\n\n2. **SameSite Cookies:**\n```http\nSet-Cookie: session=abc123; SameSite=Lax; Secure; HttpOnly\n```\n- `Strict`: never sent cross-site.\n- `Lax`: sent for top-level navigations only.\n\n3. **Custom Headers:** JavaScript requests can include custom headers; simple forms cannot.\n\n4. **Origin/Referer validation:** check that requests originate from your domain.",
    alternativeAnswers: [
      "SameSite=Lax is now the browser default, providing CSRF protection without explicit tokens for most applications.",
      "Double-submit cookie pattern: send the CSRF token in both a cookie and a request header — the server verifies they match."
    ],
    commonMistakes: [
      "Relying solely on SameSite cookies without CSRF tokens — same-site is defense-in-depth, not the only protection.",
      "Not protecting state-changing POST/PUT/DELETE requests with CSRF tokens.",
      "Accepting requests without checking Origin/Referer headers."
    ],
    followUpQuestions: [
      "How does SameSite cookie attribute work?",
      "What is the difference between CSRF and XSS?",
      "How do you implement CSRF protection in a Next.js application?"
    ],
    relatedQuestionIds: ["fe-077", "fe-080"],
    references: [
      { title: "OWASP CSRF Prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" },
      { title: "MDN SameSite cookies", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-079",
    title: "What is Content Security Policy (CSP)?",
    content: "What is Content Security Policy? How does it protect against XSS and data injection attacks?",
    difficulty: "advanced",
    track: "frontend",
    topic: "Web Security",
    category: "Web Security",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "CSP is an HTTP header that restricts which resources (scripts, styles, images, fonts) a browser can load. It prevents XSS by blocking unauthorized scripts, data injection, and clickjacking. It's configured via the Content-Security-Policy HTTP header.",
    detailedExplanation: "CSP directives:\n- `default-src`: fallback for all resource types.\n- `script-src`: allowed script sources.\n- `style-src`: allowed style sources.\n- `img-src`: allowed image sources.\n- `connect-src`: allowed fetch/XHR/WebSocket targets.\n- `font-src`: allowed font sources.\n- `frame-src`: allowed iframe sources.\n- `object-src`: allowed plugin sources.\n\nCommon CSP:\n```\nContent-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://api.example.com;\n```\n\n`report-uri` or `report-to` directives send violation reports to a specified endpoint.\n\nCSP can also prevent clickjacking with `frame-ancestors`.",
    bestAnswer: "CSP is an HTTP response header that whitelists allowed resource sources:\n\n```\nContent-Security-Policy:\n  default-src 'self';\n  script-src 'self' https://trusted-cdn.com;\n  style-src 'self' 'unsafe-inline';\n  img-src 'self' data: https:;\n  connect-src 'self' https://api.example.com;\n  frame-ancestors 'none';\n  base-uri 'self';\n  form-action 'self';\n```\n\n**How it prevents attacks:**\n- **XSS:** blocks inline scripts and unauthorized script sources.\n- **Data injection:** restricts where data can be loaded from.\n- **Clickjacking:** `frame-ancestors 'none'` prevents iframe embedding.\n\n**Directives:**\n- `script-src`: scripts (most important for XSS).\n- `style-src`: stylesheets.\n- `connect-src`: AJAX, WebSocket, EventSource.\n- `img-src`: images.\n- `font-src`: fonts.\n- `default-src`: fallback for all types.\n\n**Reporting:**\n```\nContent-Security-Policy-Report-Only: ...; report-uri /csp-report\n```\nMonitor violations without enforcing first.",
    alternativeAnswers: [
      "Nonce-based CSP: `<script nonce=\"random123\">` allows only scripts with the correct nonce, enabling inline scripts while blocking injected ones.",
      "CSP Level 3 introduces stricter `require-trusted-types-for` which prevents DOM XSS by requiring Trusted Types for dangerous DOM sinks."
    ],
    commonMistakes: [
      "Using `'unsafe-inline'` for scripts — it defeats the purpose of CSP for XSS prevention.",
      "Not testing CSP in report-only mode first — breaking changes can disable critical functionality.",
      "Forgetting that CSP applies to inline styles and event handlers as well as script sources."
    ],
    followUpQuestions: [
      "How do you implement CSP with nonces for inline scripts?",
      "What is the difference between `script-src` and `default-src`?",
      "How do you use CSP report-only mode to test before enforcing?"
    ],
    relatedQuestionIds: ["fe-077", "fe-080"],
    references: [
      { title: "MDN CSP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" },
      { title: "CSP Evaluator", url: "https://csp-evaluator.withgoogle.com/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "fe-080",
    title: "What are CORS and how do you configure it?",
    content: "What is CORS (Cross-Origin Resource Sharing)? How does the preflight request work? How do you configure it properly?",
    difficulty: "intermediate",
    track: "frontend",
    topic: "Web Security",
    category: "Web Security",
    companyTags: ["Google", "Meta", "Amazon", "Microsoft", "Stripe"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "CORS is a browser security mechanism that restricts cross-origin HTTP requests. The browser sends a preflight OPTIONS request for non-simple requests, and the server responds with allowed origins, methods, and headers. CORS is enforced by the browser, not the server.",
    detailedExplanation: "Same-origin policy restricts how documents/scripts from one origin can interact with resources from another origin. CORS relaxes this with server permission.\n\n**Simple requests** (GET, HEAD, POST with certain content types): browser sends directly with `Origin` header.\n\n**Preflight requests** (PUT, DELETE, custom headers, etc.): browser sends OPTIONS request first:\n```\nOPTIONS /api/data\nOrigin: https://example.com\nAccess-Control-Request-Method: PUT\nAccess-Control-Request-Headers: Content-Type\n```\n\nServer responds:\n```\nAccess-Control-Allow-Origin: https://example.com\nAccess-Control-Allow-Methods: GET, POST, PUT\nAccess-Control-Allow-Headers: Content-Type\nAccess-Control-Max-Age: 86400\n```\n\n**Credentials:** `Access-Control-Allow-Credentials: true` allows cookies. You must also specify exact origins (not `*`).",
    bestAnswer: "CORS is the browser's cross-origin security mechanism:\n\n**Same-origin policy:** scripts from `https://a.com` can't read responses from `https://b.com` without permission.\n\n**How CORS works:**\n1. Browser sends `Origin` header with cross-origin request.\n2. Server responds with `Access-Control-Allow-Origin` header.\n3. Browser allows or blocks the response.\n\n**Simple requests** (GET, HEAD, POST with safe content types): sent directly.\n\n**Non-simple requests** trigger preflight:\n```http\nOPTIONS /api/data HTTP/1.1\nOrigin: https://example.com\nAccess-Control-Request-Method: DELETE\nAccess-Control-Request-Headers: Authorization\n\nHTTP/1.1 204 No Content\nAccess-Control-Allow-Origin: https://example.com\nAccess-Control-Allow-Methods: GET, POST, DELETE\nAccess-Control-Allow-Headers: Authorization\nAccess-Control-Max-Age: 86400\n```\n\n**With credentials (cookies):**\n```http\nAccess-Control-Allow-Origin: https://example.com  // must be specific, not *\nAccess-Control-Allow-Credentials: true\n```\n\n**Common configuration (Express):**\n```javascript\napp.use(cors({\n  origin: 'https://example.com',\n  credentials: true,\n  methods: ['GET', 'POST', 'PUT', 'DELETE'],\n}));\n```",
    alternativeAnswers: [
      "Preflight results are cached by the browser for the duration specified by `Access-Control-Max-Age`, reducing preflight requests.",
      "Proxy servers can bypass CORS for development — the server makes requests to the API on behalf of the client."
    ],
    commonMistakes: [
      "Using `Access-Control-Allow-Origin: *` with credentials — this is not allowed by the spec. You must specify the exact origin.",
      "Forgetting to handle preflight requests — non-simple requests fail if the server doesn't respond to OPTIONS requests.",
      "Confusing CORS with server-side security — CORS only affects browsers; it doesn't protect APIs from non-browser clients."
    ],
    followUpQuestions: [
      "What makes a request 'non-simple' and trigger a preflight?",
      "How do you set up a proxy for CORS in development?",
      "What is the difference between `Access-Control-Allow-Origin` and `Access-Control-Allow-Credentials`?"
    ],
    relatedQuestionIds: ["fe-077", "fe-071"],
    references: [
      { title: "MDN CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
      { title: "CORS Guide", url: "https://web.dev/cross-origin-resource-sharing/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
];
