window.addEventListener("DOMContentLoaded", () => {

    const panels = document.querySelectorAll(".work-panel");

    panels.forEach(panel => {

        const bg = panel.getAttribute("data-bg");
        panel.style.setProperty("--bg-image", `url(${bg})`);
        panel.style.position = "relative";

        panel.addEventListener("mouseenter", () => {
            panels.forEach(p => p.classList.remove("active"));
            panel.classList.add("active");
        });

    });

    /* Apply background dynamically */
    panels.forEach(panel => {
        const bg = panel.getAttribute("data-bg");
        panel.style.setProperty("--bg-image", `url(${bg})`);
        panel.querySelector("::before");
        panel.style.setProperty("--bg-url", bg);
        panel.style.backgroundImage = "none";
        panel.style.setProperty("--bg-image", `url(${bg})`);
        panel.style.setProperty("background-image", "none");
        panel.style.setProperty("background", "#111");
        panel.style.setProperty("--image", `url(${bg})`);
        panel.style.setProperty("position", "relative");
        panel.style.setProperty("overflow", "hidden");
        panel.style.setProperty("cursor", "pointer");
        panel.style.setProperty("transition", "flex .5s cubic-bezier(.22,1,.36,1)");
        panel.style.setProperty("--bg", bg);

        panel.style.setProperty("background", "#111");
        panel.style.setProperty("--image", `url(${bg})`);

        panel.style.setProperty("--bg-url", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--image-url", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

        panel.style.setProperty("background", "#111");

        panel.style.setProperty("--bg-image", bg);

    });

});

/* Cleaner background injection */

document.querySelectorAll(".work-panel").forEach(panel=>{
    const bg = panel.dataset.bg;
    panel.style.setProperty("--bg", `url(${bg})`);
    panel.style.setProperty("position","relative");
    panel.style.setProperty("overflow","hidden");
    panel.style.setProperty("cursor","pointer");
    panel.style.setProperty("transition","flex .5s cubic-bezier(.22,1,.36,1)");
    panel.style.setProperty("--bg-image", `url(${bg})`);
    panel.style.setProperty("--bg-url", bg);
    panel.style.setProperty("--image", bg);
    panel.style.setProperty("--bg-img", bg);
    panel.style.setProperty("--background-image", bg);
    panel.style.setProperty("background","#111");
    panel.style.setProperty("--image-url", bg);
});
