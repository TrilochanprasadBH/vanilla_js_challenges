//implement promise.all
//Learn from mistake done here below.

function fetchData1() {
  return (
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        if (!res.ok) throw new Error(`Error in fetching ${res.status} -1`);
        return res.json();
      })
      // .catch((err) => console.error(err))
      .finally(() => console.log("Fetch attempt finished-1"))
  );
}

function fetchData2() {
  return (
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        if (!res.ok) throw new Error(`Error in fetching ${res.status} -2`);
        return res.json();
      })
      // .catch((err) => console.error(err))
      .finally(() => console.log("Fetch attempt finished-2"))
  );
}

function fetchData3() {
  return (
    fetch("https://jsonplaceholder.typicode.com/posts/3")
      .then((res) => {
        if (!res.ok) throw new Error(`Error in fetching ${res.status} -3`);
        return res.json();
      })
      // .catch((err) => console.error(err))
      .finally(() => console.log("Fetch attempt finished-3"))
  );
}

Promise.all([fetchData1(), fetchData2(), fetchData3()])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.error("Error in Promise.all:", err));

// in each fetchData function above, you have put, .catch block to catch errors.
// This will prevent Promise.all from catching errors because the errors are already handled within each individual promise.
// To allow Promise.all to catch errors, you should remove the .catch blocks from the fetchData functions.
//What does this do?
//✔ It logs the error
//❌ BUT it does not rethrow the error
//❌ AND it returns undefined implicitly
//❌ So the Promise becomes "fulfilled" with undefined

//CONCEPT -  returns undefined implicitly , as js behaviour is so.
//  function x(){
//   console.log(10)
// }
// console.log(x())
//  When the line console.log(x()) is executed:
// The inner function x() runs first. It executes its internal console.log(10), printing 10 to the console as a side effect.
// The function x() then finishes. Because it lacks a line like return 10;, the JavaScript engine automatically makes it return undefined.
// The outer console.log() receives this returned undefined value as its argument and prints it to the console.

//IMPORTANT NOTE:
// thats why , .then(), .catch() should always return a value or rethrow the error to maintain the promise chain correctly.

// If you want Promise.all to reject:
// ✔ Remove individual catches
// OR
// ✔ Re-throw the error inside the catch
