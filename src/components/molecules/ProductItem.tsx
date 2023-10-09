import { ProductItemDescription } from "@/components/atoms/ProductItemDescription";
import { ProductItemImage } from "@/components/atoms/ProductItemImage";

export const ProductItem = () => {
	return (
		<article className="flex flex-col items-center">
			<ProductItemImage
				src="https://images.pexels.com/photos/5220/water-sign-arrow-direction.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
				alt="koszulka"
			/>
			<ProductItemDescription description="desc" title="title" price={20} />
		</article>
	);
};
