"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const removeLastTrailingSlash = (str: string) => str.replace(/\/$/, "");

export const ActiveLink = <T extends string>({
	className,
	activeClassName,
	children,
	exact = false,
	href,
}: {
	className?: string;
	activeClassName?: string;
	children: ReactNode;
	exact?: boolean;
	href: Route<T>;
}) => {
	const pathname = usePathname();
	const isActive =
		exact || href === "/" ? pathname === href : pathname.startsWith(removeLastTrailingSlash(href));
	const activeClasses = activeClassName ?? `underline`;

	return (
		<Link
			href={href}
			aria-current={isActive || undefined}
			className={clsx(`text-blue-400 hover:text-blue-600`, className, isActive && activeClasses)}
		>
			{children}
		</Link>
	);
};
