let secondHand = document.querySelector(".second-hand");
let hourHand = document.querySelector(".hour-hand");
let minHand = document.querySelector(".min-hand");

function setAngle(target, degree) {
    target.style.transform = `rotate(${degree + 90}deg)`;
}

function setTime() {
    let d = new Date();
    setAngle(secondHand, 6 * d.getSeconds());
    setAngle(hourHand, 15 * (d.getHours() % 12));
    setAngle(minHand, 6 * d.getMinutes());
}

setInterval(setTime, 1000);
