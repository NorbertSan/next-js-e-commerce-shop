import { ActiveLink } from "@/components/atoms/ActiveLink";

export const Navigation = () => {
	return (
		<nav>
			<ul className="flex flex-row justify-center gap-3">
				<li>
					<ActiveLink href="/">Home</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/products">Products</ActiveLink>
				</li>
			</ul>
		</nav>
	);
};
