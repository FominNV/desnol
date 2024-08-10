import { RouterPaths } from '@/shared/enums';
import { MenuItem } from 'primereact/menuitem';

export interface INavigationMenuItem extends MenuItem {
	id: RouterPaths;
	label: string;
}

export const navLinks: INavigationMenuItem[] = [
	{
		id: RouterPaths.Login,
		label: 'Вход',
	},
	{
		id: RouterPaths.Appeal,
		label: 'Обращения',
	},
];
