"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const ActiveLink = <T extends string>({
	className,
	activeClassName,
	children,
	href,
}: {
	className?: string;
	activeClassName?: string;
	children: ReactNode;
	href: Route<T> | URL;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;
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
