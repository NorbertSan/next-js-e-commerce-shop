export const ProductItemDescription = ({
	description,

	price,
}: {
	description: string;

	price: number;
}) => {
	return (
		<section>
			<p>{description}</p>

			<span>
				{Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price)}
			</span>
		</section>
	);
};
