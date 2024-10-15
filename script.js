const input = document.querySelector("#form-input");
const submit = document.querySelector("#submit-btn");
const form = document.querySelector("#todo-form");
const tasksDiv = document.querySelector("#task-list")
let taskArray = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputValue = input.value.trim();
  
    if(inputValue === '') return;

    taskArray.push(inputValue);
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
    const i = taskArray.indexOf(inputValue)
    if(i > -1) {
    taskArray.splice(i, 1)
    taskList.removeChild(li);
}
 })

 checkBox.addEventListener( 'click', function() {
  
    li.classList.toggle('strike-through');

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




