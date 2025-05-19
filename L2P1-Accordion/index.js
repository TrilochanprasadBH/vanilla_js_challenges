document.addEventListener('DOMContentLoaded', () => {
    //get hold of all accordion headers
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        //add event listener to all accordion headers, forEach one of them.
        accordionHeaders.forEach(header => {
            //each header is a different one, so dynamically catch hold of header-1,2,3,etc like this
            header.addEventListener('click', ()=>{
                //this here refers to the clicked header, among header that we are mapping.
                const ContentPanelId = this.getAttribute('aria-controls');
                const contentPanel = document.getElementById(ContentPanelId);


            })
        })
})