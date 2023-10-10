import { getProductById, getProducts } from "@/api/product";
import { ProductItem } from "@/components/molecules/ProductItem";

export async function generateStaticParams() {
	const products = await getProducts();
	return products.map((product) => ({
		productId: product.id,
	}));
}

export async function generateMetadata({ params }: { params: { productId: string } }) {
	const { productId } = params;
	const product = await getProductById(productId);

	return {
		title: product.title,
		description: product.description,
	};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const { productId } = params;
	const product = await getProductById(productId);

	return <ProductItem product={product} />;
}
