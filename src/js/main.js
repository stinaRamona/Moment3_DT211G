//För att göra en responsiv hamburgermeny 

"use strict"; 

//läser in element 

let openButtonEL = document.getElementById("openHamNav") 
let closeButtonEl = document.getElementById("closeHamNav")

//händelsehanterare 
openButtonEL.addEventListener('click', toggleMenu)
closeButtonEl.addEventListener('click', toggleMenu)

//funktioner 
function toggleMenu (){
    //vill att side_nav ska börja synas vid tryck på knappen 
    let sideNavEl = document.getElementById("hamburgerNav")

    let style = window.getComputedStyle(sideNavEl)

    if(style.display === "none") {
        sideNavEl.style.display = "block"
    } else {
        sideNavEl.style.display = "none"
    }
    
}