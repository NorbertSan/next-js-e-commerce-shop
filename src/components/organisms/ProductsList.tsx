import Link from "next/link";
import { ProductItem } from "../molecules/ProductItem";

export const ProductsList = () => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			<li>
				<Link href={`/product/1`}>
					<ProductItem />
				</Link>
			</li>
			<li>
				<Link href={`/product/1`}>
					<ProductItem />
				</Link>
			</li>
			<li>
				<Link href={`/product/1`}>
					<ProductItem />
				</Link>
			</li>
			<li>
				<Link href={`/product/1`}>
					<ProductItem />
				</Link>
			</li>
			<li>
				<Link href={`/product/1`}>
					<ProductItem />
				</Link>
			</li>
		</ul>
	);
};
