"use strict";
//För kartor 
var map = L.map("map").setView([
    51.505,
    -0.09
], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' //Jag bhöver kanske få in api:n här...? 
}).addTo(map);
//API fron nominatim
let mapURL = "https://nominatim.openstreetmap.org/search?q=NaN" /*Hämta genom input till textfältet som triggas när man söker.
men om man söker på något vanligt kanske det kommer fler resultat? Behöver jag alternativ då? 
Ska den liveuppdateras?*/ ;

//# sourceMappingURL=map.a1438cb9.js.map
