const input = document.querySelector("#form-input");
const submit = document.querySelector("#submit-btn");
const form = document.querySelector("#todo-form");
const tasksDiv = document.querySelector("#task-list")
const taskArray = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputValue = input.value.trim();
  
    if(inputValue === '') return;

    const newTask = { task: inputValue, completed: false };
    taskArray.push(newTask);


   console.log(taskArray);

    const taskList = document.querySelector('#tasks');
    const li = document.createElement('li');

    li.innerText = inputValue

    const checkBox = document.createElement('i');
    checkBox.id = "checkbox";
    checkBox.className = "fa-regular fa-square-check";

    const removeIcon = document.createElement('i');
    removeIcon.id = "remove";
    removeIcon.className = "fa-solid fa-xmark";
    
 removeIcon.addEventListener( 'click', function() {
   const taskIndex = taskArray.findIndex(task => task.task === inputValue);
   if (taskIndex > -1) {
   taskArray.splice(taskIndex, 1);
    taskList.removeChild(li);
}
 })

 checkBox.addEventListener( 'click', function() {
    li.classList.toggle('strike-through');
    newTask.completed = !newTask.completed;
 })

    li.appendChild(checkBox);
    li.appendChild(removeIcon);
   taskList.appendChild(li);
   input.value = '';
})

//<i class="fa-regular fa-square-check"></i>

    // const newTask = document.createElement('div');

    // newTask.classList.add('task');

    // const taskLi = document.createElement('li');
    // taskLi.textContent = inputValue

    // newTask.appendChild(taskLi)

    // tasksDiv.appendChild(newTask)




