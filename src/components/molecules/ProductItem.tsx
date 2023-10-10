import { ProductItemHeading } from "../atoms/ProductItemHeading";
import { ProductItemDescription } from "@/components/atoms/ProductItemDescription";
import { ProductItemImage } from "@/components/atoms/ProductItemImage";
import { type ProductItemType } from "@/types/product";

export const ProductItem = ({ product }: { product: ProductItemType }) => {
	return (
		<article className="flex flex-col items-center">
			<ProductItemHeading>{product.title}</ProductItemHeading>
			<ProductItemImage src={product.image} alt={product.title} />
			<ProductItemDescription description={product.description} price={product.price} />
		</article>
	);
};
