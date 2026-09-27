console.log("Pagina s-a incarcat, JavaScript functioneaza!");

const buton = document.querySelector("#toggle-theme");
const body = document.querySelector("body");

buton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
});
