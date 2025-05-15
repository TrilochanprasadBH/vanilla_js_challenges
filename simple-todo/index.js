document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('input-field');
    const addBtn = document.getElementById('add-button');
    const todoListContainer = document.getElementById('todo-list');

    const addTodo = () => {

        const todo = inputValue.value.trim();

        if (!inputValue.value) {
            inputValue.focus();
            return;
        }
        const li = document.createElement('li');
        li.innerText = todo;
        todoListContainer.appendChild(li);
        inputValue.value = '';
        inputValue.focus();
    }

    addBtn.addEventListener('click', addTodo);

    inputValue.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        } else if (e.key === 'Escape') {
            inputValue.value = '';
        }
    })


})