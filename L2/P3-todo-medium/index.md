Adding content dynamically to a div  or div ul li - imp  
 not using of # or . in getelementbyid or getelementsbyclassnames etc. dont use those symbols here, i got confused and stuck strangely  , but if we are using queryselector /queryselectorall then we  need to use # or . 

i used -->     const todoList = document.getElementsByClassName('todo-list-container');  this returns an array of HTML collection  , so todoList[0] is the first element of the array. we can append to this  
Better option to get hold of element is using queryselector , do not simply use getelementsbyclassnames  