document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    document.documentElement.classList.add("loading");
    document.body.classList.add("loading");

    setTimeout(() => {
        loader.classList.add("hidden");
        document.documentElement.classList.remove("loading");
        document.body.classList.remove("loading");
    }, 3600);

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });

    /* CUSTOM CURSOR */
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;

        ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;

        requestAnimationFrame(animateRing);
    }

    animateRing();

});
