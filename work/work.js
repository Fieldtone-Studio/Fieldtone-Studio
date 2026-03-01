document.addEventListener("DOMContentLoaded", () => {

    const panels = document.querySelectorAll(".work-panel");

    panels.forEach(panel => {
        const bg = panel.dataset.bg;
        panel.style.setProperty("--bg", `url(${bg})`);
    });

});
