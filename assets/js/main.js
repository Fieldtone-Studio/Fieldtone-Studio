document.addEventListener("DOMContentLoaded", function () {

    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");

    document.body.classList.add("loading");

    if (sessionStorage.getItem("fieldtoneLoaderShown")) {
        loader.classList.add("hidden");
        mainContent.classList.add("visible");
        document.body.classList.remove("loading");
    } else {
        setTimeout(() => {
            loader.classList.add("hidden");
            mainContent.classList.add("visible");
            document.body.classList.remove("loading");
            sessionStorage.setItem("fieldtoneLoaderShown", "true");
        }, 2200);
    }

});
