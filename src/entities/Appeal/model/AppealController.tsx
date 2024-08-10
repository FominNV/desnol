import { useCallback, useEffect, useMemo, useState } from 'react';
import { createAppeals, defineStatus } from '../lib';
import { IAppeal, IAppealItem } from '../types';
import { format, formatDuration, intervalToDuration } from 'date-fns';
import { ru } from 'date-fns/locale';
import { AppealTableColumns } from '../config';

interface IAppealControllerProps {
	id?: number;
}

export const useAppealController = ({ id }: IAppealControllerProps = {}) => {
	const [appeals, setAppeals] = useState<IAppeal[]>([]);
	const [detailAppeal, setDetailAppeal] = useState<IAppeal | null>(null);

	const getDuration = useCallback((date: Date): string => {
		const duration = intervalToDuration({
			start: new Date('10.10.2023'),
			end: new Date(date),
		});
		return formatDuration(duration, { locale: ru, delimiter: ',' });
	}, []);

	const mapAppeals = useMemo<IAppealItem[]>(() => {
		return appeals.map((elem) => {
			const item: IAppealItem = {
				...elem,
				createdAt: format(elem.createdAt, 'dd.MM.yyyy  HH:mm'),
				updatedAt: getDuration(elem.updatedAt),
				deadline: format(new Date('12.12.2025'), 'dd.MM.yyyy  HH:mm'),
				status: defineStatus(elem.status),
			};
			return item;
		});
	}, [appeals, getDuration]);

	useEffect(() => {
		setAppeals(createAppeals());
	}, []);

	useEffect(() => {
		if (!id) return;
		setDetailAppeal(appeals.find((elem) => elem.id === id) || null);
	}, [id, appeals]);

	return {
		detailAppeal,
		appealsItems: mapAppeals,
		tableColumns: AppealTableColumns,
	};
};
