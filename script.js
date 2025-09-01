const addBunButton = document.getElementById('addBun');
const addMeatButton = document.getElementById('addMeat');
const addCheeseButton = document.getElementById('addCheese');
const addVeggiesButton = document.getElementById('addVeggies');
const addSauceButton = document.getElementById('addSauce');
const addCapButton = document.getElementById('addCap');


addBunButton.onclick = function() {
    const layer = document.createElement("div");
    layer.innerText = "Bun";
    layer.classList.add("addBun");
    document.getElementById("sandwich").appendChild(layer);
    
};


addMeatButton.onclick = function() {
    const layer = document.createElement("div");
    layer.innerText = "Meat";
    layer.classList.add("addMeat");
    document.getElementById("sandwich").appendChild(layer);
    
};

addCheeseButton.onclick = function() {
    const layer = document.createElement("div");
    layer.innerText = "Cheese";
    layer.classList.add("addCheese");
    document.getElementById("sandwich").appendChild(layer);
};

addVeggiesButton.onclick = function() {
    const layer = document.createElement("div");
    layer.innerText = "Veggies";
    layer.classList.add("addVeggies");
    document.getElementById("sandwich").appendChild(layer);
};

addSauceButton.onclick = function() {
    const layer = document.createElement("div");
    layer.innerText = "Sauce";
    layer.classList.add("addSauce");
    document.getElementById("sandwich").appendChild(layer);
};

addCapButton.onclick = function() {
    const layer = document.createElement("div");
    layer.innerText = "Cap";
    layer.classList.add("addCap");
    document.getElementById("sandwich").appendChild(layer);
};