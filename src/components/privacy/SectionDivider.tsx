import { cn } from "@/lib/utils";

interface SectionDividerProps {
	variant?: "gradient" | "fade";
}

export function SectionDivider({ variant = "gradient" }: SectionDividerProps) {
	if (variant === "fade") {
		return <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E0E0E0] to-transparent" />;
	}

	return <div className={cn("h-[2px] w-full bg-gradient-to-r from-miley-burgundy/20 via-miley-pink/40 to-transparent")} />;
}
