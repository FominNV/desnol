/* eslint @typescript-eslint/no-explicit-any: 0 */

const defaultValues: ILoginFormModel = {
	login: '',
	password: '',
	isRemember: false,
};

export class LoginFormModel implements ILoginFormModel {
	login: string = defaultValues.login;
	password: string = defaultValues.password;
	isRemember: boolean = defaultValues.isRemember;

	constructor(data?: any) {
		this.init(data);
	}

	init(data?: any): void {
		if (data) {
			this.login = data.login || defaultValues.login;
			this.password = data.password || defaultValues.password;
			this.isRemember = !!data.isRemember;
		}
	}

	toJSON(data?: any): ILoginFormModel {
		data = typeof data === 'object' ? data : {};
		data.login = this.login;
		data.password = this.password;
		data.isRemember = this.isRemember;
		return data;
	}

	toUpdate(data: Partial<ILoginFormModel>): LoginFormModel {
		return new LoginFormModel({ ...this, data });
	}
}

export interface ILoginFormModel {
	/** Логин */
	login: string;
	/** Пароль */
	password: string;
	/** Запомнить пользователя */
	isRemember: boolean;
}
