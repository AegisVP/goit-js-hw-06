// #region Завдання 3
// console.log("Section 3 start");
const section3El = document.querySelector(".section3");
const galeryEl = section3El.querySelector(".gallery");
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
// section2El.querySelector("ul#gallery");
const imagesElArray = images.map(({url, alt}) => {
	return `
  <li class="s3__item"><img src="${url}" alt="${alt}" width="320" class="s3__image"></li>`;
});

galeryEl.insertAdjacentHTML("beforeend", imagesElArray.join(""));

// console.log("Section 3 end");
// console.log("--------------------------");
// #endregion
