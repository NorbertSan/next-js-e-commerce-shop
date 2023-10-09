"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const ActiveLink = <T extends string>({
	children,
	href,
}: {
	children: ReactNode;
	href: Route<T> | URL;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			prefetch
			className={clsx(`text-blue-400 hover:text-blue-600`, isActive && `underline`)}
		>
			{children}
		</Link>
	);
};
