import avernusPic from "../images/avernus.jpg"

export default function() {
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.classList.remove("menu");

    const title = document.createElement("h2");
    title.innerText = "About";

    const phrase1 = document.createElement("p");
    phrase1.innerText = "We go anywhere in Avernus but you will always find us near the Bloody Cist";

    const img = document.createElement("img");
    img.src = avernusPic;

    content.appendChild(title);
    content.appendChild(phrase1);
    content.appendChild(img);
}