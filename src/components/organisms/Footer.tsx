import { ActiveLink } from "@/components/atoms/ActiveLink";

export const Footer = () => {
	return (
		<footer className="mt-auto">
			<ul className="flex flex-row justify-center gap-3">
				<li>
					<ActiveLink href="/polityka-prywatnosci">Polityka prywatności</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/regulamin">Regulamin</ActiveLink>
				</li>
			</ul>

			<p className="text-center">@2023</p>
		</footer>
	);
};
