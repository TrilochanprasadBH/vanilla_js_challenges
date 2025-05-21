document.addEventListener('DOMContentLoaded', ()=>{
    const toggle_text = document.getElementById('secret');
    const btn = document.getElementById('toggle-visibility');


    if(!toggle_text){
        console.log('element eith id:secret not found');
        return;
    }

    if(!btn){
        console.log('element eith id:toggle-visibility not found');
        return;
    }

    if(toggle_text.classList.contains('is-hidden')){
        btn.innerText = 'Show';
    }else{
        btn.innerText = 'Hide';
    }

    btn.addEventListener('click', ()=>{
        toggle_text.classList.toggle('is-hidden');  // hide or show
        if(toggle_text.classList.contains('is-hidden')){
            btn.innerText = 'Show';
        }else{
            btn.innerText = 'Hide';
        }
    })

})