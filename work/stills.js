const stills = document.querySelectorAll(".still");

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
},{
    threshold:0.3
});

stills.forEach(still=>{
    observer.observe(still);
});
