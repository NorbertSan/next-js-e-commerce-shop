export async function generateStaticParams() {
	// get all categories from api

	return [{ category: "boots" }, { category: "t-shirts" }];
}

export default function ProductsCategoryLayout({ children }: { children: React.ReactNode }) {
	return children;
}
