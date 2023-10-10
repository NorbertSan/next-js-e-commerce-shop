export interface ProductItemType {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: ProductItemRating;
	image: string;
	longDescription: string;
}

export interface ProductItemRating {
	rate: number;
	count: number;
}
