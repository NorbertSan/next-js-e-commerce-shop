import Link from "next/link";
import { ProductItem } from "../molecules/ProductItem";
import { type ProductItemType } from "@/types/product";

export const ProductsList = ({ products }: { products: ProductItemType[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => (
				<li key={product.id}>
					<Link href={`/product/${product.id}`}>
						<ProductItem product={product} />
					</Link>
				</li>
			))}
		</ul>
	);
};
