import { type ProductItemType } from "@/types/product";

export const getProducts = async (offset: number = 0) => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=20?offset=${offset}`,
	);
	const products = (await response.json()) as unknown as ProductItemType[];

	return products;
};

export const getProductById = async (id: string) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const product = (await response.json()) as unknown as ProductItemType;

	return product;
};
