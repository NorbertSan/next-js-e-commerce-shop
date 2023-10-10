import { getProducts } from "@/api/product";
import { Pagination } from "@/components/molecules/Pagination";
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
	const pageNumber = params.pageNumber?.[0];
	const pageNumberNumber = Number(pageNumber) || 1;
	const products = await getProducts(pageNumberNumber);

	return (
		<>
			<ProductsList products={products} />
			<Pagination />
		</>
	);
}
