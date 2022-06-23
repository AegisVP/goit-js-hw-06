// #region Завдання 9
console.log("Section 9 start");
const bgColorDisplayEl = document.querySelector(".color");
const changeColorButtonEl = document.querySelector(".change-color");

let bgColor = "#FFFFFF";
changeColorButtonEl.addEventListener("click", updateBackgroundColor);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

function updateBackgroundColor() {
	const newColor = getRandomHexColor();
	document.body.style.backgroundColor = newColor;
	bgColorDisplayEl.textContent = newColor;
}

// calling color update once by default
updateBackgroundColor();

console.log("Section 9 end");
console.log("--------------------------");
// #endregion
