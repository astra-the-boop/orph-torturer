document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("piano-btn").addEventListener('click', async function () {
        document.getElementById("piano").classList.toggle("falling");
        await new Promise(r => setTimeout(r, 500));
        document.getElementById("orph").src = document.getElementById("orph").classList.contains("fallen") ? "img/orph.jpeg" : "img/orph-fallen.jpeg";
        document.getElementById("orph").classList.toggle("fallen")
    });

    document.getElementById("hand-btn").addEventListener("click", async () => {
        document.getElementById("hand").classList.toggle("dropped");
        await new Promise(r => setTimeout(r, 500));
        document.getElementById("orph").classList.toggle("squished");
    });

    document.getElementById("b767-btn").addEventListener("click", async ()=>{
        document.getElementById("b767").classList.toggle("crashed");
        await new Promise(r => setTimeout(r, 580));
        document.getElementById("orph").classList.toggle("crashed-into")
    })
})