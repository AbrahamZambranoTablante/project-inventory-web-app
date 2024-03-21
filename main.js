const form = document.querySelector(".form__inputs");

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const imgUrlInput = e.target.url.value;
    const nameInput = e.target.name.value;
    const priceInput = e.target.price.value;
    const typeInput = e.target.type.value;
    const heightInput = e.target.height.value;
    const weightInput = e.target.weight.value;
    
    
    const pokemonImage = document.createElement("img");

    const name = document.createElement("h2");

    const type = document.createElement("p")
    type.classList.add("type");

    const height = document.createElement("p");
    height.classList.add("height");

    const weight = document.createElement("p");
    weight.classList.add("weight");

    const price = document.createElement("p");
    price.classList.add("price");


    pokemonImage.setAttribute("src", imgUrlInput);
    pokemonImage.setAttribute("alt", nameInput);

    name.innerText = nameInput;
    type.innerText = typeInput;
    height.innerText = heightInput;
    weight.innerText = `${weightInput} lbs`;
    price.innerText = `$${priceInput}.00`;

    const formField = document.querySelector(".form-field");


    if(imgUrlInput.length === 0){
        const li = document.createElement("li");
        li.innerText = "Please fill out Image URL field before submitting";
        li.classList.add("error");
        formField.appendChild(li);
    } 

    if(nameInput.length === 0){
        const li = document.createElement("li");
        li.innerText = "Please fill out NAME field before submitting";
        li.classList.add("error");
        formField.appendChild(li);
    }

    if(priceInput.length === 0){
        const li = document.createElement("li");
        li.innerText = "Please fill out PRICE field before submitting";
        li.classList.add("error");
        formField.appendChild(li);
    }

    const article = document.createElement("article");
    article.classList.add("article-template");

    const imageSection = document.createElement("section");
    imageSection.setAttribute("id","image");
    imageSection.appendChild(pokemonImage);

    const infoSection = document.createElement("section");
    infoSection.setAttribute("id","description");

    const pokemonInfo = document.createElement("div");
    pokemonInfo.classList.add("info");

    const buttonSection = document.createElement("div");
    buttonSection.classList.add("button-section");

    const stockButtons = document.createElement("div");
    stockButtons.classList.add("stock-buttons");

    const incrementButton = document.createElement("button");
    incrementButton.setAttribute("id", "increment");
    incrementButton.innerText = "+";

    const stockNum = document.createElement("span");
    stockNum.classList.add("numInStock");

    const currentStock = document.createElement("div");
    currentStock.setAttribute("id", "stock");
    currentStock.innerText = " In Stock";
    stockNum.innerText = "1";
    

    
    const decrementButton = document.createElement("button");
    decrementButton.setAttribute("id", "decrement");
    decrementButton.innerText = "-";

    const removeButton = document.createElement("button");
    removeButton.setAttribute("id", "remove");
    removeButton.innerText = "Remove";

    currentStock.prepend(stockNum);

    stockButtons.append(incrementButton, currentStock, decrementButton);

    buttonSection.append(stockButtons, removeButton);
    
    pokemonInfo.append(type, height, weight, price);

    infoSection.append(name, pokemonInfo, buttonSection);

    article.append(imageSection, infoSection)

    const itemsField = document.querySelector(".items-field");

    if(imgUrlInput.length > 0 && nameInput.length > 0 && priceInput.length > 0){
        itemsField.append(article);
    }

    deleteItem();

    increaseStock();

    decreaseStock();

    const formCotainer = document.querySelector(".form-container");
    
    form.reset();
});



const deleteItem = () => {

    const removeButton = document.querySelectorAll("#remove");
    
    for(let x of removeButton){
        
        x.addEventListener("click", (e) => {
            e.target.parentNode.parentNode.parentNode.remove();
        })
    }
};



const increaseStock = () => {
    
    const increaseButton = document.querySelectorAll("#increment");
    
    
    for(let x of increaseButton){
        
        x.addEventListener("click", () => {
            let count =  Number(x.parentNode.querySelector(".numInStock").innerText);
            count++
            x.parentNode.querySelector(".numInStock").innerText = count;


        })
    }
    
};


const decreaseStock = () => {
    
    const decreaseButton = document.querySelectorAll("#decrement");
    
    
    for(let x of decreaseButton){
        
        x.addEventListener("click", () => {
            let count =  Number(x.parentNode.querySelector(".numInStock").innerText);
            if(count > 0){
                count--
                x.parentNode.querySelector(".numInStock").innerText = count;
            }
        })
    }
    
};


deleteItem();

increaseStock();

decreaseStock();