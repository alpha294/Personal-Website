// Toggle Menu (for mobile navigation)
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetID = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Offset to account for fixed nav
                behavior: "smooth"
            });
        });
    });

    // Scroll Animation (fade-in effect for sections)
    const sections = document.querySelectorAll(".fade-in");
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition) {
                section.classList.add("visible");
            }
        });
    });

    // Scroll to Top Button
    const scrollToTopButton = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add("visible");
        } else {
            scrollToTopButton.classList.remove("visible");
        }
    });

    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
