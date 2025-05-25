Adding content dynamically to a div  or div ul li - imp  
 not using of # or . in getelementbyid or getelementsbyclassnames etc. dont use those symbols here, i got confused and stuck strangely  , but if we are using queryselector /queryselectorall then we  need to use # or . 

i used -->     const todoList = document.getElementsByClassName('todo-list-container');  this returns an array of HTML collection  , so todoList[0] is the first element of the array. we can append to this  
Better option to get hold of element is using queryselector , do not simply use getelementsbyclassnames.


EVENT DELEGATION : 
in li -> we have checkbox, span, delete button. When i click on delete button , event delegation happens, to identify the parent of clicked checkbox or delete button. 

When clicked on delete button , identify its parent, ie li and remove that li from dom  

Event Delegation: For handling clicks on dynamically added "Delete" buttons and "Complete" checkboxes, attaching a single event listener to the parent taskList is much more efficient than adding listeners to every new item. We then check event.target to see what was actually clicked.


-----///------

1.adding multiple classes to same element use case -->  .todo-item.completed etc 
2.event delegation  
3.how i used event listener on parent ul once, and not for all li 
4.how when childeren on li , the span checkbox and button are under some event like click or change, then we can use event delegation and not use event listener on each child element, and make change on parent ie li element. VERY IMPORTANT POINT 
5.using focus, blur, keydown, keyup, keypress , strike through using css learnt  