'use client';
import { Header } from '@/widgets/Header';
import { FC } from 'react';

export const DefaultLayout: FC<IWrapper> = async ({ children }) => {
	return (
		<main>
			<Header />
			{children}
		</main>
	);
};
export default DefaultLayout;
