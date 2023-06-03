document.addEventListener("keydown", function (event) { 
    console.log(event);
    if (event.key === "a") {
        document.querySelector("#morado").style.backgroundColor = "brown";
        document.querySelector("#verde").style.backgroundColor = "brown";
        document.querySelector("#azul").style.backgroundColor = "brown";
        document.querySelector("#naranjo").style.backgroundColor = "brown";
    } else if (event.key === "s") {
        document.querySelector("#morado").style.backgroundColor = "red";
        document.querySelector("#verde").style.backgroundColor = "red"        
        document.querySelector("#azul").style.backgroundColor = "red";
        document.querySelector("#naranjo").style.backgroundColor = "red";
    } else if (event.key === "d") {
        document.querySelector("#morado").style.backgroundColor = "black";
        document.querySelector("#verde").style.backgroundColor = "black";
        document.querySelector("#azul").style.backgroundColor = "black";
        document.querySelector("#naranjo").style.backgroundColor = "black";   
    }
});

document.querySelectorAll("div").fireach((item) => {
    item.addEventListener("click", (Event) => {
        item.style.backgroundColor = "purple";
    });
});

