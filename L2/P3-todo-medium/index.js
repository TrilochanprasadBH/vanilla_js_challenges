document.addEventListener('DOMContentLoaded', function () {
    const newTaskInput = document.getElementById('newTaskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = newTaskInput.value.trim(); // Get text and remove whitespace

        if (taskText === '') {
            alert('Please enter a task!'); // Simple validation
            return;
        }

        // Create new list item (li)
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');

        // Create span for task text
        const textSpan = document.createElement('span');
        textSpan.classList.add('task-text');
        textSpan.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        // Append elements to the list item
        listItem.appendChild(checkbox);
        listItem.appendChild(textSpan);
        listItem.appendChild(deleteBtn);

        // Append list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        newTaskInput.value = '';
        newTaskInput.focus(); // Put focus back to input for easy next entry
    }

    // Event listener for the "Add Task" button
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for pressing "Enter" in the input field
    newTaskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Event listener for task list (for completing and deleting tasks - Event Delegation)
    taskList.addEventListener('click', function (event) {
        const targetElement = event.target;

        // Check if a delete button was clicked
        if (targetElement.classList.contains('delete-btn')) {
            const listItem = targetElement.closest('.task-item'); // Find parent li
            if (listItem) {
                taskList.removeChild(listItem);
            }
        }
    });

    taskList.addEventListener('change', function(event) {
        const targetElement = event.target;
        // Check if a checkbox was changed
        if (targetElement.type === 'checkbox' && targetElement.classList.contains('task-checkbox')) {
            const listItem = targetElement.closest('.task-item'); // Find parent li
            if (listItem) {
                listItem.classList.toggle('completed');
            }
        }
    });
});