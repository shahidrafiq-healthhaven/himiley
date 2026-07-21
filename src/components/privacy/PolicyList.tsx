interface PolicyListProps {
	items: string[];
}

export function PolicyList({ items }: PolicyListProps) {
	return (
		<ul className="grid list-disc gap-2 pl-5 marker:text-miley-burgundy md:grid-cols-2 md:gap-x-10">
			{items.map((item) => (
				<li key={item} className="text-[16px] leading-[1.75] text-[#555555] sm:text-[17px]">
					{item}
				</li>
			))}
		</ul>
	);
}
