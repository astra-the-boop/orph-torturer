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

    document.getElementById("rm-rf").addEventListener("click", async ()=>{
        if(document.getElementById("rm-rf").innerText === "mkdir orph"){
            document.getElementById("rm-rf").innerText = "rm rf ./orph"
        }else{
            document.getElementById("rm-rf").innerText = "mkdir orph"
        }

        document.getElementById("orph").classList.toggle("removed");
    });

    document.getElementById("uk").addEventListener("click", ()=>{
        const godSaveTheOrph = new Audio("img/god-save-the-orph.oga");
        godSaveTheOrph.play();
        document.getElementById("background").classList.toggle("birmingham")
        document.getElementById("orph").classList.toggle("uk")
    });

    document.getElementById("ups").addEventListener("click", async()=>{
        document.getElementById("box").classList.toggle("dropped");
        await new Promise(r => setTimeout(r, 800));
        document.getElementById("orph").classList.toggle("lost");
        document.getElementById("box").classList.toggle("lost");
        await new Promise(r => setTimeout(r, 1800));
        document.getElementById("background-ups").classList.toggle("lost");
    });

    document.getElementById("electron").addEventListener("click", async ()=>{
        let colonThree = [];

        while(true){
            colonThree.push(new Array(10000000).join(":3"));
        }
    })
})