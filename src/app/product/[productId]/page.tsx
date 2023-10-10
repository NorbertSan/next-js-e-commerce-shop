import { type ProductItemType } from "@/types/product";

const getProduct = async (id: string) => {
	const response = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const product = (await response.json()) as unknown as ProductItemType;

	return product;
};

export async function generateMetadata({ params }: { params: { productId: string } }) {
	const { productId } = params;
	const product = await getProduct(productId);

	return {
		title: product.title,
		description: product.description,
	};
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const { productId } = params;
	const product = await getProduct(productId);

	return (
		<article>
			<p>{product.description}</p>
			<pre data-testid="product">{JSON.stringify(product, null, 2)}</pre>;
		</article>
	);
}
