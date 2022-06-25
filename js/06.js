// #region Завдання 6
console.log("Section 6 start");
const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", validateInputLength);

function validateInputLength() {
	console.log("inputEl.value.length", inputEl.value.length);
	if (inputEl.value.length == inputEl.dataset.length) {
		if (inputEl.classList.contains("invalid")) inputEl.classList.remove("invalid");
		if (!inputEl.classList.contains("valid")) inputEl.classList.add("valid");
		return;
	}

	if (inputEl.classList.contains("valid")) inputEl.classList.remove("valid");
	if (!inputEl.classList.contains("invalid")) inputEl.classList.add("invalid");
}

console.log("Section 6 end");
console.log("--------------------------");
// #endregion
