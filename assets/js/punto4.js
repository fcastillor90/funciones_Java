let colorSeleccionado;

document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
        colorSeleccionado = "black";
    } else if (event.key === "s") {
        colorSeleccionado = "blue";
    } else if (event.key === "d") {
        colorSeleccionado = "red";
    }  else {
        alert("Solo letras a, s o d");
    }
    console.log(colorSeleccionado);
});

//let divs = document.querySelectorAll(".ele");

const pintar= (id) =>{
    const elemento = document.querySelector(id);
    elemento.style.backgroundColor = colorSeleccionado;
};


//div.forEach(function (div) { 
//        div.addEventListener("click", function (e) {
//            e.currentTarget.style.backgroundColor = colorSeleccionado
//    });
//});