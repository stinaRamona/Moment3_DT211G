//För att göra en responsiv hamburgermeny 
"use strict";
//läser in element 
let hamNavBtnEl = document.getElementById("openHamNav");
let hamNavCloseEl = document.getElementById("closeHamNav");
hamNavBtnEl.addEventListener("click", toggleMenu);
hamNavCloseEl.addEventListener("click", toggleMenu);
function toggleMenu() {
    let hamNavEl = document.getElementById("hamburgerNav");
    let style = window.getComputedStyle(hamNavEl);
    if (style.display === "none") hamNavEl.style.display = "block";
    else hamNavEl.style.display = "none";
}

//# sourceMappingURL=index.aa69868b.js.map
