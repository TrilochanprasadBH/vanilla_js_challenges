document.addEventListener('DOMContentLoaded',  () => {
    //get hold of all accordion headers
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        //add event listener to all accordion headers, forEach one of them.
        accordionHeaders.forEach(header => {
            //each header is a different one, so dynamically catch hold of header-1,2,3,etc like this
            header.addEventListener('click',  function (){
                //cant use arrow function here, because we need to use this.
                //this here refers to the clicked header, among header that we are mapping.
                const ContentPanelId = this.getAttribute('aria-controls');
                const contentPanel = document.getElementById(ContentPanelId);

                const isCurrentlyActive = this.classList.contains('active');

                accordionHeaders.forEach(otherHeader => {
                    otherHeader.classList.remove('active');
                    otherHeader.setAttribute('aria-expanded', 'false');
                    const otherContentPanelId = otherHeader.getAttribute('aria-controls');
                    const otherContentPanel = document.getElementById(otherContentPanelId);

                    if(otherContentPanel){
                        otherContentPanel.style.maxHeight = null;
                    }

                    const otherIcon = otherHeader.querySelector('.accordion-icon');
                    if(otherIcon){
                        otherIcon.textContent = '+';
                    }
                })

                if(isCurrentlyActive){
                    this.classList.remove('active');
                    this.setAttribute('aria-expanded', 'false');
                    contentPanel.style.maxHeight = null;
                    const icon = this.querySelector('.accordion-icon');
                    icon.textContent = '+';
                }else{
                    this.classList.add('active');
                    this.setAttribute('aria-expanded', 'true');
                    contentPanel.style.maxHeight = contentPanel.scrollHeight + 'px';
                    // const icon = this.querySelector('accordion-icon');
                    // icon.textContent = '-';
                }

            })
        })
})