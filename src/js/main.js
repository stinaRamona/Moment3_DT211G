//För att göra en responsiv hamburgermeny 

"use strict"; 

//läser in element 

let hamNavBtnEl = document.getElementById("openHamNav"); 
let hamNavCloseEl = document.getElementById("closeHamNav")

hamNavBtnEl.addEventListener('click', toggleMenu); 
hamNavCloseEl.addEventListener('click', toggleMenu); 

function toggleMenu() {
    let hamNavEl = document.getElementById("hamburgerNav");

    let style = window.getComputedStyle(hamNavEl); 

    if (style.display === "none"){
        hamNavEl.style.display = "block"
    } else {
        hamNavEl.style.display = "none"
    }
} 

//För diagrammen TEST

const coursesChartEL = document.getElementById("coursesChart"); 

const url= "https://studenter.miun.se/~mallar/dt211g/"; 

window.onload = getPrograms; 

//För att få fram de populäraste kurserna 
async function getCourses(){
    try {
        let response = await fetch(url); 

        let courses = await response.json(); 

        //sorterar så mest sökta kommer först
        let mostPop = courses.sort((a,b) => b.applicantsTotal - a.applicantsTotal);
        
        //filtrerar ut så det bara är kurser
        let onlyCourses = mostPop.filter(data => data.type == "Kurs");  

        //console.table(onlyCourses)

    } catch {
        console.log("Något gick fel..."); 
    }
} 

//För att få fram de populäsraste programmen
async function getPrograms(){
    try {
        let response = await fetch(url); 

        let programs = await response.json(); 

        //sorterar så mest sökta kommer först
        let mostPop = programs.sort((a,b) => b.applicantsTotal - a.applicantsTotal);
        
        //filtrerar ut så det bara är kurser
        let onlyPrograms = mostPop.filter(data => data.type == "Program");  

        console.table(onlyPrograms)

    } catch {
        console.log("Något gick fel..."); 
    }
}

//Skapa diagramen 
new Chart(coursesChartEL, {
    type: 'bar', 
    data: {
        labels: ['Red', 'Blue', 'Green', 'Orange'], 
        datasets: [{
            label: '# of votes',
            data: [12, 24, 15, 13], 
            borderWidth: 1
        }]
    },
}); 