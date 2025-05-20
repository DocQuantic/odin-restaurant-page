import mahadiPic from "../images/Mahadi.webp"

export default function() {
    const content = document.querySelector("#content");

    const title = document.createElement("h2");
    title.innerText = "Welcome";

    const welcomePhrase = document.createElement("p");
    welcomePhrase.innerText = "Lost souls are free to enjoy our meals for a single soul coin."

    const pic = document.createElement("img");
    pic.setAttribute("src", mahadiPic);
    pic.setAttribute("alt", "Mahadi the rakshasa");

    const catchPhrase = document.createElement("p");
    catchPhrase.innerText = "Come find us at any place in avernus";

    content.appendChild(title);
    content.appendChild(welcomePhrase);
    content.appendChild(pic);
    content.appendChild(catchPhrase);
}