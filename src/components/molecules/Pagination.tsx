export const Pagination = () => {
	return (
		<section>
			{Array.from({ length: 10 }, (_, index) => (
				<div key={index}>{index}</div>
			))}
		</section>
	);
};
