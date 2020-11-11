const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// methods
// REMOVE A TODO
const deleteTodo = (e) => {
    console.log("delete todo", e.target);
    const item = e.target;

    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.remove();
        // item.remove();
    }

    // checked item 
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('complted');
    }
};


//  ADD A TODO
const addTodo = (event) => {
  event.preventDefault();
  // console.log("kasjhd");

  //  create TODO DIVs
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //  create TODO DIVs
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);

  // buttons
  const compltedButton = document.createElement("button");
  compltedButton.innerHTML = "<i class='fas fa-check'> </i>";

  compltedButton.classList.add("complete-btn");
  todoDiv.appendChild(compltedButton);

  // delete
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash'> </i>";

  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  // append to li
  todoList.appendChild(todoDiv);

  // cleartextbox
  todoInput.value = "";
};

// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
