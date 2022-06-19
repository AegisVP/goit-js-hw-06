// #region Завдання 7
console.log("Section 7 start");
const inputEl = document.getElementById('font-size-control');
const outputEl = document.getElementById('text');
let currentFontSize = inputEl.value;

console.log(" - inputEl:", inputEl);
console.log(" - outputEl:", outputEl);

function getCurrentSliderValue() {
  currentFontSize = inputEl.value;
  updateTextDisplay();
}

function updateTextDisplay(size = currentFontSize) {
  console.log(' - updateTextDisplay(size=' + size + ')');
	outputEl.style.fontSize = `${size}px`;
  console.log(' - font-size:' + outputEl.style.fontSize);
}

inputEl.addEventListener('input', getCurrentSliderValue);

console.log("Section 7 end");
console.log("--------------------------");
// #endregion
getCurrentSliderValue();