import "./about.css";
export function about() {
  const details = {
    Address: ["RRestaurant","123 street","chennai","india","400001"],
    Contact: {
      Phone: "+91 98765 67895",
      email: "RRestaurant@gmail.com"
    },
    Community: {
      Facebook: "facebook.com",
      Discord: "@RRestaurant"
    }
  }
  
  //utility function for creating elements
  
  function elementCreate(element, parent) {
    const tag = document.createElement(element);
    parent.appendChild(tag);
    return tag;
  }
  const container = document.querySelector("#content");
  const content = document.createElement("div");
  content.classList.add("about-container");
  container.appendChild(content);

  const title = elementCreate("h1", content);
  title.textContent = "Contact us";
  
  for (let key in details) {
    const div = elementCreate("div", content);
    div.classList.add(key);
  
    const heading = elementCreate("h3", div);
    heading.textContent = key;
  
    if (Array.isArray(details[key]) === true) {
      for (let iterate of details[key]) {
        const list = elementCreate("div", div);
        list.textContent = iterate;
      }
    } else {
      for (let child in details[key]) {
        const anotherDiv = elementCreate("div", div);
        anotherDiv.textContent = `${child} : `;
  
        const link = elementCreate("a", anotherDiv);
        link.href = "#";
        link.textContent = details[key][child];
        anotherDiv.appendChild(link);
      }
    }
  }
  
}