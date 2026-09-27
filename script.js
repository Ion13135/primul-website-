console.log("Pagina s-a incarcat, JavaScript functioneaza!");

const buton = document.querySelector("#toggle-theme");
const body = document.querySelector("body");

buton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
});

const butonCitat =
    document.querySelector("#buton-citat");

const textCitat =
    document.querySelector("#text-citat");

async function aduCitat() {

    try {

        const raspuns =
            await fetch(
                "https://api.adviceslip.com/advice"
            );

        const date =
            await raspuns.json();

        textCitat.textContent =
            `"${date.slip.advice}"`;

    } catch (eroare) {

        textCitat.textContent =
            "Nu s-a putut încărca sfatul.";

        console.log(eroare);
    }
}

aduCitat();

butonCitat.addEventListener("click", function () {
    aduCitat();
});