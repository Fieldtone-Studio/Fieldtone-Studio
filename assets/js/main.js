document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    /* ================= SAFE LOADER ================= */

    if (loader) {
        document.documentElement.classList.add("loading");
        document.body.classList.add("loading");

        setTimeout(() => {
            loader.classList.add("hidden");
            document.documentElement.classList.remove("loading");
            document.body.classList.remove("loading");
        }, 3600);
    }

    /* ================= MENU ================= */

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
            document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "";
        });
    }

    /* ================= CUSTOM CURSOR (DISABLED ON MOBILE) ================= */

    if (window.innerWidth > 1024) {
        const dot = document.querySelector(".cursor-dot");
        const ring = document.querySelector(".cursor-ring");

        if (dot && ring) {

            let mouseX = 0;
            let mouseY = 0;
            let ringX = 0;
            let ringY = 0;

            document.addEventListener("mousemove", (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                dot.style.left = mouseX + "px";
                dot.style.top = mouseY + "px";
            });

            function animate() {
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;

                ring.style.left = ringX + "px";
                ring.style.top = ringY + "px";

                requestAnimationFrame(animate);
            }

            animate();
        }
    }

    /* ================= FILM FRAME REVEAL ================= */

    const frames = document.querySelectorAll(".film-frame");

    if (frames.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        }, { threshold: 0.25 });

        frames.forEach(frame => observer.observe(frame));
    }

    /* ================= LIGHTBOX ================= */

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const triggers = document.querySelectorAll(".lightbox-trigger");

    if (lightbox && lightboxImg && closeBtn) {

        triggers.forEach(img => {
            img.addEventListener("click", () => {
                lightboxImg.src = img.src;
                lightbox.classList.add("active");
                document.body.style.overflow = "hidden";
            });
        });

        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }

});
