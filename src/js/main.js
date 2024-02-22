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

const programChartEl = document.getElementById("programChart"); 

const url= "https://studenter.miun.se/~mallar/dt211g/"; 

window.onload = getCourses();

window.onload = getPrograms(); 

window.onload = createCoursechart(); 

window.onload= createProgramchart(); 

//För att få fram de populäraste kurserna 
async function getCourses(){
    try {
        let response = await fetch(url); 

        let courses = await response.json(); 

        //sorterar så mest sökta kommer först
        let mostPop = courses.sort((a,b) => b.applicantsTotal - a.applicantsTotal);
        
        //filtrerar ut så det bara är kurser
        let onlyCourses = mostPop.filter(data => data.type == "Kurs");  
 
        // Loopar för att få ut de 6 mest populära 
        let courseArr = []; 

        for(let i = 0; i < 6; i++) {
            courseArr.push(onlyCourses[i]);
             
        } 

        createCoursechart(courseArr); 
        
    } catch {
        console.log("Något gick fel..."); 
    }
} 

//Skapa diagramen 
function createCoursechart(courseArr) {
    new Chart(coursesChartEL, {
        type: 'bar', 
        data: {
            labels: courseArr.map(row => row.name), 
            datasets: [{
                label: '# of applicants',
                data: courseArr.map(row => row.applicantsTotal), 
                borderWidth: 1
            }]
        },
    }); 
    }


//För att få fram de populäsraste programmen
async function getPrograms(){
    try {
        let response = await fetch(url); 

        let programs = await response.json(); 

        //sorterar så mest sökta kommer först
        let mostPop = programs.sort((a,b) => b.applicantsTotal - a.applicantsTotal);
        
        //filtrerar ut så det bara är program
        let onlyPrograms = mostPop.filter(data => data.type == "Program");  

         // Loopar för att få ut de 6 mest populära 
         let programArr = []; 

         for(let i = 0; i < 6; i++) {
             programArr.push(onlyPrograms[i]);
              
         } 
 
        createProgramchart(programArr); 

    } catch {
        console.log("Något gick fel..."); 
    }
}

//Skapa diagramen 
function createProgramchart(programArr) {
    new Chart(programChartEl, {
        type: 'pie', 
        data: {
            labels: programArr.map(row => row.name), 
            datasets: [{
                label: '# of applicants',
                data: programArr.map(row => row.applicantsTotal), 
                borderWidth: 1
            }]
        },
    }); 
    }
