document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('todo-input');
    const addBtn = document.getElementById('todo-button');
    const showTodo = document.querySelector('.todo-list');

    const addTodo = () => {
        const todoValue = inputText.value.trim();

        if (!todoValue) {
            inputText.focus();
            return;
        }
        const li = document.createElement('li');
        li.classList.add('todo-item');

        const inputBox = document.createElement('input');
        inputBox.type = 'checkbox';
        inputBox.classList.add('checkbox');

        const span = document.createElement('span');
        span.innerText = todoValue;
        span.classList.add('task-text');

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');

        li.appendChild(inputBox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        showTodo.appendChild(li);
        inputText.value = '';
        inputText.focus();
    }

    addBtn.addEventListener('click', addTodo);
    inputText.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    })

    // check box and delete button events are necessary.  now structure is clear - <li><checkbox> <span> <delete></li> like this
    //so those 3 are children of li. any event on them , we will make change to parent li.
    //also observe how we are adding event listener to parent of li , on ul. we need not have event listener on all li , its bad idea.

    showTodo.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains('delete-btn')){
            target.parentElement.remove();
            // showTodo.removeChild(target.parentElement);
        }
    })

    showTodo.addEventListener('change', (e) => {
        const target = e.target;
        if( target.type === 'checkbox' && target.classList.contains('checkbox')){
            target.parentElement.classList.toggle('completed')
        }
    })


})