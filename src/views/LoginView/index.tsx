'use client';
import { LoginForm } from '@/entities/Login';
import { PageContentLayout } from '@/widgets/layouts';
import { Button } from 'primereact/button';
import { FC } from 'react';

const LoginView: FC = () => {
	return (
		<PageContentLayout className='align-items-center'>
			<div className='w-min flex flex-column align-items-center gap-8'>
				<LoginForm />

				<Button
					label='Забыли пароль?'
					className='shadow-none'
					text
				/>
			</div>
		</PageContentLayout>
	);
};

export default LoginView;
