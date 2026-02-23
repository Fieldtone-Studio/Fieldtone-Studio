document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // ================= LOADER (Session Controlled) =================

    if (sessionStorage.getItem("fieldtoneLoaderShown")) {
        loader.classList.add("hidden");
        mainContent.classList.add("visible");
    } else {
        setTimeout(() => {
            loader.classList.add("hidden");
            mainContent.classList.add("visible");
            sessionStorage.setItem("fieldtoneLoaderShown", "true");
        }, 2200);
    }

    // ================= CINEMATIC SCROLL REVEAL =================

    const sections = document.querySelectorAll(".render-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                }
            });
        },
        {
            threshold: 0.35
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

});
