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
