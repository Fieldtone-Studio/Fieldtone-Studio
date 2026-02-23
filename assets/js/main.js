document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    // Show loader only once per session
    if (sessionStorage.getItem("fieldtoneLoaderShown")) {
        loader.classList.add("hidden");
        mainContent.classList.add("visible");
        return;
    }

    // Hide loader after animation duration
    setTimeout(() => {
        loader.classList.add("hidden");
        mainContent.classList.add("visible");
        sessionStorage.setItem("fieldtoneLoaderShown", "true");
    }, 2200);

});
