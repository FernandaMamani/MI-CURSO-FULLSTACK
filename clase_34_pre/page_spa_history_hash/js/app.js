const main = document.getElementById("main");

const nav = {
    home: document.getElementById("home"),
    contact: document.getElementById("contact"),
    products: document.getElementById("products"),
};

window.onload = ()=> {
    refreshHtml();
};

function refreshHtml() {

    let currentPagename = window.location.hash.replace("#", "");

    if (!currentPagename) {
        currentPagename = "home";
    }
    getContentHTML(currentPagename);
}

const links = [nav.home, nav.contact, nav.products];
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', (e) => {
        getContentHTML(e.target.id)
    });
}

function getContentHTML(pageName) {
    if (!pageName) {
        pageName = "home";
    }

    const filepath = "./" + pageName + ".html";
    const xhr = new XMLHttpRequest();
    xhr.open("get", filepath);

    xhr.onload = () => {
        if (xhr.status === 200) {
            main.innerHTML = xhr.response;
            setActiveLink(links, nav[pageName]);
        }
    };

    xhr.send();
}

function setActiveLink(link) {
    for (let i = 0; i < links.length; i++) {
        links[i].className = "";

    }

    link.className = "link-active";
}

//* ************************* History ******************************************* *//

const linkHome = document.getElementById("home");
const linkContact = document.getElementById("contact");
const linkProducts = document.getElementById("products");

const btnBack = document.getElementById("back");
const btnForward = document.getElementById("forward");
const btnGo = document.getElementById("go");
const inputNumberPage = document.getElementById("number-page");
const btnObject = document.getElementById("object");

// Conduce a la página anterior del historial de navegación
btnBack.addEventListener('click', () => {
    window.history.back();
});

// Conduce a la página siguiente del historial de navegación
btnForward.addEventListener('click', () => {
    history.forward();
});

// Conduce a una página del historial de navegación
// números negativos -> retroceder
// números positivos -> avanzar
btnGo.addEventListener('click', () => {
    history.go(inputNumberPage.value);
});

// Muestra el objeto history en la consola del navegador
btnObject.addEventListener('click', () => {
    console.log('objeto: ', history);
});

window.onhashchange = (e) => {
    let pageName = e.current.location.hash.replace("#", "");
    getContentHTML(pageName);
}
