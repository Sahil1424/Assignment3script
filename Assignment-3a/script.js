document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const newTodoInput = document.getElementById("newTodo");
    const todosContainer = document.getElementById("todos");
  
    addButton.addEventListener("click", function() {
      const todoText = newTodoInput.value.trim();
      if (todoText !== "") {
        const todoItem = createTodoItem(todoText);
        todosContainer.appendChild(todoItem);
        newTodoInput.value = "";
      }
    });
  
    function createTodoItem(text) {
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function() {
        todoText.classList.toggle("completed", checkbox.checked);
        if (checkbox.checked) {
          todosContainer.appendChild(todoItem);
        } else {
          todosContainer.insertBefore(todoItem, todosContainer.firstChild);
        }
      });
  
      const todoText = document.createElement("span");
      todoText.textContent = text;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        todosContainer.removeChild(todoItem);
      });
  
      todoItem.appendChild(checkbox);
      todoItem.appendChild(todoText);
      todoItem.appendChild(deleteButton);
  
      return todoItem;
    }
  });
  