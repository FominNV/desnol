import { AppealStatusType, IAppeal } from '../types';

export const createAppeals = (count = 25): IAppeal[] => {
	const statuses: AppealStatusType[] = ['worked', 'registered', 'closed', 'done', 'approving'];
	const waitingStatuses: boolean[] = [true, false];

	return Array.from({ length: count }).map((_, i) => {
		const randomStatusNum = Math.floor(Math.random() * statuses.length);
		const randomWaitingStatusNum = Math.floor(Math.random() * waitingStatuses.length);
		const status = statuses[randomStatusNum];
		return {
			id: i + 1,
			theme: 'Какая то тема',
			number: 1 + 155000,
			createdAt: new Date(),
			updatedAt: new Date(),
			deadline: new Date(),
			status,
			isWaitingAnswer: waitingStatuses[randomWaitingStatusNum],
		};
	});
};

export const defineStatus = (status: AppealStatusType): string => {
	switch (status) {
		case 'approving':
			return 'На согласовании';
		case 'closed':
			return 'Закрыто';
		case 'done':
			return 'Выполнено. Требует подтверждения';
		case 'registered':
			return 'Зарегистрировано';
		default:
			return 'В работе';
	}
};
