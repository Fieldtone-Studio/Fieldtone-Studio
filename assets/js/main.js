document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    /* ================= LOADER ================= */

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

    /* ================= CUSTOM CURSOR (DESKTOP ONLY) ================= */

    if (window.matchMedia("(hover: hover)").matches) {

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

    /* ================= FILM FRAME REVEAL + COUNTER ================= */

    const frames = document.querySelectorAll(".film-frame");
    const counterItems = document.querySelectorAll(".film-counter span");

    if (frames.length > 0) {

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in-view");

                    const index = Array.from(frames).indexOf(entry.target);

                    counterItems.forEach(item => item.style.opacity = "0.15");

                    if (counterItems[index]) {
                        counterItems[index].style.opacity = "0.8";
                    }
                }
            });
        }, { threshold: 0.5 });

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

        function closeLightbox() {
            lightbox.classList.remove("active");
            document.body.style.overflow = "";
        }

        closeBtn.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeLightbox();
        });
    }

    /* ================= REEL SOUND (FIRST SCROLL ONLY) ================= */

    const reelSound = document.getElementById("reelSound");
    let reelPlayed = false;

    if (reelSound) {
        window.addEventListener("scroll", () => {
            if (!reelPlayed && window.scrollY > 120) {
                reelSound.volume = 0.25;
                reelSound.play().catch(() => {});
                reelPlayed = true;
            }
        });
    }

});
