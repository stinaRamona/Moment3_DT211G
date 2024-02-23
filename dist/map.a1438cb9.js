"use strict";
//För kartor 
var map = L.map("map").setView([
    58.41080700000001,
    15.621372699999938
], 13); //Latitud och longitud ska in här för att ändra plats! 
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' //Jag bhöver kanske få in api:n här...? 
}).addTo(map);
//API fron nominatim
let mapURL = "https://nominatim.openstreetmap.org/search?q=17+Strada+Pictor+Alexandru+Romano%2C+Bukarest&format=geojson" // Latitud och longitud härifrån till dit upp!!!!!!!!!!  
;
window.onload = getMapInfo();
//För att få knappen att skicka sökvärdet
function btnFunction() {
    let searchBtnEl = document.getElementById("searchBtn");
    searchBtnEl.addEventListener("click", inputValue);
}
btnFunction();
//För att få in värdet i api:n 
function inputValue() {
    let searchBarValueEl = document.getElementById("searchBar").value;
    let mapURL = `https://nominatim.openstreetmap.org/search?q=${searchBarValueEl}&format=geojson`;
    getMapInfo(mapURL);
}
//hämtar api med sökvärdet 
async function getMapInfo(mapURL) {
    try {
        let response = await fetch(mapURL);
        let mapInfo = await response.json();
        console.table(mapInfo.features);
    } catch  {
        console.log("N\xe5got gick galet...");
    }
} // Värdet från Sökbaren ska vara i mitten av api:t. Longituden och latituden av det resultatet ska upp till var map!! 
 /*men om man söker på något vanligt kanske det kommer fler resultat? Behöver jag alternativ då? 
Ska den liveuppdateras?*/  //'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
 //51.505, -0.09

//# sourceMappingURL=map.a1438cb9.js.map
