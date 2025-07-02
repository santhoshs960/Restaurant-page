import "./home.css"
export function home() {
    const content = document.querySelector("#content");
    const container = document.createElement("div");
    container.classList.add("home-container");
    content.appendChild(container)
    const para = document.createElement("p");
    para.textContent = 
                    `Welcome to R Restaurant.
                    At R Restaurant, we take pride in offering
                    an exceptional dining experience that combines
                    refined flavors with professional service. Our
                    establishment is dedicated to serving high-quality meals
                    crafted from fresh, locally sourced ingredients,
                    ensuring both taste and consistency in every dish.
                    
                    Our menu features a wide selection
                    of traditional and contemporary cuisine,
                    R Restaurant provides a comfortable and
                    elegant setting suitable for any event.`;
    
    container.appendChild(para);
    
    const open_time = document.createElement("div");
    open_time.classList.add("op_hours");
    container.appendChild(open_time);
    
    const op_heading = document.createElement("h4");
    op_heading.textContent = "Operating Hours:";
    open_time.appendChild(op_heading);
    
    const open_hours = document.createElement("div");
    open_hours.textContent = "Open daily from 11:00 AM to 11:00 PM";
    open_time.appendChild(open_hours);
    
    const address_info = document.createElement("div");
    address_info.classList.add("address");
    container.appendChild(address_info);
    
    const location = document.createElement("h4");
    location.textContent = "Location:"
    address_info.appendChild(location);
    
    const address = document.createElement("div");
    address.textContent = "123 Main Street, Chennai, India";
    address_info.appendChild(address)
    
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = "We invite you to visit us and experience the standard of excellence that defines R Restaurant.";
    container.appendChild(message);    
    
}