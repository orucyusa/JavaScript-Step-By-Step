const name="Yüşa Oruç";
const department="Bilişim";
const salary=4000;

//const a="İsim: "+ name + "\n" + "Depertmant: "+ department + "\n" + salary;

//const a=`İsim:${name}\nDepertman:${department}\nMaaş:${salary}`; //6'da gelen ozellik

// const html= "<ul> "+
//             "<li>" + name +"</li>"+
//             "<li>" + department +"</li>"+
//             "<li>" + salary + "</li>" +
//             "</ul>";

function a(){
    return "Merhaba";
}
const html=`
        <ul>
            <li>${name}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10/4}</li>
            <li>${a()}</li>
        </ul>
`;

document.body.innerHTML=html;