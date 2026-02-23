document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    document.documentElement.classList.add("loading");
    document.body.classList.add("loading");

    setTimeout(() => {
        loader.classList.add("hidden");
        mainContent.classList.add("visible");
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
