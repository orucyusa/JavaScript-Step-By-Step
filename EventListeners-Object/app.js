const filterInput=document.getElementById("filter");
const todoForm=document.getElementById("todo-form");

todoForm.addEventListener("submit",sumbitForm);
function submitForm(e){
    console.log("Submit Eventi");

    e.preventDefault();
}

// filterInput.onfocus=function(){

// }
filterInput.addEventListener("focus",function(event){
    console.log(event);
    console.log("Naber");
})