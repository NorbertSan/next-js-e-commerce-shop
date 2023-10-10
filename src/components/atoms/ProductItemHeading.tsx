import { type ReactNode } from "react";

export const ProductItemHeading = ({ children }: { children: ReactNode }) => {
	return (
		<h1 className="mb-6 text-2xl font-bold " role="heading">
			{children}
		</h1>
	);
};
