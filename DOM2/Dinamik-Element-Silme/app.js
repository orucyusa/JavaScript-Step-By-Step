//Dinamik Element Sİlme

const todoList=document.querySelector("ul.list-group");
const todos=document.querySelectorAll("li.list-group-item");

//Remove Metodu
// todos[1].remove();

//Remove Child 

// todoList.removeChild(todoList.lastElementChild); //son childi siler
// todoList.removeChild(todos[3]); //sonuncuyu siler.

//REPLACE

const cardbody=document.querySelectorAll(".card-body")[1];

const newElement=document.createElement("h3");

newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="Yeni Todolar";

//eski element
const oldElement=document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement); 