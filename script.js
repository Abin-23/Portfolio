// ===== Dark / Light Mode =====

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});


// ===== Active Navigation Link =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// ===== Scroll Reveal Animation =====

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .hero-card"
);

function revealOnScroll() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===== Smooth Scroll for Navigation =====

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===== Current Year in Footer =====

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Abin Sebastian. Built with HTML, CSS & JavaScript.`;
}


// ===== Console Greeting =====

console.log(`
====================================
👋 Welcome to Abin Sebastian's Portfolio
Software Engineer | MCA 2027
GitHub: https://github.com/Abin-23
====================================
`);