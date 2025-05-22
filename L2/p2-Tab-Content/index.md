LOT OF LEARNING

1. accessibility / aria and navigation :

role
aria label - this overrides the text in tag , dont use on buttons etc
aria controls and
aria-labelledby   [see how button and corresponding content is related through id, and these 2 for ease of connection]
aria-selected (true or false)  
tabindex - used for keyboard navigation : tabindex =0 for allowing navigation , tabindex=-1 for not, for more
clarity read.
active class use in visual ux improvement ,
is-hidden and display:none
.focus()  - better ux
writing multiple classes like this in class="tab-button active"  is possible , oh yes  !

2. JS usage and attributes

usage of Array.from() and see how [role="tabpanel"] is used ,
we generally remember only tag # or class . etc so.

example:
const allTabs = Array.from(document.querySelectorAll('.tab-button')); // Convert NodeList to Array
const allPanels = Array.from(document.querySelectorAll('[role="tabpanel"]')); // Get all panels

setAttribute, getAttribute , hasAttribute etc
classlist.add/.remove/.contains/.toggle
usage of .contains() / .find() / .indexOf() on arrays

IMP :
let currentFocusedTab = document.activeElement;
--> this is built in way of DOM object to know which element is currently focused.

currentFocusedTab = allTabs.find(tab => tab.getAttribute('tabindex') === '0');
--> see how .find() is used and also see that assignment of tabindex in above line !!

whenever buttons are used like ArrowRight, ArrowLeft , etc we need to use preventDefault() to stop their default
behaviour like scrolling in this case.

allTabs[newTabIndex].click() -> see explanation in js file , this is amazing usage 