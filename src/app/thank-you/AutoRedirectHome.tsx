"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AutoRedirectHome() {
	const router = useRouter();

	useEffect(() => {
		const timer = window.setTimeout(() => {
			router.replace("/");
		}, 10000);
		return () => window.clearTimeout(timer);
	}, [router]);

	return null;
}
