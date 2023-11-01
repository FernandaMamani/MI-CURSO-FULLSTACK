const car = document.querySelector(".car");
const buttonPlay= document.getElementById("id-play");
const buttonPause = document.querySelector("#id-play");

function play() {
    car.style.animationPlayState = "running";
}

function pause() {
    car.style.animationPlayState = "paused";
}

buttonPlay.onclick = play;
buttonPause.onclick = pause;