// Fetch three endpoints in parallel (Promise.all)

//assume 3 urls are there
//implemented practiaclly - promise.all to fetch parallely.  understood flow etc.

function getAllParallel(...args) {
  return Promise.all(
    args.map((item) =>
      fetch(item).then((res) => {
        if (!res.ok) {
          throw new Error("response.message- error");
        }
        return res.json();
      })
    )
  )
    .then((val) => {
      console.log(val);
      return val;
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    })
    .finally(() => console.log("finally ends here"));
}
