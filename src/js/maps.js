"use strict";      


//För att få knappen att skicka sökvärdet
function btnFunction() { 
    let searchBtnEl = document.getElementById("searchBtn"); 

    searchBtnEl.addEventListener('click', inputValue); 
} 

btnFunction(); 

//För att få in värdet i api:n 
function inputValue() {
    let searchBarValueEl = document.getElementById("searchBar").value; 

    let mapURL = `https://nominatim.openstreetmap.org/search?q=${searchBarValueEl}&format=geojson` 

    getMapInfo(mapURL) 

} 

//hämtar api med sökvärdet 
async function getMapInfo(mapURL){
    try {
        let response = await fetch(mapURL); 

        let mapInfo = await response.json(); 

        let lat = mapInfo.features[0].geometry.coordinates[1]; 
        let long = mapInfo.features[0].geometry.coordinates[0]; 

        createMap(lat, long) 


    } catch {
        console.log("Något gick galet...")
    }
} 

//Skapar kartan med hjälp av latitud och longitud för sökningen
function createMap(lat, long) { 

    if (lat == null && long == null){
        var map = L.map('map').setView([58.41086, 15.62157], 13);  
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

    } else {
        var map = L.map('map').setView([lat, long], 13);  
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map); 
} 
}

createMap(); //OM KARTAN KALLAS PÅ FÖRST KAN DEN INTE UPPDATERAS SEN. BEHÖVER KUNNA SÖKA FÖERA GÅNGER. 