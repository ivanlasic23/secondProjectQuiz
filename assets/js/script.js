// Change color on main page on mouse over
function crazyColor() {
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    var randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

    function namess() {
        this.style.backgroundColor = randomColor();
    }

    document.getElementsByClassName("main-quiz-area")[0].addEventListener("mouseover", namess)

}
crazyColor();

function turnOffCrazyColor() {
    document.getElemenstByClassName("main-quiz-area")[0].classList.remove("main-quiz-area");

}

let turnOffBtn = document.getElementById("turn-off");
turnOffBtn.addEventListener("click", turnOffCrazyColor());