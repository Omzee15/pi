'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Lenis from 'lenis'
import { ZoomParallax } from "@/components/ui/zoom-parallax";

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
			<div className="relative flex h-[50vh] items-center justify-center">
				{/* Radial spotlight */}
				<div
					aria-hidden="true"
					className={cn(
						'pointer-events-none absolute -top-1/2 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full',
						'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
						'blur-[30px]',
					)}
				/>
			</div>
			<ZoomParallax images={images} />
			<div className="h-[50vh]"/>
		</main>
	);
}
