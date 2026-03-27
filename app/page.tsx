'use client';
import React from 'react';
import Image from 'next/image';
import Lenis from 'lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { BlogShowcase } from "@/components/ui/BlogShowcase";
import { FAQ } from "@/components/ui/FAQ";
import { HomepageEnding } from "@/components/ui/HomepageEnding";
import { Footer } from "@/components/Footer";

export default function DefaultDemo() {
	React.useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])


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
				<div className="h-[65vh] flex items-center justify-center">
					{/* <Image
						src="/pi-labslogo_white-text.svg"
						alt="Pi Labs"
						width={500}
						height={116}
						className="w-[280px] md:w-[400px] lg:w-[500px] h-auto"
						priority
					/> */}
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
