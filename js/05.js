// #region Завдання 5
// console.log("Section 5 start");
const inputEl = document.getElementById("name-input");
const outputEl = document.getElementById("name-output");

inputEl.addEventListener("input", updateOutputEl);

function updateOutputEl() {
	outputEl.textContent = inputEl.value.length === 0 ? "Anonymous" : inputEl.value;
}

// console.log("Section 5 end");
// console.log("--------------------------");
// #endregion
