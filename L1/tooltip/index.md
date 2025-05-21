Things learnt in this project :

a. setAttribute, getAttribute, hasAttribute,
b. mouseover, mousemove, mouseout
c. data-hint attribute
d. append, appendChild important

Why data-* attribute is important ?

In our example we use data-hint attribute, this shows the string we assign to it as tooltip when we hover over any text.

///--///
explanation imp :

const moveTooltip = (e)=>{
                tooltip.style.left = e.pageX + 10 + 'px';
                tooltip.style.top = e.pageY + 10 + 'px';
                //explanation to this code is in index.txt
            }

1. - gets the horizontal mouse cursor position relative to the entire document `e.pageX`
    - gets the vertical mouse cursor position relative to the entire document `e.pageY`
    - `+ 10` adds a 10-pixel offset to both positions to prevent the tooltip from appearing directly under the cursor
    - adds the CSS unit to make it a valid CSS value `+ 'px'`

2. The function updates the tooltip's position by setting its CSS and properties to follow the mouse cursor with a small offset. `left``top`
//--//

