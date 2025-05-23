document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-todo');
    const todoList = document.querySelector('.todo-list-container');
    console.log(todoList)
    const initialMessage = 'There are on todos!';

    const addTodo = () => {
        const value = input.value;
        // console.log(value);
        if (!value) {
            input.focus();
            return;
        }
        const p = document.createElement('p');
        p.innerText = value;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';
        delBtn.style.color = 'grey';
        todoList.appendChild(p);
        todoList.appendChild(checkbox);
        todoList.appendChild(delBtn);
        input.value = '';
        input.focus();
    }

    addBtn.addEventListener('click', addTodo);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    })

    const deleteTodo = () => {
        todoList.removeChild(p);
    }

    const checkTodo = (e) => {
        const isChecked = e.target.checked;
        if(isChecked){
            p.style.textDecoration = 'line-through';
        }else{
            p.style.textDecoration = 'none';
        }
    }

    todoList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
           deleteTodo()
        }
    })

    todoList.addEventListener('change', checkTodo);

})
