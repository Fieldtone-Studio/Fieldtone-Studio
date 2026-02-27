// Optional subtle hero fade-in

window.addEventListener("load", () => {
    document.querySelector(".hero-content").style.opacity = "0";
    document.querySelector(".hero-content").style.transform = "translateY(20px)";
    setTimeout(() => {
        document.querySelector(".hero-content").style.transition = "all .8s ease";
        document.querySelector(".hero-content").style.opacity = "1";
        document.querySelector(".hero-content").style.transform = "translateY(0)";
    }, 200);
});