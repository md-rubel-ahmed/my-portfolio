// -------------------------------
// Typing Effect
// -------------------------------
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Frontend Developer", "HTML CSS Expert", "JavaScript Developer", "Landing Page Designer", "Modern Website Designer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
});

var typed2 = new Typed(".typing2", {
    strings: ["JavaScript Developer", "Frontend Developer", "HTML CSS Expert", "Web Designer", "Landing Page Designer", "Modern Website Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// -------------------------------
// FAQ Toggle
// -------------------------------
document.querySelectorAll(".faq").forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");
        const icon = faq.querySelector(".faq-icon i");
        if (icon) {
            icon.className = icon.className === "fa-solid fa-plus" ? "fa-solid fa-minus" : "fa-solid fa-plus";
        }
    });
});

// ===== Navbar Toggle =====

const navMenu = document.querySelector(".nav-manu");
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");

// Open
openMenuBtn.addEventListener("click", () => {
    navMenu.style.display = "flex";
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "inline-block";
});

// Close
closeMenuBtn.addEventListener("click", () => {
    navMenu.style.display = "none";
    openMenuBtn.style.display = "inline-block";
    closeMenuBtn.style.display = "none";
});

// Scroll Effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 100) {
        nav.classList.add("window-scroll");
    } else {
        nav.classList.remove("window-scroll");
    }
});