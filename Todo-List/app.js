const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { // tüm event listenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}
function clearAllTodos() {
    if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
        // arayüzden todoları temizleme
        // todoList.innerHTML=""; //Yavaş
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }
}
function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            //bulamadı
            listItem.setAttribute("style", "display : none !important");
        } else {
            listItem.setAttribute("style", "display : block ");
        }
    })
}
function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Başarıyla silindi");
    }
}
function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    console.log(todos);
    todos.forEach(function (todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1) //Arrayden değeri silme.
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}
function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}
function addTodo(e) {
    const newTodo = todoInput.value.trim();
    let todos = getTodosFromStorage();
    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo girin...");
    }
    else if (controller(newTodo)) {
        showAlert("danger","bu todo zaten var");
    }
    else if (newTodo != "") {
        addTodoToStorage(newTodo);
        addTodoToUI(newTodo);
        showAlert("success", "Başarılı");
    }
    e.preventDefault();
    todoInput.value = "";
}
function controller(todo) {
    var tf = false;
    const liste = document.querySelectorAll(".list-group-item");
    liste.forEach(function (eleman) {
        if (eleman.textContent == todo) {
            tf = true;
        }
    });
    return tf;
}
function getTodosFromStorage() { //Storageden Todoları Alma
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}
function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    //setTimeout

    setTimeout(function () {
        alert.remove();
    }, 2000);
}
function addTodoToUI(newTodo) { //String değerini list item olarak UI'ya ekleyecek.

    //List Item oluşturma 
    const listItem = document.createElement("li");
    //Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    //Text Node ekleme 
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //Todo List'e List Item'ı ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";
}