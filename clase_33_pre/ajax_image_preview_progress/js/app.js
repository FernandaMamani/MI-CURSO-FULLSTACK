const textURL = document.getElementById("id-url");
const imagePreview = document.getElementById("id-image-preview");
const btnProcess = document.getElementById("id-btn-process");
const textResult = document.getElementById("id-result");
const progress = document.getElementById("id-progress");

btnProcess.addEventListener('click', () => {
    if (textURL.value) {
        const xhr = new XMLHttpRequest();
        xhr.open("get", textURL.value);
        console.log(xhr);
        xhr.onload = () => {
            const imageBlob = xhr.response;
            const imageType = imageBlob.type;

            if (xhr.status === 200 && (imageTypa === "image/jpeg" || imagetype === "image/png")) {
                const urlBlob = URL.createObjectURL(imageBlob);

                const img = document.createElement("img");
                img.src = urlBlob;
                imagePreview.appendChild(img);
                img.className = "form__div__image";

                textResult.innerText = "el proceso finalizo";

            } else {
                textResult.innerText = "el proceso falló";
            }

            setTimeout(() => {
                textResult.innerText = "";
            }, 2000);
        };

        xhr.onloadstart = ()=> {
            progress.removeAttribute("hidden");
            progress.value = 0;
        }

        xhr.onprogress = (event) => {
            //progress.removeAttribute('hidden');

            if (event.lengthComputable) {
                let loaded = Math.round(event.loaded * 100 / event.total);
                progress.value = loaded;
                if (loaded === 100) {
                    progress.setAttribute("hidden", true);
                }
            }
        };

        xhr.onerror = () => {
            textResult.innerText = "El proceso falló";

            setTimeout(() => {
                textResult.innerText = "";
            })
        };

        xhr.send();
    } else {
        textResult.innerText = "Ingresa la URL de la imagen";
    }
});
