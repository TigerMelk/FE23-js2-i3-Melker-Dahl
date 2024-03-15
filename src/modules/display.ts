import { Prod } from "./prodType.js";

function displayProducts(products: Prod[]): void {
	const container = document.getElementById("mainContainer") as HTMLDivElement;
	container.innerHTML = "";
	products.forEach((product) => {
		createProdCard(product, container);
	});
}
function createProdCard(product: Prod, container: HTMLDivElement): void {
	const { thumbnail, title, description, rating, stock, category, price } =
		product;
	const card = document.createElement("div");
	card.classList.add("prodCard");
	const imgEl = document.createElement("img");
	const titleEl = document.createElement("h3");
	const descriptionEl = document.createElement("p");
	const ratingEl = document.createElement("p");
	const stockEl = document.createElement("p");
	const categoryEl = document.createElement("p");
	const priceEl = document.createElement("p");
	const buyBtn = document.createElement("button");
	buyBtn.innerText = "Add to Cart";
	imgEl.src = thumbnail;
	titleEl.innerText = title;
	descriptionEl.innerText = description;
	ratingEl.innerText = "Rating - " + rating.toString();
	stockEl.innerText = "Stock - " + stock.toString();
	categoryEl.innerText = category;
	priceEl.innerText = `$${price.toString()}`;
	if (stock <= 10) {
		stockEl.classList.add("stockAlert");
		stockEl.innerText = "Stock running low - " + stock.toString();
	}
	if (
		category === "smartphones" ||
		category === "laptops" ||
		category === "lighting"
	)
		card.classList.add("electronic");
	else if (
		category === "fragrances" ||
		category === "skincare" ||
		category === "groceries" ||
		category === "home-decoration" ||
		category === "furniture"
	)
		card.classList.add("homeDec");
	else if (
		category === "tops" ||
		category === "womens-dresses" ||
		category === "womens-shoes" ||
		category === "mens-shirts" ||
		category === "mens-shoes" ||
		category === "mens-watches" ||
		category === "womens-watches" ||
		category === "womens-bags" ||
		category === "womens-jewellery" ||
		category === "sunglasses"
	)
		card.classList.add("clothing");
	else if (category === "automotive" || category === "motorcycle")
		card.classList.add("vehicles");

	card.append(
		imgEl,
		titleEl,
		descriptionEl,
		ratingEl,
		stockEl,
		categoryEl,
		priceEl,
		buyBtn
	);
	container.append(card);
}

export { displayProducts };
