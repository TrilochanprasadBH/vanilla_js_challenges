document.addEventListener('DOMContentLoaded', () => {
    //adding event listener to entire body and then making tooltip work only on class i need
    document.body.addEventListener('mouseover', (e)=>{
        const target = e.target;
        console.log(target); //target here is our p tag with class hinted
        if(target.classList.contains('hinted')){
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerText = target.getAttribute('data-hint');
            document.body.appendChild(tooltip);

            //position tooltip
            const moveTooltip = (e)=>{
                tooltip.style.left = e.pageX + 10 + 'px';
                tooltip.style.top = e.pageY + 10 + 'px';
                //explanation to this code is in index.txt
            }

            target.addEventListener('mousemove', moveTooltip);

            target.addEventListener('mouseout',    removeTooltip=()=>{
                tooltip.remove(); //removes element from dom
                target.removeEventListener('mousemove', moveTooltip);
                target.removeEventListener('mouseout',removeTooltip);
            })
        }

    })
})