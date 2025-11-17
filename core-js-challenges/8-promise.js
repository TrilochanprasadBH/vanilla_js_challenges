function pTimeout(promise, ms) {
  // your code
  const timeOut = new Promise((_, reject) => {
    setTimeout(() => {
      return reject(new Error("This race is won by timeout - reject"));
    }, ms);
  });

  return Promise.race([promise, timeOut]);
}

//lets instantiate this and see results

function getData() {
  return fetch(`https://jsonplaceholder.typicode.com/todos/1`).then((res) => {
    if (!res.ok) {
      throw new Error(`There was an error fetching: HTTP ${res.status}`);
    }
    return res.json();
  });
}

pTimeout(getData(), 100)
  .then((data) => console.log("SUCCESS:", data))
  .catch((err) => console.log("ERROR:", err.message));

pTimeout(getData(), 3000)
  .then((data) => console.log("SUCCESS:", data))
  .catch((err) => console.log("ERROR:", err.message));
