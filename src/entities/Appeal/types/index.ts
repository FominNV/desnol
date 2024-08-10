import { ReactNode } from 'react';

export type AppealStatusType = 'worked' | 'registered' | 'closed' | 'done' | 'approving';

export interface IAppeal {
	id: number;
	theme: string;
	number: number;
	createdAt: Date;
	updatedAt: Date;
	deadline: Date;
	status: AppealStatusType;
	isWaitingAnswer: boolean;
}

export interface IAppealItem {
	id: number;
	theme: string | ReactNode;
	number: number;
	createdAt: string;
	updatedAt: string;
	deadline: string;
	status: string;
	isWaitingAnswer: boolean;
}
