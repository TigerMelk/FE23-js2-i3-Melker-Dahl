export type Prod = {
	id?: number;
	thumbnail: string;
	title: string;
	description: string;
	rating: number;
	stock: number;
	category:
		| "smartphones"
		| "laptops"
		| "lighting"
		| "fragrances"
		| "skincare"
		| "groceries"
		| "home-decoration"
		| "furniture"
		| "tops"
		| "womens-dresses"
		| "womens-shoes"
		| "mens-shirts"
		| "mens-shoes"
		| "mens-watches"
		| "womens-watches"
		| "womens-bags"
		| "womens-jewellery"
		| "sunglasses"
		| "automotive"
		| "motorcycle";
	price: number;
};
