/* ==========================================================
   Abhijeet Kumar Portfolio
   script.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       TYPING EFFECT
    ========================================== */

    const roles = [
        "Senior Power BI Developer",
        "Microsoft Fabric Solution Architect",
        "Azure Data Engineer",
        "Power BI Consultant",
        "SQL & Data Warehouse Specialist"
    ];

    const typingElement = document.getElementById("typing");

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (!deleting) {

            typingElement.textContent =
                currentRole.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentRole.length) {

                deleting = true;

                setTimeout(typeEffect, 1800);

                return;
            }

        } else {

            typingElement.textContent =
                currentRole.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex >= roles.length)
                    roleIndex = 0;

            }

        }

        setTimeout(typeEffect, deleting ? 45 : 90);

    }

    typeEffect();

    /* ==========================================
       DARK / LIGHT MODE
    ========================================== */

    const themeButton =
        document.getElementById("theme-toggle");

    const body = document.body;

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "light") {

        body.classList.add("light");

        themeButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

    themeButton.addEventListener("click", () => {

        body.classList.toggle("light");

        if (body.classList.contains("light")) {

            localStorage.setItem("theme", "light");

            themeButton.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        }

        else {

            localStorage.setItem("theme", "dark");

            themeButton.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

    /* ==========================================
       SCROLL PROGRESS BAR
    ========================================== */

    const progressBar =
        document.getElementById("progressBar");

    window.addEventListener("scroll", () => {

        const scrollTop =
            document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress =
            (scrollTop / scrollHeight) * 100;

        progressBar.style.width =
            progress + "%";

    });

    /* ==========================================
       BACK TO TOP BUTTON
    ========================================== */

    const topButton =
        document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.style.display = "block";

        }

        else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll("nav a");

    function activateMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 120;

            if (pageYOffset >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activateMenu);

    /* ==========================================
       REVEAL ANIMATION
    ========================================== */

    const revealElements =
        document.querySelectorAll(
            "section, .card, .timeline-item, .skill, .project-card, .resume-card, .contact-card"
        );

    revealElements.forEach(element => {

        element.classList.add("reveal");

    });

    function revealOnScroll() {

        revealElements.forEach(element => {

            const windowHeight =
                window.innerHeight;

            const elementTop =
                element.getBoundingClientRect().top;

            const revealPoint = 120;

            if (elementTop < windowHeight - revealPoint) {

                element.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================================
       PROJECT CARD HOVER EFFECT
    ========================================== */

    const cards =
        document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-12px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0px) scale(1)";

        });

    });

    /* ==========================================
       STATS COUNTER ANIMATION
    ========================================== */

    const counters =
        document.querySelectorAll(".stats h3");

    let counterStarted = false;

    function runCounters() {

        if (counterStarted) return;

        const stats =
            document.querySelector(".stats");

        if (!stats) return;

        const statsTop =
            stats.getBoundingClientRect().top;

        if (statsTop < window.innerHeight - 120) {

            counterStarted = true;

            counters.forEach(counter => {

                const target =
                    parseInt(counter.innerText);

                if (isNaN(target)) return;

                let current = 0;

                const increment =
                    Math.ceil(target / 40);

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.innerText =
                        current + "+";

                }, 40);

            });

        }

    }

    window.addEventListener("scroll", runCounters);

    runCounters();

    /* ==========================================
       YEAR
    ========================================== */

    const footer = document.querySelector("footer");

    if (footer) {

        footer.innerHTML =
            `© ${new Date().getFullYear()} Abhijeet Kumar | Built with HTML, CSS & JavaScript`;

    }

});
