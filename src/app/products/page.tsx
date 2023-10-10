import { ProductsList } from "@/components/organisms/ProductsList";
import { type ProductItemType } from "@/types/product";

const getProducts = async () => {
	const products = (await fetch(
		"https://naszsklep-api.vercel.app/api/products?take=20",
	)) as unknown as ProductItemType[];

	return products;
};

export default async function ProductsPage() {
	const products = await getProducts();

	return <ProductsList products={products} />;
}
