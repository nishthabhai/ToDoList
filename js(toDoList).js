// variables
const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('#task-container');
const inputTask = document.querySelector('#input-task');

// event listeners for add task
addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="uil uil-check"></i>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="uil uil-trash-alt"></i>';
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if (inputTask.value === "")
        alert('Please, enter a task.');
    else
        taskContainer.appendChild(task);
    
    inputTask.value = "";

    checkBtn.addEventListener('click', function(){
        checkBtn.parentElement.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener('click', function(e){
        let target = e.target;
        target.parentElement.remove();
    });
});