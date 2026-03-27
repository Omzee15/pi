'use client';
import React from 'react';
import Image from 'next/image';
import Lenis from 'lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { BlogShowcase } from "@/components/ui/BlogShowcase";
import { FAQ } from "@/components/ui/FAQ";
import { HomepageEnding } from "@/components/ui/HomepageEnding";
import { Footer } from "@/components/Footer";
import { useHeaderLogo } from "@/lib/header-logo-context";

export default function DefaultDemo() {
	const heroLogoRef = React.useRef<HTMLDivElement>(null);
	const { setShowHeaderLogo } = useHeaderLogo();

	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

	// Track hero logo scroll position to trigger header logo
	React.useEffect(() => {
		// Header is fixed at top-6 (24px), its inner div is ~72px tall → bottom ≈ 96px
		const HEADER_BOTTOM = 96;
		const FADE_START = 200; // start fading hero logo 200px above header bottom

		const handleScroll = () => {
			if (!heroLogoRef.current) return;
			const rect = heroLogoRef.current.getBoundingClientRect();
			const logoTop = rect.top;

			if (logoTop > FADE_START) {
				// Fully visible, header logo hidden
				heroLogoRef.current.style.opacity = '1';
				setShowHeaderLogo(false);
			} else if (logoTop > HEADER_BOTTOM) {
				// Fading zone
				const progress = (logoTop - HEADER_BOTTOM) / (FADE_START - HEADER_BOTTOM);
				heroLogoRef.current.style.opacity = String(progress);
				setShowHeaderLogo(false);
			} else {
				// Hero logo fully scrolled into header zone
				heroLogoRef.current.style.opacity = '0';
				setShowHeaderLogo(true);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		// Run once on mount
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, [setShowHeaderLogo]);


	const images = [
		{
			src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
			alt: 'Modern architecture building',
		},
		{
			src: '/pi-labs web design.png',
			alt: 'Pi Labs web design',
		},
		{
			src: '/pi-labs web design-1.png',
			alt: 'Pi Labs web design 1',
		},
		{
			src: '/pi-labs web design-2.png',
			alt: 'Pi Labs web design 2',
		},
		{
			src: '/Untitled 51 6.png',
			alt: 'Pi Labs product showcase',
		},
		{
			src: '/pi-labs web design.png',
			alt: 'Pi Labs web design',
		},
		{
			src: '/pi-labs web design-1.png',
			alt: 'Pi Labs web design 1',
		},
	];

	return (
		<main className="min-h-screen w-full">
			{/* Hero Section with Dark Purple Glow Background - wraps the parallax */}
			<div className="hero-bg">
				{/* Hero spacer with floating logo — aligned to header logo position */}
				<div className="h-[65vh] flex items-center">
					<div className="w-[95%] max-w-7xl mx-auto px-6">
						<div
							ref={heroLogoRef}
							style={{
								transition: 'opacity 0.1s linear',
								willChange: 'opacity',
							}}
						>
							<Image
								src="/pilabs-whitesvg.svg"
								alt="Pi Labs"
								width={480}
								height={140}
								className="w-[300px] md:w-[420px] h-auto"
								priority
							/>
						</div>
					</div>
				</div>
				<ZoomParallax images={images} />
			</div>
			
			{/* Content below hero — sits above the fixed background image */}
			<div className="relative z-[1]">
			{/* Blog Section - continues after zoom effect */}
			<section className="relative bg-white pt-16 md:pt-24">
				<div className="py-4 md:py-6">
					<div className="max-w-7xl mx-auto px-4 md:px-6">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-foreground">
							Latest Insights
						</h2>
						<p className="text-muted-foreground text-center max-w-2xl mx-auto mb-1">
							Discover the latest in AI, robotics, and intelligent technology from our team
						</p>
					</div>
					<BlogShowcase />
				</div>
			</section>

			{/* FAQ Section */}
			<FAQ />

			{/* Homepage Ending Animation */}
			<HomepageEnding />

			{/* Spacer */}
			<div className="h-24 md:h-32 bg-white" />

			{/* Footer */}
			<Footer />
			</div>
		</main>
	);
}
