"use strict";
//Hämtar element från DOM
let searchBtnEl = document.getElementById("searchBtn");
let mapContainer = document.getElementById("map");
let map;
//Eventlyssnare för knappen
searchBtnEl.addEventListener("click", inputValue);
//Kallar på en karta vid inladdning av sidan 
window.onload = createMap(59.3293, 18.0686);
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
        let lat = mapInfo.features[0].geometry.coordinates[1];
        let long = mapInfo.features[0].geometry.coordinates[0];
        createMap(lat, long);
    } catch  {
        console.log("N\xe5got gick galet...");
    }
}
// Skapar eller uppdaterar kartan med hjälp av latitud och longitud för sökningen
function createMap(lat, long) {
    if (map) // Flytta kartan till den nya platsen
    map.setView([
        lat,
        long
    ], 13);
    else {
        // Skapa kartan för första gången
        map = L.map(mapContainer).setView([
            lat,
            long
        ], 13);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    }
    // Lägg till markören på den nya platsen
    L.marker([
        lat,
        long
    ]).addTo(map);
}

//# sourceMappingURL=map.a1438cb9.js.map
