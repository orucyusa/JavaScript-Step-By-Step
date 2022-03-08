document.title="asfsdf";


document.getElementById('myButton1').onclick=function(){
    document.getElementById('result').innerHTML="Ben DOM ile değiştirilmiş paragrafın metin çocuğuyum. Bir Child'ım. Buttona tıkladın ki değiştim.";
    window.alert("class name: " + document.getElementsByTagName("DIV")[0].className);
};
document.getElementById('myButton2').onclick=function(){
        document.getElementById('result').style.display="block";
};
document.getElementById('myButton3').onclick=function(){
    document.getElementById('result').style.display="none";
};
document.getElementById('kutu_kirmizi').onclick=function(){
    document.getElementById('kutu_kirmizi').style.backgroundColor="black";
};
document.getElementById('kutu_sari').onclick=function(){
    document.getElementById('kutu_sari').style.backgroundColor="black";
};
document.getElementById('kutu_mavi').onclick=function(){
    document.getElementById('kutu_mavi').style.backgroundColor="black";
};
