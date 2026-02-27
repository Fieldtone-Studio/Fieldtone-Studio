window.addEventListener("load", () => {
    document.querySelectorAll(".work-panel").forEach((panel, i) => {
        panel.style.opacity = "0";
        panel.style.transform = "translateY(20px)";
        setTimeout(() => {
            panel.style.transition = "all .8s ease";
            panel.style.opacity = "1";
            panel.style.transform = "translateY(0)";
        }, 120 * i);
    });
});