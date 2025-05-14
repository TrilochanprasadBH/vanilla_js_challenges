document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-modal');
    const closeBtn = document.getElementById('close-modal');
    const modalOverlay = document.getElementById('modal-overlay');

    openBtn.addEventListener('click', ()=>{
        modalOverlay.classList.remove('hidden');
    })

    closeBtn.addEventListener('click', ()=>{
        modalOverlay.classList.add('hidden');
    })

    modalOverlay.addEventListener('click', (e)=>{
        console.log(e.target);
        if(e.target === modalOverlay){
            modalOverlay.classList.add('hidden');
        }
    })
})