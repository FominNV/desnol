'use client';
import { Container } from '@/shared/ui';
import { FC } from 'react';

export const PageContentLayout: FC<IWrapper> = ({ children, className }) => {
	return (
		<Container>
			<div className={`page-content-layout h-full flex flex-column gap-3 py-6 ${className}`}>{children}</div>
		</Container>
	);
};
