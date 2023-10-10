import { type ReactNode } from "react";

export const ProductItemHeading = ({ children }: { children: ReactNode }) => {
	return <h1 role="heading">{children}</h1>;
};
