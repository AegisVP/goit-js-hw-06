// #region Завдання 8
console.log("Section 8 start");
const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", validateFormSubmit);

function validateFormSubmit(form) {
	const returnUser = {};

	form.preventDefault();
	console.log("validating");

	for (const child of formEl.querySelectorAll("input")) {
		console.log(`${child?.name} = "${child?.value}"`);

    if (!child?.value) {
      window.alert("All fields must be filled out!");
      return;
    } else {
      returnUser[child.name] = child?.value;
    }
	}

	console.log(returnUser);

	this.reset();
}

console.log("Section 8 end");
console.log("--------------------------");
// #endregion
