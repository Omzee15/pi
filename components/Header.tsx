'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useHeaderLogo } from '@/lib/header-logo-context';

export function Header() {
	const [productsOpen, setProductsOpen] = React.useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
	const { showHeaderLogo } = useHeaderLogo();

	return (
		<>
			<header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
				<div className={cn(
					"flex items-center justify-between px-6 py-4",
					"bg-white/70 dark:bg-black/70",
					"backdrop-blur-lg backdrop-saturate-150",
					"border border-white/20 dark:border-white/10",
					"rounded-2xl",
					"shadow-lg shadow-black/5"
				)}>
					{/* Logo — fades in when hero logo has scrolled up to header */}
					<Link href="/" className="flex items-center">
						<Image 
							src="/pi-labslogo_black.svg"
							alt="Pi Labs Logo"
							width={120}
							height={40}
							className="h-8 w-auto dark:invert"
							style={{
								opacity: showHeaderLogo ? 1 : 0,
								transition: 'opacity 0.4s ease',
								pointerEvents: showHeaderLogo ? 'auto' : 'none',
							}}
						/>
					</Link>

					{/* Desktop Navigation Menu - Hidden on Mobile */}
					<nav className="hidden lg:flex items-center gap-8">
						{/* Products with Dropdown */}
						<div 
							className="relative"
							onMouseEnter={() => setProductsOpen(true)}
							onMouseLeave={() => setProductsOpen(false)}
						>
							<button
								onClick={() => setProductsOpen(!productsOpen)}
								className={cn(
									"flex items-center gap-1 text-sm font-medium",
									"text-gray-800 dark:text-gray-200",
									"hover:text-[#0065F4] transition-colors"
								)}
							>
								Products
								<ChevronDown className={cn(
									"w-4 h-4 transition-transform",
									productsOpen && "rotate-180"
								)} />
							</button>
							
							{/* Dropdown Menu */}
							{productsOpen && (
								<div
									className={cn(
										"absolute top-full left-0 w-48",
										"pt-2"
									)}
								>
									<div className={cn(
										"bg-white/90 dark:bg-black/90",
										"backdrop-blur-xl backdrop-saturate-150",
										"border border-white/20 dark:border-white/10",
										"rounded-xl shadow-xl",
										"py-2",
										"animate-in fade-in slide-in-from-top-2 duration-200"
									)}>
										{['pi-vox', 'pi-scout', 'pi-sense', 'pi-authentify', 'pi-securechain', 'pi-phonix'].map((product) => (
											<a
												key={product}
												href={`/${product}`}
												className={cn(
													"block w-full text-left px-4 py-2.5 text-sm",
													"text-gray-700 dark:text-gray-300",
													"hover:bg-[#D8EAFF]/50 hover:text-[#0065F4]",
													"transition-colors"
												)}
											>
												{product}
											</a>
										))}
									</div>
								</div>
							)}
						</div>

						{/* Other Menu Items */}
					{['Resources', 'Company'].map((item) => (
						<button
							key={item}
							className={cn(
								"text-sm font-medium",
								"text-gray-800 dark:text-gray-200",
								"hover:text-[#0065F4] transition-colors"
							)}
						>
							{item}
						</button>
					))}
					
					{/* Blogs Link */}
					<Link
						href="/blog"
						className={cn(
							"text-sm font-medium",
							"text-gray-800 dark:text-gray-200",
							"hover:text-[#0065F4] transition-colors"
						)}
					>
						Blogs
					</Link>
						{/* Contact Button */}
						<button className={cn(
							"px-6 py-2 rounded-lg",
							"text-sm font-medium",
							"hover:opacity-90 transition-opacity"
						)}
						style={{ backgroundColor: '#D8EAFF', color: '#0065F4' }}>
							Contact Us
						</button>
					</nav>

					{/* Mobile Menu Button - Visible on Mobile Only */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className={cn(
							"lg:hidden p-2 rounded-lg",
							"hover:bg-black/5 dark:hover:bg-white/5",
							"transition-colors"
						)}
						aria-label="Toggle menu"
					>
						<Menu className="w-6 h-6" />
					</button>
				</div>
			</header>

			{/* Mobile Side Panel */}
			{mobileMenuOpen && (
				<>
					{/* Backdrop */}
					<div
						className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
						onClick={() => setMobileMenuOpen(false)}
					/>
					
					{/* Side Panel */}
					<div className={cn(
						"lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50",
						"bg-white dark:bg-black",
						"shadow-2xl",
						"animate-in slide-in-from-right duration-300"
					)}>
						{/* Panel Header */}
						<div className="flex items-center justify-between px-6 py-6 border-b border-gray-200 dark:border-gray-800">
							<Image 
								src="/pi-labslogo_black.svg"
								alt="Pi Labs Logo"
								width={100}
								height={32}
								className="h-6 w-auto dark:invert"
							/>
							<button
								onClick={() => setMobileMenuOpen(false)}
								className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
								aria-label="Close menu"
							>
								<X className="w-6 h-6" />
							</button>
						</div>

						{/* Panel Content */}
						<div className="flex flex-col px-6 py-4 overflow-y-auto h-[calc(100%-80px)]">
							{/* Products Section */}
							<div className="mb-6">
								<button
									onClick={() => setProductsOpen(!productsOpen)}
									className={cn(
										"flex items-center justify-between w-full text-left py-3 text-base font-medium",
										"text-gray-800 dark:text-gray-200",
										"hover:text-[#0065F4] transition-colors"
									)}
								>
									Products
									<ChevronDown className={cn(
										"w-5 h-5 transition-transform",
										productsOpen && "rotate-180"
									)} />
								</button>
								{productsOpen && (
									<div className="ml-4 mt-2 space-y-1">
										{['pi-vox', 'pi-scout', 'pi-sense', 'pi-authentify', 'pi-securechain', 'pi-phonix'].map((product) => (
											<a
												key={product}
												href={`/${product}`}
												onClick={() => setMobileMenuOpen(false)}
												className={cn(
													"block py-2.5 px-3 text-sm rounded-lg",
													"text-gray-700 dark:text-gray-300",
													"hover:bg-[#D8EAFF]/50 hover:text-[#0065F4]",
													"transition-colors"
												)}
											>
												{product}
											</a>
										))}
									</div>
								)}
							</div>

							{/* Other Menu Items */}
							<div className="space-y-2 mb-6">
							{['Resources', 'Company'].map((item) => (
								<button
									key={item}
									className={cn(
										"w-full text-left py-3 text-base font-medium",
										"text-gray-800 dark:text-gray-200",
										"hover:text-[#0065F4] transition-colors"
									)}
								>
									{item}
								</button>
							))}
							
							{/* Blogs Link */}
							<Link
								href="/blog"
								onClick={() => setMobileMenuOpen(false)}
								className={cn(
									"block w-full text-left py-3 text-base font-medium",
									"text-gray-800 dark:text-gray-200",
									"hover:text-[#0065F4] transition-colors"
								)}
							>
								Blogs
							</Link>
							{/* Contact Button */}
							<button 
								className={cn(
									"w-full px-6 py-3 rounded-lg",
									"text-base font-medium",
									"hover:opacity-90 transition-opacity"
								)}
								style={{ backgroundColor: '#D8EAFF', color: '#0065F4' }}
							>
								Contact Us
							</button>
						</div>
						</div>
					</div>
				</>
			)}
		</>
	);
}
