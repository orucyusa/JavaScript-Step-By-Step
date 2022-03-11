// // function getData(data){//Promise Objesi döndüren fonskiyon
// //     return new Promise(function(resolve,reject){
// //         setTimeout(function(){
// //             resolve("Olumlu sonuç");
// //         },5000);
// //     });

// // }
// // getData("Merhaba").then(function(response){
// //     console.log(response); //Olumlu sonuç
// // });

// // getData("Merhaba").catch(function(err){
// //     console.log(err); //olumsuz sonuç rejecte de ne yazarsa o döner.
// // })
// function getData(data){//Promise Objesi döndüren fonskiyon
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(typeof data ==="string"){
//                 //olumlu
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("Lütfen String bir değer girin."));
//             }
//         },5000);
//     });

// }

// // getData("Merhaba").then(function(response){
// //     console.log("Gelen Değer "+ response);
// // }).catch(function(err){
// //     console.error(err);
// // });



// getData("Merhaba")
// .then(response => console.log("Gelen Değer "+ response))
// .catch(err=>console.error(err));

function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(typeof number==="number"){
                resolve(number+2);
            }
            else{
                reject(new Error("Lütfen bir sayı girin."));
            }
        },3000);
    });
}
addTwo(10)
.then(response => {
    console.log(response);
    return response +2 ;
}).then(response2 => console.log(response2))
.catch(err=>console.log(err));

//1 tane catch - birden çok then- Promise Chain