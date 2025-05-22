export default function(){
    const content = document.querySelector("#content");
    content.innerHTML = "";
    content.classList.add("menu");

    const title = document.createElement("h2");
    title.innerText = "Menu";

    const appetizersTitle = document.createElement("h3");
    appetizersTitle.innerText = "Appetizers";

    const appetizer1 = document.createElement("p");
    appetizer1.innerText = "Pickled vine blight salad";
    const appetizer2 = document.createElement("p");
    appetizer2.innerText = "Pan-fried myconid cap with garlic butter";
    const appetizer3 = document.createElement("p");
    appetizer3.innerText = "Spicy shredded stirge sliders";
    
    const mainDishesTitle = document.createElement("h3");
    mainDishesTitle.innerText = "Main Dishes";

    const mainDish1 = document.createElement("p");
    mainDish1.innerText = "Broiled quippers served in a port reduction";
    const mainDish2 = document.createElement("p");
    mainDish2.innerText = "Roasted wereboar seasoned liberally with pepper and paprika";
    const mainDish3 = document.createElement("p");
    mainDish3.innerText = "Twice-battered axe beak strips with a brandied plum sauce";
    const mainDish4 = document.createElement("p");
    mainDish4.innerText = "Deep fried miniature giant space hamster, seasoned to perfection with rosemary, basil, thyme, and tears";

    const dessertsTitle = document.createElement("h3");
    dessertsTitle.innerText = "Desserts";

    const dessert1 = document.createElement("p");
    dessert1.innerText = "Candied phase spider eyes en a raspberry liquor reduction";
    const dessert2 = document.createElement("p");
    dessert2.innerText = "Sweet apple tart with a celestial caramel drizzle";
    const dessert3 = document.createElement("p");
    dessert3.innerText = "Rare miniature stench kow cheesse selection";

    const coffeeTitle = document.createElement("h3");
    coffeeTitle.innerText = "Coffee / Tea"

    content.appendChild(title);
    content.appendChild(appetizersTitle);
    content.appendChild(appetizer1);
    content.appendChild(appetizer2);
    content.appendChild(appetizer3);
    content.appendChild(mainDishesTitle);
    content.appendChild(mainDish1);
    content.appendChild(mainDish2);
    content.appendChild(mainDish3);
    content.appendChild(mainDish4);
    content.appendChild(dessertsTitle);
    content.appendChild(dessert1);
    content.appendChild(dessert2);
    content.appendChild(dessert3);
    content.appendChild(coffeeTitle);
}