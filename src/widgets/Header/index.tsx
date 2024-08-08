'use client';
import { FC } from 'react';
import { navLinks } from './data';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/navigation';
import { containerPadding } from '@/shared/ui';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

export const Header: FC = () => {
	const router = useRouter();

	const menuItems = navLinks.map((elem) => ({ ...elem, command: () => router.push(elem.id) }));

	const endMenu = (
		<Avatar
			size='large'
			icon='pi pi-user'
			className='p-overlay-badge'>
			<Badge value='4' />
		</Avatar>
	);
	return (
		<header>
			<Menubar
				start={<p>Logo</p>}
				model={menuItems}
				end={endMenu}
				className={`${containerPadding} gap-2 md:gap-3 lg:gap-4`}
			/>
		</header>
	);
};
