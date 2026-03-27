'use client';

import React, { createContext, useContext, useState } from 'react';

interface HeaderLogoContextType {
	showHeaderLogo: boolean;
	setShowHeaderLogo: (v: boolean) => void;
}

const HeaderLogoContext = createContext<HeaderLogoContextType>({
	showHeaderLogo: false,
	setShowHeaderLogo: () => {},
});

export function HeaderLogoProvider({ children }: { children: React.ReactNode }) {
	const [showHeaderLogo, setShowHeaderLogo] = useState(false);

	return (
		<HeaderLogoContext.Provider value={{ showHeaderLogo, setShowHeaderLogo }}>
			{children}
		</HeaderLogoContext.Provider>
	);
}

export function useHeaderLogo() {
	return useContext(HeaderLogoContext);
}
