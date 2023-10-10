import { getProducts } from "@/api/product";
import { ProductsList } from "@/components/organisms/ProductsList";

export async function generateStaticParams() {
	const pagesToGenerate = 10;
	return Array.from({ length: pagesToGenerate }, (_, i) => ({ pageNumber: [(i + 1).toString()] }));
}

export default async function ProductsCategoryPageNumberPage({
	params,
}: {
	params: { pageNumber: string[] };
}) {
	console.log(params);
	// const { pageNumber } = params;
	// const pageNumberNumber = Number(pageNumber);
	const products = await getProducts(1);

	return <ProductsList products={products} />;
}
