// 2.Add async pieces (setTimeout, Promise) to show how the event loop re-enters the stack.
//Study this code understand why.  Its important.
//promises are microtasks and setTimeout/setInterval/ i/o  are macrotasks

console.log("Start");

//settime out outer and promise  inner to demonstrate event loop behavior
setTimeout(() => {
  console.log("Timeout 1");

  Promise.resolve().then(() => {
    console.log("Promise 1");
  });
}, 0);

// promise outer and settime out inner to demonstrate event loop behavior
Promise.resolve().then(() => {
  console.log("Promise 2");

  setTimeout(() => {
    console.log("Timeout 2");
  }, 0);
});

console.log("End");
