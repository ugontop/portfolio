document.addEventListener("DOMContentLoaded", () => {
    const aboutBtn = document.getElementById("about-btn");
    const aboutOverlay = document.getElementById("aboutOverlay");
    const aboutCloseBtn = document.querySelector("#aboutOverlay .close-btn");

    const projectsBtn = document.getElementById("projects-btn");
    const projectsOverlay = document.getElementById("projectsOverlay");
    const projectsCloseBtn = document.querySelector("#projectsOverlay .close-btn");

    const editsBtn = document.getElementById("edits-btn");
    const editsOverlay = document.getElementById("editsOverlay");
    const editsCloseBtn = document.querySelector("#editsOverlay .close-btn");

    const gamesBtn = document.getElementById("games-btn");
    const gamesOverlay = document.getElementById("gamesOverlay");
    const gamesCloseBtn = document.querySelector("#gamesOverlay .close-btn");


    aboutBtn.addEventListener("click", () => {
        aboutOverlay.classList.add("active");
    });

    aboutCloseBtn.addEventListener("click", () => {
        aboutOverlay.classList.remove("active");
    });

    aboutOverlay.addEventListener("click", (e) => {
        if (e.target === aboutOverlay) {
            aboutOverlay.classList.remove("active");
        }
    });

    projectsBtn.addEventListener("click", () => {
        projectsOverlay.classList.add("active");
    });

    projectsCloseBtn.addEventListener("click", () => {
        projectsOverlay.classList.remove("active");
    });

    projectsOverlay.addEventListener("click", (e) => {
        if (e.target === projectsOverlay) {
            projectsOverlay.classList.remove("active");
        }
    });

    editsBtn.addEventListener("click", () => {
        editsOverlay.classList.add("active");
    });

    editsCloseBtn.addEventListener("click", () => {
        editsOverlay.classList.remove("active");
    });

    editsOverlay.addEventListener("click", (e) => {
        if (e.target === editsOverlay) {
            editsOverlay.classList.remove("active");
        }
    });


    gamesBtn.addEventListener("click", () => {
        gamesOverlay.classList.add("active");
    });

    gamesCloseBtn.addEventListener("click", () => {
        gamesOverlay.classList.remove("active");
    });

    gamesOverlay.addEventListener("click", (e) => {
        if (e.target === gamesOverlay) {
            gamesOverlay.classList.remove("active");
        }
    });

});