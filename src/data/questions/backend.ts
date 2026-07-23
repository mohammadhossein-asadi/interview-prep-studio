import type { Question } from "@/types/question";

const now = "2026-07-12T00:00:00.000Z";

export const backendQuestions: Question[] = [
  // ──────────────────────────────────────────────
  // Node.js (be-001 – be-010)
  // ──────────────────────────────────────────────
  {
    id: "be-001",
    title: "What is the event loop in Node.js and how does it work?",
    content: "Explain the Node.js event loop. What are its phases, how does it handle asynchronous operations, and what is the difference between microtasks and macrotasks?",
    difficulty: "beginner",
    track: "backend",
    topic: "Node.js",
    category: "Node.js Fundamentals",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "The event loop is a mechanism that allows Node.js to perform non-blocking I/O by offloading operations to the system kernel. It continuously checks the call stack and callback queue, executing callbacks when the stack is empty.",
    detailedExplanation: "Node.js uses a single-threaded event loop to handle concurrent operations without creating new threads for each request. The event loop has several phases: timers (setTimeout/setInterval callbacks), pending callbacks (I/O callbacks deferred to the next iteration), idle/prepare (internal use), poll (retrieves new I/O events), check (setImmediate callbacks), and close callbacks (e.g., `socket.on('close')`).\n\nWithin each phase, the event loop processes callbacks from a specific queue before moving to the next phase. After each phase completes, the event loop checks for microtasks (Promise callbacks via `process.nextTick()` and `queueMicrotask()`) and executes them before proceeding. Microtasks always run before the next macrotask phase, regardless of which phase the loop is in.\n\nUnderstanding this is critical because it determines the execution order of asynchronous code. For example, `process.nextTick()` runs before `Promise.resolve().then()` in the microtask queue, and both run before `setImmediate()` in the check phase.",
    bestAnswer: "The event loop is Node.js's core mechanism for handling asynchronous I/O on a single thread. It has six phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks. Each phase has its own queue of callbacks.\n\nThe loop works by: (1) executing the current phase's callbacks until the queue is empty, (2) running all microtasks (process.nextTick, Promise callbacks) between phases, (3) moving to the next phase. The poll phase is especially important — it blocks waiting for new I/O events when there are no timers or check callbacks pending.\n\nMicrotasks (Promise callbacks, process.nextTick) always execute before the next macrotask phase. process.nextTick has the highest priority among microtasks and runs before Promise.then callbacks.",
    alternativeAnswers: [
      "I'd also mention that libuv (the C library behind Node.js's event loop) is what actually manages the system calls and event notification mechanisms like epoll on Linux, kqueue on macOS, and IOCP on Windows.",
      "The event loop also handles process-level operations like signal handling (process.on('SIGTERM')) and child process IPC in addition to network and file I/O."
    ],
    commonMistakes: [
      "Confusing microtasks and macrotasks — microtasks (Promise.then, process.nextTick) always run before the next macrotask (setTimeout, setImmediate).",
      "Assuming the event loop is truly single-threaded — libuv uses a thread pool (default 4 threads) for certain operations like file system and DNS lookups.",
      "Forgetting that process.nextTick() callbacks run before Promise callbacks and can starve I/O if used excessively."
    ],
    followUpQuestions: [
      "What happens if you call process.nextTick() inside a recursive function?",
      "How does setImmediate differ from setTimeout(fn, 0)?",
      "When would you use a worker thread instead of the event loop?"
    ],
    relatedQuestionIds: ["be-002", "be-003"],
    references: [
      { title: "Node.js Event Loop Documentation", url: "https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop" },
      { title: "libuv Event Loop", url: "https://docs.libuv.org/en/v1.x/guide/event_loop.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-002",
    title: "What is the difference between `process.nextTick()` and `setImmediate()`?",
    content: "Explain the difference between `process.nextTick()` and `setImmediate()`. When would you use each one?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Node.js",
    category: "Node.js Fundamentals",
    companyTags: ["Google", "Meta", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "`process.nextTick()` schedules a callback to run after the current operation completes but before the event loop continues. `setImmediate()` schedules a callback to run during the check phase of the event loop, after I/O callbacks.",
    detailedExplanation: "`process.nextTick()` is part of the microtask queue and runs immediately after the current synchronous operation finishes, before the event loop moves to the next phase. This makes it higher priority than `setImmediate()`. However, if called recursively via nextTick, it can starve I/O because the event loop never reaches the poll phase.\n\n`setImmediate()` runs during the check phase, which comes after the poll phase (where I/O callbacks execute). This makes it more predictable for scheduling work relative to I/O operations. In most cases, `setImmediate()` is preferred over `process.nextTick()` for deferring work because it doesn't risk starving I/O.\n\nNote: the execution order of nextTick and setImmediate can be non-deterministic when called from the main module (depends on system performance), but within an I/O callback, setImmediate always fires first because nextTick runs before the I/O callback returns.",
    bestAnswer: "`process.nextTick()` queues a callback as a microtask — it runs before the event loop proceeds to the next phase. `setImmediate()` queues a callback for the check phase of the event loop.\n\nUse `process.nextTick()` when you need to ensure a callback runs before any I/O or timers, or when you want to maintain a consistent API that promises a result asynchronously. Use `setImmediate()` when you want to defer work until after the current I/O callbacks have been processed — it's safer for high-frequency scenarios because it won't starve I/O.\n\nIn practice, prefer `setImmediate()` over recursive `process.nextTick()` to avoid blocking the event loop.",
    alternativeAnswers: [
      "process.nextTick is essentially a leftover from io.js and Node.js core uses it internally. External code should generally prefer setImmediate or queueMicrotask for clarity.",
      "Promise.resolve().then() is another microtask alternative that behaves similarly to nextTick but with slightly lower priority in the microtask queue."
    ],
    commonMistakes: [
      "Thinking process.nextTick always runs before setImmediate — this is only guaranteed within I/O callbacks, not from the main module.",
      "Using recursive process.nextTick without realizing it can starve I/O and timers.",
      "Confusing setImmediate with setTimeout(fn, 0) — setImmediate always runs after I/O, while setTimeout(fn, 0) schedules for the timers phase."
    ],
    followUpQuestions: [
      "What happens if you recursively call process.nextTick?",
      "How does queueMicrotask compare to process.nextTick?",
      "Can you give a real-world example where setImmediate is necessary?"
    ],
    relatedQuestionIds: ["be-001", "be-003"],
    references: [
      { title: "Node.js nextTick vs setImmediate", url: "https://nodejs.org/en/learn/asynchronous-work/understanding-processnexttick" },
      { title: "Timers Documentation", url: "https://nodejs.org/api/timers.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-003",
    title: "How does Node.js handle errors in asynchronous code?",
    content: "How do you handle errors in Node.js asynchronous code? Cover callbacks, Promises, and async/await approaches.",
    difficulty: "intermediate",
    track: "backend",
    topic: "Node.js",
    category: "Error Handling",
    companyTags: ["Amazon", "Microsoft", "Stripe"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "In Node.js, async errors can be handled via error-first callbacks (using the `err` parameter), Promise `.catch()` handlers, or try/catch blocks with async/await. Unhandled rejections crash the process in recent Node.js versions.",
    detailedExplanation: "The error-first callback pattern is Node.js's traditional approach: `fs.readFile(path, (err, data) => { if (err) return handleError(err); ... })`. The callback always receives `err` as its first argument.\n\nWith Promises, errors are caught using `.catch()` or the second argument of `.then(onFulfilled, onRejected)`. A rejected promise propagates up the chain until a handler catches it. Unhandled promise rejections (UPR) crash the process in Node.js 15+ unless a handler is registered.\n\nAsync/await provides the most ergonomic approach: you wrap await calls in try/catch blocks, treating async code like synchronous code. Global error handling can be done with `process.on('unhandledRejection')` and `process.on('uncaughtException')`, though these should be used as last-resort safety nets, not primary error handling mechanisms.",
    bestAnswer: "Node.js supports three primary patterns for async error handling:\n\n1. **Error-first callbacks**: `(err, result) => { if (err) { /* handle */ } }` — the traditional Node.js pattern.\n2. **Promise.catch()**: Chain `.catch()` handlers or use `.then(null, handler)` — errors propagate up the chain until caught.\n3. **Async/await + try/catch**: The most readable approach — wrap await calls in try/catch blocks for synchronous-style error handling.\n\nFor global safety nets: `process.on('unhandledRejection')` catches unhandled promise rejections (crashes the process in Node 15+), and `process.on('uncaughtException')` catches thrown errors that escaped try/catch. Use these sparingly as last-resort handlers, not as primary error handling.",
    alternativeAnswers: [
      "In NestJS, you'd use exception filters and the @Catch decorator to handle errors globally at the framework level, plus HttpException for HTTP-specific errors.",
      "You can also use the 'error-handler' npm package or build custom error middleware that standardizes error responses across an Express application."
    ],
    commonMistakes: [
      "Forgetting to handle promise rejections — unhandled rejections crash the process in Node.js 15+.",
      "Using process.on('uncaughtException') as primary error handling instead of try/catch — the process may be in an inconsistent state after an uncaught exception.",
      "Not checking the 'err' argument in callbacks before accessing the result parameter."
    ],
    followUpQuestions: [
      "How would you implement a global error handler in Express?",
      "What is the difference between operational errors and programmer errors in Node.js?",
      "How do you handle errors in a microservices architecture?"
    ],
    relatedQuestionIds: ["be-001", "be-011"],
    references: [
      { title: "Node.js Error Handling", url: "https://nodejs.org/api/errors.html" },
      { title: "Understanding Error Events", url: "https://nodejs.org/docs/latest/api/events.html#error-events" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-004",
    title: "What are Streams in Node.js and when should you use them?",
    content: "Explain Node.js Streams. What are the four types, how do they differ, and when should you use streams over other approaches?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Node.js",
    category: "Streams and Buffers",
    companyTags: ["Netflix", "Uber", "Airbnb"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "Streams are objects that let you read or write data continuously rather than loading it all into memory at once. There are four types: Readable, Writable, Duplex, and Transform.",
    detailedExplanation: "Node.js Streams are essential for handling large amounts of data efficiently. They process data in chunks rather than loading entire files or responses into memory.\n\n**Readable streams** produce data: `fs.createReadStream()`, `http.IncomingMessage`, `process.stdin`. They emit 'data', 'end', and 'error' events.\n\n**Writable streams** consume data: `fs.createWriteStream()`, `http.ServerResponse`, `process.stdout`. They support `write()`, `end()`, and handle backpressure.\n\n**Duplex streams** are both readable and writable: `net.Socket`, `zlib.createGzip()`. They implement both Readable and Writable interfaces.\n\n**Transform streams** are duplex streams where output is computed from input: `zlib.createGzip()`, `crypto.createCipher()`. They modify data as it passes through.\n\nStreams handle backpressure automatically — when a consumer is slower than a producer, the readable stream stops reading and resumes when the writable stream catches up. This prevents memory overflow when processing large files.",
    bestAnswer: "Streams are objects for reading/writing data incrementally instead of loading everything into memory. Four types:\n\n1. **Readable**: Produces data (`fs.createReadStream`, `process.stdin`, HTTP request bodies). Emits 'data' events or can be piped.\n2. **Writable**: Consumes data (`fs.createWriteStream`, `process.stdout`, HTTP responses). Supports `write()` and `end()`.\n3. **Duplex**: Both readable and writable (`net.Socket`). Can read and write simultaneously.\n4. **Transform**: Duplex that modifies data in transit (`zlib.createGzip`, `crypto.createCipher`).\n\nUse streams when: processing large files (>100MB), piping data between sources, handling real-time data, or working with network I/O. They handle backpressure automatically, keeping memory usage constant regardless of data size.",
    alternativeAnswers: [
      "Node.js 18+ supports stream/promises for promise-based stream handling with readable.toArray(), readable.arrayFrom(), and readable.compose().",
      "The pipeline() utility from stream/promises is the preferred way to compose streams — it handles error propagation and cleanup automatically, unlike manual .pipe() chains."
    ],
    commonMistakes: [
      "Using .pipe() without handling errors — errors in a piped chain don't propagate to the final destination.",
      "Not handling backpressure in custom writable streams, leading to memory exhaustion.",
      "Reading entire large files into memory with fs.readFile() instead of using createReadStream()."
    ],
    followUpQuestions: [
      "How would you implement a custom Transform stream?",
      "What is backpressure and how do streams handle it?",
      "How do you handle errors in a stream pipeline?"
    ],
    relatedQuestionIds: ["be-001", "be-005"],
    references: [
      { title: "Node.js Stream Documentation", url: "https://nodejs.org/api/stream.html" },
      { title: "Node.js Streams Guide", url: "https://nodejs.org/en/learn/streams/a-guide-to-nodejs-streams" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-005",
    title: "What is the difference between `require()` and ES module `import`?",
    content: "Explain the differences between CommonJS `require()` and ES module `import` in Node.js. What are the implications for performance and tree shaking?",
    difficulty: "beginner",
    track: "backend",
    topic: "Node.js",
    category: "Module System",
    companyTags: ["Google", "Meta", "Vercel"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "CommonJS (`require()`) loads modules synchronously at runtime, while ES modules (`import`) are loaded asynchronously and statically analyzed at parse time. ES modules enable tree shaking and are the modern standard.",
    detailedExplanation: "CommonJS (`require()`) is Node.js's original module system. It's synchronous — `require()` blocks execution until the module is fully loaded. Modules are cached after first load. The module exports an object, and `require()` returns that object. You can use `require()` conditionally (e.g., inside an if block).\n\nES modules (`import`) are loaded asynchronously and analyzed statically at parse time. This means the bundler/compiler knows all imports before execution, enabling tree shaking — dead code elimination where unused exports are removed from the final bundle. ES modules use live bindings (changes to exported values are reflected in the importer), while CommonJS copies values.\n\nNode.js supports ES modules via `.mjs` extension, `\"type\": \"module\"` in package.json, or by naming files `.js` in a module-type package. ES modules are now the recommended approach for new projects.",
    bestAnswer: "CommonJS `require()` and ES module `import` differ in several key ways:\n\n1. **Loading**: require() is synchronous and runs at runtime. import is asynchronous and analyzed at parse time.\n2. **Tree shaking**: Bundlers can statically analyze import/export to eliminate dead code. require() cannot be tree-shaken because it's dynamic.\n3. **Bindings**: CommonJS copies values (no live binding). ES modules use live bindings — if a module changes an export, importers see the update.\n4. **Conditional loading**: require() works inside if/else blocks. import can use dynamic import() for conditional loading.\n5. **Caching**: Both cache modules, but CommonJS caches the exports object while ES modules cache the module namespace.\n\nFor new Node.js projects, ES modules are recommended. They're the JavaScript standard, enable better optimization, and have superior tooling support.",
    alternativeAnswers: [
      "Node.js CommonJS uses module.exports to assign the exported object. ES modules use named exports (export const x) or default export (export default). Both can export objects, but the syntax differs.",
      "The interop between CommonJS and ES modules can be tricky — you can import CommonJS from ES modules but not easily the other way around. The --experimental-require-module flag (Node 22+) enables require() to load ES modules."
    ],
    commonMistakes: [
      "Thinking ES modules are always faster — the static analysis is beneficial for bundling but doesn't change runtime performance for Node.js server code.",
      "Forgetting that require() is synchronous and can block the event loop for large modules.",
      "Mixing require() and import in the same file — while possible, it leads to confusing code and should be avoided."
    ],
    followUpQuestions: [
      "How does dynamic import() work and when would you use it?",
      "What challenges arise when migrating a CommonJS project to ES modules?",
      "How do bundlers like webpack and esbuild handle tree shaking differently?"
    ],
    relatedQuestionIds: ["be-001", "be-004"],
    references: [
      { title: "Node.js Modules Documentation", url: "https://nodejs.org/api/modules.html" },
      { title: "ES Modules in Node.js", url: "https://nodejs.org/api/esm.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-006",
    title: "Explain the concept of middleware in Node.js",
    content: "What is middleware in Node.js? How does it work in Express, and how would you implement custom middleware?",
    difficulty: "beginner",
    track: "backend",
    topic: "Node.js",
    category: "Middleware",
    companyTags: ["Amazon", "Microsoft", "Stripe"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application's request-response cycle. They can execute code, modify req/res, end the cycle, or call next().",
    detailedExplanation: "Middleware in Express.js follows a chain pattern. When a request arrives, it passes through a series of middleware functions. Each middleware can: (1) execute any code, (2) modify request and response objects, (3) end the request-response cycle, or (4) call next() to pass control to the next middleware.\n\nMiddleware is registered using `app.use()` for all routes or `app.METHOD()` for specific routes. The order of registration matters — middleware executes in the order it was added. Common middleware includes body parsing, authentication, logging, CORS handling, and error handling.\n\nCustom middleware follows the signature `(req, res, next) => { ... next(); }`. Error-handling middleware has a special four-parameter signature: `(err, req, res, next) => { ... }`.",
    bestAnswer: "Middleware are functions that intercept requests before they reach route handlers. They form a pipeline where each function can process the request, modify it, or terminate the chain.\n\nIn Express, middleware is added via `app.use(fn)` (all routes) or `app.get('/path', fn)` (specific routes). Each middleware calls `next()` to pass control forward or sends a response to end the chain. Error middleware uses a 4-parameter signature `(err, req, res, next)`.\n\nCommon middleware patterns: logging (morgan), body parsing (express.json), authentication checks, CORS, rate limiting, and error handling. The order matters — error-handling middleware must be registered last.",
    alternativeAnswers: [
      "In NestJS, middleware is implemented as classes with a `use(req, res, next)` method and registered via `app.use()` or `@UseInterceptors()`.",
      "Middleware is essentially a pipeline pattern — the same concept exists in other frameworks as filters, interceptors, or handlers."
    ],
    commonMistakes: [
      "Forgetting to call next() in middleware, which hangs the request indefinitely.",
      "Registering error-handling middleware too early — it must be the last middleware registered.",
      "Not handling errors thrown in async middleware — they won't be caught by Express's error handler without a wrapper."
    ],
    followUpQuestions: [
      "How would you write a rate-limiting middleware?",
      "What is the difference between app.use() and app.METHOD()?",
      "How do you handle async errors in Express middleware?"
    ],
    relatedQuestionIds: ["be-011", "be-012"],
    references: [
      { title: "Express Middleware Guide", url: "https://expressjs.com/en/guide/using-middleware.html" },
      { title: "Writing Middleware", url: "https://expressjs.com/en/advanced/writing-middleware.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-007",
    title: "What is the V8 engine and how does it optimize JavaScript execution?",
    content: "Explain the V8 engine's role in Node.js. How does it compile and optimize JavaScript code using JIT compilation?",
    difficulty: "advanced",
    track: "backend",
    topic: "Node.js",
    category: "V8 Engine",
    companyTags: ["Google", "Meta", "Netflix"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "V8 is Google's open-source JavaScript engine that compiles JavaScript to native machine code. It uses Just-In-Time (JIT) compilation with multiple optimization tiers: Ignition (interpreter), Sparkplug (baseline compiler), Maglev (mid-tier), and TurboFan (optimizing compiler).",
    detailedExplanation: "V8 processes JavaScript in several stages. First, the parser converts source code into an Abstract Syntax Tree (AST). The Ignition interpreter then generates bytecode from the AST and executes it. While executing, Ignition collects type feedback — information about which types of values are seen at each operation.\n\nWhen a function is called frequently (identified via profiling), V8 promotes it through optimization tiers. Sparkplug quickly generates unoptimized native code. Maglev provides mid-tier optimization. TurboFan performs aggressive optimizations based on the collected type feedback: it generates optimized machine code assuming specific types, and if those assumptions hold, the code runs at near-native speed.\n\nIf type assumptions are violated (e.g., a function receives a string when it previously always received numbers), V8 performs a 'deoptimization' — it discards the optimized code and falls back to interpreted or baseline execution. This is why consistent types lead to better performance.",
    bestAnswer: "V8 is the JavaScript engine powering Node.js. It compiles JavaScript to native machine code using JIT compilation across multiple tiers:\n\n1. **Ignition** (interpreter): Fast startup, generates bytecode, collects type feedback.\n2. **Sparkplug** (baseline): Quick native code generation, no optimization.\n3. **Maglev** (mid-tier): Moderate optimization using type feedback.\n4. **TurboFan** (optimizing): Aggressive optimizations based on type feedback — inlines functions, eliminates dead code, optimizes hot paths.\n\nV8 uses Hidden Classes (Maps) for efficient property access, Inline Caches for type specialization, and Deoptimization when type assumptions fail. The key insight: V8 makes assumptions about types and optimizes aggressively — when those assumptions hold, performance approaches C-level; when they break, deoptimization occurs.",
    alternativeAnswers: [
      "V8 also uses a garbage collector with generational collection — young generation uses Scavenge (fast, copies live objects), old generation uses Mark-Sweep-Compact (handles larger objects).",
      "The Performance class and --turbo-profiling flags let developers profile V8's JIT compilation and understand deoptimization events."
    ],
    commonMistakes: [
      "Assuming V8 is a compiler — it's a runtime engine that interprets, compiles, and optimizes JavaScript at execution time.",
      "Not understanding deoptimization — dynamically typed languages like JavaScript cause V8 to deoptimize when types change unexpectedly.",
      "Confusing V8 with Node.js — V8 is just the engine; Node.js adds the event loop, modules, and native APIs on top."
    ],
    followUpQuestions: [
      "How do Hidden Classes and Inline Caches work together?",
      "What causes deoptimization and how can you avoid it?",
      "How does V8's garbage collector handle memory management?"
    ],
    relatedQuestionIds: ["be-001", "be-005"],
    references: [
      { title: "V8 Documentation", url: "https://v8.dev/docs" },
      { title: "V8 Blog — TurboFan", url: "https://v8.dev/blog/turbofan" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-008",
    title: "How does Node.js handle child processes?",
    content: "Explain child_process in Node.js. What are fork, exec, spawn, and execFile, and when would you use each?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Node.js",
    category: "Child Processes",
    companyTags: ["Uber", "Airbnb", "Shopify"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "Node.js provides child_process module to spawn child processes. `spawn` runs a command and streams output, `exec` buffers output, `execFile` is like exec but doesn't spawn a shell, and `fork` creates a new Node.js process with IPC communication.",
    detailedExplanation: "The child_process module offers four main methods:\n\n`spawn(command, args)` launches a new process with the given command and arguments. It returns a ChildProcess object with stdin/stdout/stderr streams. Data is streamed, making it suitable for large outputs. Use it for long-running processes or when you need streaming.\n\n`exec(command, options)` runs a command in a shell and buffers the entire output. Returns a Promise with stdout/stderr. Convenient for simple commands but risky with untrusted input (shell injection) and can crash on large outputs (buffer overflow).\n\n`execFile(file, args)` is like exec but doesn't spawn a shell by default — it executes the file directly. Slightly more secure and efficient than exec.\n\n`fork(modulePath)` spawns a new Node.js process specifically designed for running Node modules. It includes built-in IPC (inter-process communication) via `process.send()` and `child.on('message')`. Ideal for offloading CPU-intensive work.",
    bestAnswer: "Node.js child_process offers four methods:\n\n1. **spawn()**: Streams output via stdout/stderr pipes. Best for long-running processes or large outputs. Returns ChildProcess immediately.\n2. **exec()**: Buffers entire output in memory. Convenient for simple commands but has buffer size limits and shell injection risks.\n3. **execFile()**: Executes a file directly without a shell. More secure than exec() — avoids shell injection.\n4. **fork()**: Spawns a Node.js process with built-in IPC channel. Use for offloading CPU-intensive work to a separate process while communicating via messages.\n\nFor CPU-intensive tasks, prefer fork() or worker_threads over spawn(). For shell commands, use spawn() with proper input validation to avoid injection.",
    alternativeAnswers: [
      "worker_threads (introduced in Node 10) is often preferred over child_process for CPU-intensive tasks because threads share memory, have lower overhead, and can transfer ArrayBuffers efficiently.",
      "The cluster module internally uses fork() to create worker processes that share a server port — it's how Node.js achieves multi-core utilization."
    ],
    commonMistakes: [
      "Using exec() with user-provided input — this creates shell injection vulnerabilities. Use spawn() with an args array instead.",
      "Not handling the 'close' event on child processes, leading to zombie processes.",
      "Forgetting that child processes have their own memory space and event loop — they don't share state with the parent."
    ],
    followUpQuestions: [
      "How does the cluster module use fork() for multi-core utilization?",
      "What are the tradeoffs between child_process and worker_threads?",
      "How would you implement a worker pool in Node.js?"
    ],
    relatedQuestionIds: ["be-001", "be-009"],
    references: [
      { title: "Node.js Child Process", url: "https://nodejs.org/api/child_process.html" },
      { title: "Worker Threads", url: "https://nodejs.org/api/worker_threads.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-009",
    title: "What is the difference between `==` and `===` in JavaScript?",
    content: "Explain the difference between loose equality (`==`) and strict equality (`===`) in JavaScript. When would you use each?",
    difficulty: "beginner",
    track: "backend",
    topic: "Node.js",
    category: "JavaScript Fundamentals",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "`==` performs type coercion before comparing values, while `===` compares both value and type without coercion. Always use `===` to avoid unexpected behavior.",
    detailedExplanation: "The `==` operator uses the Abstract Equality Comparison Algorithm, which performs type coercion when comparing values of different types. For example, `0 == false` is true (both coerced to 0), `'0' == 0` is true (string '0' coerced to number 0), and `null == undefined` is true.\n\nThe `===` operator uses the Strict Equality Comparison Algorithm and never performs type coercion. If the types differ, it immediately returns false. `0 === false` is false, `'0' === 0` is false.\n\nBest practice is to always use `===` and `!==` because they're predictable. The few cases where `==` behaves intuitively (`null == undefined`, `NaN !== NaN`) are well-known, but the coercion rules are complex enough that using `==` consistently leads to bugs. Linters like ESLint enforce `===` by default.",
    bestAnswer: "`==` (loose equality) performs type coercion before comparing values — it converts operands to the same type when they differ. `===` (strict equality) compares both value AND type without any conversion.\n\nExamples:\n- `0 == false` → true (both coerced to 0)\n- `0 === false` → false (number vs boolean)\n- `'1' == 1` → true (string coerced to number)\n- `'1' === 1` → false (string vs number)\n- `null == undefined` → true (special case)\n- `null === undefined` → false (different types)\n\nAlways use `===` to avoid surprising coercion behavior. The only common exception is `x == null`, which conveniently checks for both null and undefined.",
    alternativeAnswers: [
      "Some developers use == null as a shorthand for checking both null and undefined — this is a rare acceptable use of loose equality.",
      "The Abstract Equality Comparison algorithm has 8 abstract operations defined in the ECMAScript specification — understanding them is more complexity than most developers need."
    ],
    commonMistakes: [
      "Using == when the intent is strict comparison — loose equality can lead to unexpected true results with type coercion.",
      "Assuming == always converts to number — the coercion rules depend on the types being compared.",
      "Not knowing that [] == false is true but [] === false is false, which can cause confusing conditional behavior."
    ],
    followUpQuestions: [
      "What are the Abstract Equality Comparison rules?",
      "How does Object.is() differ from ===?",
      "What is the ToPrimitive abstract operation?"
    ],
    relatedQuestionIds: ["be-001", "be-005"],
    references: [
      { title: "MDN Equality Comparisons", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality" },
      { title: "ECMAScript Abstract Equality", url: "https://tc39.es/ecma262/#sec-islooselyequal" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-010",
    title: "How does Node.js handle memory management and garbage collection?",
    content: "Explain Node.js memory management. How does the garbage collector work, and how do you detect and fix memory leaks?",
    difficulty: "advanced",
    track: "backend",
    topic: "Node.js",
    category: "Memory Management",
    companyTags: ["Google", "Meta", "Netflix"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Node.js uses V8's garbage collector with generational collection — young generation (Scavenge) for short-lived objects and old generation (Mark-Sweep-Compact) for long-lived objects. Memory leaks occur when references to objects are unintentionally kept.",
    detailedExplanation: "V8's garbage collector divides the heap into generations. The young generation (typically 1-8MB) uses the Scavenge algorithm — it copies live objects to the old generation and discards dead ones. This is fast because most objects die young. The old generation (up to ~1.4GB on 64-bit systems) uses Mark-Sweep-Compact — it marks all reachable objects from roots, sweeps unreachable ones, and compacts to reduce fragmentation.\n\nCommon memory leaks include: unclosed event listeners (adding listeners without removing them), global variables storing references, closures capturing large objects, timers not being cleared, and circular references (though V8 handles these). The `--max-old-space-size` flag controls the old generation limit (default varies by platform).\n\nTo detect leaks: use `process.memoryUsage()` to monitor RSS and heap usage, Chrome DevTools Memory tab for heap snapshots, `--inspect` flag for debugging, and the `heapdump` module for taking snapshots programmatically.",
    bestAnswer: "Node.js relies on V8's generational garbage collector:\n\n**Young Generation**: Uses Scavenge (semi-space copying). Fast, handles short-lived objects. Most objects die here — the nursery hypothesis.\n\n**Old Generation**: Uses Mark-Sweep-Compact. Handles long-lived objects. Mark phase traces from GC roots (global variables, call stack, closures), sweep phase frees unmarked objects, compact phase defragments the heap.\n\n**Detecting leaks**: Monitor with `process.memoryUsage()`, take heap snapshots with Chrome DevTools (via --inspect), use `--max-old-space-size` to set heap limits, and profile with `--inspect` + Chrome DevTools.\n\n**Common causes**: Unclosed event listeners, accumulated closures, global caches without eviction, streams not being closed, and timers left running.",
    alternativeAnswers: [
      "The --expose-gc flag allows manual garbage collection via global.gc() — useful for debugging but not production use.",
      "Node.js 20+ includes built-in memory leak detection with --heapsnapshot-signal=SIGUSR2 to take snapshots on demand."
    ],
    commonMistakes: [
      "Assuming garbage collection handles everything — developers must still properly release references (remove listeners, clear timers).",
      "Ignoring process.memoryUsage() growth over time — a steadily increasing RSS is a classic leak indicator.",
      "Using global variables as caches without size limits or eviction strategies."
    ],
    followUpQuestions: [
      "How would you debug a memory leak in a production Node.js application?",
      "What is the difference between RSS, heap used, and external memory?",
      "How do WeakRef and WeakMap help prevent memory leaks?"
    ],
    relatedQuestionIds: ["be-007", "be-001"],
    references: [
      { title: "Node.js Memory Management", url: "https://nodejs.org/en/learn/diagnostics/memory/using-v8-inspector-for-memory-profiling" },
      { title: "V8 Garbage Collection", url: "https://v8.dev/blog/trash-talk" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Express / NestJS (be-011 – be-016)
  // ──────────────────────────────────────────────
  {
    id: "be-011",
    title: "How do you structure a large-scale Express.js application?",
    content: "Describe best practices for organizing a large Express.js application. How do you handle routes, middleware, controllers, and services?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Express",
    category: "Application Architecture",
    companyTags: ["Amazon", "Stripe", "Shopify"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "A well-structured Express app separates concerns into routes, controllers, services, and middleware layers. Use the MVC-like pattern or a layered architecture with clear boundaries between HTTP handling, business logic, and data access.",
    detailedExplanation: "A large Express app should follow a layered architecture:\n\n**Routes layer**: Defines HTTP endpoints and maps them to controllers. Use `express.Router()` to modularize by feature (e.g., `/api/users`, `/api/orders`).\n\n**Controllers layer**: Handles HTTP-specific logic — parsing request data, calling services, and sending responses. Controllers should not contain business logic.\n\n**Services layer**: Contains business logic and orchestration. Services interact with repositories/data access and other services. They're framework-agnostic and testable independently.\n\n**Repositories/Data Access layer**: Handles database interactions. Abstracts the database from the rest of the application.\n\n**Middleware**: Cross-cutting concerns like authentication, logging, validation, and error handling.\n\nUse dependency injection (manually or via frameworks like TSyringe) to make services testable. Apply the single responsibility principle — each module does one thing well.",
    bestAnswer: "Structure a large Express app in layers:\n\n1. **Routes** (`routes/`): Define endpoints, apply middleware, delegate to controllers. Use `express.Router()` per feature.\n2. **Controllers** (`controllers/`): Handle HTTP concerns — parse input, call services, format responses. No business logic.\n3. **Services** (`services/`): Pure business logic — validation, computation, orchestration. Framework-agnostic and unit-testable.\n4. **Repositories** (`repositories/`): Database abstraction layer. Isolates ORM/query logic from business code.\n5. **Middleware** (`middleware/`): Auth, validation, logging, error handling. Applied globally or per-route.\n\nAdditional practices: use barrel files (index.ts) for clean imports, separate config from code, use environment variables for configuration, and apply consistent error handling via error middleware.",
    alternativeAnswers: [
      "For TypeScript projects, use a barrel file pattern (index.ts in each directory) for clean imports and path aliases via tsconfig.json.",
      "Consider using NestJS for new projects — it enforces this layered architecture by convention with dependency injection, modules, and decorators."
    ],
    commonMistakes: [
      "Putting business logic in route handlers — controllers should delegate to services.",
      "Creating circular dependencies between modules — keep the dependency graph acyclic.",
      "Not applying error handling middleware consistently — every route should have error handling."
    ],
    followUpQuestions: [
      "How would you implement dependency injection in a plain Express app?",
      "What patterns help prevent circular dependencies?",
      "How do you test controllers vs services in isolation?"
    ],
    relatedQuestionIds: ["be-012", "be-013"],
    references: [
      { title: "Express Best Practices", url: "https://expressjs.com/en/advanced/best-practice-security.html" },
      { title: "Node.js Design Patterns", url: "https://www.nodejsdesignpatterns.com/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-012",
    title: "What is dependency injection and how does NestJS implement it?",
    content: "Explain dependency injection as a concept. How does NestJS use it, and what are its benefits for testability and maintainability?",
    difficulty: "beginner",
    track: "backend",
    topic: "NestJS",
    category: "Dependency Injection",
    companyTags: ["Google", "Microsoft", "SAP"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Dependency injection (DI) is a design pattern where an object receives its dependencies from external sources rather than creating them itself. NestJS has a built-in IoC (Inversion of Control) container that manages dependencies automatically.",
    detailedExplanation: "DI inverts the control of object creation — instead of a class creating its own dependencies (tight coupling), they're provided by an external container (loose coupling). This makes code more testable, maintainable, and flexible.\n\nNestJS implements DI through its IoC container. When you decorate a class with `@Injectable()`, NestJS registers it in the container. Dependencies are injected via constructor parameters: `constructor(private readonly userService: UserService)`. The container resolves the dependency graph automatically.\n\nNestJS supports three injection scopes: `DEFAULT` (singleton — one instance per module), `REQUEST` (new instance per request), and `TRANSIENT` (new instance each time injected). Custom providers use the `useClass`, `useValue`, `useFactory`, or `useExisting` patterns for advanced scenarios.\n\nBenefits: (1) Testability — mock dependencies in unit tests. (2) Flexibility — swap implementations without changing consumers. (3) Decoupling — classes don't know how their dependencies are created. (4) Lifecycle management — the container manages singleton creation and cleanup.",
    bestAnswer: "Dependency injection is a pattern where classes receive their dependencies from an external source instead of creating them internally. NestJS provides a built-in IoC container that manages this.\n\nIn NestJS:\n- `@Injectable()` marks a class as injectable\n- `constructor(private readonly dep: DepService)` injects via constructor\n- The container resolves the entire dependency graph automatically\n- Three scopes: DEFAULT (singleton), REQUEST (per-request), TRANSIENT (each injection)\n\nAdvanced providers: `useClass` (swap implementations), `useValue` (inject constants/mocks), `useFactory` (dynamic creation), `useExisting` (alias another provider).\n\nKey benefits: decoupled, testable code (mock any dependency), swappable implementations, and centralized lifecycle management.",
    alternativeAnswers: [
      "NestJS uses reflect-metadata to analyze constructor parameters at runtime and resolve dependencies automatically — this is how it reads the types without explicit configuration.",
      "For testing, NestJS's @nestjs/testing module provides Test.createTestingModule() that lets you override providers with mocks."
    ],
    commonMistakes: [
      "Creating dependencies manually inside classes instead of letting the DI container inject them — this defeats the purpose.",
      "Using the DEFAULT scope when REQUEST scope is needed — incorrect scope can cause stale data or memory leaks.",
      "Forgetting to import modules that export providers — DI only works across modules if providers are explicitly exported."
    ],
    followUpQuestions: [
      "How would you override a provider in a unit test?",
      "What is the difference between @Injectable() and @Injectable({ scope: Scope.REQUEST })?",
      "How do you handle circular dependencies in NestJS?"
    ],
    relatedQuestionIds: ["be-013", "be-011"],
    references: [
      { title: "NestJS Dependency Injection", url: "https://docs.nestjs.com/providers" },
      { title: "NestJS IoC Fundamentals", url: "https://docs.nestjs.com/fundamentals/providers" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-013",
    title: "How do you implement authentication in NestJS?",
    content: "Explain how to implement JWT authentication in NestJS. How do Guards, Strategies, and decorators work together?",
    difficulty: "advanced",
    track: "backend",
    topic: "NestJS",
    category: "Authentication",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "NestJS authentication uses Passport.js strategies for verification and Guards for route protection. JWT strategy validates tokens, AuthGuard protects routes, and custom decorators extract user data from requests.",
    detailedExplanation: "NestJS authentication follows a layered approach:\n\n**Strategy**: Implements Passport strategy (e.g., JwtStrategy) that extracts and validates the token. It returns the user payload which NestJS attaches to the request.\n\n**Guard**: Implements `CanActivate()` — checks if the request should be allowed. AuthGuard('jwt') triggers the JWT strategy and rejects unauthorized requests.\n\n**Decorator**: `@UseGuards(AuthGuard('jwt'))` applies the guard to specific routes or controllers. `@CurrentUser()` custom decorator extracts the user from the request.\n\nImplementation flow: (1) Client sends JWT in Authorization header, (2) AuthGuard intercepts and calls JwtStrategy, (3) JwtStrategy extracts token, verifies signature, and returns payload, (4) Guard allows or denies the request, (5) Controller receives authenticated user via `@CurrentUser()`.\n\nAdditional considerations: refresh token rotation, token blacklisting, role-based access control (RBAC) via custom guards, and API key authentication via separate strategies.",
    bestAnswer: "NestJS JWT authentication uses three key components:\n\n1. **JwtStrategy** (`@nestjs/passport`): Extends Passport's JWT strategy. Extracts token from Authorization header, verifies signature using a secret/public key, and returns the decoded payload.\n\n2. **AuthGuard**: `@UseGuards(AuthGuard('jwt'))` protects routes. It triggers the strategy — if validation succeeds, the request proceeds; if it fails, a 401 is returned.\n\n3. **Decorators**: `@CurrentUser()` (custom) extracts the authenticated user from `req.user`. Role decorators like `@Roles('admin')` work with a RolesGuard for RBAC.\n\nFlow: Request → AuthGuard → JwtStrategy.validate() → attaches user to req → Controller receives user.\n\nFor refresh tokens: store refresh tokens server-side, issue new access/refresh pairs on rotation, and invalidate old refresh tokens to prevent reuse.",
    alternativeAnswers: [
      "For OAuth2 flows, NestJS Passport supports Google, GitHub, Facebook strategies via passport-google-oauth20, passport-github2, etc.",
      "For API key auth, create a custom ApiKeyGuard that validates against a database or environment variable — no Passport strategy needed."
    ],
    commonMistakes: [
      "Storing JWT secret in source code — always use environment variables for secrets.",
      "Not implementing token refresh — access tokens expire and without refresh, users get logged out abruptly.",
      "Using session-based auth with stateless JWT — mixing these paradigms causes confusion."
    ],
    followUpQuestions: [
      "How would you implement refresh token rotation?",
      "What is the difference between JWT access tokens and session tokens?",
      "How do you implement role-based access control in NestJS?"
    ],
    relatedQuestionIds: ["be-023", "be-024"],
    references: [
      { title: "NestJS Authentication", url: "https://docs.nestjs.com/security/authentication" },
      { title: "NestJS Guards", url: "https://docs.nestjs.com/guards" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-014",
    title: "What are NestJS Interceptors and how do they differ from Middleware?",
    content: "Explain NestJS Interceptors. What can they do, how do they differ from Middleware, and when would you use each?",
    difficulty: "intermediate",
    track: "backend",
    topic: "NestJS",
    category: "NestJS Concepts",
    companyTags: ["Microsoft", "SAP", "Oracle"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "Interceptors in NestJS wrap around request/response handling using RxJS Observables. They can transform responses, add logging, handle exceptions, implement caching, and modify the response stream. They differ from middleware in that they operate at the method level and can modify the response before it's sent.",
    detailedExplanation: "NestJS Interceptors implement the `NestInterceptor` interface with an `intercept(context, next)` method. They wrap the request/response cycle using RxJS operators, giving them power over the entire flow.\n\nKey capabilities: (1) **Response mapping** — transform data before it's sent to the client. (2) **Exception mapping** — catch and transform errors. (3) **Logging/timing** — measure execution time. (4) **Caching** — intercept responses and serve cached data. (5) **Response serialization** — transform objects for output.\n\nThe key difference from middleware: Interceptors execute around the route handler (before AND after), while middleware executes before the handler. Interceptors have access to the response data and can modify it using RxJS operators like `map()`, `catchError()`, `tap()`, and `switchMap()`.\n\nUse Interceptors for cross-cutting concerns that need access to both request and response: logging, transformation, caching, timeout handling, and response serialization.",
    bestAnswer: "Interceptors wrap request/response handling using RxJS Observables. They implement `NestInterceptor` and have access to both the request and response.\n\n**What they can do**: Transform responses (map data), catch and transform exceptions, add logging/timing, implement caching, apply timeouts, and modify response serialization.\n\n**Difference from Middleware**:\n- Middleware: Runs BEFORE the route handler, modifies req/res, calls next().\n- Interceptor: Wraps the ENTIRE handler execution (before AND after), uses RxJS to transform the response stream.\n\n**When to use each**:\n- Middleware: Auth checks, CORS, body parsing, logging — things that need to happen before the handler.\n- Interceptor: Response transformation, exception handling, caching, timing — things that need access to the response.",
    alternativeAnswers: [
      "Interceptors are essentially AOP (Aspect-Oriented Programming) in NestJS — they allow you to add behavior around method execution without modifying the method itself.",
      "The @nestjs/cache-manager integration uses an interceptor to implement transparent caching — the CacheInterceptor caches responses and serves them without hitting the handler."
    ],
    commonMistakes: [
      "Using middleware for response transformation — middleware can't access the response data from the handler.",
      "Not understanding that interceptors operate on Observables — forgetting to use RxJS operators means the interceptor does nothing.",
      "Overusing interceptors for simple logging — middleware like Morgan is more appropriate for request logging."
    ],
    followUpQuestions: [
      "How would you implement a caching interceptor in NestJS?",
      "Can you nest multiple interceptors on a single route?",
      "How do you handle exceptions inside an interceptor?"
    ],
    relatedQuestionIds: ["be-012", "be-011"],
    references: [
      { title: "NestJS Interceptors", url: "https://docs.nestjs.com/interceptors" },
      { title: "RxJS in NestJS", url: "https://docs.nestjs.com/recipes/operators" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-015",
    title: "How do you handle file uploads in Express.js?",
    content: "Explain how to handle file uploads in Express.js. What is multer, and how do you handle large files, validation, and storage?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Express",
    category: "File Handling",
    companyTags: ["Amazon", "Stripe", "Shopify"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "Express.js uses multer middleware for multipart/form-data handling (file uploads). Multer processes file uploads and stores them either on disk or in memory. For large files, use streaming uploads and consider cloud storage services.",
    detailedExplanation: "Multer is the standard middleware for handling multipart/form-data in Express. It processes file uploads and makes them available on `req.file` (single upload) or `req.files` (multiple uploads).\n\nConfiguration options: `storage` (DiskStorage with custom filenames, or MemoryStorage for buffer access), `limits` (fileSize, files count, fields), and `fileFilter` (validate MIME types).\n\nFor large files: use disk storage to avoid memory exhaustion, implement chunked uploads, consider streaming to cloud storage (S3, GCS), and set appropriate `limits.fileSize`. Never use MemoryStorage for files >5MB in production.\n\nSecurity considerations: validate file types (don't trust MIME types alone — scan file contents), limit file size, rename files to prevent path traversal, store uploads outside the web root, and use signed URLs for accessing uploaded files.",
    bestAnswer: "Express file uploads use multer middleware for multipart/form-data:\n\n```javascript\nconst multer = require('multer');\nconst upload = multer({ \n  storage: multer.diskStorage({\n    destination: './uploads',\n    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)\n  }),\n  limits: { fileSize: 10 * 1024 * 1024 },\n  fileFilter: (req, file, cb) => cb(null, file.mimetype.startsWith('image/'))\n});\n```\n\nFor large files: use disk storage (not memory), stream to cloud storage (S3/GCS), and implement resumable uploads. Security: validate MIME types + file signatures, limit size, rename files, store outside web root. For production, consider signed URLs and client-side direct uploads to bypass server memory limits.",
    alternativeAnswers: [
      "For direct-to-S3 uploads, use presigned URLs — the client uploads directly to S3, bypassing your server entirely. This is more scalable for large files.",
      "busboy is the underlying library multer uses. For streaming uploads without buffering, you can use busboy directly for more control."
    ],
    commonMistakes: [
      "Using MemoryStorage for large files — this loads the entire file into server memory and can crash the process.",
      "Trusting the MIME type from the request without verifying file content — always validate with file signature checks.",
      "Not implementing rate limiting on upload endpoints — they're prime targets for abuse."
    ],
    followUpQuestions: [
      "How would you implement resumable file uploads?",
      "What is the difference between multer's DiskStorage and MemoryStorage?",
      "How do you handle concurrent uploads without file name collisions?"
    ],
    relatedQuestionIds: ["be-004", "be-006"],
    references: [
      { title: "Multer Documentation", url: "https://github.com/expressjs/multer" },
      { title: "Express File Upload Guide", url: "https://expressjs.com/en/advanced/best-practice-security.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-016",
    title: "How does NestJS handle validation and pipes?",
    content: "Explain NestJS validation pipes. How do you use class-validator and class-transformer to validate incoming data?",
    difficulty: "intermediate",
    track: "backend",
    topic: "NestJS",
    category: "Validation",
    companyTags: ["Microsoft", "SAP", "Oracle"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "NestJS uses pipes to transform and validate incoming data. The ValidationPipe with class-validator decorators provides automatic DTO validation, type transformation, and error formatting.",
    detailedExplanation: "NestJS Pipes implement `PipeTransform` with a `transform(value, metadata)` method. They receive the input value and can modify or validate it.\n\nThe built-in `ValidationPipe` integrates with class-validator for DTO validation. You apply class-validator decorators to DTO classes: `@IsString()`, `@IsEmail()`, `@IsOptional()`, `@MinLength(3)`, etc. The pipe validates the incoming data against the DTO and throws a BadRequestException for invalid input.\n\nConfiguration: `app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }))`.\n\n- `whitelist: true` strips unknown properties (prevents mass assignment).\n- `forbidNonWhitelisted: true` throws errors for unknown properties.\n- `transform: true` automatically transforms payloads to DTO instances (enables type coercion).\n\nCustom pipes implement business-specific validation: checking database constraints, validating against external services, or applying domain rules that can't be expressed with decorators alone.",
    bestAnswer: "NestJS uses pipes to validate and transform input data:\n\n1. **DTOs + class-validator**: Define validation rules via decorators:\n   ```typescript\n   class CreateUserDto {\n     @IsEmail() email: string;\n     @IsString() @MinLength(8) password: string;\n     @IsOptional() @IsString() name?: string;\n   }\n   ```\n\n2. **ValidationPipe**: Apply globally via `app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }))`. It validates incoming data against the DTO and throws 400 for invalid input.\n\n3. **Custom pipes**: Implement `PipeTransform` for business-specific validation (e.g., checking if a user ID exists in the database).\n\nKey options: `whitelist` (strips unknown properties), `forbidNonWhitelisted` (rejects unknown properties), `transform` (coerces types automatically).",
    alternativeAnswers: [
      "For complex validation scenarios, combine class-validator with custom decorators — create @IsUnique('email') decorators that validate against the database.",
      "Zod is an alternative to class-validator with a different API style. NestJS doesn't have built-in Zod support, but you can create a custom pipe wrapper."
    ],
    commonMistakes: [
      "Forgetting to apply ValidationPipe globally — validation won't work without it.",
      "Not using whitelist: true — this leaves the door open to mass assignment attacks.",
      "Using class-validator with plain objects instead of DTOs — transform: true is needed for automatic instantiation."
    ],
    followUpQuestions: [
      "How would you implement a custom validation decorator?",
      "What is mass assignment and how does whitelist prevent it?",
      "How do you handle validation errors from nested DTOs?"
    ],
    relatedQuestionIds: ["be-012", "be-011"],
    references: [
      { title: "NestJS Pipes", url: "https://docs.nestjs.com/pipes" },
      { title: "class-validator", url: "https://github.com/typestack/class-validator" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // REST APIs (be-017 – be-022)
  // ──────────────────────────────────────────────
  {
    id: "be-017",
    title: "What are the principles of RESTful API design?",
    content: "Explain the core principles of REST (Representational State Transfer). What makes an API truly RESTful?",
    difficulty: "beginner",
    track: "backend",
    topic: "REST APIs",
    category: "REST Fundamentals",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "REST is an architectural style for designing networked applications. Core principles: statelessness, client-server separation, uniform interface (resource-based URLs, HTTP methods, HATEOAS), layered system, and cacheability.",
    detailedExplanation: "REST (Representational State Transfer) was defined by Roy Fielding in his doctoral dissertation. The six constraints are:\n\n1. **Client-Server**: Separation of concerns — client handles UI, server handles data storage.\n2. **Stateless**: Each request contains all information needed to process it — no session state on the server.\n3. **Cacheable**: Responses must indicate whether they're cacheable to improve performance.\n4. **Uniform Interface**: The most distinctive constraint — includes resource identification (URIs), resource manipulation through representations (JSON/XML), self-descriptive messages, and HATEOAS (Hypermedia as the Engine of Application State).\n5. **Layered System**: Client can't tell if it's connected directly to the server or through intermediaries (load balancers, proxies).\n6. **Code on Demand (optional)**: Server can extend client functionality by transferring executable code.\n\nA truly RESTful API uses: proper HTTP methods (GET, POST, PUT, PATCH, DELETE), meaningful resource URIs (nouns, not verbs), appropriate status codes, and content negotiation.",
    bestAnswer: "REST is an architectural style with six constraints:\n\n1. **Stateless**: Each request is independent — the server stores no session state. All needed info is in the request.\n2. **Client-Server**: Clean separation between the client (UI) and server (data/logic).\n3. **Uniform Interface**: Resources identified by URIs, manipulated via HTTP methods, self-descriptive messages, and HATEOAS.\n4. **Cacheable**: Responses declare cacheability to improve performance.\n5. **Layered System**: Clients can't tell if they're talking to the origin server or intermediaries.\n6. **Code on Demand** (optional): Server can extend client behavior.\n\nTruly RESTful APIs use: `/users` (not `/getUsers`), `GET /users/123` (not `POST /getUser`), proper status codes (201 Created, 404 Not Found), and HATEOAS links for discoverability.",
    alternativeAnswers: [
      "Many APIs called REST are actually 'RESTful' — they use HTTP methods and resource URIs but don't implement all six constraints, especially HATEOAS.",
      "Richardson Maturity Model defines REST maturity levels: Level 0 (single endpoint), Level 1 (resources), Level 2 (HTTP verbs), Level 3 (HATEOAS)."
    ],
    commonMistakes: [
      "Using verbs in URLs (GET /getUser) — REST uses nouns for resources and HTTP methods for actions.",
      "Not using proper HTTP status codes — returning 200 for everything hides errors from clients.",
      "Ignoring statelessness — storing session state on the server violates REST and limits scalability."
    ],
    followUpQuestions: [
      "What is HATEOAS and why is it rarely implemented?",
      "When should you use PUT vs PATCH?",
      "How do you handle versioning in REST APIs?"
    ],
    relatedQuestionIds: ["be-018", "be-019"],
    references: [
      { title: "REST API Design — Microsoft", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design" },
      { title: "Fielding's REST Dissertation", url: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-018",
    title: "What are HTTP status codes and when should you use each?",
    content: "Explain the different HTTP status code categories (1xx-5xx). When should you return 200 vs 201 vs 204, and 400 vs 401 vs 403 vs 404?",
    difficulty: "beginner",
    track: "backend",
    topic: "REST APIs",
    category: "HTTP Status Codes",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "HTTP status codes indicate the result of a request. 2xx = success, 3xx = redirection, 4xx = client error, 5xx = server error. Common codes: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found.",
    detailedExplanation: "Status code categories:\n\n**1xx (Informational)**: 100 Continue (client should send request body), 101 Switching Protocols (WebSocket upgrade).\n\n**2xx (Success)**: 200 OK (general success), 201 Created (resource created — always include Location header), 202 Accepted (async processing started), 204 No Content (success with no response body — DELETE).\n\n**3xx (Redirection)**: 301 Moved Permanently, 302 Found, 304 Not Modified (cached), 307 Temporary Redirect, 308 Permanent Redirect.\n\n**4xx (Client Error)**: 400 Bad Request (validation failed), 401 Unauthorized (authentication required), 403 Forbidden (authenticated but not authorized), 404 Not Found, 405 Method Not Allowed, 409 Conflict (duplicate resource), 422 Unprocessable Entity (valid syntax, semantic errors), 429 Too Many Requests (rate limiting).\n\n**5xx (Server Error)**: 500 Internal Server Error (generic), 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout.",
    bestAnswer: "Status code categories: 1xx (info), 2xx (success), 3xx (redirect), 4xx (client error), 5xx (server error).\n\n**Success**: 200 (GET, general success), 201 Created (POST that creates — include Location header), 202 Accepted (async processing), 204 No Content (DELETE, PUT with no body).\n\n**Client Errors**: 400 (validation failed), 401 (not authenticated), 403 (not authorized — authenticated but no permission), 404 (resource not found), 409 (conflict/duplicate), 422 (semantic validation error), 429 (rate limited).\n\n**Server Errors**: 500 (unexpected failure), 502 (bad gateway/proxy), 503 (temporarily unavailable), 504 (upstream timeout).\n\nKey distinctions: 401 vs 403 (authentication vs authorization), 400 vs 422 (syntax vs semantic validation), 200 vs 204 (with vs without response body).",
    alternativeAnswers: [
      "Use 422 for semantic validation errors (e.g., user already exists) and 400 for syntax/structural errors (e.g., invalid JSON). This distinction helps clients handle different error types.",
      "For async operations, return 202 with a status polling URL, or use webhooks for completion notification."
    ],
    commonMistakes: [
      "Returning 200 for errors — always use appropriate error codes so clients can handle failures correctly.",
      "Confusing 401 (not authenticated) with 403 (not authorized) — they mean different things.",
      "Using 500 for expected errors — if it's a known error condition, use a 4xx code."
    ],
    followUpQuestions: [
      "When would you use 202 Accepted vs 200 OK?",
      "How should error responses be structured in a REST API?",
      "What is the difference between 400 and 422 status codes?"
    ],
    relatedQuestionIds: ["be-017", "be-020"],
    references: [
      { title: "HTTP Status Codes — MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" },
      { title: "REST API Status Codes", url: "https://restfulapi.net/http-status-codes/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-019",
    title: "How do you implement pagination in a REST API?",
    content: "Explain different pagination strategies for REST APIs: offset-based, cursor-based, and keyset pagination. What are the tradeoffs?",
    difficulty: "intermediate",
    track: "backend",
    topic: "REST APIs",
    category: "API Design",
    companyTags: ["Google", "Meta", "Twitter"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Pagination can be offset-based (page/limit), cursor-based (opaque token), or keyset (using a field value). Offset is simple but slow for large datasets. Cursor-based is scalable and consistent. Keyset is the most performant.",
    detailedExplanation: "Three main pagination strategies:\n\n**Offset-based**: `GET /users?page=3&limit=20` → `SELECT * FROM users LIMIT 20 OFFSET 40`. Simple to implement, supports page numbers, but has N+1 performance issues with large offsets (database must scan skipped rows) and inconsistent results when data changes between requests.\n\n**Cursor-based**: `GET /users?cursor=abc123&limit=20`. Uses an opaque cursor (usually base64-encoded ID or timestamp). Consistent across requests (no duplicates/skips), O(1) performance regardless of position. Implementation: store the last item's ID, encode it, use `WHERE id > cursor_id LIMIT 20`.\n\n**Keyset**: `GET /users?created_at=2024-01-15&limit=20`. Similar to cursor-based but uses the actual field value. More transparent and cacheable. Requires a unique, sortable field.\n\n**Recommendation**: Use cursor-based for APIs consumed by frontend infinite scroll. Use offset for admin dashboards where page numbers matter. Always include `hasMore` or `next_cursor` in responses.",
    bestAnswer: "Three pagination strategies:\n\n1. **Offset-based**: `?page=3&limit=20` — simple, supports page numbers, but `OFFSET 10000` is slow (DB scans all skipped rows). Inconsistent when data changes mid-pagination.\n\n2. **Cursor-based**: `?cursor=abc123&limit=20` — uses an opaque token (encoded last ID). `WHERE id > cursor_id` is O(1) regardless of position. Consistent, scalable, recommended for most APIs.\n\n3. **Keyset**: `?created_at=2024-01-15&limit=20` — transparent cursor using actual field values. Most performant and cacheable. Requires a unique sortable field.\n\nResponse format:\n```json\n{\n  \"data\": [...],\n  \"pagination\": {\n    \"next_cursor\": \"abc123\",\n    \"has_more\": true,\n    \"limit\": 20\n  }\n}\n```\n\nUse cursor-based for infinite scroll, offset for admin page numbers.",
    alternativeAnswers: [
      "Time-based pagination (using timestamps) is useful for time-series data: ?since=2024-01-15T00:00:00Z&until=2024-01-16T00:00:00Z.",
      "GraphQL connections pattern (edges/nodes/pageInfo) is becoming popular even in REST APIs for its standardized cursor-based pagination."
    ],
    commonMistakes: [
      "Using offset pagination with large datasets — OFFSET 100000 LIMIT 20 requires scanning 100020 rows.",
      "Not including total count in paginated responses — clients often need this for UI.",
        "Returning inconsistent results when using offset pagination — new records inserted between requests cause duplicates or skips."
    ],
    followUpQuestions: [
      "How would you implement cursor-based pagination in PostgreSQL?",
      "When would you choose offset over cursor-based pagination?",
      "How do you handle filtering combined with cursor-based pagination?"
    ],
    relatedQuestionIds: ["be-017", "be-029"],
    references: [
      { title: "Cursor-Based Pagination — Shopify", url: "https://shopify.dev/api/usage/pagination-graphql" },
      { title: "Cursors as Pagination", url: "https://uxdesign.cc/infinite-scrolling-done-right-928f0d79f343" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-020",
    title: "How do you version a REST API?",
    content: "Explain different API versioning strategies: URL path, query parameter, header, and content negotiation. What are the tradeoffs?",
    difficulty: "intermediate",
    track: "backend",
    topic: "REST APIs",
    category: "API Design",
    companyTags: ["Google", "Microsoft", "Stripe"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "API versioning can be done via URL path (/v1/users), query parameter (?v=1), header (Accept: application/vnd.api.v1+json), or content negotiation. URL path is most common and visible; headers are cleaner but harder to test.",
    detailedExplanation: "Four main versioning strategies:\n\n1. **URL Path** (most common): `GET /v1/users` → `GET /v2/users`. Clear, visible, cacheable, easy to test in browser. But pollutes URLs and makes URI design less clean.\n\n2. **Query Parameter**: `GET /users?version=1`. Keeps base URL clean, easy to implement. But less standard, easy to forget, and not as visible.\n\n3. **Header** (Accept header): `Accept: application/vnd.myapi.v1+json`. Clean URLs, proper content negotiation. But harder to test (need tools like Postman), less discoverable.\n\n4. **Content Negotiation**: Using media type in Accept header. Most RESTful approach. But complex to implement and test.\n\n**Best practice**: Use URL path versioning for public APIs (simplicity, discoverability). Use header versioning for internal APIs (cleanliness). Never use query parameter for production APIs.\n\n**Breaking changes** that require a new version: removing fields, changing field types, removing endpoints, changing semantics. **Non-breaking changes**: adding optional fields, adding new endpoints, adding optional query parameters.",
    bestAnswer: "Four versioning strategies:\n\n1. **URL Path** (`/v1/users`): Most common — visible, cacheable, browser-testable. Tradeoff: pollutes URIs.\n2. **Query Parameter** (`?v=1`): Easy to add but non-standard and easy to forget.\n3. **Header** (`Accept: application/vnd.api.v1+json`): Clean URLs, proper content negotiation. Tradeoff: harder to test.\n4. **Content Negotiation**: Most RESTful but complex.\n\n**Recommendation**: Use URL path for public APIs (simplicity wins). Header versioning for internal APIs.\n\n**Versioning triggers**: New version needed for breaking changes (removing fields, changing types, removing endpoints). Non-breaking changes (adding optional fields/endpoints) don't need new versions. Stripe's approach is excellent — they version at the API level and deprecate old versions over years.",
    alternativeAnswers: [
      "Stripe's approach: use a header (Stripe-Version) with dates, not major versions. They maintain backwards compatibility and deprecate slowly — a gold standard.",
      "GraphQL avoids versioning entirely by letting clients query only the fields they need — no breaking changes when you add new fields."
    ],
    commonMistakes: [
      "Versioning too aggressively — minor changes like adding optional fields don't require a new version.",
      "Not providing a clear deprecation timeline — always tell consumers when old versions will be removed.",
      "Using query parameter versioning in production — it's fragile and non-standard."
    ],
    followUpQuestions: [
      "How would you handle backwards compatibility when adding a new required field?",
      "What is Stripe's API versioning approach and why is it considered best practice?",
      "When should you use content negotiation vs URL path versioning?"
    ],
    relatedQuestionIds: ["be-017", "be-018"],
    references: [
      { title: "API Versioning — Microsoft", url: "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design#api-versioning" },
      { title: "Stripe API Versioning", url: "https://stripe.com/docs/api/versioning" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-021",
    title: "How do you design error responses in a REST API?",
    content: "How should a REST API structure error responses? Provide a consistent error format and explain how to handle validation, auth, and server errors.",
    difficulty: "intermediate",
    track: "backend",
    topic: "REST APIs",
    category: "Error Handling",
    companyTags: ["Google", "Stripe", "Twilio"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "A well-designed API returns consistent error responses with a standard structure: error code, human-readable message, optional details (field-level errors), and a request ID for debugging. RFC 7807 (Problem Details) provides a standard format.",
    detailedExplanation: "Consistent error responses are critical for API usability. A good error format includes:\n\n```json\n{\n  \"error\": {\n    \"code\": \"VALIDATION_ERROR\",\n    \"message\": \"The request body is invalid\",\n    \"details\": [\n      { \"field\": \"email\", \"message\": \"Must be a valid email address\" },\n      { \"field\": \"password\", \"message\": \"Must be at least 8 characters\" }\n    ],\n    \"requestId\": \"req_abc123\"\n  }\n}\n```\n\n**Error categories**: (1) **Validation errors** (400/422) — include field-level details. (2) **Auth errors** (401/403) — never reveal why auth failed. (3) **Not found** (404) — use generic message to prevent enumeration. (4) **Rate limiting** (429) — include Retry-After header. (5) **Server errors** (500) — log internally, return generic message to client.\n\n**RFC 7807 Problem Details** standard: `type`, `title`, `status`, `detail`, `instance` fields. Widely adopted.",
    bestAnswer: "Use a consistent error format with RFC 7807 Problem Details as inspiration:\n\n```json\n{\n  \"error\": {\n    \"code\": \"VALIDATION_ERROR\",\n    \"message\": \"The request body is invalid\",\n    \"details\": [{ \"field\": \"email\", \"message\": \"Invalid email\" }],\n    \"requestId\": \"req_abc123\"\n  }\n}\n```\n\n**Rules**: (1) Always return structured JSON errors. (2) Include machine-readable codes and human-readable messages. (3) Add request IDs for debugging. (4) For validation errors, include field-level details. (5) For auth errors, never reveal which part failed (username vs password). (6) For rate limiting, include Retry-After header. (7) For server errors, log internally and return a generic message.\n\n**Implementation**: Create an AppException class with error codes, map to HTTP status in error middleware, and format consistently across all endpoints.",
    alternativeAnswers: [
      "JSON:API spec defines a standard error format with status, title, detail, source.pointer — good if you're already using JSON:API.",
      "Google's API Design Guide recommends a similar structure with error.message, error.status, and error.details for field-level errors."
    ],
    commonMistakes: [
      "Returning HTML error pages for API errors — always return JSON.",
      "Exposing internal details in 500 errors (stack traces, database queries).",
        "Inconsistent error formats across different endpoints — standardize with a base error class."
    ],
    followUpQuestions: [
      "How would you implement centralized error handling in Express/NestJS?",
      "What is the difference between 400 and 422 status codes?",
      "How do you handle errors from downstream microservices?"
    ],
    relatedQuestionIds: ["be-018", "be-003"],
    references: [
      { title: "RFC 7807 Problem Details", url: "https://datatracker.ietf.org/doc/html/rfc7807" },
      { title: "Google API Design Guide — Errors", url: "https://cloud.google.com/apis/design/errors" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-022",
    title: "What is rate limiting and how do you implement it?",
    content: "Explain rate limiting strategies for APIs. What algorithms exist (token bucket, sliding window, fixed window) and how do you implement them?",
    difficulty: "intermediate",
    track: "backend",
    topic: "REST APIs",
    category: "API Design",
    companyTags: ["Google", "Twitter", "Stripe"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Rate limiting controls how many requests a client can make in a time window. Algorithms include fixed window (simple), sliding window (smoother), and token bucket (flexible). Implementation uses Redis for distributed counting or in-memory stores for single instances.",
    detailedExplanation: "Rate limiting algorithms:\n\n1. **Fixed Window**: Count requests in fixed time windows (e.g., 100 requests per minute). Simple but has boundary burst issues — 100 requests at 11:59:59 and 100 at 12:00:00 = 200 requests in 1 second.\n\n2. **Sliding Window Log**: Store timestamps of each request. Count requests within the window from current time. Smooth but memory-intensive.\n\n3. **Sliding Window Counter**: Hybrid — combines current and previous window counts weighted by time. Good balance of accuracy and efficiency.\n\n4. **Token Bucket**: Tokens are added at a fixed rate. Each request consumes a token. Allows bursts (up to bucket capacity) while enforcing average rate. Most flexible and widely used.\n\n5. **Leaky Bucket**: Requests are queued in a bucket and processed at a fixed rate. Smooths bursts but adds latency.\n\n**Headers**: Include `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`, `Retry-After` in responses.\n\n**Implementation**: Use Redis for distributed systems (atomic INCR + EXPIRE), in-memory for single instances. Libraries: express-rate-limit, rate-limiter-flexible.",
    bestAnswer: "Rate limiting controls request frequency. Key algorithms:\n\n1. **Fixed Window**: Simple counter per time period. `GET /api/resource` increments counter, resets at window boundary. Issue: boundary bursts.\n\n2. **Sliding Window**: Tracks requests across rolling time windows. Smoother distribution, more memory.\n\n3. **Token Bucket**: Tokens added at fixed rate, each request consumes one. Allows controlled bursts. Most popular (used by AWS, Stripe).\n\n4. **Leaky Bucket**: Requests queued, processed at fixed rate. Smooths bursts but adds latency.\n\n**Headers** (always include): `X-RateLimit-Limit: 100`, `X-RateLimit-Remaining: 45`, `X-RateLimit-Reset: 1640995200`, `Retry-After: 30`.\n\n**Distributed**: Use Redis atomic operations (INCR + EXPIRE). Libraries: `express-rate-limit` (simple), `rate-limiter-flexible` (advanced, Redis-backed).",
    alternativeAnswers: [
      "Sliding window counter is the best balance — it approximates sliding window behavior with fixed window efficiency by blending current and previous window counts.",
      "For API gateways, rate limiting is often done at the gateway level (Kong, AWS API Gateway) rather than in application code."
    ],
    commonMistakes: [
      "Not including Retry-After header — clients need to know when to retry.",
      "Rate limiting by IP only — behind NAT/load balancers, many users share one IP. Use API keys or user IDs.",
      "Not handling the boundary burst problem in fixed window implementations."
    ],
    followUpQuestions: [
      "How would you implement distributed rate limiting with Redis?",
      "What is the difference between per-user and per-IP rate limiting?",
      "How do you handle rate limiting for authenticated vs unauthenticated requests?"
    ],
    relatedQuestionIds: ["be-017", "be-037"],
    references: [
      { title: "Rate Limiting Algorithms", url: "https://www.figma.com/blog/rate-limiting/" },
      { title: "express-rate-limit", url: "https://github.com/express-rate-limit/express-rate-limit" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Authentication (be-023 – be-028)
  // ──────────────────────────────────────────────
  {
    id: "be-023",
    title: "What is the difference between JWT and session-based authentication?",
    content: "Compare JWT (JSON Web Token) and session-based authentication. What are the tradeoffs of each approach?",
    difficulty: "beginner",
    track: "backend",
    topic: "Authentication",
    category: "Auth Fundamentals",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "JWT stores user data in the token itself and is stateless — the server doesn't store session data. Session-based auth stores user data server-side (database/Redis) and uses a session ID cookie. JWT is scalable but harder to revoke; sessions are easier to invalidate but require shared storage.",
    detailedExplanation: "JWT authentication: The server creates a signed token containing user claims (ID, role, expiration) and sends it to the client. The client sends the token in the Authorization header with each request. The server verifies the signature and extracts claims — no database lookup needed.\n\nPros of JWT: Stateless (no server-side storage), scalable (no session store), works across domains, mobile-friendly. Cons: Can't revoke tokens easily (until expiration), larger payloads, tokens in localStorage are vulnerable to XSS.\n\nSession-based auth: The server creates a session (stored in memory, database, or Redis), associates it with a session ID, and sends the ID as a cookie. Each request looks up the session by ID.\n\nPros of sessions: Easy to revoke (delete session), smaller cookie, server-controlled. Cons: Requires shared storage for scaling, cookie-based (CSRF risk), server must look up session on each request.",
    bestAnswer: "JWT and session auth differ fundamentally:\n\n**JWT**: Server embeds user data in a signed token. Client sends token with each request. Server verifies signature — no database lookup.\n- Pros: Stateless, horizontally scalable, works across domains.\n- Cons: Can't revoke until expiry, vulnerable to XSS if stored in localStorage, larger payloads.\n\n**Session**: Server stores user data, sends session ID cookie. Server looks up session on each request.\n- Pros: Instant revocation, smaller cookie, server-controlled.\n- Cons: Requires shared session store (Redis/DB), CSRF risk, server-side state.\n\n**Best practice**: Use short-lived JWT access tokens (15min) + refresh tokens stored in httpOnly cookies. This combines JWT scalability with session-like revocation capability.",
    alternativeAnswers: [
      "For SPAs, use httpOnly secure cookies for refresh tokens and JWT access tokens in memory (not localStorage) to prevent XSS attacks.",
      "Session-based auth is often preferred for traditional server-rendered apps where CSRF protection via SameSite cookies is simpler than JWT token management."
    ],
    commonMistakes: [
      "Storing JWT in localStorage — vulnerable to XSS. Use httpOnly cookies or memory.",
      "Making JWT tokens too long-lived — without expiry, stolen tokens can't be revoked.",
      "Not implementing refresh token rotation — long-lived refresh tokens are a security risk."
    ],
    followUpQuestions: [
      "How would you implement JWT revocation without a database lookup?",
      "What are the security implications of storing JWT in localStorage vs httpOnly cookies?",
      "How do refresh tokens solve JWT's revocation problem?"
    ],
    relatedQuestionIds: ["be-024", "be-025"],
    references: [
      { title: "JWT.io", url: "https://jwt.io/introduction" },
      { title: "Session vs JWT — Auth0", url: "https://auth0.com/blog/session-storage-101-local-storage-vs-sessions/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-024",
    title: "How does OAuth 2.0 work?",
    content: "Explain the OAuth 2.0 flow. What are the different grant types, and when would you use each?",
    difficulty: "advanced",
    track: "backend",
    topic: "Authentication",
    category: "OAuth",
    companyTags: ["Google", "Meta", "Microsoft"],
    interviewRound: "On-site",
    frequency: 4,
    expectedAnswer: "OAuth 2.0 is an authorization framework that allows third-party applications to access resources on behalf of a user. It defines four grant types: Authorization Code, Implicit, Resource Owner Password Credentials, and Client Credentials.",
    detailedExplanation: "OAuth 2.0 defines four main grant types:\n\n1. **Authorization Code** (most secure): Client redirects user to auth server, user logs in, auth server returns authorization code, client exchanges code for tokens. Use for server-side apps. Add PKCE for public clients (SPAs, mobile).\n\n2. **Implicit** (deprecated): Auth server returns tokens directly in URL fragment. Was used for SPAs but vulnerable to token leakage. Replaced by Authorization Code + PKCE.\n\n3. **Resource Owner Password Credentials (ROPC)**: User provides username/password directly to client. Only for highly trusted first-party apps. Not recommended.\n\n4. **Client Credentials**: For machine-to-machine communication. No user involved. Client authenticates directly with auth server.\n\n**Authorization Code + PKCE** is now recommended for all clients, including SPAs and mobile apps. PKCE prevents authorization code interception attacks.\n\nTokens: Access token (short-lived, used for API calls), refresh token (long-lived, used to get new access tokens), ID token (OIDC, contains user identity).",
    bestAnswer: "OAuth 2.0 is an authorization framework with four grant types:\n\n1. **Authorization Code** (most common): User → Auth Server → Authorization Code → Client exchanges for tokens. Most secure for server-side apps.\n2. **Authorization Code + PKCE**: Same as above but with proof key for code exchange. Required for SPAs and mobile apps. Prevents code interception.\n3. **Client Credentials**: Machine-to-machine. No user involved. Client authenticates directly.\n4. **ROPC** (deprecated): User gives password to client. Only for trusted first-party apps.\n\n**Flow (Auth Code + PKCE)**:\n1. Client generates code_verifier + code_challenge\n2. Redirects user to auth server with code_challenge\n3. User authenticates, auth server returns authorization code\n4. Client exchanges code + code_verifier for tokens\n5. Client uses access token for API calls, refresh token to renew\n\n**Token types**: Access token (short-lived, API access), refresh token (long-lived, token renewal), ID token (user identity, OpenID Connect).",
    alternativeAnswers: [
      "OpenID Connect (OIDC) extends OAuth 2.0 with authentication — it adds ID tokens and user info endpoints to verify identity, not just authorization.",
      "For SPAs, the BFF (Backend for Frontend) pattern is gaining popularity — the backend handles OAuth flows and issues session cookies, avoiding token storage in the browser."
    ],
    commonMistakes: [
      "Using the Implicit flow in new applications — it's deprecated and replaced by Authorization Code + PKCE.",
      "Storing client secrets in frontend code — SPAs and mobile apps can't keep secrets; use PKCE instead.",
      "Confusing OAuth (authorization) with OpenID Connect (authentication) — they're complementary, not interchangeable."
    ],
    followUpQuestions: [
      "What is PKCE and why is it needed for SPAs?",
      "How does refresh token rotation improve security?",
      "What is the difference between OAuth 2.0 and OpenID Connect?"
    ],
    relatedQuestionIds: ["be-023", "be-025"],
    references: [
      { title: "OAuth 2.0 RFC 6749", url: "https://datatracker.ietf.org/doc/html/rfc6749" },
      { title: "OAuth 2.0 Simplified", url: "https://www.oauth.com/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-025",
    title: "How do you implement role-based access control (RBAC)?",
    content: "Explain RBAC (Role-Based Access Control). How do you implement it in a backend application, and what are the alternatives?",
    difficulty: "expert",
    track: "backend",
    topic: "Authentication",
    category: "Authorization",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "RBAC assigns permissions to roles and roles to users. Users inherit permissions through their roles. Implementation involves role/permission tables in the database, middleware that checks roles, and decorators or guards that enforce access control.",
    detailedExplanation: "RBAC has four components:\n\n1. **Users**: Individuals who need access\n2. **Roles**: Named groups of permissions (admin, editor, viewer)\n3. **Permissions**: Specific actions (read, write, delete)\n4. **Role-Permission mappings**: Which permissions each role has\n\nDatabase schema:\n- `users` table with `role_id` foreign key\n- `roles` table (id, name)\n- `permissions` table (id, name)\n- `role_permissions` table (role_id, permission_id) for many-to-many\n\nImplementation: Create a roles guard/middleware that checks the user's role against required permissions. Use decorators for route-level access control:\n```typescript\n@Roles('admin')\n@UseGuards(AuthGuard, RolesGuard)\n@Delete(':id')\nasync deleteUser() { ... }\n```\n\nAlternatives: ABAC (attribute-based) for fine-grained access, ACL (access control lists) for resource-level permissions, PBAC (policy-based) for complex rules.",
    bestAnswer: "RBAC assigns permissions to roles, and roles to users. Users inherit permissions through roles.\n\n**Database schema**:\n- `users` (id, role_id)\n- `roles` (id, name: 'admin', 'editor', 'viewer')\n- `permissions` (id, name: 'users:read', 'users:write')\n- `role_permissions` (role_id, permission_id) — many-to-many\n\n**Implementation**:\n1. Store user's role in JWT/session\n2. Create RolesGuard that checks role against required permissions\n3. Apply via decorators: `@Roles('admin') @UseGuards(AuthGuard, RolesGuard)`\n4. Check permissions in service layer for fine-grained control\n\n**Alternatives**: ABAC (attribute-based, for fine-grained policies like 'can edit own posts'), ACL (per-resource permissions), PBAC (policy rules as code).",
    alternativeAnswers: [
      "For multi-tenant SaaS, combine RBAC with tenant isolation — roles are scoped to organizations, and queries always filter by tenant_id.",
      "Attribute-based access control (ABAC) is more flexible than RBAC — it evaluates policies based on user attributes, resource attributes, and environment conditions."
    ],
    commonMistakes: [
      "Checking permissions only at the API level — also enforce in the service/data layer to prevent privilege escalation.",
      "Hardcoding roles in the database without a migration strategy — roles should be configurable.",
      "Not implementing least privilege — users should have minimum necessary permissions."
    ],
    followUpQuestions: [
      "How would you implement ABAC (Attribute-Based Access Control)?",
      "How do you handle role hierarchies (admin inherits editor permissions)?",
      "How do you audit permission changes for compliance?"
    ],
    relatedQuestionIds: ["be-024", "be-023"],
    references: [
      { title: "RBAC — NIST", url: "https://csrc.nist.gov/publications/detail/sp/800-162/final" },
      { title: "RBAC Implementation Guide", url: "https://www.baeldung.com/role-based-authorization-spring-security" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-026",
    title: "What is CORS and how do you handle it in a backend API?",
    content: "Explain CORS (Cross-Origin Resource Sharing). Why does it exist, how does it work, and how do you configure it in a backend application?",
    difficulty: "beginner",
    track: "backend",
    topic: "Authentication",
    category: "CORS",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "CORS is a browser security mechanism that restricts web pages from making requests to a different origin. The server must explicitly allow cross-origin requests via Access-Control-Allow-Origin and other headers.",
    detailedExplanation: "CORS (Cross-Origin Resource Sharing) exists because of the Same-Origin Policy — browsers block requests from one origin (protocol + host + port) to another. CORS lets servers opt-in to allowing cross-origin requests.\n\nHow it works: For non-simple requests (anything beyond GET/POST with basic headers), the browser sends a preflight OPTIONS request to check if the server allows the actual request. The server responds with:\n- `Access-Control-Allow-Origin`: Which origins are allowed (specific origin, `*`, or null)\n- `Access-Control-Allow-Methods`: Allowed HTTP methods\n- `Access-Control-Allow-Headers`: Allowed request headers\n- `Access-Control-Allow-Credentials`: Whether cookies/auth headers are allowed\n- `Access-Control-Max-Age`: How long to cache preflight responses\n\n**Important**: `Access-Control-Allow-Origin: *` doesn't work with credentials (`withCredentials: true`). You must specify the exact origin.\n\nImplementation: Use `cors` middleware in Express (`app.use(cors({ origin: 'https://example.com', credentials: true }))`), or configure in NestJS via `app.enableCors()`.",
    bestAnswer: "CORS is a browser security mechanism that controls cross-origin requests. Browsers enforce the Same-Origin Policy and use CORS headers to determine what cross-origin requests are allowed.\n\n**How it works**:\n1. Browser detects a cross-origin request\n2. For non-simple requests, sends a preflight OPTIONS request\n3. Server responds with CORS headers (allowed origins, methods, headers)\n4. Browser allows or blocks the actual request based on headers\n\n**Key headers**: `Access-Control-Allow-Origin` (which origins), `Access-Control-Allow-Methods` (which methods), `Access-Control-Allow-Credentials` (cookies/auth), `Access-Control-Max-Age` (preflight cache).\n\n**Configuration** (Express): `app.use(cors({ origin: ['https://app.com'], credentials: true }))`. Never use `origin: '*'` with credentials — specify exact origins.",
    alternativeAnswers: [
      "For same-origin server-rendered apps, CORS isn't needed — the browser only enforces CORS for cross-origin requests (different domain/port/protocol).",
      "For development, you can use a proxy server (webpack-dev-server, next.config.js rewrites) to avoid CORS issues entirely by proxying requests through the same origin."
    ],
    commonMistakes: [
      "Using `Access-Control-Allow-Origin: *` with credentials — this combination is forbidden by the spec.",
      "Forgetting to handle preflight OPTIONS requests — non-simple requests will fail without them.",
      "Setting overly permissive CORS in production — always restrict to specific trusted origins."
    ],
    followUpQuestions: [
      "What is a preflight request and when is it sent?",
      "How do you handle CORS in a microservices architecture?",
      "What is the difference between CORS and CSP (Content Security Policy)?"
    ],
    relatedQuestionIds: ["be-023", "be-041"],
    references: [
      { title: "MDN CORS", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" },
      { title: "CORS Guide — MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-027",
    title: "How do you securely store and manage API keys and secrets?",
    content: "How should a backend application handle secrets like API keys, database credentials, and JWT secrets? What are best practices for secret management?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Authentication",
    category: "Secret Management",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Secrets should never be stored in source code. Use environment variables, secret management services (AWS Secrets Manager, HashiCorp Vault), or .env files (development only). Never commit secrets to version control.",
    detailedExplanation: "Best practices for secret management:\n\n1. **Environment Variables**: Load secrets via `process.env` or dotenv. Use `.env` files for local development only — add `.env` to `.gitignore`.\n\n2. **Secret Management Services**: AWS Secrets Manager, Azure Key Vault, Google Secret Manager, HashiCorp Vault. These provide encryption, access control, audit logging, and automatic rotation.\n\n3. **Container/Orchestration Secrets**: Docker secrets, Kubernetes secrets, ECS environment variables. Don't bake secrets into Docker images.\n\n4. **CI/CD Integration**: Use CI provider secrets (GitHub Actions secrets, GitLab CI variables). Never echo secrets in logs.\n\n5. **Rotation**: Rotate secrets regularly. Use zero-downtime rotation (support old and new secrets during transition). Automate rotation where possible.\n\n6. **Access Control**: Least privilege — only services that need a secret should have access. Use IAM roles instead of static keys.\n\n**Never**: Commit secrets to Git, hardcode in source, log secrets, include in error messages, store in client-side code.",
    bestAnswer: "Never store secrets in source code. Use layered approaches:\n\n1. **Development**: `.env` files (gitignored) loaded via dotenv. Never commit.\n2. **Production**: Secret management services (AWS Secrets Manager, HashiCorp Vault, Azure Key Vault).\n3. **Containers**: Docker secrets, Kubernetes secrets — don't bake into images.\n4. **CI/CD**: CI provider secrets (GitHub Actions, GitLab CI).\n\n**Best practices**: (1) Rotate secrets regularly with zero-downtime support. (2) Use IAM roles over static keys where possible. (3) Never log secrets. (4) Use least privilege — only grant access to services that need it. (5) Audit secret access. (6) Use short-lived credentials (AWS STS, OAuth tokens).\n\n**Tools**: dotenv (local), @aws-sdk/client-secrets-manager, HashiCorp Vault, Doppler.",
    alternativeAnswers: [
      "For development teams, tools like Doppler or Vault provide a single source of truth for secrets with versioning, access control, and audit trails.",
      "Environment variables are convenient but lack encryption, access control, and audit logging — production systems should use dedicated secret managers."
    ],
    commonMistakes: [
      "Committing .env files to Git — always add .env to .gitignore and use .env.example for documentation.",
      "Hardcoding secrets in Dockerfiles or docker-compose files — use Docker secrets or mounted files instead.",
      "Using the same secret across all environments — use different secrets for dev, staging, and production."
    ],
    followUpQuestions: [
      "How would you implement zero-downtime secret rotation?",
      "What is the difference between AWS Secrets Manager and Parameter Store?",
      "How do you prevent secrets from appearing in logs and error messages?"
    ],
    relatedQuestionIds: ["be-023", "be-041"],
    references: [
      { title: "OWASP Secret Management", url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" },
      { title: "12-Factor App — Config", url: "https://12factor.net/config" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-028",
    title: "What is multi-factor authentication (MFA) and how do you implement it?",
    content: "Explain multi-factor authentication. What factors exist, how does TOTP work, and how do you implement MFA in a backend application?",
    difficulty: "advanced",
    track: "backend",
    topic: "Authentication",
    category: "MFA",
    companyTags: ["Google", "Amazon", "Stripe"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "MFA requires users to provide multiple forms of verification. The three factors are something you know (password), something you have (phone/hardware key), and something you are (biometrics). TOTP generates time-based codes using a shared secret and current time.",
    detailedExplanation: "MFA adds security layers beyond password authentication:\n\n**Factors**: Knowledge (password, PIN), Possession (phone, hardware token, smart card), Inherence (fingerprint, face recognition, iris).\n\n**TOTP (Time-based One-Time Password)**: Uses HMAC-SHA1 with current Unix time (30-second intervals) and a shared secret. Both server and client (authenticator app) generate the same code from the same inputs. Implementation:\n\n1. Generate a secret and display as QR code during setup\n2. User scans with authenticator app (Google Authenticator, Authy)\n3. User enters a code to verify setup\n4. Store the encrypted secret linked to the user\n5. On login, generate expected TOTP and compare with user input\n\n**Implementation steps**: (1) Generate secret, (2) Store encrypted secret, (3) Verify setup with initial code, (4) On each login, validate TOTP, (5) Provide backup codes for recovery.\n\n**Alternative MFA methods**: SMS (less secure), email codes, push notifications, WebAuthn/FIDO2 (most secure — hardware keys).",
    bestAnswer: "MFA requires two or more verification factors:\n\n**Three factors**: Knowledge (password), Possession (device/token), Inherence (biometrics).\n\n**TOTP implementation**:\n1. Generate shared secret using `speakeasy` or `otpauth` library\n2. Display as QR code for user to scan with authenticator app\n3. Verify initial code to confirm setup\n4. Store encrypted secret in database\n5. On login: `speakeasy.totp.verify({ secret, encoding: 'base32', token: userInput })`\n\n**Backup codes**: Generate 10 one-time recovery codes, hash them, store in DB. User uses one if they lose their device.\n\n**Most secure**: WebAuthn/FIDO2 (hardware keys) — phishing-resistant, no shared secrets. Implementation via `@simplewebauthn/server`.\n\n**Less secure**: SMS codes — vulnerable to SIM swapping. Use only as fallback.",
    alternativeAnswers: [
      "WebAuthn (FIDO2) is the gold standard for MFA — it uses public-key cryptography, is phishing-resistant, and doesn't rely on shared secrets.",
      "For enterprise SSO, integrate with identity providers (Okta, Azure AD) that handle MFA centrally rather than implementing it yourself."
    ],
    commonMistakes: [
      "Storing TOTP secrets in plaintext — always encrypt at rest.",
      "Not providing backup codes — users locked out without recovery options.",
      "Relying solely on SMS for MFA — SIM swapping attacks make it less secure than TOTP or WebAuthn."
    ],
    followUpQuestions: [
      "How does WebAuthn differ from TOTP at a cryptographic level?",
      "How do you handle MFA device loss for a user?",
      "What is adaptive MFA and when would you use it?"
    ],
    relatedQuestionIds: ["be-023", "be-024"],
    references: [
      { title: "RFC 6238 — TOTP", url: "https://datatracker.ietf.org/doc/html/rfc6238" },
      { title: "WebAuthn Guide", url: "https://webauthn.guide/" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Database — PostgreSQL/MongoDB (be-029 – be-036)
  // ──────────────────────────────────────────────
  {
    id: "be-029",
    title: "What are database indexes and how do they improve query performance?",
    content: "Explain database indexes. How do they work internally (B-tree, hash), when should you create them, and what are the tradeoffs?",
    difficulty: "beginner",
    track: "backend",
    topic: "Database",
    category: "Database Fundamentals",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "Database indexes are data structures that speed up data retrieval at the cost of additional storage and slower writes. B-tree indexes are most common — they maintain sorted order for efficient range queries. Hash indexes are faster for equality lookups.",
    detailedExplanation: "An index is a separate data structure (like a book's index) that maps column values to their row positions, allowing the database to find rows without scanning the entire table.\n\n**B-tree indexes**: The most common type. They maintain data in a balanced tree structure with sorted keys. Efficient for: equality (=), range queries (> < BETWEEN), ORDER BY, and prefix matching (LIKE 'abc%'). Each level of the tree halves the search space, giving O(log n) lookup time.\n\n**Hash indexes**: Store a hash of the column value. O(1) lookup for equality comparisons but useless for range queries. Only available in PostgreSQL.\n\n**Composite indexes**: Indexes on multiple columns. Order matters — `(last_name, first_name)` supports queries on `last_name` alone or `last_name + first_name`, but not `first_name` alone.\n\n**Tradeoffs**: Indexes speed up reads but slow down writes (INSERT/UPDATE/DELETE must update indexes). They consume storage. Over-indexing wastes resources.\n\n**When to index**: Primary keys, foreign keys, columns in WHERE clauses, columns in JOIN conditions, columns in ORDER BY.",
    bestAnswer: "Indexes are data structures that speed up queries by allowing the database to find rows without full table scans.\n\n**B-tree** (default in PostgreSQL): Sorted balanced tree. O(log n) lookups. Supports equality, range, ORDER BY, and prefix searches. Most common index type.\n\n**Hash**: O(1) equality lookups only. No range query support.\n\n**Composite**: Multi-column index. Column order matters — `(a, b)` supports `WHERE a = ?` and `WHERE a = ? AND b = ?` but not `WHERE b = ?` alone.\n\n**When to index**: Primary keys, foreign keys, frequently filtered columns, JOIN columns, ORDER BY columns.\n\n**Tradeoffs**: Faster reads, slower writes (each write updates all relevant indexes), disk space, maintenance overhead. Don't over-index — profile your queries with EXPLAIN ANALYZE first.",
    alternativeAnswers: [
      "Partial indexes (PostgreSQL) index only rows matching a condition: `CREATE INDEX idx ON users(email) WHERE active = true` — smaller and faster for filtering active records.",
      "GIN indexes are used for full-text search, JSONB queries, and arrays — they index composite types rather than scalar values."
    ],
    commonMistakes: [
      "Creating indexes on every column — each index slows writes and consumes memory. Index only what you query.",
      "Not considering query patterns — an index on (a, b) doesn't help queries filtering only on b.",
        "Forgetting that indexes don't help with LIKE '%term%' — only prefix patterns (LIKE 'term%') benefit from B-tree indexes."
    ],
    followUpQuestions: [
      "How would you use EXPLAIN ANALYZE to optimize a slow query?",
      "What is a covering index and when would you use one?",
      "How do you decide between B-tree, GIN, and GiST indexes in PostgreSQL?"
    ],
    relatedQuestionIds: ["be-030", "be-031"],
    references: [
      { title: "PostgreSQL Indexes", url: "https://www.postgresql.org/docs/current/indexes.html" },
      { title: "Use The Index, Luke", url: "https://use-the-index-luke.com/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-030",
    title: "Explain SQL JOIN types and when to use each",
    content: "What are the different types of SQL JOINs? Explain INNER, LEFT, RIGHT, FULL, and CROSS JOINs with use cases.",
    difficulty: "beginner",
    track: "backend",
    topic: "Database",
    category: "SQL Fundamentals",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "SQL JOINs combine rows from multiple tables based on a related column. INNER JOIN returns matching rows, LEFT JOIN returns all left rows + matches, RIGHT JOIN returns all right rows + matches, FULL JOIN returns all rows from both, and CROSS JOIN returns the Cartesian product.",
    detailedExplanation: "JOIN types:\n\n**INNER JOIN**: Returns only rows that have matches in both tables. `SELECT * FROM users u INNER JOIN orders o ON u.id = o.user_id` — only users with orders appear.\n\n**LEFT JOIN** (most common): Returns all rows from the left table and matching rows from the right. Non-matching right rows are NULL. `SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id` — all users appear, with NULL for those without orders.\n\n**RIGHT JOIN**: Returns all rows from the right table and matching left rows. Mirror of LEFT JOIN. Rarely used — rewrite as LEFT JOIN by swapping table order.\n\n**FULL OUTER JOIN**: Returns all rows from both tables. Non-matching rows get NULL for the other table's columns. Useful for finding records that exist in one table but not both.\n\n**CROSS JOIN**: Returns the Cartesian product — every row from the left combined with every row from the right. `users CROSS JOIN roles` creates every user-role combination.\n\n**Self JOIN**: A table joined with itself — useful for hierarchical data (e.g., finding an employee's manager in an employees table).",
    bestAnswer: "JOIN types:\n\n- **INNER**: Matching rows in both tables. Used for filtering to only related records.\n- **LEFT**: All left rows + matches. Used to find left rows with/without related records (e.g., all users, including those without orders).\n- **RIGHT**: All right rows + matches. Rarely used — rewrite as LEFT JOIN.\n- **FULL**: All rows from both. Used for finding mismatches between tables.\n- **CROSS**: Cartesian product. Used for generating combinations (e.g., every product × every color).\n- **Self**: Table joined to itself. Used for hierarchical data (employee → manager).\n\n**Performance tip**: JOINs are expensive — ensure join columns are indexed. Use EXPLAIN ANALYZE to check if the optimizer is using your indexes.",
    alternativeAnswers: [
      "LATERAL JOIN (PostgreSQL) allows a subquery to reference columns from preceding tables — essential for top-N-per-group queries.",
      "NATURAL JOIN automatically joins on columns with the same name — convenient but dangerous because adding a column can silently change the join behavior."
    ],
    commonMistakes: [
      "Using RIGHT JOIN when LEFT JOIN would be clearer — rewrite right joins as left joins for consistency.",
      "Not indexing JOIN columns — joins without indexes cause full table scans.",
      "Confusing CROSS JOIN with INNER JOIN — CROSS JOIN returns all combinations, INNER JOIN only matches."
    ],
    followUpQuestions: [
      "How would you find users who have never placed an order?",
      "What is a LATERAL JOIN and when would you use it?",
      "How do you optimize a query with multiple JOINs?"
    ],
    relatedQuestionIds: ["be-029", "be-031"],
    references: [
      { title: "SQL JOIN Types — W3Schools", url: "https://www.w3schools.com/sql/sql_join.asp" },
      { title: "Visual SQL JOINs", url: "https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-031",
    title: "What is database normalization and when should you denormalize?",
    content: "Explain database normalization (1NF, 2NF, 3NF, BCNF). When is denormalization appropriate and what are the tradeoffs?",
    difficulty: "advanced",
    track: "backend",
    topic: "Database",
    category: "Database Design",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Normalization organizes data to reduce redundancy and improve integrity. 1NF eliminates repeating groups, 2NF removes partial dependencies, 3NF removes transitive dependencies. Denormalization adds redundancy to improve read performance at the cost of write complexity.",
    detailedExplanation: "Normalization forms:\n\n**1NF**: Each column contains atomic values (no arrays, no repeating groups). Each row is unique.\n\n**2NF**: In 1NF + every non-key column depends on the entire primary key (no partial dependencies). Relevant for composite keys.\n\n**3NF**: In 2NF + no transitive dependencies (non-key columns don't depend on other non-key columns). Example: if order → customer_id → customer_name, customer_name should be in a separate customers table.\n\n**BCNF**: Every determinant is a candidate key. Stricter than 3NF.\n\n**When to denormalize**: (1) Read-heavy workloads where JOINs are expensive. (2) Reporting/analytics queries that need pre-computed aggregates. (3) Caching frequently accessed data. (4) NoSQL databases that don't support JOINs.\n\n**Tradeoffs**: Denormalization improves read speed but makes writes more complex (must update multiple copies), increases storage, and risks data inconsistency if copies aren't synchronized.\n\n**Modern approach**: Normalize for OLTP (transactional) systems, denormalize for OLAP (analytics) systems.",
    bestAnswer: "Normalization reduces redundancy through decomposition:\n\n**1NF**: Atomic values, no repeating groups. Each cell holds a single value.\n**2NF**: 1NF + no partial dependencies (non-key depends on whole key).\n**3NF**: 2NF + no transitive dependencies (non-key doesn't depend on non-key).\n**BCNF**: Every determinant is a candidate key.\n\n**When to denormalize**: (1) Read-heavy queries with expensive JOINs. (2) Analytics/reporting that need pre-aggregated data. (3) Caching layers. (4) NoSQL without JOIN support.\n\n**Tradeoffs**: Faster reads but: writes must update all copies, increased storage, risk of data inconsistency, more complex update logic.\n\n**Rule of thumb**: Start normalized (3NF), denormalize only when profiling shows performance issues.",
    alternativeAnswers: [
      "Star and snowflake schemas in data warehouses are deliberate denormalizations — fact tables store measurements, dimension tables store descriptive attributes.",
      "Materialized views in PostgreSQL provide denormalized read-optimized copies that can be refreshed on schedule."
    ],
    commonMistakes: [
      "Denormalizing prematurely — always measure query performance first with EXPLAIN ANALYZE.",
      "Creating redundant copies without a synchronization strategy — data becomes inconsistent.",
      "Over-normalizing — sometimes a simpler schema with controlled redundancy is better for development speed."
    ],
    followUpQuestions: [
      "How would you denormalize a users table for a read-heavy social media feed?",
      "What is a materialized view and how does it differ from a regular view?",
      "How do you handle data consistency when denormalizing?"
    ],
    relatedQuestionIds: ["be-029", "be-032"],
    references: [
      { title: "Database Normalization — Wikipedia", url: "https://en.wikipedia.org/wiki/Database_normalization" },
      { title: "Star Schema Design", url: "https://www.vertabelo.com/blog/entries/star-schema-data-warehouse-modeling" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-032",
    title: "How do you handle database transactions and concurrency control?",
    content: "Explain database transactions (ACID properties). How do you handle concurrent access, deadlocks, and isolation levels?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Database",
    category: "Transactions",
    companyTags: ["Google", "Amazon", "Stripe"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Database transactions ensure ACID properties: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions don't interfere), Durability (committed data persists). Isolation levels control the tradeoff between consistency and performance.",
    detailedExplanation: "ACID properties:\n- **Atomicity**: Transaction either completes fully or rolls back completely.\n- **Consistency**: Transaction moves database from one valid state to another.\n- **Isolation**: Concurrent transactions don't interfere with each other.\n- **Durability**: Committed data survives crashes.\n\n**Isolation levels** (from weakest to strongest):\n1. **Read Uncommitted**: Can read uncommitted data (dirty reads).\n2. **Read Committed**: Only reads committed data. Default in PostgreSQL.\n3. **Repeatable Read**: Same query returns same results within transaction. Default in MySQL.\n4. **Serializable**: Full isolation — transactions execute as if sequential. Safest but slowest.\n\n**Concurrency problems**: Dirty reads, non-repeatable reads, phantom reads.\n\n**Deadlocks**: Two transactions waiting for each other's locks. Prevention: consistent lock ordering, timeouts, deadlock detection (PostgreSQL detects and rolls back one transaction).\n\n**Implementation**: Use database transactions in code:\n```sql\nBEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;\n```",
    bestAnswer: "Transactions ensure ACID properties:\n\n- **Atomicity**: All or nothing — partial updates are rolled back.\n- **Consistency**: Data integrity constraints are always satisfied.\n- **Isolation**: Concurrent transactions don't see each other's uncommitted changes.\n- **Durability**: Committed data survives crashes.\n\n**Isolation levels** (tradeoff: safety vs performance):\n1. **Read Uncommitted**: Dirty reads allowed.\n2. **Read Committed**: Only committed data visible (PostgreSQL default).\n3. **Repeatable Read**: Same query returns same results (MySQL default).\n4. **Serializable**: Full isolation, equivalent to sequential execution.\n\n**Deadlocks**: Occur when transactions wait for each other's locks. Prevention: lock resources in consistent order, set lock timeouts, use SELECT FOR UPDATE SKIP LOCKED for queue-like patterns.",
    alternativeAnswers: [
      "Optimistic concurrency control (version columns) avoids locks entirely — check the version hasn't changed before updating, retry on conflict.",
      "MVCC (Multi-Version Concurrency Control) used by PostgreSQL and MySQL/InnoDB allows readers to access old versions while writers create new ones — no read locks needed."
    ],
    commonMistakes: [
      "Not using transactions for multi-step operations — partial failures leave inconsistent data.",
      "Holding locks for too long — keep transactions short to reduce contention.",
      "Using the wrong isolation level — Serializable is safest but can cause excessive waiting."
    ],
    followUpQuestions: [
      "How would you implement optimistic locking in a Node.js application?",
      "What is MVCC and how does it improve concurrency?",
      "How do you handle distributed transactions across microservices?"
    ],
    relatedQuestionIds: ["be-029", "be-033"],
    references: [
      { title: "PostgreSQL Transaction Isolation", url: "https://www.postgresql.org/docs/current/transaction-iso.html" },
      { title: "ACID Explained", url: "https://www.databass.dev/acid-explained/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-033",
    title: "What is the N+1 query problem and how do you solve it?",
    content: "Explain the N+1 query problem in ORMs. How does it occur, why is it bad, and what solutions exist (eager loading, batching)?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Database",
    category: "ORM and Query Optimization",
    companyTags: ["Google", "Meta", "Amazon"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "The N+1 problem occurs when an ORM fetches a list of N items and then makes N additional queries to load related data. Instead of 1 query with a JOIN, it makes 1 + N queries. Solutions include eager loading (JOINs), batch loading, and DataLoader.",
    detailedExplanation: "The N+1 problem example:\n```javascript\nconst users = await User.findAll(); // 1 query: SELECT * FROM users\nfor (const user of users) {\n  user.posts = await Post.findAll({ where: { userId: user.id } }); // N queries\n}\n```\nFor 100 users, this makes 101 queries instead of 2.\n\n**Solutions**:\n\n1. **Eager Loading** (JOINs): `User.findAll({ include: ['posts'] })` generates a single query with JOIN.\n\n2. **Batch Loading** (DataLoader pattern): Collect all IDs from the first query, make one batch query for all related records, then map results. DataLoader (Facebook) is the standard implementation.\n\n3. **Subqueries**: Some ORMs support `WHERE user_id IN (SELECT ...)` which loads all related data in one query.\n\n**When to use each**:\n- Eager loading: When you always need the related data.\n- Batch loading: When you need dynamic loading or want to avoid unnecessary JOINs.\n- DataLoader: Especially useful in GraphQL resolvers where the query pattern is dynamic.",
    bestAnswer: "N+1 problem: Fetching N items and then N separate queries for related data = 1 + N queries total.\n\n**Example**: Loading 100 users and their posts makes 101 queries (1 for users, 100 for posts) instead of 2 (1 for users, 1 for all posts).\n\n**Solutions**:\n\n1. **Eager loading** (Sequelize `include`, Prisma `include`): Generates JOINs — single query, but can return large result sets.\n\n2. **Batch loading** (DataLoader pattern): Collect all IDs → one `WHERE id IN (...)` query → map results. Used in Facebook's DataLoader.\n\n3. **Subqueries**: `WHERE user_id IN (SELECT user_id FROM posts)` — one query for all related data.\n\n**Best practice**: Use eager loading for predictable queries. Use DataLoader for dynamic loading (GraphQL). Profile with query logging to detect N+1 issues.",
    alternativeAnswers: [
      "Prisma's `include` and `select` generate efficient queries and automatically handle the N+1 problem — Prisma is designed to prevent N+1 by default.",
      "For GraphQL, the DataLoader pattern is essential — it batches and deduplicates queries within a single request automatically."
    ],
    commonMistakes: [
      "Blindly using eager loading — it can create massive JOINs and memory overhead for deeply nested relations.",
      "Not detecting N+1 issues until production — use query logging in development to catch them early.",
      "Fixing N+1 with more queries instead of fewer — always aim to reduce the total query count."
    ],
    followUpQuestions: [
      "How does DataLoader batch and deduplicate queries within a single request?",
      "When is eager loading worse than N+1 queries?",
      "How would you detect N+1 queries in a production application?"
    ],
    relatedQuestionIds: ["be-029", "be-034"],
    references: [
      { title: "DataLoader — Facebook", url: "https://github.com/graphql/dataloader" },
      { title: "N+1 Query Problem", url: "https://planspace.org/2013/09/29/the-n-1-select-problem/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-034",
    title: "Compare PostgreSQL and MongoDB. When should you use each?",
    content: "Compare relational databases (PostgreSQL) and document databases (MongoDB). What are the tradeoffs and when should you choose each?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Database",
    category: "Database Selection",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "PostgreSQL is a relational database with strong consistency, complex queries, and ACID transactions. MongoDB is a document database with flexible schemas, horizontal scaling, and fast reads. Choose PostgreSQL for structured data with complex relations; choose MongoDB for flexible schemas and high write throughput.",
    detailedExplanation: "**PostgreSQL** (Relational):\n- Structured schema with migrations\n- ACID transactions\n- Complex JOINs and aggregations\n- Strong consistency\n- Vertical scaling (primary)\n- Full-text search, JSON support (JSONB)\n- Better for: financial data, complex relationships, reporting\n\n**MongoDB** (Document):\n- Flexible/dynamic schema\n- Eventual consistency (tunable)\n- No JOINs (embedded documents or references)\n- Horizontal scaling (sharding built-in)\n- Fast writes (append-optimized)\n- Better for: content management, real-time analytics, rapidly evolving schemas\n\n**Key differences**:\n- Schema: PostgreSQL enforces schemas, MongoDB allows flexibility\n- Scaling: PostgreSQL scales vertically (read replicas), MongoDB scales horizontally (sharding)\n- Consistency: PostgreSQL strong, MongoDB tunable\n- Queries: PostgreSQL SQL (powerful), MongoDB aggregation pipeline\n- Transactions: PostgreSQL full ACID, MongoDB multi-document transactions (newer, limited)\n\n**Modern trend**: PostgreSQL's JSONB offers document capabilities, blurring the line. Many use PostgreSQL with JSONB columns for flexible data within a relational model.",
    bestAnswer: "**PostgreSQL** (Relational): Structured data, complex queries, ACID transactions, strong consistency. Best for financial, healthcare, and data with complex relationships.\n\n**MongoDB** (Document): Flexible schema, horizontal scaling (sharding), fast writes. Best for content management, real-time analytics, rapidly evolving data models.\n\n**Choose PostgreSQL when**: Data has clear relationships, you need complex JOINs, ACID compliance is critical, or you need strong consistency.\n\n**Choose MongoDB when**: Schema changes frequently, you need horizontal scaling, data is document-oriented (nested objects), or write throughput is more important than complex queries.\n\n**Modern hybrid**: PostgreSQL's JSONB gives you document flexibility within a relational database — many teams use this instead of MongoDB.\n\n**Key tradeoffs**: PostgreSQL = consistency + complex queries. MongoDB = flexibility + horizontal scale.",
    alternativeAnswers: [
      "PostgreSQL's JSONB columns can store and query document data, making it a viable alternative to MongoDB for mixed workloads.",
      "For microservices, each service might choose different databases based on its data model — the right database depends on the access pattern, not the overall architecture."
    ],
    commonMistakes: [
      "Choosing MongoDB because 'the schema might change' — PostgreSQL migrations handle schema changes well.",
      "Trying to use JOINs in MongoDB — it doesn't support them; you need to embed or manually resolve references.",
        "Ignoring the operational complexity of MongoDB sharding — it requires careful planning and monitoring."
    ],
    followUpQuestions: [
      "How does PostgreSQL's JSONB compare to MongoDB for document storage?",
      "When would you use both databases in the same application?",
      "How do you migrate from MongoDB to PostgreSQL?"
    ],
    relatedQuestionIds: ["be-029", "be-035"],
    references: [
      { title: "PostgreSQL vs MongoDB", url: "https://www.postgresql.org/docs/current/datatype-json.html" },
      { title: "MongoDB vs PostgreSQL", url: "https://www.mongodb.com/compare/mongodb-vs-postgresql" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-035",
    title: "How do you design a database schema for a social media application?",
    content: "Design a database schema for a social media app with users, posts, comments, likes, and follows. Consider scalability and query patterns.",
    difficulty: "advanced",
    track: "backend",
    topic: "Database",
    category: "Schema Design",
    companyTags: ["Meta", "Twitter", "Instagram"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Design a normalized schema with users, posts, comments, likes, and follows tables. Consider indexing for common queries (feed, profile), denormalization for read-heavy patterns (like counts, follower counts), and partitioning for scalability.",
    detailedExplanation: "**Core tables**:\n\n```sql\nusers (id, username, email, display_name, bio, avatar_url, created_at)\nposts (id, user_id, content, media_url, created_at, like_count, comment_count)\ncomments (id, post_id, user_id, content, parent_id, created_at)\nlikes (user_id, post_id, created_at) -- composite PK\nfollows (follower_id, following_id, created_at) -- composite PK\n```\n\n**Key indexes**:\n- posts: (user_id, created_at DESC) — user profile feed\n- posts: (created_at DESC) — global feed\n- comments: (post_id, created_at) — post comments\n- likes: (post_id) — like count queries\n- follows: (follower_id), (following_id) — follower/following queries\n\n**Denormalization for performance**:\n- users: follower_count, following_count, post_count (denormalized counters)\n- posts: like_count, comment_count (denormalized counters)\n- Materialized view for user feed\n\n**Feed generation**: Pull model (on read — query follows + fetch recent posts) for small networks, push model (fan-out on write — pre-compute feeds) for large networks like Twitter.\n\n**Partitioning**: Partition posts by user_id or created_at for horizontal scaling.",
    bestAnswer: "Schema for a social media app:\n\n```sql\n-- Users\nusers (id PK, username UNIQUE, email UNIQUE, display_name, bio, avatar_url, \n       follower_count INT DEFAULT 0, following_count INT DEFAULT 0, created_at)\n\n-- Posts  \nposts (id PK, user_id FK, content TEXT, media_url, created_at,\n       like_count INT DEFAULT 0, comment_count INT DEFAULT 0)\n\n-- Comments (threaded)\ncomments (id PK, post_id FK, user_id FK, content TEXT, parent_id FK NULL,\n          created_at)\n\n-- Likes (join table)\nlikes (user_id FK, post_id FK, created_at, PRIMARY KEY(user_id, post_id))\n\n-- Follows (directed graph)\nfollows (follower_id FK, following_id FK, created_at, \n         PRIMARY KEY(follower_id, following_id))\n```\n\n**Critical indexes**: posts(user_id, created_at DESC) for profiles, posts(created_at DESC) for global feed, comments(post_id) for post comments, follows(follower_id/following_id) for social graph.\n\n**Denormalize counters** (like_count, follower_count) with triggers. For feed generation: pull model for small networks, push (fan-out-on-write) for scale.",
    alternativeAnswers: [
      "For a Twitter-scale feed, use fan-out-on-write: when a user posts, push the post to all followers' feed caches (Redis sorted sets).",
      "Consider a graph database (Neo4j) for the social graph if recommendations and pathfinding are core features."
    ],
    commonMistakes: [
      "Not denormalizing counts — counting likes via COUNT(*) on every request is too slow at scale.",
      "Missing indexes on foreign keys — unindexed FKs cause slow JOINs.",
      "Not considering feed generation strategy — pull works for small scale, push is needed at scale."
    ],
    followUpQuestions: [
      "How would you implement a pull vs push feed generation strategy?",
      "How do you handle soft deletes for posts and comments?",
      "How would you partition this schema for horizontal scaling?"
    ],
    relatedQuestionIds: ["be-034", "be-031"],
    references: [
      { title: "How Facebook News Feed Works", url: "https:// engineering.fb.com/2015/03/10/production-engineering/how-news-feed-works/" },
      { title: "Twitter's Architecture", url: "https://www.infoq.com/articles/twitter-ads-analytics-architecture/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-036",
    title: "How do you implement database migrations?",
    content: "Explain database migrations. How do you manage schema changes across environments, handle data migrations, and ensure zero-downtime deployments?",
    difficulty: "expert",
    track: "backend",
    topic: "Database",
    category: "Schema Management",
    companyTags: ["Google", "Amazon", "Stripe"],
    interviewRound: "Technical",
    frequency: 3,
    expectedAnswer: "Database migrations are version-controlled schema changes that can be applied, reverted, and shared across environments. Tools like Knex, Prisma, and TypeORM manage migrations. Zero-downtime requires expand-and-contract patterns.",
    detailedExplanation: "Migrations are code files that describe schema changes. They're versioned, reversible, and applied in order.\n\n**Best practices**:\n1. Never modify production schema manually — always use migrations.\n2. Each migration should be reversible (up and down).\n3. Migrations should be idempotent (safe to run multiple times).\n4. Separate schema changes from data migrations.\n5. Test migrations on a copy of production data.\n\n**Zero-downtime pattern (expand and contract)**:\n1. **Expand**: Add new column/table without removing old one.\n2. **Migrate**: Update application to use new schema.\n3. **Contract**: Remove old column/table after deployment is stable.\n\n**Tools**: Prisma Migrate (auto-generates migrations from schema changes), Knex (SQL-based migrations), TypeORM (auto-sync or manual migrations), Flyway/Liquibase (Java ecosystem).\n\n**Data migrations**: When changing column types or restructuring data, create a migration that transforms existing data. Test with production data volumes.",
    bestAnswer: "Migrations are version-controlled schema changes applied as code:\n\n**Tools**: Prisma Migrate (generates SQL from schema), Knex (manual SQL), TypeORM, Flyway/Liquibase.\n\n**Best practices**:\n1. Version control all schema changes.\n2. Each migration has `up` and `down` methods.\n3. Never modify production manually.\n4. Test migrations on production data copies.\n\n**Zero-downtime (expand-contract)**:\n1. Add new column (don't remove old)\n2. Deploy app that reads/writes both columns\n3. Backfill data\n4. Remove old column\n\n**Example** (Prisma): Add field to schema.prisma, run `npx prisma migrate dev`, which generates SQL migration files.\n\n**Data migrations**: For restructuring data, write a migration script that transforms and backfills.",
    alternativeAnswers: [
      "Prisma's approach: edit schema.prisma, run `prisma migrate dev` — it auto-generates SQL. Simple but less control than hand-written SQL.",
      "For large-scale data migrations, use online schema change tools like pt-online-schema-change (MySQL) or pg_repack (PostgreSQL) to avoid locks."
    ],
    commonMistakes: [
      "Running untested migrations on production — always test on a staging environment first.",
      "Not backing up the database before migrations — migrations should be reversible but backups are essential.",
      "Making breaking schema changes in a single deployment — use expand-and-contract for zero downtime."
    ],
    followUpQuestions: [
      "How would you handle a migration that renames a column without downtime?",
      "What is the expand-and-contract pattern?",
      "How do you test database migrations before deploying?"
    ],
    relatedQuestionIds: ["be-031", "be-032"],
    references: [
      { title: "Prisma Migrate", url: "https://www.prisma.io/docs/concepts/components/prisma-migrate" },
      { title: "Zero-Downtime Migrations", url: "https://www.prisma.io/docs/guides/database/developing-with-prisma/migrations" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Caching / Redis (be-037 – be-040)
  // ──────────────────────────────────────────────
  {
    id: "be-037",
    title: "What is Redis and what are its common use cases?",
    content: "Explain Redis. What data structures does it support, what are its common use cases, and how does it differ from a traditional database?",
    difficulty: "beginner",
    track: "backend",
    topic: "Caching",
    category: "Redis Fundamentals",
    companyTags: ["Google", "Amazon", "Meta"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "Redis is an in-memory data store that supports多种 data structures (strings, hashes, lists, sets, sorted sets). It's used for caching, session storage, real-time messaging, rate limiting, and as a message broker. It's much faster than disk-based databases but has limited persistence options.",
    detailedExplanation: "Redis (Remote Dictionary Server) is an in-memory key-value store with rich data structures:\n\n**Data structures**:\n- **Strings**: Simple key-value, counters, caches\n- **Hashes**: Object storage (user profiles)\n- **Lists**: Queues, recent items (LPUSH/RPOP)\n- **Sets**: Unique items, tags, followers\n- **Sorted Sets**: Leaderboards, time-series (score + value)\n- **Streams**: Message queues (like Kafka)\n- **HyperLogLog**: Cardinality estimation (unique visitors)\n\n**Common use cases**:\n1. **Caching**: Store frequently accessed data (HTML fragments, API responses, database query results)\n2. **Session storage**: Store user sessions for horizontal scaling\n3. **Rate limiting**: Count requests per user/IP using INCR + EXPIRE\n4. **Real-time messaging**: Pub/Sub for live notifications\n5. **Job queues**: List-based task queues with BRPOP\n6. **Leaderboards**: Sorted sets for gaming rankings\n\n**vs Traditional DB**: Redis is in-memory (microsecond access vs millisecond), single-threaded (no locks needed), and supports atomic operations. Tradeoff: data loss risk (memory only), limited query capabilities, no complex joins.",
    bestAnswer: "Redis is an in-memory data store with rich data structures, used for caching, sessions, real-time messaging, and more.\n\n**Data structures**: Strings, Hashes, Lists, Sets, Sorted Sets, Streams, HyperLogLog.\n\n**Use cases**:\n1. **Caching**: Cache DB query results, API responses, HTML fragments.\n2. **Session storage**: Store user sessions for horizontal scaling.\n3. **Rate limiting**: INCR + EXPIRE for request counting.\n4. **Pub/Sub**: Real-time notifications and live feeds.\n5. **Job queues**: BRPOP-based task queues.\n6. **Leaderboards**: Sorted sets with scores.\n7. **Distributed locks**: Redlock algorithm for mutex.\n\n**vs Traditional DB**: Microsecond access (vs ms), no complex queries/joins, single-threaded (no contention), data lives in memory (persistence optional via RDB/AOF).",
    alternativeAnswers: [
      "Redis Cluster provides horizontal scaling with sharding — data is distributed across multiple nodes automatically.",
      "Redis Stack adds modules: RediSearch (full-text search), RedisJSON (JSON storage), RedisTimeSeries, RedisGraph."
    ],
    commonMistakes: [
      "Using Redis as a primary database — it's designed as a cache/secondary store, not for authoritative data.",
      "Not configuring persistence — use AOF (Append Only File) for important data to survive restarts.",
      "Storing large values (>1MB) in Redis — it's optimized for small, frequent operations, not bulk data."
    ],
    followUpQuestions: [
      "How does Redis persistence work (RDB vs AOF)?",
      "What is Redis Cluster and when do you need it?",
      "How do you implement a distributed lock with Redis?"
    ],
    relatedQuestionIds: ["be-038", "be-039"],
    references: [
      { title: "Redis Documentation", url: "https://redis.io/docs/" },
      { title: "Redis Use Cases", url: "https://redis.io/docs/about/uses/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-038",
    title: "How do you implement caching strategies?",
    content: "Explain different caching strategies: cache-aside, write-through, write-behind, and read-through. When should you use each?",
    difficulty: "expert",
    track: "backend",
    topic: "Caching",
    category: "Caching Strategies",
    companyTags: ["Google", "Amazon", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Caching strategies determine how data flows between the application, cache, and database. Cache-aside is most common (app manages cache), write-through writes to cache and DB simultaneously, write-behind writes to cache first then async to DB, and read-through caches on read.",
    detailedExplanation: "**Cache-Aside (Lazy Loading)**:\n1. App checks cache first\n2. Cache miss → query DB → store in cache → return\n3. On write → invalidate cache (delete, don't update)\nPros: Simple, only caches what's accessed, resilient to cache failures. Cons: First request is slow (cold start), stale data possible.\n\n**Write-Through**:\n1. App writes to cache\n2. Cache writes to DB synchronously\nPros: Consistent data, simple. Cons: Write latency (every write hits DB), caches everything even if never read.\n\n**Write-Behind (Write-Back)**:\n1. App writes to cache\n2. Cache asynchronously writes to DB (batched)\nPros: Fast writes, batching reduces DB load. Cons: Data loss risk if cache crashes before flush, eventual consistency.\n\n**Read-Through**: Cache itself loads from DB on miss. Similar to cache-aside but cache manages the loading.\n\n**When to use**:\n- Cache-aside: Most use cases (default choice)\n- Write-through: When consistency is critical\n- Write-behind: High write throughput, acceptable eventual consistency\n- Read-through: When cache supports it (e.g., Redis + application logic)",
    bestAnswer: "Four main caching strategies:\n\n1. **Cache-Aside** (most common): App checks cache → miss → query DB → populate cache → return. On write → invalidate cache.\n- Pros: Simple, resilient, only caches accessed data.\n- Cons: Cold start latency, possible stale data.\n\n2. **Write-Through**: Write to cache AND DB simultaneously.\n- Pros: Always consistent.\n- Cons: Slow writes (synchronous DB hit).\n\n3. **Write-Behind**: Write to cache, async flush to DB.\n- Pros: Fast writes, batched DB operations.\n- Cons: Data loss risk, eventual consistency.\n\n4. **Read-Through**: Cache loads from DB on miss (cache manages loading).\n- Pros: Simplifies app code.\n- Cons: Cache must know how to load data.\n\n**Invalidate vs Update**: Always prefer invalidation (delete) over updating cache on write — avoids race conditions.",
    alternativeAnswers: [
      "For distributed caching, use cache-aside with Redis and handle cache invalidation via pub/sub or message queues to keep caches in sync.",
      "Cache stampede (thundering herd) is a common problem — use locks or probabilistic early expiration to prevent many concurrent cache misses."
    ],
    commonMistakes: [
      "Updating cache on write instead of invalidating — race conditions between concurrent writes can leave stale data.",
      "Not handling cache failures gracefully — if Redis is down, the app should fall back to the database.",
      "Caching everything without TTL — always set expiration to prevent stale data."
    ],
    followUpQuestions: [
      "How would you handle cache invalidation in a distributed system?",
      "What is cache stampede and how do you prevent it?",
      "How do you choose the right TTL for cached data?"
    ],
    relatedQuestionIds: ["be-037", "be-039"],
    references: [
      { title: "Caching Strategies — AWS", url: "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-architecture/arch-distributed-caching.html" },
      { title: "Cache-Aside Pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/pattern/cache-aside" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-039",
    title: "What are common Redis patterns for distributed systems?",
    content: "Explain Redis patterns: distributed locks, rate limiting, session storage, pub/sub, and leaderboards. How do you implement each?",
    difficulty: "expert",
    track: "backend",
    topic: "Caching",
    category: "Redis Patterns",
    companyTags: ["Google", "Amazon", "Stripe"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Redis supports several distributed system patterns: distributed locks (Redlock), rate limiting (INCR + EXPIRE), session storage (HASH), pub/sub for messaging, and sorted sets for leaderboards. Each uses Redis's atomic operations for concurrency safety.",
    detailedExplanation: "**Distributed Locks** (Redlock):\nUse `SET key value NX EX timeout` for simple locks. For multi-node safety, use Redlock algorithm — acquire locks on N/2+1 Redis instances.\n\n**Rate Limiting**:\n`INCR rate:{user_id}` → check count → `EXPIRE rate:{user_id} 60` for 60-second window. Use Redis Lua scripts for atomic counter + check.\n\n**Session Storage**:\n`HSET session:{session_id} user_id 123 role admin` → hash for structured session data. Set TTL for automatic expiration.\n\n**Pub/Sub**:\n`PUBLISH channel message` / `SUBSCRIBE channel` for real-time messaging. Good for notifications but no persistence (fire-and-forget).\n\n**Sorted Sets (Leaderboards)**:\n`ZADD leaderboard score user_id` → `ZREVRANGE leaderboard 0 9` for top 10. O(log N) for insert, O(log N + M) for range queries.\n\n**Job Queues**:\n`LPUSH queue:tasks task_data` / `BRPOP queue:tasks 0` (blocking pop) for FIFO task processing.",
    bestAnswer: "Common Redis patterns:\n\n1. **Distributed Locks**: `SET lock:{resource} {owner_id} NX EX 30` — atomic acquire with TTL. Redlock for multi-node.\n\n2. **Rate Limiting**: `INCR rate:{user_id}` + `EXPIRE rate:{user_id} 60`. Lua script for atomic check.\n\n3. **Session Storage**: `HSET session:{id} user_id 123 data {...}` — hash for structured data with TTL.\n\n4. **Pub/Sub**: `PUBLISH/SUBSCRIBE` for real-time messaging. No persistence — use Streams for durable messaging.\n\n5. **Leaderboards**: `ZADD leaderboard {score} {user_id}` + `ZREVRANGE leaderboard 0 9` for top N.\n\n6. **Job Queues**: `LPUSH` + `BRPOP` for FIFO task processing.\n\n**Tip**: Use Redis Lua scripts for atomic multi-step operations (e.g., check-then-act patterns).",
    alternativeAnswers: [
      "Redis Streams (XADD/XREAD) are more robust than Pub/Sub for message queues — they persist messages and support consumer groups.",
      "Redlock is controversial — Martin Kleppmann argues it's not truly safe. Use single Redis locks for most cases, or use etcd/ZooKeeper for critical distributed locks."
    ],
    commonMistakes: [
      "Using Pub/Sub for critical messaging — messages are lost if no subscriber is connected. Use Streams for durability.",
      "Not setting TTL on distributed locks — a crashed process holding a lock can block others forever.",
      "Using SETNX without expiration — Redis can't auto-expire keys without TTL."
    ],
    followUpQuestions: [
      "How does Redlock work and what are its tradeoffs?",
      "What is the difference between Redis Pub/Sub and Redis Streams?",
      "How would you implement a reliable job queue with Redis?"
    ],
    relatedQuestionIds: ["be-037", "be-038"],
    references: [
      { title: "Redis Patterns", url: "https://redis.io/patterns/" },
      { title: "Redlock Algorithm", url: "https://redis.io/docs/manual/patterns/distributed-locks/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-040",
    title: "How do you handle cache invalidation?",
    content: "Explain cache invalidation strategies. How do you handle stale data, TTL, event-driven invalidation, and cache warming?",
    difficulty: "advanced",
    track: "backend",
    topic: "Caching",
    category: "Cache Management",
    companyTags: ["Google", "Netflix", "Amazon"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Cache invalidation is one of the hardest problems in computer science. Strategies include TTL-based expiration, event-driven invalidation (write-through/delete), versioned keys, and cache warming. The goal is to balance freshness with performance.",
    detailedExplanation: "**Strategies**:\n\n1. **TTL (Time-To-Live)**: Set expiration on cached items. Simple but causes either stale data (long TTL) or cache misses (short TTL).\n\n2. **Event-Driven Invalidation**: Delete cache entry on write. Use database triggers, CDC (Change Data Capture), or application-level events to propagate invalidation.\n\n3. **Versioned Keys**: `cache:v2:{id}` — when schema changes, increment version. Old keys expire naturally. No explicit invalidation needed.\n\n4. **Cache Warming**: Pre-populate cache before deployment or after invalidation. Use background jobs to fill cache proactively.\n\n5. **Tag-Based Invalidation**: Tag related cache entries (e.g., `user:123:posts`). When user data changes, invalidate all tagged entries.\n\n**Challenges**: Distributed invalidation across multiple app servers, race conditions between invalidation and reads, and cascading invalidations in nested caches.\n\n**Best practices**: Always use TTL as a safety net. Prefer invalidation (delete) over update. Use pub/sub or message queues for distributed invalidation. Monitor cache hit rates.",
    bestAnswer: "Cache invalidation strategies:\n\n1. **TTL**: Automatic expiration. Set based on data freshness requirements. Simple but stale data possible.\n\n2. **Event-Driven**: Delete cache on write. Use DB triggers, CDC (Debezium), or app-level events. Most reliable.\n\n3. **Versioned Keys**: `cache:v2:{id}` — increment version on schema change. Old keys expire naturally.\n\n4. **Tag-Based**: Tag entries (e.g., `user:123:*`). Invalidate all related entries on change.\n\n5. **Cache Warming**: Pre-populate after invalidation via background jobs.\n\n**Best practices**: (1) TTL as safety net. (2) Delete, don't update (avoids race conditions). (3) Distributed invalidation via pub/sub or CDC. (4) Monitor hit rates — low hits mean invalidation is too aggressive.\n\nPhil Jeff's adage: 'There are only two hard things in CS: cache invalidation and naming things.' Focus on freshness requirements — how stale is acceptable?",
    alternativeAnswers: [
      "CDC (Change Data Capture) with Debezium captures database changes and broadcasts them for cache invalidation — decouples invalidation from application code.",
      "GraphQL caching is harder — use normalized cache (Apollo Client) or response-level caching (persisted queries) instead of traditional cache keys."
    ],
    commonMistakes: [
      "Not having a TTL as safety net — if invalidation fails, stale data persists forever.",
      "Updating cache instead of invalidating — race conditions between concurrent writes leave stale data.",
      "Invalidating too aggressively — causes cache stampede and defeats the purpose of caching."
    ],
    followUpQuestions: [
      "How would you implement distributed cache invalidation across multiple servers?",
      "What is CDC (Change Data Capture) and how does it help with cache invalidation?",
      "How do you handle cache invalidation in a microservices architecture?"
    ],
    relatedQuestionIds: ["be-037", "be-038"],
    references: [
      { title: "Cache Invalidation Patterns", url: "https://docs.aws.amazon.com/whitepapers/latest/database-caching-strategies/caching-strategies.html" },
      { title: "Debezium CDC", url: "https://debezium.io/documentation/" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Security (be-041 – be-044)
  // ──────────────────────────────────────────────
  {
    id: "be-041",
    title: "What are the OWASP Top 10 vulnerabilities?",
    content: "List and explain the OWASP Top 10 web application security risks. How do you prevent each one in a backend application?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Security",
    category: "Web Security",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "The OWASP Top 10 includes: Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, Vulnerable Components, Authentication Failures, Data Integrity Failures, Logging Failures, and SSRF.",
    detailedExplanation: "**OWASP Top 10 (2021)**:\n\n1. **Broken Access Control**: Users acting outside intended permissions. Prevention: enforce server-side authorization, deny by default.\n\n2. **Cryptographic Failures**: Weak encryption, plaintext storage. Prevention: encrypt at rest/transit, use strong algorithms (AES-256, bcrypt).\n\n3. **Injection**: SQL, NoSQL, OS, LDAP injection. Prevention: parameterized queries, input validation, ORM usage.\n\n4. **Insecure Design**: Missing security architecture. Prevention: threat modeling, secure design patterns, principle of least privilege.\n\n5. **Security Misconfiguration**: Default credentials, unnecessary features. Prevention: hardening, minimal attack surface, regular audits.\n\n6. **Vulnerable Components**: Outdated libraries. Prevention: dependency scanning (npm audit, Snyk), regular updates.\n\n7. **Authentication Failures**: Weak passwords, session fixation. Prevention: MFA, secure session management, rate limiting.\n\n8. **Data Integrity Failures**: Insecure CI/CD, auto-updates without verification. Prevention: code signing, integrity checks.\n\n9. **Logging Failures**: Insufficient logging. Prevention: comprehensive audit logging, monitoring, alerting.\n\n10. **SSRF**: Server-side request forgery. Prevention: validate URLs, use allowlists, segment networks.",
    bestAnswer: "OWASP Top 10 (2021) — key vulnerabilities and preventions:\n\n1. **Broken Access Control**: Enforce server-side authorization. Deny by default.\n2. **Cryptographic Failures**: Encrypt at rest/transit. Use bcrypt for passwords, AES-256 for data.\n3. **Injection**: Use parameterized queries. Never concatenate user input into SQL.\n4. **Insecure Design**: Threat model early. Apply principle of least privilege.\n5. **Security Misconfiguration**: Harden defaults. Remove unnecessary features/ports.\n6. **Vulnerable Components**: Scan dependencies (npm audit, Snyk). Update regularly.\n7. **Authentication Failures**: Implement MFA. Use secure session management.\n8. **Data Integrity Failures**: Verify code signatures. Use lockfiles.\n9. **Logging Failures**: Log all auth events, errors, and access. Monitor for anomalies.\n10. **SSRF**: Validate and allowlist external URLs. Segment internal networks.",
    alternativeAnswers: [
      "For API security specifically, add: Mass Assignment, improper asset management, and insufficient rate limiting — these are common API-specific issues.",
      "OWASP ASVS (Application Security Verification Standard) provides detailed verification requirements for each category."
    ],
    commonMistakes: [
      "Only focusing on injection — many vulnerabilities (like broken access control) are more common in modern apps.",
      "Relying solely on client-side validation — always validate on the server.",
      "Not logging security events — you can't detect attacks you don't monitor."
    ],
    followUpQuestions: [
      "How would you prevent SQL injection in a Node.js application?",
      "What is the difference between authentication and authorization?",
      "How do you implement rate limiting to prevent brute force attacks?"
    ],
    relatedQuestionIds: ["be-042", "be-043"],
    references: [
      { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
      { title: "OWASP Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-042",
    title: "How do you prevent SQL injection attacks?",
    content: "Explain SQL injection. How does it work, what are the different types, and how do you prevent it in a backend application?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Security",
    category: "Injection Prevention",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "SQL injection occurs when user input is concatenated into SQL queries without sanitization. Prevention: use parameterized queries/prepared statements, ORM query builders, input validation, and least-privilege database users.",
    detailedExplanation: "SQL injection types:\n\n1. **Classic**: `' OR '1'='1` in login fields bypasses authentication.\n2. **Blind**: No visible error — use boolean-based (`' AND 1=1--`) or time-based (`'; WAITFOR DELAY '0:0:5'--`) techniques.\n3. **Union-based**: `UNION SELECT * FROM users` to extract data from other tables.\n4. **Second-order**: Input stored in DB, then used unsafely in another query.\n\n**Prevention**:\n\n1. **Parameterized queries** (best): Use placeholders (`$1`, `?`) instead of string concatenation:\n   ```sql\n   -- Bad: `SELECT * FROM users WHERE email = '${email}'`\n   -- Good: SELECT * FROM users WHERE email = $1\n   ```\n\n2. **ORM query builders**: Sequelize, Prisma, TypeORM use parameterized queries by default.\n\n3. **Input validation**: Whitelist allowed characters, validate types.\n\n4. **Stored procedures**: Can help but still require parameterization.\n\n5. **Least privilege**: Database user should only have necessary permissions.\n\n6. **WAF**: Web Application Firewall as defense-in-depth.",
    bestAnswer: "SQL injection occurs when user input is inserted into SQL queries unsafely.\n\n**Types**: Classic (direct injection), Blind (boolean/time-based extraction), Union-based (data extraction via UNION), Second-order (stored then used unsafely).\n\n**Prevention** (in order of effectiveness):\n\n1. **Parameterized queries** (primary defense): Use placeholders for all user input.\n   ```javascript\n   // BAD: db.query(`SELECT * FROM users WHERE email = '${email}')\n   // GOOD: db.query('SELECT * FROM users WHERE email = $1', [email])\n   ```\n\n2. **ORMs**: Prisma, Sequelize, TypeORM parameterize automatically.\n\n3. **Input validation**: Whitelist allowed characters and types.\n\n4. **Least privilege**: DB user should have minimal permissions.\n\n5. **Defense-in-depth**: WAF, database firewalls, query monitoring.",
    alternativeAnswers: [
      "ORMs prevent most SQL injection by default, but raw queries (`$queryRaw` in Prisma) still need parameterization.",
      "Database firewalls (like DbProtect) can block suspicious queries before they reach the database."
    ],
    commonMistakes: [
      "Using string concatenation in SQL queries — always use parameterized queries.",
      "Trusting input validation alone — validation is not a substitute for parameterization.",
      "Forgetting about second-order injection — data stored safely can become dangerous when reused in other queries."
    ],
    followUpQuestions: [
      "What is second-order SQL injection?",
      "How do you detect SQL injection attempts in production?",
      "How does an ORM's query builder prevent injection?"
    ],
    relatedQuestionIds: ["be-041", "be-043"],
    references: [
      { title: "OWASP SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection" },
      { title: "SQL Injection Prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-043",
    title: "How do you secure a REST API?",
    content: "What security measures should be implemented for a production REST API? Cover authentication, authorization, rate limiting, input validation, and transport security.",
    difficulty: "intermediate",
    track: "backend",
    topic: "Security",
    category: "API Security",
    companyTags: ["Google", "Amazon", "Stripe"],
    interviewRound: "Technical",
    frequency: 5,
    expectedAnswer: "Secure REST APIs with: HTTPS everywhere, authentication (JWT/OAuth), authorization (RBAC), rate limiting, input validation/sanitization, CORS configuration, security headers (Helmet), and comprehensive logging.",
    detailedExplanation: "**API Security Checklist**:\n\n1. **Transport**: HTTPS everywhere (TLS 1.2+). HSTS header. Never allow HTTP.\n\n2. **Authentication**: JWT with short expiry + refresh tokens, or OAuth 2.0. Use httpOnly cookies for tokens.\n\n3. **Authorization**: RBAC or ABAC. Server-side checks on every endpoint. Deny by default.\n\n4. **Rate Limiting**: Per-user and per-IP limits. 429 status with Retry-After header.\n\n5. **Input Validation**: Validate and sanitize all input. Use DTOs with class-validator (NestJS) or Joi (Express). Max request size limits.\n\n6. **CORS**: Restrict to specific origins. Never `Access-Control-Allow-Origin: *` with credentials.\n\n7. **Security Headers**: Helmet.js for Express — Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security.\n\n8. **Error Handling**: Never expose stack traces or internal details. Use generic error messages.\n\n9. **Logging**: Log all auth events, errors, and unusual patterns. Never log sensitive data.\n\n10. **Dependency Scanning**: Regular npm audit, Snyk, Dependabot for vulnerable packages.",
    bestAnswer: "Production API security measures:\n\n1. **HTTPS**: TLS 1.2+, HSTS header, redirect HTTP to HTTPS.\n2. **Authentication**: JWT (short-lived access + refresh tokens) or OAuth 2.0.\n3. **Authorization**: Server-side RBAC on every endpoint. Deny by default.\n4. **Rate Limiting**: Per-user/IP with 429 + Retry-After.\n5. **Input Validation**: Validate all input with DTOs/schemas. Max request size.\n6. **CORS**: Specific origins, never `*` with credentials.\n7. **Headers**: Helmet.js (CSP, X-Frame-Options, HSTS, etc.).\n8. **Error Handling**: Generic messages, no stack traces in production.\n9. **Logging**: Auth events, errors, anomalies. No secrets in logs.\n10. **Dependencies**: Regular scanning (npm audit, Snyk).\n11. **Secrets**: Environment variables, never in code.\n12. **Audit**: Regular penetration testing and security reviews.",
    alternativeAnswers: [
      "For defense-in-depth, add a WAF (Web Application Firewall) in front of your API — Cloudflare, AWS WAF, or ModSecurity.",
      "Implement request signing (HMAC) for API-to-API communication to verify request integrity."
    ],
    commonMistakes: [
      "Relying only on client-side validation — always validate on the server.",
      "Not implementing security headers — a single line with Helmet.js adds significant protection.",
      "Exposing internal API documentation (Swagger) in production — disable or protect it."
    ],
    followUpQuestions: [
      "How would you implement request signing for API-to-API communication?",
      "What security headers should every API response include?",
      "How do you handle secrets in a microservices environment?"
    ],
    relatedQuestionIds: ["be-041", "be-026"],
    references: [
      { title: "OWASP API Security Top 10", url: "https://owasp.org/API-Security/" },
      { title: "REST Security Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-044",
    title: "What is Server-Side Request Forgery (SSRF) and how do you prevent it?",
    content: "Explain SSRF attacks. How do they work, what can attackers exploit, and how do you defend against them?",
    difficulty: "advanced",
    track: "backend",
    topic: "Security",
    category: "Web Security",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "SSRF occurs when an attacker tricks the server into making requests to internal services. The server acts as a proxy, bypassing firewalls. Prevention: validate and allowlist URLs, block internal IPs, use network segmentation.",
    detailedExplanation: "SSRF (Server-Side Request Forgery) occurs when an attacker can make the server issue requests to arbitrary URLs, including internal network resources.\n\n**Attack scenario**: An app fetches user-provided URLs (e.g., webhook URLs, file imports). An attacker provides `http://169.254.169.254/latest/meta-data/` (AWS metadata endpoint) to steal cloud credentials.\n\n**What attackers can access**: Internal services (databases, admin panels), cloud metadata (IAM credentials), internal APIs, and local files via `file://` protocol.\n\n**Prevention**:\n1. **URL validation**: Allowlist permitted protocols and domains. Block internal IP ranges.\n2. **Network segmentation**: Isolate services, use private subnets.\n3. **Disable unnecessary protocols**: Block `file://`, `gopher://`, `dict://`.\n4. **Use a proxy**: Route external requests through a dedicated proxy service.\n5. **IMDSv2**: Use AWS Instance Metadata Service v2 (requires token).\n6. **Response filtering**: Don't return raw internal responses to users.",
    bestAnswer: "SSRF tricks the server into making requests to internal resources.\n\n**Attack**: Attacker provides URL like `http://169.254.169.254/latest/meta-data/` → server fetches AWS credentials.\n\n**Targets**: Internal services, cloud metadata (IAM credentials), databases, admin panels, local files (`file:///etc/passwd`).\n\n**Prevention**:\n1. **Allowlist URLs**: Only permit specific domains/protocols.\n2. **Block internal IPs**: Validate resolved IPs against private ranges (10.x, 172.16-31.x, 192.168.x, 169.254.x).\n3. **Disable dangerous protocols**: Block file://, gopher://, dict://.\n4. **Network segmentation**: Isolate services in private subnets.\n5. **Use proxy service**: Dedicated proxy with strict validation.\n6. **Cloud-specific**: Use IMDSv2 (AWS), disable metadata endpoint if not needed.\n\n**Real example**: Capital One breach (2019) — SSRF via WAF misconfiguration exposed 100M+ customer records.",
    alternativeAnswers: [
      "DNS rebinding is an advanced SSRF variant — the attacker's DNS resolves to an internal IP after initial validation passes. Use IP validation at request time, not just URL validation.",
      "For webhook implementations, use a dedicated outbound proxy that only allows public IPs and validates responses before forwarding."
    ],
    commonMistakes: [
      "Only validating the URL string — attackers use DNS rebinding and redirect to bypass URL-based validation.",
        "Not blocking file:// and gopher:// protocols — these can access local files and internal services.",
      "Returning raw internal responses to users — even if the request fails, error messages can leak internal information."
    ],
    followUpQuestions: [
      "How does DNS rebinding work as an SSRF bypass?",
      "What is the Capital One SSRF breach and what can we learn from it?",
      "How would you implement a secure URL fetcher in Node.js?"
    ],
    relatedQuestionIds: ["be-041", "be-043"],
    references: [
      { title: "OWASP SSRF", url: "https://owasp.org/www-community/attacks/Server_Side_Request_Forgery" },
      { title: "SSRF Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // DevOps / Docker (be-045 – be-047)
  // ──────────────────────────────────────────────
  {
    id: "be-045",
    title: "What is Docker and how do you containerize a Node.js application?",
    content: "Explain Docker fundamentals. How do you write a Dockerfile for a Node.js app, use multi-stage builds, and manage Docker Compose?",
    difficulty: "beginner",
    track: "backend",
    topic: "DevOps",
    category: "Docker Fundamentals",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 5,
    expectedAnswer: "Docker packages applications with their dependencies into containers — lightweight, portable units that run consistently across environments. A Dockerfile defines the build steps, and Docker Compose orchestrates multi-container applications.",
    detailedExplanation: "Docker containerizes applications by packaging code, runtime, and dependencies into a standardized unit (container image). Containers share the host OS kernel, making them lighter than VMs.\n\n**Dockerfile for Node.js**:\n```dockerfile\n# Multi-stage build\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nRUN npm run build\n\nFROM node:20-alpine\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY --from=builder /app/node_modules ./node_modules\nEXPOSE 3000\nCMD [\"node\", \"dist/index.js\"]\n```\n\n**Key concepts**:\n- `FROM`: Base image\n- `COPY`: Copy files into image\n- `RUN`: Execute commands during build\n- `CMD`: Default command when container starts\n- `EXPOSE`: Document the port (doesn't publish it)\n\n**Multi-stage builds**: Use multiple FROM statements to separate build and runtime stages, reducing final image size.\n\n**Docker Compose**: Defines multi-container applications:\n```yaml\nservices:\n  app:\n    build: .\n    ports: [\"3000:3000\"]\n    depends_on: [\"db\", \"redis\"]\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_DB: mydb\n  redis:\n    image: redis:7-alpine\n```",
    bestAnswer: "Docker packages apps into portable containers with consistent environments.\n\n**Dockerfile for Node.js** (multi-stage):\n```dockerfile\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nRUN npm run build\n\nFROM node:20-alpine\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY --from=builder /app/node_modules ./node_modules\nEXPOSE 3000\nCMD [\"node\", \"dist/index.js\"]\n```\n\n**Best practices**: (1) Use .dockerignore to exclude node_modules, .git, etc. (2) Multi-stage builds for smaller images. (3) Use alpine base images. (4) Run as non-root user. (5) Pin specific versions, not `latest`.\n\n**Docker Compose**: Orchestrate multiple services (app + DB + Redis) with `docker-compose up`.",
    alternativeAnswers: [
      "Docker BuildKit (default in Docker 23+) provides faster builds with caching and multi-platform support.",
      "For production, consider distroless images (Google) — they contain only the app and runtime, no shell or package manager, reducing attack surface."
    ],
    commonMistakes: [
      "Copying node_modules into the image — use `npm ci` inside the container instead.",
      "Running containers as root — always use USER instruction for security.",
      "Not using .dockerignore — .git, node_modules, and .env shouldn't be in the image."
    ],
    followUpQuestions: [
      "How do you reduce Docker image size for a Node.js application?",
      "What is the difference between COPY and ADD in a Dockerfile?",
      "How do you manage secrets in Docker containers?"
    ],
    relatedQuestionIds: ["be-046", "be-047"],
    references: [
      { title: "Docker Documentation", url: "https://docs.docker.com/" },
      { title: "Dockerfile Best Practices", url: "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-046",
    title: "How do you implement CI/CD pipelines for a Node.js project?",
    content: "Explain CI/CD for Node.js. What are the stages (lint, test, build, deploy), and how do you set up a pipeline with GitHub Actions or similar tools?",
    difficulty: "advanced",
    track: "backend",
    topic: "DevOps",
    category: "CI/CD",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "CI/CD automates code integration, testing, and deployment. A typical pipeline: lint → type-check → unit tests → build → integration tests → deploy. GitHub Actions, GitLab CI, and Jenkins are common tools.",
    detailedExplanation: "**CI (Continuous Integration)**: Automatically build and test every code change. Catches issues early.\n\n**CD (Continuous Delivery)**: Automatically prepare releases. **CD (Continuous Deployment)**: Automatically deploy to production.\n\n**Typical pipeline stages**:\n1. **Lint**: ESLint, Prettier check\n2. **Type Check**: TypeScript compilation\n3. **Unit Tests**: Jest, Vitest\n4. **Build**: Compile/bundle the application\n5. **Integration Tests**: Test against real services\n6. **Security Scan**: npm audit, Snyk\n7. **Deploy**: Push to staging/production\n\n**GitHub Actions example**:\n```yaml\nname: CI/CD\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: '20' }\n      - run: npm ci\n      - run: npm run lint\n      - run: npm run typecheck\n      - run: npm test\n      - run: npm run build\n  deploy:\n    needs: test\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    steps:\n      - run: # deploy commands\n```\n\n**Best practices**: Run tests in parallel, cache node_modules, use matrix builds for multiple Node versions, protect main branch.",
    bestAnswer: "CI/CD automates build, test, and deployment:\n\n**Pipeline stages**: Lint → Type-check → Unit tests → Build → Integration tests → Security scan → Deploy.\n\n**GitHub Actions example**:\n```yaml\nname: CI/CD\non: [push, pull_request]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: '20' }\n      - run: npm ci\n      - run: npm run lint && npm run typecheck\n      - run: npm test\n      - run: npm run build\n  deploy:\n    needs: test\n    if: github.ref == 'refs/heads/main'\n    runs-on: ubuntu-latest\n    steps: [deploy commands]\n```\n\n**Best practices**: Cache node_modules, run tests in parallel, use matrix builds, protect main branch, automate rollback on failure.",
    alternativeAnswers: [
      "GitLab CI/CD uses .gitlab-ci.yml with similar stages. Jenkins offers more flexibility but requires more setup.",
      "For monorepos, use path-based triggers to only run tests for changed packages (turborepo, nx affected)."
    ],
    commonMistakes: [
      "Not caching node_modules — pipeline is slow without caching.",
      "Running all tests on every push — use path-based triggers in monorepos.",
      "Not protecting the main branch — require PR reviews and passing CI before merge."
    ],
    followUpQuestions: [
      "How do you set up automated rollback on failed deployments?",
      "What is the difference between continuous delivery and continuous deployment?",
      "How do you handle database migrations in a CI/CD pipeline?"
    ],
    relatedQuestionIds: ["be-045", "be-047"],
    references: [
      { title: "GitHub Actions for Node.js", url: "https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs" },
      { title: "CI/CD Best Practices", url: "https://github.com/dwyl/learn-devops" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-047",
    title: "What is the difference between containers and virtual machines?",
    content: "Compare containers (Docker) and virtual machines. What are the architectural differences, tradeoffs, and when would you use each?",
    difficulty: "expert",
    track: "backend",
    topic: "DevOps",
    category: "Infrastructure",
    companyTags: ["Google", "Amazon", "Microsoft"],
    interviewRound: "Phone Screen",
    frequency: 4,
    expectedAnswer: "Containers share the host OS kernel and are lightweight (MB, seconds to start). VMs include a full OS and hypervisor, are heavier (GB, minutes to start). Containers are better for microservices and development; VMs for running different OS or strong isolation.",
    detailedExplanation: "**Virtual Machines**:\n- Full OS per VM (Linux, Windows)\n- Hypervisor (VMware, VirtualBox, AWS EC2)\n- Strong isolation (different kernels)\n- Resource-heavy (GB RAM, GB disk)\n- Slow startup (minutes)\n- Best for: Different OS needs, legacy apps, strong isolation\n\n**Containers**:\n- Share host OS kernel\n- Container runtime (Docker, containerd, Podman)\n- Process-level isolation (namespaces, cgroups)\n- Lightweight (MB, seconds)\n- Fast startup (seconds)\n- Best for: Microservices, CI/CD, development, cloud-native\n\n**Architecture**:\n- VM: Hardware → Hypervisor → Guest OS → App\n- Container: Hardware → Host OS → Container Runtime → App\n\n**Security**: VMs provide stronger isolation (different kernels). Containers share the kernel, so kernel vulnerabilities affect all containers. Use gVisor or Kata Containers for stronger container isolation.\n\n**Cloud**: AWS Fargate, Google Cloud Run, Azure Containers run containers without managing VMs.",
    bestAnswer: "**Containers** share the host OS kernel, are lightweight (MB), and start in seconds.\n**VMs** include a full OS, are heavier (GB), and start in minutes.\n\n**Architecture**:\n- VM: Hardware → Hypervisor → Guest OS → App\n- Container: Hardware → Host OS → Container Runtime → App\n\n**Tradeoffs**:\n| Aspect | Container | VM |\n|--------|-----------|----|\n| Size | MB | GB |\n| Startup | Seconds | Minutes |\n| Isolation | Process-level | Full OS-level |\n| OS | Shares host kernel | Full guest OS |\n| Best for | Microservices, CI/CD | Different OS, legacy, strong isolation |\n\n**When to use containers**: Microservices, cloud-native, development environments, CI/CD.\n**When to use VMs**: Different OS requirements, legacy applications, compliance requiring strong isolation.",
    alternativeAnswers: [
      "Kubernetes orchestrates containers at scale — it handles scheduling, scaling, networking, and self-healing across a cluster of machines.",
      "Unikernels (like MirageOS) are even lighter than containers — they compile the app and minimal OS into a single bootable image."
    ],
    commonMistakes: [
      "Assuming containers are as isolated as VMs — containers share the kernel and are less isolated.",
      "Running Docker in production without orchestration — use Kubernetes, ECS, or Docker Swarm for management.",
      "Not understanding that containers can't run different OS — if you need Windows on Linux, you need a VM."
    ],
    followUpQuestions: [
      "How does Kubernetes differ from Docker Swarm?",
      "What are namespaces and cgroups in Linux containers?",
      "How do you secure containers in production?"
    ],
    relatedQuestionIds: ["be-045", "be-046"],
    references: [
      { title: "Docker vs VMs", url: "https://www.docker.com/blog/containers-vms-and-the-mac-os-x-host/" },
      { title: "Kubernetes Documentation", url: "https://kubernetes.io/docs/" }
    ],
    createdAt: now,
    updatedAt: now,
  },

  // ──────────────────────────────────────────────
  // Message Queues (be-048 – be-050)
  // ──────────────────────────────────────────────
  {
    id: "be-048",
    title: "What are message queues and when should you use them?",
    content: "Explain message queues (RabbitMQ, Kafka, SQS). What problems do they solve, what are the patterns (pub/sub, task queue), and when should you use them?",
    difficulty: "intermediate",
    track: "backend",
    topic: "Message Queues",
    category: "Message Queue Fundamentals",
    companyTags: ["Google", "Amazon", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Message queues decouple producers and consumers, enabling asynchronous processing, load leveling, and fault tolerance. They're used for background jobs, event-driven architectures, and inter-service communication. Common tools: RabbitMQ, Apache Kafka, AWS SQS.",
    detailedExplanation: "Message queues solve several problems:\n\n1. **Decoupling**: Producer and consumer don't need to know about each other.\n2. **Asynchronous processing**: Heavy work (emails, image processing) happens in the background.\n3. **Load leveling**: Absorb traffic spikes — queue buffers messages, consumers process at their pace.\n4. **Fault tolerance**: If a consumer crashes, messages stay in the queue for retry.\n\n**Patterns**:\n- **Point-to-Point (Task Queue)**: One message processed by one consumer. Good for background jobs (sending emails, processing uploads).\n- **Pub/Sub (Publish-Subscribe)**: One message consumed by multiple subscribers. Good for notifications, event broadcasting.\n- **Request-Reply**: Producer sends message and waits for response. Used for RPC over messaging.\n\n**Tools**:\n- **RabbitMQ**: Traditional message broker. AMQP protocol. Supports routing, queues, acknowledgments. Good for task queues.\n- **Apache Kafka**: Distributed event streaming platform. Append-only log. High throughput, replay capability. Good for event sourcing and real-time pipelines.\n- **AWS SQS**: Fully managed. Standard (at-least-once) or FIFO (exactly-once) queues. Simple, scalable.\n\n**When to use**: Background jobs, email/notification systems, order processing, data pipelines, microservice communication, event-driven architectures.",
    bestAnswer: "Message queues decouple producers and consumers for asynchronous, reliable communication.\n\n**Problems solved**: Decoupling, async processing (background jobs), load leveling (traffic spikes), fault tolerance (messages survive crashes).\n\n**Patterns**:\n- **Task Queue**: One message → one consumer. Email sending, image processing.\n- **Pub/Sub**: One message → multiple subscribers. Notifications, events.\n- **Event Streaming**: Persistent log with replay. Kafka for data pipelines.\n\n**Tools**:\n- **RabbitMQ**: Traditional broker. AMQP. Routing, queues, acks.\n- **Kafka**: Event streaming. High throughput, replay, partitioning.\n- **AWS SQS**: Managed. Standard or FIFO. Simple.\n\n**When to use**: Background jobs, notifications, order processing, event-driven microservices, data pipelines. If the operation can be deferred, queue it.",
    alternativeAnswers: [
      "Redis can serve as a simple message queue (LPUSH/BRPOP or Streams), but lacks durability and features of dedicated brokers like RabbitMQ or Kafka.",
      "BullMQ (built on Redis) provides a Redis-based job queue with retries, rate limiting, and delayed jobs — good for Node.js applications."
    ],
    commonMistakes: [
      "Using message queues for synchronous request-response — this adds latency and complexity. Use HTTP/gRPC for synchronous calls.",
      "Not implementing dead letter queues (DLQ) — failed messages need a place to go for investigation.",
      "Ignoring message ordering — ensure FIFO ordering when processing order matters (e.g., financial transactions)."
    ],
    followUpQuestions: [
      "What is the difference between RabbitMQ and Kafka?",
      "How do you handle message ordering in a distributed queue?",
      "What is a dead letter queue and when should you use one?"
    ],
    relatedQuestionIds: ["be-049", "be-050"],
    references: [
      { title: "RabbitMQ Tutorials", url: "https://www.rabbitmq.com/getstarted.html" },
      { title: "Apache Kafka Documentation", url: "https://kafka.apache.org/documentation/" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-049",
    title: "How do you implement background job processing in Node.js?",
    content: "Explain how to implement background job processing in Node.js. Cover BullMQ, worker threads, and when to use each approach.",
    difficulty: "intermediate",
    track: "backend",
    topic: "Message Queues",
    category: "Job Processing",
    companyTags: ["Uber", "Airbnb", "Netflix"],
    interviewRound: "Technical",
    frequency: 4,
    expectedAnswer: "Background job processing handles tasks that shouldn't block the main thread: sending emails, image processing, report generation. Options include BullMQ (Redis-based), worker threads, and external services (AWS SQS, Google Cloud Tasks).",
    detailedExplanation: "Node.js background jobs:\n\n**BullMQ** (recommended for most cases):\n- Built on Redis, mature, feature-rich\n- Support for retries, delays, rate limiting, priorities, progress tracking\n- Distributed across multiple workers\n- Dead letter queues for failed jobs\n\n```typescript\nimport { Queue, Worker } from 'bullmq';\nconst emailQueue = new Queue('email', { connection: redis });\nconst worker = new Worker('email', async (job) => {\n  await sendEmail(job.data.to, job.data.subject, job.data.body);\n}, { connection: redis });\n```\n\n**Worker Threads** (Node.js built-in):\n- Separate V8 instances sharing memory via SharedArrayBuffer\n- Good for CPU-intensive tasks (image processing, data transformation)\n- No persistence — jobs lost on crash\n- Good for single-process, in-memory work\n\n**External Services**: AWS SQS, Google Cloud Tasks, Azure Service Bus — fully managed, scalable, no infrastructure to maintain.\n\n**When to use each**:\n- BullMQ: Most production job processing (email, notifications, data processing)\n- Worker Threads: CPU-intensive, in-process work (image resizing, CSV parsing)\n- External Services: When you don't want to manage Redis/BullMQ infrastructure",
    bestAnswer: "Background jobs handle non-blocking tasks: emails, image processing, reports.\n\n**BullMQ** (most common):\n- Redis-based, feature-rich (retries, delays, rate limits, priorities)\n- Distributed workers, dead letter queues\n- Progress tracking, job scheduling\n\n```typescript\nimport { Queue, Worker } from 'bullmq';\nconst queue = new Queue('email', { connection: redis });\nconst worker = new Worker('email', async (job) => {\n  await sendEmail(job.data);\n}, { connection: redis });\n```\n\n**Worker Threads** (built-in): CPU-intensive work, shared memory, no persistence.\n\n**External** (SQS, Cloud Tasks): Fully managed, no infrastructure.\n\n**Choose BullMQ** for most cases — it provides reliability, retries, and distributed processing with minimal setup.",
    alternativeAnswers: [
      "For simple cases, you can use setImmediate() or process.nextTick() to defer work, but this doesn't persist jobs or handle failures.",
      "In NestJS, use the @nestjs/bull module for BullMQ integration with dependency injection support."
    ],
    commonMistakes: [
      "Not implementing retries with exponential backoff — transient failures should be retried automatically.",
      "Processing jobs synchronously in the main thread — this blocks the event loop and degrades performance.",
      "Not monitoring job queues — use Bull Board or similar dashboards to track queue health and failures."
    ],
    followUpQuestions: [
      "How do you handle job failures and retries?",
      "What is a dead letter queue and how do you implement one?",
      "How do you scale background job processing across multiple servers?"
    ],
    relatedQuestionIds: ["be-048", "be-008"],
    references: [
      { title: "BullMQ Documentation", url: "https://docs.bullmq.io/" },
      { title: "Node.js Worker Threads", url: "https://nodejs.org/api/worker_threads.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "be-050",
    title: "What is event-driven architecture and how do you implement it?",
    content: "Explain event-driven architecture. How do events flow between services, what patterns exist (event sourcing, CQRS), and what are the tradeoffs?",
    difficulty: "advanced",
    track: "backend",
    topic: "Message Queues",
    category: "Architecture",
    companyTags: ["Google", "Netflix", "Amazon"],
    interviewRound: "On-site",
    frequency: 3,
    expectedAnswer: "Event-driven architecture uses events as the primary mechanism for communication between services. Services emit events when something happens, and other services react to those events. Patterns include event sourcing (storing all state changes) and CQRS (separating read/write models).",
    detailedExplanation: "Event-driven architecture (EDA) is a design pattern where services communicate by producing and consuming events (facts about something that happened).\n\n**Core concepts**:\n- **Event**: An immutable record of something that happened (OrderCreated, PaymentProcessed)\n- **Event Producer**: Service that emits events\n- **Event Consumer**: Service that reacts to events\n- **Event Channel**: Message broker (Kafka, RabbitMQ) that routes events\n\n**Patterns**:\n\n1. **Event Sourcing**: Store all state changes as events instead of current state. `events` table with sequence numbers. Current state = replay all events. Used by banks, logistics.\n\n2. **CQRS (Command Query Responsibility Segregation)**: Separate write model (commands) from read model (queries). Write to event store, read from optimized projections.\n\n3. **Saga Pattern**: Manage distributed transactions via events. Each step emits an event that triggers the next step. Compensating events undo failed steps.\n\n**Benefits**: Loose coupling, scalability, audit trail, temporal queries, replay capability.\n\n**Tradeoffs**: Eventual consistency, increased complexity, debugging difficulty, event versioning challenges.",
    bestAnswer: "Event-driven architecture uses events for inter-service communication:\n\n**How it works**:\n1. Service A performs an action → emits event (OrderCreated)\n2. Event broker (Kafka, RabbitMQ) routes event\n3. Service B, C, D subscribe and react independently\n\n**Key patterns**:\n\n1. **Event Sourcing**: Store all state changes as events. Current state = replay events. Full audit trail, temporal queries.\n\n2. **CQRS**: Separate write model (commands) from read model (queries). Write to event store, read from projections.\n\n3. **Saga**: Manage distributed transactions. Each step emits event → next step triggers. Compensating events handle failures.\n\n**Benefits**: Loose coupling, scalability, audit trail, replay capability.\n\n**Tradeoffs**: Eventual consistency, complexity, harder debugging, event versioning.\n\n**When to use**: Complex domains, microservices, audit requirements, real-time data pipelines.",
    alternativeAnswers: [
      "Kafka's event log makes event sourcing natural — events are persisted in append-only logs with replay capability built in.",
      "For simpler event-driven systems, use in-process event emitters (Node.js EventEmitter) for same-process events and message brokers for cross-service events."
    ],
    commonMistakes: [
      "Treating events as commands — events are facts about what happened, not requests to do something.",
      "Not handling event versioning — schemas evolve and consumers must handle multiple versions.",
      "Over-engineering with event sourcing — it adds significant complexity; only use when the benefits justify it."
    ],
    followUpQuestions: [
      "How do you handle event versioning in an event-sourced system?",
      "What is the Saga pattern and how do you implement it?",
      "How do you debug issues in an event-driven system?"
    ],
    relatedQuestionIds: ["be-048", "be-032"],
    references: [
      { title: "Event-Driven Architecture — Martin Fowler", url: "https://martinfowler.com/articles/201701-event-driven.html" },
      { title: "Event Sourcing", url: "https://microservices.io/patterns/data/event-sourcing.html" }
    ],
    createdAt: now,
    updatedAt: now,
  },
];
