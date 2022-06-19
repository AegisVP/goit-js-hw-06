// #region Завдання 2
// console.log("Section 2 start");
const section2El = document.querySelector(".section2");
const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = ingredients.map(ingredient => {
	// Creating new LI item
	const liEl = document.createElement("li");

	// Setting text to LI and class to "item"
	liEl.textContent = ingredient;
	liEl.className = "item";

	// Adding created LI to list
	return liEl;
});

section2El.querySelector("ul#ingredients").append(...ingredientsList);

// console.log("Section 2 end");
// console.log("--------------------------");

// #endregion
