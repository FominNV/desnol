import { useState } from 'react';
import { ILoginFormModel, LoginFormModel } from './LoginFormModel';

export const useLoginFormController = () => {
	const [formModel, setFormModel] = useState<LoginFormModel>(new LoginFormModel());

	const handleChangeForm = (key: keyof ILoginFormModel, value: ILoginFormModel[keyof ILoginFormModel]) => {
		setFormModel((prev) => new LoginFormModel({ ...prev, [key]: value }));
	};

	return {
		formModel,
		handleChangeForm,
	};
};
