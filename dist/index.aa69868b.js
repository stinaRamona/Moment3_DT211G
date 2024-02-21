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
//För diagrammen TEST
const coursesChartEL = document.getElementById("coursesChart");
const url = "https://studenter.miun.se/~mallar/dt211g/";
window.onload = getCourses();
window.onload = createCoursechart();
//För att få fram de populäraste kurserna 
async function getCourses() {
    try {
        let response = await fetch(url);
        let courses = await response.json();
        //sorterar så mest sökta kommer först
        let mostPop = courses.sort((a, b)=>b.applicantsTotal - a.applicantsTotal);
        //filtrerar ut så det bara är kurser
        let onlyCourses = mostPop.filter((data)=>data.type == "Kurs");
        //let mostPopCourses = onlyCourses.filter(data => data < 6); 
        // måste kunna göras på ett enklare sätt... FOR LOOP!
        /*
        console.table(onlyCourses[Object.keys(onlyCourses)[0]]);

        console.table(onlyCourses[Object.keys(onlyCourses)[1]]);

        console.table(onlyCourses[Object.keys(onlyCourses)[2]]);

        console.table(onlyCourses[Object.keys(onlyCourses)[3]]);

        console.table(onlyCourses[Object.keys(onlyCourses)[4]]);

        console.table(onlyCourses[Object.keys(onlyCourses)[5]]);
        */ console.table(onlyCourses[0], [
            1
        ], [
            2
        ], [
            3
        ], [
            4
        ], [
            5
        ]) // fungerade inte heller
        ;
    } catch  {
        console.log("N\xe5got gick fel...");
    }
}
//För att få fram de populäsraste programmen
async function getPrograms() {
    try {
        let response = await fetch(url);
        let programs = await response.json();
        //sorterar så mest sökta kommer först
        let mostPop = programs.sort((a, b)=>b.applicantsTotal - a.applicantsTotal);
        //filtrerar ut så det bara är program
        let onlyPrograms = mostPop.filter((data)=>data.type == "Program");
        console.table(onlyPrograms);
    } catch  {
        console.log("N\xe5got gick fel...");
    }
}
//Skapa diagramen 
function createCoursechart() {
    new Chart(coursesChartEL, {
        type: "bar",
        data: {
            labels: [
                "Red",
                "Blue",
                "Green",
                "Orange"
            ],
            datasets: [
                {
                    label: "# of votes",
                    data: [
                        12,
                        24,
                        15,
                        13
                    ],
                    borderWidth: 1
                }
            ]
        }
    });
}

//# sourceMappingURL=index.aa69868b.js.map
