import './assets/css/style.css';

const foods = document.querySelectorAll(".food");
const beverages = document.querySelectorAll(".beverage");
const desserts = document.querySelectorAll(".dessert");
const selectedMeals = [];
const selectBtn = document.querySelector(".select-button");
const meals = document.querySelector(".meals");
const container = document.querySelector(".container");
const confirmOrder = document.querySelector(".confirm-order");
const confirmBtn = document.querySelector('#confirm-order-btn')

foods.forEach((food) => {
  food.addEventListener("click", () => {
    let previousSelected;
    if ((previousSelected = document.querySelectorAll(".selected"))) {
      previousSelected.forEach((element) => {
        if (element.classList.contains("food")) {
          element.classList.remove("selected");
          selectedMeals.pop(food);
        }
      });
    }
    food.classList.toggle("selected");
    selectedMeals.push(food);
    if (selectedMeals.length === 3) {
      selectBtn.disabled = false;
      selectBtn.classList.add('order-button');
      selectBtn.innerText = 'Fechar pedido';
    }
  });
});
beverages.forEach((beverage) => {
  beverage.addEventListener("click", () => {
    let previousSelected;
    if ((previousSelected = document.querySelectorAll(".selected"))) {
      previousSelected.forEach((element) => {
        if (element.classList.contains("beverage")) {
          element.classList.remove("selected");
          selectedMeals.pop(beverage);
        }
      });
    }
    beverage.classList.toggle("selected");
    selectedMeals.push(beverage);

    if (selectedMeals.length === 3) {
      selectBtn.disabled = false;
      selectBtn.classList.add('order-button');
      selectBtn.innerText = 'Fechar pedido!';
    }
  });
});
desserts.forEach((dessert) => {
  dessert.addEventListener("click", () => {
    let previousSelected;
    if ((previousSelected = document.querySelectorAll(".selected"))) {
      previousSelected.forEach((element) => {
        if (element.classList.contains("dessert")) {
          element.classList.remove("selected");
          selectedMeals.pop(dessert);
        }
      });
    }
    dessert.classList.toggle("selected");
    selectedMeals.push(dessert);

    if (selectedMeals.length === 3) {
      selectBtn.disabled = false;
      selectBtn.classList.add('order-button')
      selectBtn.innerText = 'Fechar pedido!';
    }
  });
});

const chosenFood = document.querySelector(".chosen-food");
const chosenBeverage = document.querySelector(".chosen-beverage");
const chosenDessert = document.querySelector(".chosen-dessert");
const chosenFoodPrice = document.querySelector(".chosen-food-price");
const chosenBeveragePrice = document.querySelector(".chosen-beverage-price");
const chosenDessertPrice = document.querySelector(".chosen-dessert-price");
const totalContainer = document.querySelector(".total-div");
const cancelBtn = document.querySelector(".cancel-button");
let totalPrice = 0;

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  confirmOrder.classList.add("hidden");
  container.classList.remove("transparent");
  totalPrice = 0;
});

selectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  confirmOrder.classList.remove("hidden");
  container.classList.add("transparent");

  selectedMeals.forEach((element) => {
    const mealName = element.querySelector("h2");
    const mealPrice = element.querySelector("h3");
    let priceInNumbers = mealPrice.textContent.replace("R$ ", "");
    priceInNumbers = Number(priceInNumbers.replace(",", "."));

    if (element.classList.contains("food")) {
      chosenFood.innerText = mealName.textContent;
    } else if (element.classList.contains("beverage")) {
      chosenBeverage.innerText = mealName.textContent;
    } else {
      chosenDessert.innerText = mealName.textContent;
    }

    if (element.classList.contains("food")) {
      chosenFoodPrice.innerText = mealPrice.textContent.replace(".", ",");
    } else if (element.classList.contains("beverage")) {
      chosenBeveragePrice.innerText = mealPrice.textContent.replace(".", ",");
    } else if (element.classList.contains("dessert")) {
      chosenDessertPrice.innerText = mealPrice.textContent.replace(".", ",");
    }
    totalPrice += priceInNumbers;
    totalContainer.innerText = `R$ ${totalPrice.toFixed(2)}`;
    return totalPrice;
  });
});

console.log(`SendMessage()`)
//whatsapp message

 confirmBtn.addEventListener('click', () => {
    const message = `Olá, gostaria de fazer o pedido: \n
    - Prato: ${chosenFood.innerText} \n
    - Bebida: ${chosenBeverage.innerText} \n
    - Sobremesa: ${chosenDessert.innerText} \n
    Total: R$ ${totalPrice.toFixed(2)}`
    window.location.href = `https://wa.me/5511999999999?text=${message}`
 })

