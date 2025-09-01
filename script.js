const addBunButton = document.getElementById('addBun');
const addMeatButton = document.getElementById('addMeat');
const addCheeseButton = document.getElementById('addCheese');
const addVeggiesButton = document.getElementById('addVeggies');
const addSauceButton = document.getElementById('addSauce');
const addCapButton = document.getElementById('addCap');

function toggleIngredient(name, className, button) {
    const existing = document.querySelector("." + className);

    if (existing === null) {
        const layer = document.createElement("div");
        layer.innerText = name;
        layer.classList.add(className);
        document.getElementById("sandwich").appendChild(layer);
        button.innerText = "Remove " + name;
    } else {
        existing.remove();
        button.innerText = "Add " + name;
    }
}

addBunButton.onclick = function() {
    toggleIngredient("Bun", "addBun", addBunButton);
};

addMeatButton.onclick = function() {
    toggleIngredient("Meat", "addMeat", addMeatButton);
};

addCheeseButton.onclick = function() {
    toggleIngredient("Cheese", "addCheese", addCheeseButton);
};

addVeggiesButton.onclick = function() {
    toggleIngredient("Veggies", "addVeggies", addVeggiesButton);
};

addSauceButton.onclick = function() {
    toggleIngredient("Sauce", "addSauce", addSauceButton);
};

addCapButton.onclick = function() {
    toggleIngredient("Cap", "addCap", addCapButton);
};

const order = ["addCap", "addSauce", "addVeggies", "addCheese", "addMeat", "addBun"];

function reorderSandwich() {
    const sandwich = document.getElementById("sandwich");
    const layers = {};
    order.forEach(className => {
        layers[className] = document.querySelector("." + className);
    });
    sandwich.innerHTML = "";
    order.forEach(className => {
        if (layers[className]) {
            sandwich.appendChild(layers[className]);
        }
    });
}
setInterval(reorderSandwich);
