//promise.all check

function getData1() {
  return fetch(`https://jsonplaceholder.typicode.com/posts/1`).then((res) => {
    if (!res.ok) throw new Error("Error in fetching data res.ok");
    return res.json();
  });
  //not catching error here as promise.allsettled does that job , if i cathc here -promise.allsettled wont get error at all.
}

function getData2() {
  return fetch(`https://jsonplaceholder.typicode.com/posts/2`).then((res) => {
    if (!res.ok) throw new Error("Error in fetching data res.ok");
    return res.json();
  });
  //not catching error here as promise.allsettled does that job , if i cathc here -promise.allsettled wont get error at all.
}

function getData3() {
  return fetch(`https://jsonplaceholder.typicode.com/posts/3`).then((res) => {
    if (!res.ok) throw new Error("Error in fetching data res.ok");
    return res.json();
  });
  //not catching error here as promise.allsettled does that job , if i cathc here -promise.allsettled wont get error at all.
}

Promise.allSettled([getData1(), getData2(), getData3()])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//explaining differnce between promise.all and promise.allsettled

Promise.all waits for all passed iterable promises to resolve, but if any one fails, then it returns and rejects with reason of first rejected reason. this is short circuit behaviour. returns value that resolves. 
promise.allsettled , waits for all the iterable promises passed , irrespective or they resolve or reject. and gives output with status,reason etc 

when to use each - promise.all to be used when we need it to fail fast if its failing , example - login-dashboard-settings page load. all should work if any fails , then throw error. 
promise.allsettled is sued to observe logs , dashboard to see everthing , etc irrespective of what resolves or rejects 

