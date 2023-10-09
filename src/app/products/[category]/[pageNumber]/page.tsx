export async function generateStaticParams({
	params: { category },
}: {
	params: { category: string };
}) {
	if (category === "boots") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	} else {
		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
	}
}

export default function ProductsCategoryPageNumberPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	const { category, pageNumber } = params;
	return (
		<div>
			Product category {category} pageNumber {pageNumber}
		</div>
	);
}
