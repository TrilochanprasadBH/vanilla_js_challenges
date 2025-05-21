document.addEventListener('DOMContentLoaded', () => {
    const colorElement = document.getElementById('bg-display');
    const btn = document.getElementById('change-color');
    function generateColorParent(element){
        const color = Math.floor(Math.random()*16777215).toString(16);
        element.style.backgroundColor = `#${color}`;
    }


    btn.addEventListener('click', ()=>{
        generateColorParent(colorElement);
    })

})