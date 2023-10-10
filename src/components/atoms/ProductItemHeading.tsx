import { type ReactNode } from "react";

export const ProductItemHeading = ({ children }: { children: ReactNode }) => {
	return <h2 role="heading">{children}</h2>;
};
