import { displayProducts } from "./modules/display.js";
import { getProducts } from "./modules/fetch.js";

const form = document.querySelector("form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const searchInput = document.querySelector("#search") as HTMLInputElement;
	const search = searchInput.value;
	getProducts(search).then(displayProducts);
	form.reset();
});

getProducts().then(displayProducts);
