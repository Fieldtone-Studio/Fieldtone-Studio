const phases = document.querySelectorAll(".phase");

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
},{
    threshold:0.3
});

phases.forEach(phase=>{
    observer.observe(phase);
});
