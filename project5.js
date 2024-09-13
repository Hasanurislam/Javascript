document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');


    addTodoBtn.addEventListener('click', addTodo);

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const task = todoInput.value.trim();
        if (task === "") {
            alert("Please enter a task.");
            return;
        }
        const li = document.createElement('li');

        
        const taskText = document.createElement('span');
        taskText.textContent = task;

        
        taskText.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

 
        deleteBtn.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(taskText);
        li.appendChild(deleteBtn);

       
        todoList.appendChild(li);

  
        todoInput.value = '';
    }
});
