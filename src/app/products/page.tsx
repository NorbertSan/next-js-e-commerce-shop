import { getProducts } from "@/api/product";
import { ProductsList } from "@/components/organisms/ProductsList";

export default async function ProductsPage() {
	const products = await getProducts();

	return <ProductsList products={products} />;
}
