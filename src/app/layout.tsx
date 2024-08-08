import './global.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@public/themes/viva-light/theme.css';
import type { Metadata } from 'next';
import { type FC } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { DefaultLayout } from '@/widgets/layouts';

export const metadata: Metadata = {
	title: 'Desnol',
	description: 'Test desnol',
};

const RootLayout: FC<IWrapper> = (props) => {
	return (
		<html lang='ru'>
			<body>
				<PrimeReactProvider>
					<DefaultLayout>{props.children}</DefaultLayout>
				</PrimeReactProvider>
			</body>
		</html>
	);
};

export default RootLayout;
