document.addEventListener('DOMContentLoaded', () => {
    //get hold of all buttons/tabs
    const allTabs = document.querySelectorAll('.tab-button');
    allTabs.forEach(tab => {
        // console.log(tab);
        tab.addEventListener('click', function () {
            const tabContentId = this.getAttribute('aria-controls');
            const tabContent = document.getElementById(tabContentId);

            const isTabContentCurrentlyNotActive = tabContent.classList.contains('is-hidden');

            allTabs.forEach(otherTab => {
                if(otherTab !== tab){
                    const otherTabContentId = otherTab.getAttribute('aria-controls');
                    const otherTabContent = document.getElementById(otherTabContentId);
                    otherTabContent.classList.add('is-hidden');
                }

            })

            if(isTabContentCurrentlyNotActive){
                tabContent.classList.remove('is-hidden');
            }

        })
    })
})