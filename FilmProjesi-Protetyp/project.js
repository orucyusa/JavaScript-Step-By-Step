const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");
// UI Objesini başlatma
const ui = new UI();

//Storage Objesi Üret
const storage = new Storage();

//Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}
function addFilm(e) {
    e.preventDefault();

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        //hata
        ui.displayMessages("Tüm alanları doldurun...", "danger");
    }
    else {
        // yeni film
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm); //Storage film ekleme
        ui.displayMessages("FFilm başarıyla Eklendi...", "success");
    }
    ui.clearInputs(titleElement, directorElement, urlElement);



}
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages("Silme işlemi başarılı...", "success");
    }



}
function clearAllFilms() {
    if (confirm("Emin misin?")) {

        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}