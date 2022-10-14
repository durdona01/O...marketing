
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav__list");
const HEADER = document.querySelector("#head");
let logoLightImg = document.querySelector("#logoLightImg");

// Scroll Header ==================/
window.addEventListener("scroll", function(){
    HEADER.classList.toggle("sticky", this.window.scrollY > 752);
    if( this.window.scrollY > 752 ) { (logoLightImg).src = "./img/LOGO_black.svg" }
    else { (logoLightImg).src = "./img/LOGO_light.svg" }
})
// Scroll Header ==================/


// HAMBURGERS ==================/
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
// HAMBURGERS ==================/
    
