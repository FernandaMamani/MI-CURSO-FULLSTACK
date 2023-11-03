const paragraph = document.getElementById("id-parrafo4");
const buttonShow = document.getElementById("id-show");

function show() {
    console.dir(paragraph);
    paragraph.className = "";
    buttonShow.innerText = "Ver menos";
    buttonShow.onclick = hide;
}

function show() {
    console.dir(paragraph);
    paragraph.className = "parrafo4-short";
    buttonShow.innerText = "Ver más";
    buttonShow.onclick = show;
}

buttonShow.onclick = show;