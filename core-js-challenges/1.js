// 1. Write nested functions that log their execution order (`console.log('start A')`, etc.)

function outerFunction() {
  console.log("start A");

  function innerFunction() {
    console.log("start B");

    function innermostFunction() {
      console.log("start C");
      console.log("end C");
    }

    innermostFunction();
    console.log("end B");
  }

  innerFunction();
  console.log("end A");
}

outerFunction();
