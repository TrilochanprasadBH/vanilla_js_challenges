document.addEventListener('DOMContentLoaded', () => {
    const inputValue = document.getElementById('input-field');
    const addBtn = document.getElementById('add-button');
    const todoListContainer = document.getElementById('todo-list');
    let todo = "";
    console.log(todoListContainer)

    inputValue.addEventListener('input', (e) => {
        todo = e.target.value;
    });

    const addTodo = () => {
        if(todo === ""){
            inputValue.focus();  //simple yet elegant thing man
            return;
        }
        const li = document.createElement('li');
        li.innerText = todo;
        todoListContainer.appendChild(li);
        todo = "";
        inputValue.value = "";   //this is nice learning
        inputValue.focus();
    }

    addBtn.addEventListener('click', addTodo);

})