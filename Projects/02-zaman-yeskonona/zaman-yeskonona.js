window.addEventListener("load", () => {

    const elements = document.querySelectorAll(".zaman-stills img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(img => {
        img.style.opacity = "0";
        img.style.transform = "translateY(40px)";
        img.style.transition = "all 1s ease";
        observer.observe(img);
    });

});