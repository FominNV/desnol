import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { FC } from 'react';
import { useLoginFormController } from '../model/LoginFormController';

export const LoginForm: FC = () => {
	const { formModel, handleChangeForm } = useLoginFormController();

	return (
		<form className='w-min flex flex-column align-items-center gap-4'>
			<p className='p-0 m-0'>Вход в сервис</p>
			<div className='flex flex-column gap-2'>
				<InputText
					value={formModel.login}
					onChange={(e) => handleChangeForm('login', e.target.value)}
				/>
				<InputText
					type='password'
					value={formModel.password}
					onChange={(e) => {
						handleChangeForm('password', e.target.value);
					}}
				/>
			</div>
			<div className='w-full'>
				<label
					htmlFor='isRemember'
					className='flex align-items-center gap-2 cursor-pointer'>
					<Checkbox
						inputId='isRemember'
						checked={formModel.isRemember}
						onChange={(e) => handleChangeForm('isRemember', !!e.checked)}
					/>
					<div>Запомнить меня</div>
				</label>
			</div>

			<Button
				label='Войти'
				type='submit'
				rounded
			/>
		</form>
	);
};
