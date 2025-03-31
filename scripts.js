document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Scroll Animation Effect
    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.3
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Responsive Menu Toggle (If Needed)
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

    // Button Click Effect
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            this.classList.add("clicked");
            setTimeout(() => {
                this.classList.remove("clicked");
            }, 300);
        });
    });
});
