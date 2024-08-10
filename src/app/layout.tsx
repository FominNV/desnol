'use client';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './global.css';

import { type FC } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { DefaultLayout } from '@/widgets/layouts';

const RootLayout: FC<IWrapper> = (props) => {
	return (
		<html lang='ru'>
			<body className='surface-ground'>
				<PrimeReactProvider>
					<DefaultLayout>{props.children}</DefaultLayout>
				</PrimeReactProvider>
			</body>
		</html>
	);
};

export default RootLayout;
