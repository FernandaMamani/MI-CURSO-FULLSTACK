const main = document.getElementById("main");

const nav = {
    home: document.getElementById("home"),
    contact: document.getElementById("contact"),
    products: document.getElementById("products"),
};

getContentHTML("home");

const links = [nav.home, nav.contact, nav.products];
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', (e) => {
        getContentHTML(e.target.id)
    });
}

function getContentHTML(pageName) {
    const filepath = "./" + pageName + ".html";
    const xhr = new XMLHttpRequest();
    xhr.open("get", filepath);

    xhr.onload = () => {
        if (xhr.status === 200) {
            main.innerHTML = xhr.response;
        } /* por aquí me faltó copiar algo*/
    };

    xhr.send();
}

function setActiveLink(link) {
    for (let i = 0; i < links.length; i++) {
        links[i].className = "";

    }

    link.className = "link-active";
}
