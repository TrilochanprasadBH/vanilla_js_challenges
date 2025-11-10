YESSS 🔥🔥 that’s exactly what top-tier devs do — theory → code → GitHub proof.

You’ve already built the _under-the-hood understanding_, now we’ll turn it into **“hands-on mastery”**.

---

## ⚙️ **Stage 2 — Core JS → Hands-On Builder Track**

You’ll now **code every concept** you just learned — like a JS engineer dissecting the engine.
Each topic → 2–3 tasks → push to your GitHub.
By the end, your repo becomes a “Core-JS-Mastery” portfolio.

---

### 🧩 **1. Execution Context + Call Stack**

**Goal:** Visualize how JS executes.
**Tasks:**

1. Write nested functions that log their execution order (`console.log('start A')`, etc.)
2. Add async pieces (`setTimeout`, `Promise`) to show how the event loop re-enters the stack.
3. Create a simple `callStackSimulator()` that pushes/pops strings like the JS call stack.

---

### 🪄 **2. Hoisting & TDZ**

**Tasks:**

1. Show `var`, `let`, `const` behavior — log before/after declaration.
2. Implement a `hoistingPlayground()` that comments which variables are in TDZ.
3. Bonus: explain why `function` declarations behave differently from arrow functions.

---

### 🔒 **3. Closures & Scope Chain**

**Tasks:**

1. Build a counter using closure (`makeCounter()`).
2. Make a private variable system (simulate data hiding).
3. Build a `once(fn)` utility — executes a function only once using closure.

---

### 💬 **4. `this` Binding**

**Tasks:**

1. Log `this` in implicit, explicit (`call`, `bind`), arrow, and default contexts.
2. Implement your own `myBind()` polyfill.
3. Explain with diagrams (`object.fn()` vs `const fn = object.fn`).

---

### ⏳ **5. Event Loop / Microtasks**

**Tasks:**

1. Code:

   ```js
   console.log("A");
   setTimeout(() => console.log("B"));
   Promise.resolve().then(() => console.log("C"));
   console.log("D");
   ```

   and trace the order.

2. Write your own queue simulation: push tasks and microtasks, execute them in correct order.
3. Bonus: show difference between `await` and `.then()` microtasks.

---

### 🧹 **6. Garbage Collection**

**Tasks:**

1. Create objects and nullify references — explain which ones become collectible.
2. Optional: draw memory graph showing reachable/unreachable objects.

---

### 🧱 **7. Primitive vs Reference**

**Tasks:**

1. Show copy by value vs by reference with examples.
2. Write `deepClone(obj)` using recursion.
3. Compare structuredClone, JSON, and manual clone.

---

### 🧬 **8. Prototype & Prototype Chain**

**Tasks:**

1. Create an inheritance chain manually using `Object.create`.
2. Verify with `.__proto__` logs.
3. Rebuild it with `class` / `extends` and show same chain.

---

### 🧠 **9. Function Objects, IIFEs, Currying**

**Tasks:**

1. IIFE demo that creates private scope.
2. Currying practice: `sum(1)(2)(3)`.
3. Build a generic `curry(fn)` utility.

---

### 🧰 **10. How `new` Works**

**Tasks:**

1. Implement your own `myNew()` function.
2. Test with a constructor — `function Person(name){this.name=name}`.
3. Explain the 4 steps of `new`.

---

## 🧾 Project Plan

| Day | Focus                       | Output                              |
| --- | --------------------------- | ----------------------------------- |
| 1   | Execution Context, Hoisting | 2–3 JS files                        |
| 2   | Closures, `this`            | 2–3 JS files                        |
| 3   | Event Loop, GC, Copying     | 2–3 JS files                        |
| 4   | Prototype, Functions, `new` | 3–4 JS files                        |
| 5   | Wrap up, document in README | 1 polished README with explanations |

---

## 🚀 GitHub Repo Setup

**Repo name:** `core-js-mastery`
**Folders:**

```
core-js-mastery/
 ├─ 01-execution-context/
 ├─ 02-hoisting-tdz/
 ├─ 03-closures-scope/
 ├─ 04-this-binding/
 ├─ 05-event-loop/
 ├─ 06-garbage-collection/
 ├─ 07-primitives-vs-reference/
 ├─ 08-prototypes/
 ├─ 09-functions-iife-currying/
 ├─ 10-new-keyword/
 └─ README.md
```

Each folder:

- one `.js` file with experiments
- one short `.md` with your explanation of what you learned

---

If you’d like, I’ll generate the **initial folder + README scaffold content** (with your learning goals + TODO tasks written neatly) so you can just `git init` and start committing code.

Want me to do that for you next?
