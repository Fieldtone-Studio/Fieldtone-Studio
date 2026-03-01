const films = document.querySelectorAll(".film-item");

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
},{
    threshold:0.2
});

films.forEach(film=>{
    observer.observe(film);
});
