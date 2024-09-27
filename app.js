function todoList(){
    var todo = document.getElementById("todo");
    var list = document.getElementById("list");

    list.innerHTML += `<li>${todo.value}</li>`;

    todo.value = "";
}

