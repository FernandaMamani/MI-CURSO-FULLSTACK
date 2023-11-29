const linkHome = document.getElementById("home");
const linkContact = document.getElementById("contact");
const linkProducts = document.getElementById("products");

const btnBack = document.getElementById("back");
const btnForward = document.getElementById("forward");
const btnGo = document.getElementById("go");
const inputNumberPage = document.getElementById("number-page");
const btnObject = document.getElementById("object");

btnBack.addEventListener('click', ()=> {
    window.history.back();
});

btnFoward.addEventListener('click', () => {
    history.foward();
});

btnGo.addEventListener('click', () => {
    history.go(inputNumberPage.value);
});

btnObject.addEventListener('click', () => {
    console.log('objeto', history);
});