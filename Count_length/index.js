//load js once html is available
//get hold of elements
//dynamically update count of characters

document.addEventListener('DOMContentLoaded', () => {
    const string = document.getElementById('text-length');
    const stringCountDisplay = document.getElementById('length-display');

    const updateCount = (e) => {
        const wordCount = e.target.value.length;
        stringCountDisplay.innerText = wordCount;
        if(wordCount >=80){
            stringCountDisplay.classList.add('warning');
        }else {
            stringCountDisplay.classList.remove('warning');
        }
    }

    string.addEventListener('input', updateCount);
    updateCount();  //this is very important to keep in mind , on page load this sets count value to 0 first.
})