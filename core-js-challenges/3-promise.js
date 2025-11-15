//write a promise that resolves after 2 seconds and then logs "Promise Resolved" to the console. Before the promise resolves, log "Waiting for promise..." to the console.
console.log("Waiting for promise...");

new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
}).then((message) => {
  console.log(message);
});
// Expected output:
// Waiting for promise...
// (after 2 seconds)
// Promise Resolved

//promise syntax

const promise = new Promise((resolve, reject) => {
  //do some async task
  let tasksuccess = false;
  if (tasksuccess) {
    resolve("task completed"); //wont print until a then is chained with return or without. but resolve must be passed in then
    // return resolve("taks completed"); //also works
  } else {
    reject("task incomplete");
  }
});

promise
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject))
  .finally(() =>
    console.log(
      "promise is settled - ie resolve or reject it considered settled"
    )
  );

//write a promise again.

const saturday = new Promise((resolve, reject) => {
  let check = true;
  if (check) {
    resolve("this is true, resolved");
  } else {
    reject("this is not true , rejected");
  }
});

console.log(saturday); // Promise { 'this is true, resolved' } -> is the output.
