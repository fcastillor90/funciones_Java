
    const painting = (color) => {
        let ele1 = document.querySelector("#ele1");
        ele1.style.backgroundColor = color;
    };

    painting("green");

    ele1 = document.querySelector("ele1");
    ele1.addEventListener("click", () => {
        ele1.style.backgroundColor = "yellow";
    })