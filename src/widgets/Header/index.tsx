'use client';
import { FC } from 'react';
import { INavigationMenuItem, navLinks } from './data';
import { TabMenu } from 'primereact/tabmenu';
import { usePathname, useRouter } from 'next/navigation';
import { containerPadding } from '@/shared/ui';

export const Header: FC = () => {
	const router = useRouter();
	const pathname = usePathname();

	const handleChangeTab = (value: INavigationMenuItem) => [router.push(value.id)];

	return (
		<header>
			<TabMenu
				onTabChange={(e) => handleChangeTab(e.value as INavigationMenuItem)}
				model={navLinks}
				className={`${containerPadding} gap-2 md:gap-3 lg:gap-4`}
				activeIndex={navLinks.findIndex((elem) => elem.id === pathname)}
			/>
		</header>
	);
};
