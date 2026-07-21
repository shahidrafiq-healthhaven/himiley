export function PrivacyBackground() {
	return (
		<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden privacy-noise">
			<div className="absolute inset-0 bg-gradient-to-b from-miley-blush/40 via-white to-[#F5F5F5]" />
			<div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-miley-burgundy/10 blur-3xl" />
			<div className="absolute top-1/3 -right-32 h-[380px] w-[380px] rounded-full bg-miley-pink/15 blur-3xl" />
			<div className="absolute bottom-20 left-1/4 h-[300px] w-[300px] rounded-full bg-miley-blush/60 blur-3xl" />
		</div>
	);
}
