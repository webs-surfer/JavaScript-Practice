let cars = {
    data:[
        {
            CarName : "Mercedes C-Class Sedan",
            Category : "Mercedes",
            price : "99.4 Lakh",
            image : "images2/c.webp"
        },
        {
            CarName : "Mercedes S-Class",
            Category : "Mercedes",
            price : "3.34 Cr",
            image : "images2/s.webp" 
        },
        {
            CarName : "Mercedes G-Class",
            Category : "Mercedes",
            price : "3.64 Cr",
            image : "images2/g.webp"
        },
        {
            CarName : "Jaguar F-pace",
            Category : "Jaguar",
            price : "72.90 Lakh",
            image : "images2/F.webp"
        },
        {
            CarName : "Rolls-Royce Phantom",
            Category : "Rolls Royce",
            price : "9.50 Cr",
            image : "images2/Phantom.webp"
        },
        {
            CarName : "Rolls-Royce Cullinan",
            Category : "Rolls Royce",
            price : "6.95 Cr",
            image : "images2/Cullian.webp"
        },
        {
            CarName : "Rolls-Royce Spectre",
            Category : "Rolls Royce",
            price : "7.50 Cr",
            image : "images2/spectre.webp"
        },
        {
            CarName : "Jeep Compass",
            Category : "Jeep",
            price : "18.99 Lakh",
            image : "images2/compass.webp"
        },
        {
            CarName : "Jeep Meridian",
            Category : "Jeep",
            price : "24.99 Lakh",
            image : "images2/meridian.webp"
        }
    ],
}
for(let i of cars.data){
    let card = document.createElement("div");
    card.classList.add("card","i.category",);
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div")
    container.classList.add("container");
    
    //product name

    let name = document.createElement("h5");
    name.classList.add("CarName");
    name.innerText = i.CarName.toUpperCase();
    container.appendChild(name);

    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);

    document.getElementById("products").appendChild(card);
}