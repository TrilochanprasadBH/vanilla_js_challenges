document.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelector('.tab-container'); // Get the tablist container
    const allTabs = Array.from(document.querySelectorAll('.tab-button')); // Convert NodeList to Array
    const allPanels = Array.from(document.querySelectorAll('[role="tabpanel"]')); // Get all panels

    //  MODIFIED CLICK HANDLING FOR ACTIVE STATE & ARIA
    allTabs.forEach((clickedTab) => {
        clickedTab.addEventListener('click', function () {
            // Deactivate all other tabs and hide their panels
            allTabs.forEach((otherTab) => {
                if (otherTab !== this) {
                    // ADDed: Remove active class from other tabs
                    otherTab.classList.remove('active');
                    // ADDED: Set aria-selected to false and tabindex to -1 for other tabss
                    otherTab.setAttribute('aria-selected', 'false');
                    otherTab.setAttribute('tabindex', '-1');

                    const otherTabContentId = otherTab.getAttribute('aria-controls');
                    const otherTabContent = document.getElementById(otherTabContentId);
                    if (otherTabContent) { // Check if content exists
                        otherTabContent.classList.add('is-hidden');
                    }
                }
            });

            // Activate the clicked tab
            // ADDED: Add active class to the clicked tab
            this.classList.add('active');
            // ADDED: Set aria-selected to true and tabindex to 0 for the clicked tab
            this.setAttribute('aria-selected', 'true');
            this.setAttribute('tabindex', '0');

            // Show the corresponding content panel
            const tabContentId = this.getAttribute('aria-controls');
            const tabContent = document.getElementById(tabContentId);
            if (tabContent) { // Check if content exists
                // No need for 'isTabContentCurrentlyNotActive' check if we always hide others first
                tabContent.classList.remove('is-hidden');
            }

            // ADDED: Set focus to the clicked tab for better keyboard UX
            this.focus();
        });
    });

    //  adding  KEYBOARD NAVIGATION
    tabContainer.addEventListener('keydown', (event) => {
        let currentFocusedTab = document.activeElement;
        // Ensure the currently focused element is one of our tabs
        if (!allTabs.includes(currentFocusedTab)) {
            // If not, try to find the currently selected tab (tabindex="0")
            currentFocusedTab = allTabs.find(tab => tab.getAttribute('tabindex') === '0');
            if (!currentFocusedTab) return; // Should not happen if one tab is always active
        }

        let currentTabIndex = allTabs.indexOf(currentFocusedTab);
        let newTabIndex = currentTabIndex;

        if (event.key === 'ArrowRight') {
            newTabIndex = (currentTabIndex + 1) % allTabs.length; // Wrap around
        } else if (event.key === 'ArrowLeft') {
            newTabIndex = (currentTabIndex - 1 + allTabs.length) % allTabs.length; // Wrap around
        } else if (event.key === 'Home') {
            newTabIndex = 0;
        } else if (event.key === 'End') {
            newTabIndex = allTabs.length - 1;
        } else {
            return; // Not a key we handle
        }

        event.preventDefault(); // Prevent default browser action (e.g., scrolling) wow  ok.

        // Instead of directly focusing, we "click" the tab to reuse the existing logic
        // for updating active states and panels. The click handler will also set focus.
        allTabs[newTabIndex].click();   //triggerin click event programatically -  THIS IS AMAZING

    });
});

//How allTabs[newTabIndex].click(); Works:   THIS IS AMAZING REUSES code SO ELEGANTLY :-
// allTabs[newTabIndex] gets a reference to the DOM element of the tab button that should become active based on the key pressed (e.g., if ArrowRight was pressed, newTabIndex points to the next tab).
// .click() is a built-in method on HTML elements that simulates a mouse click on that element.
// When you call .click() on a tab button, it triggers the click event listener that we already attached to it.
// This means the original click handler function (the "engine") runs, with this inside that function correctly set to allTabs[newTabIndex].
// So, all the necessary updates (visual, ARIA, content panel visibility, focus) happen automatically, just as if the user had physically clicked that tab.