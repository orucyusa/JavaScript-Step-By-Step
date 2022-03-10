class Storage{
    static addFilmToStorage(newFilm){
        let films=this.getFilmsFromStorage();
     
        films.push(newFilm);
        /*
         [
             {title:"sadsad",director:"asdsad",url:"23232"},
             {title:"asdzx",director:"zxcxzc",url:"232442"}
         ]
        */
         localStorage.setItem("films",JSON.stringify(films));
     
     }
     
     static getFilmsFromStorage(){
         let films;
         if(localStorage.getItem("films")===null){
             films=[];
         }
         else{
             films=JSON.parse(localStorage.getItem("films")); //array olarak lamış olduk.
         }
         return films;
     }
     static deleteFilmFromStorage(filmTilte){
         let films=this.getFilmsFromStorage();
     
         films.forEach(function(film,index){
                 if(film.title==filmTilte){
                     films.splice(index,1);
                 }
         });
         localStorage.setItem("films",JSON.stringify(films));
     }
     static clearAllFilmsFromStorage(){
         localStorage.removeItem("films");
         
     }
}

