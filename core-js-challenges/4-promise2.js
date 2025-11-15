//real world promises

function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) return resolve("fethcing has been resolved");
      else {
        reject("fetching is not resolved");
      }
    }, 4000);
  });
}

getData(1)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject))
  .finally(() => console.log("this promise is settled"));

getData(2)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject))
  .finally(() => console.log("this promise is settled"));
