let value;

const firstName="Louis";
const lastName="Armstrong";

const langs="Java,Python,C++";

value=firstName + lastName;

value= firstName + " " + lastName;

value= "Yüşa Oruç ";

value+= "Oruç"; // value = value + "Oruç"

value=firstName.length;

value=firstName.concat(" ",lastName," ","Caz"); // firstName+ " " + ...

value=firstName.toLowerCase(); // harflerin hepsini kucultur

value=firstName.toUpperCase(); //harflerin hepsini buyultur

value=firstName[0]; // L
value=firstName[2]; // u
value=firstName[firstName.length - 1]; // en sonda ki elemani getirir.

//Index Of

value=firstName.indexOf("L"); //0
value=firstName.indexOf("o"); //1
value=firstName.indexOf("l"); //-1

value=firstName.charAt(0); //L
value=firstName.charAt(firstName.length-1); //s

//Split

value=langs.split(","); // Java, Python, C++

//Replace

value=langs.replace("Python","CSS"); //Java,CSS,C++

//Includes 
value=langs.includes("Java"); //True
value=langs.includes("adfds"); //False
