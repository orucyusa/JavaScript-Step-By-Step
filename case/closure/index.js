let numbers = [];
let rNumbers = [];
// closure 
var stackButton=document.getElementById('stackButton1');
var stackButton2=document.getElementById('stackButton2');
var stackButton3=document.getElementById('stackButton3');
var stackButton4=document.getElementById('stackButton4');
let items=[];   
function stack(){
    return{
        push:(input)=>{
            if(items.length<5){
                var length=items.length+1;
                document.getElementById(length.toString()).value=input;
                return items.push(input); 
            }else{
                window.alert("array taştı");
            }
        },
        pop:()=>{
            if(items.length==0){
                window.alert("eleman kalmadi");
            }else{
                document.getElementById(items.length.toString()).value="";
                return items.pop();
            }
        },
        swap:()=>{
            var leng=items.length;
        var temp = document.getElementById(items[leng-1].toString()).value;
        document.getElementById(items[leng-1].toString()).value=document.getElementById(items[leng-2].toString()).value;
        document.getElementById(items[leng-2].toString()).value=temp;
        [items[leng - 1], items[leng - 2]] = [items[leng - 2], items[leng - 1]];
        },
        topMostValue:()=>{
            var max=0;
            console.log(max = Math.max.apply(null, items));
                window.alert("En büyük değer : " + max);
            return max;
        }
    }
}
stackButton.addEventListener('click',function(){
    let inputValue=document.getElementById('inputValue').value;
    stack().push(inputValue);
    console.log(items);
});
stackButton2.addEventListener('click',function(){
    stack().pop();
    console.log(items);
});
stackButton3.addEventListener('click',function(){
    stack().swap();
    console.log(items);
});
stackButton4.addEventListener('click',function(){
    stack().topMostValue();
});
    



// const islemler = {
//     push: function (data) {
//         if (numbers.length < 5) {
//             numbers.unshift(data);
//         }
//         else {
//             window.alert("hata array taştı");
//         }
//     },
//     pop: function () {
//         if (numbers.length == 0) {
//             window.alert("daha fazla silemezsin. Arrayde eleman kalmadı.");
//         }
//         numbers.shift();
//     },
//     swap: function () {
//         var leng = numbers.length;
//         if (leng > 1) {
//             [numbers[leng - 1], numbers[leng - 2]] = [numbers[leng - 2], numbers[leng - 1]];
//             window.alert("Değişen elemanlar : " + numbers[leng - 1] + " ve " + numbers[leng - 2]);
//         }
//         else {
//             window.alert("Eleman eklemelisiniz...");
//         }
//     },
//     topMostValue: function () {
//         var max;
//         if (numbers.length < 1) {
//             window.alert("Hiç Eleman yok !");
//         } else {
//             console.log(max = Math.max.apply(null, numbers));
//             window.alert("En büyük değer : " + max);
//         }
//     }
// }
// function op() {
//     let selected = document.querySelector("input[name='operation']:checked").value
//     if (selected == "push") {
//         islemler.push(document.getElementById("inp").value);
//     }
//     else if (selected == "pop") {
//         islemler.pop();
//     }
//     else if (selected == "swap") {
//         islemler.swap();
//     } else if (selected == "tmv") {
//         islemler.topMostValue();
//     }
//     getD();
// }
// let findSelected = () => {
//     let selected = document.querySelector("input[name='operation']:checked").value;
//     console.log(selected);
// }

// let radioBtns = document.querySelectorAll("input[name='operation']");
// radioBtns.forEach(radioBtns => {
//     radioBtns.addEventListener("change", findSelected);
// });

// function getD() {
//     clearData();
//     var i = 0;
//     for (i = 0; i < numbers.length; i++) {
//         document.getElementsByClassName("item")[i].innerHTML = numbers[i];
//     }
// }
// function clearData() {
//     var i = 0;
//     for (i = 0; i < 5; i++) {
//         document.getElementsByClassName("item")[i].innerHTML = '';

//     }
// }





