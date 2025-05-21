document.addEventListener("DOMContentLoaded", ()=>{
    const counterDisplay = document.getElementById("displayCount");
    const incrementButton = document.getElementById("incrementBtn");
    const decrementButton = document.getElementById("decrementBtn");
    const resetButton = document.getElementById("resetBtn");

    let currentCount = 0;

    function display(){
        counterDisplay.innerText = currentCount;
        decrementButton.disabled = currentCount === 0;
    }

    incrementButton.addEventListener("click", ()=>{
        currentCount++;
        display();
        console.log('inc',currentCount)
    })

    decrementButton.addEventListener("click", ()=>{
        // if(currentCount === 0){
        //     decrementButton.disabled = true;
        // }
        // if(currentCount !== 0){
        //     currentCount--;
        //     display();
        //     console.log('dec',currentCount);
        // }
        currentCount--;
        display();
        console.log('dec',currentCount);
    })

    resetButton.addEventListener("click", ()=>{
       if(currentCount === 0){
           alert('There is nothing to reset');
       }
        currentCount = 0;
        display();
        console.log('reset',currentCount);
    })

})