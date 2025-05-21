document.addEventListener('DOMContentLoaded', () => {
        //get hold of all buttons/tabs
        const allTabs = document.querySelectorAll('.tab-button');
        allTabs.forEach(tab => {
            tab.addEventListener('click', function () {
                const tabContentId = this.getAttribute('aria-controls');
                const tabContent = document.getElementById(tabContentId);


            })
        })
})