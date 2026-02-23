document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    /* ================= LOADER ================= */

    document.documentElement.classList.add("loading");
    document.body.classList.add("loading");

    setTimeout(() => {
        loader.classList.add("hidden");
        document.documentElement.classList.remove("loading");
        document.body.classList.remove("loading");
    }, 3600);

    /* ================= HAMBURGER MENU ================= */

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

    /* ================= CUSTOM CURSOR (DESKTOP ONLY) ================= */

    if (window.matchMedia("(pointer: fine)").matches) {

        const dot = document.querySelector(".cursor-dot");
        const ring = document.querySelector(".cursor-ring");

        if (!dot || !ring) return;

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

});
