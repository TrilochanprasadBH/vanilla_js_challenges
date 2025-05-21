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

        // this is important, only when mouse is over modaloverlay it closes , outside it doesnt
        if(e.target === modalOverlay){
            modalOverlay.classList.add('hidden');
        }
    })
})