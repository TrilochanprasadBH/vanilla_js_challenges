//write a promise that calls api and resolves with the data or rejects with an error message

function fetchData(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("response is not ok");
      } else {
        const data = response.json();
        return data;
      }
    }
  );
}

fetchData(1)
  .then((data) => console.log("this is data in then", data))
  .catch((err) => console.log(message.error))
  .finally(() => console.log(`fianlly this is it. `));
