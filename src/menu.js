import * as images from "./asset.js"
import "./menu.css"
export function menu() {
    const data = [
        {
            name: "Tomato Basil soup",
            src: images.tomato,
            alt: "tomato soup",
            desc: "Freshly made with ripe tomatoes,garlic, and handpicked basil. Served with toasted bread."
        },
        {
            name: "Spicy Chicken Wings",
            src: images.chickenwing,
            alt: "chicken wings",
            desc: "Golden-fried rolls filled with seasoned vegetables and served with a tangy dip."
        },
        {
            name: "Chicken Biryani",
            src: images.biryani,
            alt: "Chicken Biriyani",
            desc: "Aromatic basmati rice cooked with chicken meat and traditional Indian spices."
        },
        {
            name: "Paneer Butter Masala",
            src: images.masala,
            alt: "paneer butter masala",
            desc: "Cottage cheese cubes simmered in rich tomato-butter gravy. Served with naan or rice."
        },
        {
            name: "Grill Chicken",
            src: images.grill,
            alt: "grill chicken",
            desc: "Tender, flame-grilled chicken infused with aromatic herbs. Served with a fresh garden salad and a light lemon butter sauce."
        },
    ]
    
    
    function createProperty() {
        const content = document.querySelector("#content");
        const container = document.createElement("div");
        container.classList.add("menu-container");
        content.appendChild(container);
        const classAttribute = ["starters","main-course"];
        const heading2 = ["Starters","Main Course"];
    
        for (let i=0;i<2;i++) {
            const section = document.createElement("div");
            section.classList.add(classAttribute[i]);
            container.appendChild(section);
    
            const h2 = document.createElement("h2");
            h2.textContent = heading2[i];
            section.appendChild(h2);
        }
     
        const classStarter = document.querySelector(".starters");
        const classMain = document.querySelector(".main-course");
    
        for (let j=0; j<data.length;j++){
            const dish = document.createElement("div");
            dish.classList.add("dish");
    
            const h4 = document.createElement("h4");
            h4.textContent = data[j].name;
            dish.appendChild(h4);
    
            const image = document.createElement("img");
            image.src = data[j].src;
            image.alt = data[j].alt;
            dish.appendChild(image);
    
            const describe = document.createElement("div");
            describe.classList.add("describe");
            describe.textContent = data[j].desc;
            dish.appendChild(describe);
    
            if (j <= 1 ) {
                classStarter.appendChild(dish);
            } else {
                classMain.appendChild(dish);
            }
    
        }
    }
    createProperty();
}