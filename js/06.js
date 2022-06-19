// #region Завдання 1
console.log("Section 1 start");
const section1El = document.querySelector(".section1");
const list1El = section1El.querySelector("ul#categories");
const list1ItemEl = list1El.querySelectorAll(".item");

console.log(` - Number of categories: ${list1ItemEl.length}`);

list1ItemEl.forEach(element => {
	console.log(` - Category: ${element.querySelector("h2").textContent}`);
	console.log(` - Elements: ${element.querySelectorAll("ul > li").length}`);
});

console.log("Section 1 end");
console.log("--------------------------");
// #endregion

// #region Завдання 2
// console.log("Section 2 start");
const section2El = document.querySelector('.section2');
const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = [];

ingredients.forEach((ingredient) => {
 // Creating new LI item
	const liEl = document.createElement("li");

	// Setting text to LI and class to "item"
	liEl.textContent = ingredient;
	liEl.className = "item";

  // Adding created LI to list
  ingredientsList.push(liEl);
});

	section2El.querySelector("ul#ingredients").append(...ingredientsList);

// console.log("Section 2 end");
// console.log("--------------------------");

// console.log("Section 2 start");
// const section2El = document.querySelector(".section2");
// const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

// const ingredientsListNewEl = document.createElement("ul");
// ingredientsListNewEl.setAttribute("id", "ingredients");

// ingredients.forEach(ingredient => {
// 	// Creating new LI item
// 	const liEl = document.createElement("li");

// 	// Setting text and class to LI
// 	liEl.textContent = ingredient;
// 	liEl.className = "item";

// 	// Adding created LI to list
// 	ingredientsListNewEl.append(liEl);
// });

// section2El.querySelector("ul#ingredients").replaceWith(ingredientsListNewEl);

// console.log("Section 2 end");
// console.log("--------------------------");

// #endregion

// #region Завдання 3
console.log("Section 3 start");
const section3El = document.querySelector(".section3");
const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];
const imagesElArray = [];
// section2El.querySelector("ul#gallery");

images.forEach((image) => {
  const imageEl = document.createElement('a');
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  imagesElArray.push(imageEl);
})

console.log(imagesElArray);

console.log("Section 3 end");
console.log("--------------------------");
// #endregion

// // #region Завдання 4
// console.log("Section 4 start");
// const section4El = document.querySelector(".section4");

// console.log("Section 4 end");
// console.log("--------------------------");
// // #endregion

// // #region Завдання 5
// console.log("Section 5 start");
// const section5El = document.querySelector(".section5");

// console.log("Section 5 end");
// console.log("--------------------------");
// // #endregion

// // #region Завдання 6
// console.log("Section 6 start");
// console.log("Section 6 end");
// console.log("--------------------------");
// // #endregion

// // #region Завдання 7
// console.log("Section 7 start");
// console.log("Section 7 end");
// console.log("--------------------------");
// // #endregion

// // #region Завдання 8
// console.log("Section 8 start");
// console.log("Section 8 end");
// console.log("--------------------------");
// // #endregion

// // #region Завдання 9
// console.log("Section 9 start");
// console.log("Section 9 end");
// console.log("--------------------------");
// // #endregion

// // #region Завдання 10
// console.log("Section 10 start");
// console.log("Section 10 end");
// // #endregion
