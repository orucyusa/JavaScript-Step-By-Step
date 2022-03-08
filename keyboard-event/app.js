// Klavye eventleri 
const header = document.querySelector(".card-header");
const todoInput=document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent=e.target.value; //güncellenir sürekli...
    //console.log(e.target.value); //inputtaki basilan her degeri alır
}
//keypress
// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which); // ascii tablosunda ki degeri tıklanılan degerin.
//     // console.log("Naber");
//     console.log(e.key); //harfler ve sayilar sadece
// }
// document.addEventListener("keydown",run);

// function run(e){
//     // console.log(e.which); // ascii tablosunda ki degeri tıklanılan degerin.
//     // console.log("Naber");
//     console.log(e.key); // arrowup arrowDown capslok tab shift gösterir.
// }

// document.addEventListener("keyup",run);

// function run(e){
//     console.log(e.key); // keyleri bırakınca oluşur.
// }

//dobule click
//title.addEventListener("dbclick",run);

//mouse over
// title.addEventListener("mouseover",run); üstüne gelir gelmez olusur.

//mouse out 
//title.addEvnetListener ("mouseout",run); ustunden cikar.
