import Link from "next/link";

export const Pagination = () => {
	return (
		<section aria-label="pagination" className="flex flex-row gap-3">
			{Array.from({ length: 10 }, (_, index) => (
				<Link key={index} href={`/products/${index + 1}`}>
					<button
						className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100"
						role="button"
					>
						{index + 1}
					</button>
				</Link>
			))}
		</section>
	);
};
