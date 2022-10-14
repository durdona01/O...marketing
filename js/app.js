
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav__list");
const HEADER = document.querySelector("#head");

// Scroll Header ==================/
window.addEventListener("scroll", function(){
    HEADER.classList.toggle("sticky", this.window.scrollY > 752)
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
    
