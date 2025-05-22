import mahadiPic from "../images/Mahadi.webp"

export default function() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.classList.remove("menu");

    const title = document.createElement("h2");
    title.innerText = "Welcome";

    const welcomePhrase = document.createElement("p");
    welcomePhrase.innerText = "Lost souls are free to enjoy our meals for a single soul coin."

    const pic = document.createElement("img");
    pic.setAttribute("src", mahadiPic);
    pic.setAttribute("alt", "Mahadi the rakshasa");

    const catchPhrase = document.createElement("p");
    catchPhrase.innerText = "Come eat our delicious meals in exchange of one soul coin";

    content.appendChild(title);
    content.appendChild(welcomePhrase);
    content.appendChild(pic);
    content.appendChild(catchPhrase);
}