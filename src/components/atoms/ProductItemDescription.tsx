export const ProductItemDescription = ({
	description,
	title,
	price,
}: {
	description: string;
	title: string;
	price: number;
}) => {
	return (
		<section>
			{description}
			{title}
			{Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)}
		</section>
	);
};
