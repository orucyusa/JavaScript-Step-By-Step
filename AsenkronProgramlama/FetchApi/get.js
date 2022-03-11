// class Request {
//     get(url) { //Get request
//         return new Promise((resolve, reject) => {
//             fetch(url)
//                 .then(response => response.json())
//                 .then(data => console.log(data))
//                 .catch(err => console.log(err));
//         })

//     }
//     post(url, data) {
//         return new Promise((resolve, rejecet) => {
//             fetch(url, {
//                 method: 'POST',
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8"
//                 }
//             })
//                 .then(response => response.json())
//                 .then(data => resolve(data))
//                 .catch(err => rejecet(err));
//         })

//     }
//     put(url, data) {
//         return new Promise((response, rejecet){

//             fetch(url, {
//                 method: 'PUT',
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8"
//                 }
//             })
//                 .then(response => response.json())
//                 .then(data => response.log(data))
//                 .catch(err => rejecet.log(err));
//         })
//     }
//     delete(url){
//         return new Promise((resolve,rejecet)=>{
//             fetch("https://jsonplaceholder.typicode.com/albums/1", {
//                 method: 'DELETE'
//             })
//                 .then(response => resolve("veri işlemi başarılı"))
//                 .catch(err=>rejecet(err));
        
//         })
//     }
// }
// const request = new Request();
// let albums;

// // request.get("https://jsonplaceholder.typicode.com/albums")
// // .then(albums =>{
// //     console.log(albums);
// // })
// // .catch(err => console.log(err));


// // request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thriller" })
// //     .then(newAlbum => console.log(newAlbum))
// //     .catch(err => console.log(err));

// // request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 10, title: "Tarkan Karma" })
// //     .then(albums=>console.log(albums))
// //     .catch(err=>console.log(err));

// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(message=> console.log(message))
// .catch(err=>console.log(err));