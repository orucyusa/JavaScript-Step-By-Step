function Storage(){

};

Storage.prototype.addFilmToStorage=function(newFilm){
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

Storage.prototype.getFilmsFromStorage=function(){
    let films;
    if(localStorage.getItem("films")===null){
        films=[];
    }
    else{
        films=JSON.parse(localStorage.getItem("films")); //array olarak lamış olduk.
    }
    return films;
}
Storage.prototype.deleteFilmFromStorage=function(filmTilte){
    let films=this.getFilmsFromStorage();

    films.forEach(function(film,index){
            if(film.title==filmTilte){
                films.splice(index,1);
            }
    });
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.clearAllFilmsFromStorage=function(){
    localStorage.removeItem("films");
    
}