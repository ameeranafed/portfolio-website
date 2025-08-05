"use strict";
new Typed("#typed", {
    strings: ["Full Stack Developer|.NET & Angular", "Software Engineer"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
});
// Theme switcher
const toggleButton = document.getElementById("themeToggle");
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
// Language switcher
const languageSwitcher = document.getElementById("languageSwitcher");
languageSwitcher === null || languageSwitcher === void 0 ? void 0 : languageSwitcher.addEventListener("change", () => {
    console.log("Language switched to:", languageSwitcher.value);
});
window.addEventListener("scroll", () => {
    const scrollIndicator = document.querySelector(".scroll-indicator");
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    const percentage = (window.scrollY / maxHeight) * 100;
    scrollIndicator.style.width = `${percentage}%`;
});
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
});
backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
document.addEventListener("DOMContentLoaded", () => {
    const skillBoxes = document.querySelectorAll(".skill-box");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-corners");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    skillBoxes.forEach(box => observer.observe(box));
});
