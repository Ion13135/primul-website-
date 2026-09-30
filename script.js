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


async function aduProiecte() {

    try {

        const raspuns =
            await fetch(
                "https://api.github.com/users/Ion13135/repos"
            );

        const proiecte =
            await raspuns.json();

        const container =
            document.querySelector(
                "#lista-proiecte"
            );

        container.innerHTML = "";

        proiecte.forEach(function(proiect) {

            const card =
                document.createElement("div");

            card.className =
                "skill-card";

            card.innerHTML = `
                <a href="${proiect.html_url}" target="_blank" rel="noopener noreferrer">
                         ${proiect.name}
                </a>
         `;
         
            container.appendChild(card);

        });

    } catch (eroare) {

        console.log(
            "Eroare la incarcarea proiectelor:",
            eroare
        );
    }
}

aduProiecte(); 

const formular =
    document.querySelector("#formular-contact");

const mesajStatus =
    document.querySelector("#mesaj-status");

formular.addEventListener("submit", function (eveniment) {

    eveniment.preventDefault();

    const nume =
        document.querySelector("#nume").value;

    const email =
        document.querySelector("#email").value;

    const mesaj =
        document.querySelector("#mesaj").value;

    if (nume.length < 2) {

        mesajStatus.textContent =
            "Numele trebuie sa aiba cel putin 2 caractere!";

        mesajStatus.style.color = "red";
        return;
    }

    if (!email.includes("@")) {

        mesajStatus.textContent =
            "Email invalid!";

        mesajStatus.style.color = "red";
        return;
    }

    if (mesaj.length < 10) {

        mesajStatus.textContent =
            "Mesajul trebuie sa aiba cel putin 10 caractere!";

        mesajStatus.style.color = "red";
        return;
    }

    mesajStatus.textContent =
        `Multumesc, ${nume}! Mesajul tau a fost validat cu succes.`;

    mesajStatus.style.color = "green";

    formular.reset();
});