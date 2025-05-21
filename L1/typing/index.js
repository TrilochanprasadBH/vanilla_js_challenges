document.addEventListener('DOMContentLoaded', ()=>{
    const inputText = document.getElementById('textInput');
    const displayText = document.getElementById('textDisplay');

        const defaultTextDisplay = 'Type something here';

    if(!inputText || !displayText ){
        console.log('some element is missing');
        return;  //dont forget using return at all, in cases like this.
    }


    inputText.addEventListener('input', (event)=> {

        if(displayText.innerText === ''){
            displayText.innerText = defaultTextDisplay;
        }else{
            displayText.innerText = event.target.value;
        }
    })

})