// Select HTML elements that we want to access or manipulate using JavaScript

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const yearEl = document.getElementById("year");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");
const sections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".nav-links a");

yearEl.textContent = new Date().getFullYear();

// Open and close the mobile navigation menu
navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// Close the mobile menu when a navigation link is clicked
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
    });
});


// To call the function immediately when the page loads
function highlightActiveLink() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute("id");
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);

        if (scrollPos >= top && scrollPos < bottom) {
            menuLinks.forEach((link) => link.classList.remove("active"));
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

// To call the function whenever we scroll
window.addEventListener("scroll", highlightActiveLink);
window.addEventListener("scroll", highlightActiveLink);
highlightActiveLink();

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks! Your message is ready. Replace this form later with a real email service.";
    contactForm.reset();
});
