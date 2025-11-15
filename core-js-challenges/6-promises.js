//
// Level 1 — Composition and chaining (goal: reason about chains & error flow)
// Concepts: chaining .then, returning values vs promises, error propagation, .finally.
// Tasks
// Predict outputs for mixed return types:
// Promise.resolve(1)
//   .then(v => v + 1)               // A
//   .then(v => Promise.resolve(v+1))// B
//   .then(v => { throw v+1 })       // C
//   .catch(e => 'err'+e)            // D
//   .then(v => console.log(v));
// Dry-run step-by-step.
// Implement a function fetchJson(url) that returns a Promise which resolves with parsed JSON or rejects with an informative error.
// Demonstrate .finally runs regardless of resolve/reject.
// Mini exercise: chain three async tasks A -> B -> C where B depends on A’s result; ensure errors anywhere get caught at one place. dont reply. i ll sovle and send asnwer you evaluate.
//

// output :
// A - 2
// B - 3
// C - throw 4
// D - err4
// err4

function fetchJson(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Response is not ok");
      }

      return response.json();
    })
    .catch((error) => {
      throw new Error("Unable to fetch the given ${url}");
    })
    .finally(() => console.log("finally always runs resolve o reject"));
}

//error bubbles at first .catch()

getUserId()
  .then((id) => getUserPostById(id))
  .then((post) => getUserComments(post))
  .catch((err) => {
    throw new Error("Error always gets caught/bubbles up in first catch ");
  });

//this is better than above one , as i am creating new Error in above example, instead of simply
//cathcing the error that was already propogating, so above code ll need another catch below last catch [as this catch throws new error] to the error thrown
//also above code does not return , always return.

//this is nice.  clear. simple. not throwing new Error is good. simply handle the error that is already coming
// do not forget to return - ALWAYS
getUserId()
  .then((id) => getUserPostById(id))
  .then((post) => getUserComments(post))
  .catch((err) => {
    console.error("Something failed:", err.message);
    return null;
  });
