window.addEventListener("load", () => {

    /* Fade-in for stills */

    const images = document.querySelectorAll(".zaman-stills img");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    images.forEach(img => observer.observe(img));


    /* Fade-in for film section */

    const film = document.querySelector(".film-embed");

    if(film){
        film.style.opacity = "0";
        film.style.transform = "translateY(50px)";
        film.style.transition = "all 1s ease";

        const filmObserver = new IntersectionObserver(entries=>{
            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    film.style.opacity = "1";
                    film.style.transform = "translateY(0)";
                }
            });
        },{ threshold:0.25 });

        filmObserver.observe(film);
    }

});
