import { RouterPaths } from '@/shared/enums';
import { MenuItem } from 'primereact/menuitem';

interface INavigationMenuItem extends MenuItem {
	id: RouterPaths;
	label: string;
}

export const navLinks: INavigationMenuItem[] = [
	{
		id: RouterPaths.Login,
		label: 'Главная',
	},
	{
		id: RouterPaths.Appeal,
		label: 'Обращения',
	},
];
