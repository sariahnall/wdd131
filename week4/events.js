let tasks = [];

function renderTasks(tasks) {
  // get the list element from the DOM
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
}

function newTask() {
  // get the list element
  const listElement = document.querySelector("#todoList");
  // get the value entered into the #todo input
  const taskInput = document.querySelector("#todo");

  const task = taskInput.value

  // render out the list
  listElement.innerHTML += `
    <li> ${task}
    <div>
    <span data-function="delete">❎</span>
    <span data-function="complete">✅</span>
    </div>
    </li>`;
}

function manageTasks(e) {
  // did they click the delete or complete icon?
  const parent = e.target.closest("li");
  if (e.target.getAttribute('data-function') === "delete") {
  parent.remove();
  }
  if (e.target.getAttribute('data-function') === "complete") {
  parent.classList.toggle('strike');
  }
}

function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );

  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
  // In this case we need to find the index of the task so we can modify it.
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.childNodes[0].innerText
  );
  // once we have the index we can modify the complete field.
  // tasks[taskIndex].completed ? false : true is a ternary expression.
  // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
  tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
  // toggle adds a class if it is not there, removes it if it is.
  taskElement.classList.toggle("strike");
  console.log(tasks);
}


// Add your event listeners here
let btn = document.querySelector("#submitTask");
btn.addEventListener("click", newTask);

document.querySelector("#todoList").addEventListener("click", manageTasks)
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.