document.addEventListener("DOMContentLoaded", function(){

    const lines = document.querySelectorAll(".type-line");
    const prelude = document.getElementById("prelude");
    const main = document.getElementById("ethos");

    let index = 0;

    function typeLine(el, text, callback){
        let i = 0;
        el.style.opacity = 1;

        function typing(){
            el.textContent = text.slice(0,i);
            i++;
            if(i <= text.length){
                setTimeout(typing, 38);
            }else{
                setTimeout(callback, 420);
            }
        }

        typing();
    }

    function runPrelude(){
        if(index < lines.length){
            const el = lines[index];
            typeLine(el, el.dataset.text, ()=>{
                index++;
                runPrelude();
            });
        }else{
            setTimeout(()=>{
                prelude.style.opacity = 0;
                prelude.style.transition = "opacity .6s ease";
                setTimeout(()=>{
                    prelude.remove();
                    main.hidden = false;
                },600);
            },600);
        }
    }

    runPrelude();

});
