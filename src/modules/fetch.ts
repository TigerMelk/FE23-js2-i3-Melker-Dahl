import { Prod } from "./prodType.js";
async function getProducts(search?: string): Promise<Prod[]> {
	let url: string;
	if (search) {
		url = `https://dummyjson.com/products/search?q=${search}`;
	} else url = "https://dummyjson.com/products";
	const res = await fetch(url);
	const data = await res.json();
	const products = data.products;
	console.log(products);

	return products as Prod[];
}

export { getProducts };
