import 'primeflex/primeflex.css';
import type { Metadata } from 'next';
import { type FC } from 'react';
import { PrimeReactProvider } from 'primereact/api';

export const metadata: Metadata = {
	title: 'Desnol',
	description: 'Test desnol',
};

const RootLayout: FC<IWrapper> = (props) => {
	return (
		<html lang='en'>
			<head>
				<link
					id='app-theme'
					rel='stylesheet'
					href='./themes/viva-light/theme.css'
				/>
			</head>
			<body>
				<PrimeReactProvider>{props.children}</PrimeReactProvider>
			</body>
		</html>
	);
};

export default RootLayout;
