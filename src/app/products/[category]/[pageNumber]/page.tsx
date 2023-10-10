import { getProducts } from "@/api/product";
import { ProductsList } from "@/components/organisms/ProductsList";

export async function generateStaticParams({
	params: { category },
}: {
	params: { category: string };
}) {
	if (category === "boots") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
	}
}

export default async function ProductsCategoryPageNumberPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const { pageNumber } = params;
	const pageNumberNumber = Number(pageNumber);
	const products = await getProducts(pageNumberNumber ?? 1);

	return <ProductsList products={products} />;
}
