// async function test (data){
//     //Promise reutrn new Promise döneceğini söylüyor. Aşağıda ki işlemi yapıyor.
//     // return new Promise((resolve,rejecet)=>{
//     //     resolve(data);
//     // });
//     //return data; //asil yazilan.
//     let promise=new Promise((resolve,rejecet)=>{
//         setTimeout(()=>{
//             resolve("Bu bi değerdir.")
//         },5000);
//     });

//     let response=await promise ; // 5 saniye bekleyecek. Await sadece async olan fonksiyonlarda kullanılabilir.
    
//     return response;
// }
// test("Merhaba").then(response=>console.log(response));

// async function testData(data){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(typeof data ==="string"){
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         },5000);
//     });
//     const response = await promise;

//     return response;
// }
// testData("thriller") //string yollamazsak hata dönecek 
// .then(data=>console.log(data))
// .catch(err=> console.log(err));


async function getCurrency(url){
    const response = await fetch(url); // response Object

    const data = await response.json(); // Json object

    return data;
}
getCurrency("https://api.exchangeratesapi.io/latest")
.then(ahmet=>console.log(ahmet))
.catch(error=>console.log(error));