// Change color on main page on mouse over

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.getElementById("testing").addEventListener("mouseover", function () {
    this.style.backgroundColor = randomColor()
})

