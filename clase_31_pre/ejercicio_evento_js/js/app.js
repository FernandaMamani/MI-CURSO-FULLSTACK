const alto= document.getElementById('id-alto');
const ancho = document.getElementById('id-ancho');

window.addEventListener('load', () => {
    //console.log(window.innerWidth);
    alto.innerText = window.innerHeight;
    ancho.innerText = window.innerWidth;
    alert("Hola Mundo");
});

window.addEventListener('resize', ()=>{
    //console.log(window.innerWidth);
    alto.innerText=window.innerHeight;
    ancho.innerText=window.innerWidth;
});