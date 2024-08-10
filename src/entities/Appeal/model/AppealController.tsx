import { useCallback, useEffect, useMemo, useState } from 'react';
import { createAppeals, defineStatus } from '../lib';
import { IAppeal, IAppealItem } from '../types';
import { format, formatDuration, intervalToDuration } from 'date-fns';
import { ru } from 'date-fns/locale';
import { AppealTableColumns } from '../config';

export const useAppealController = () => {
	const [appeals, setAppeals] = useState<IAppeal[]>([]);

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

	return {
		appealsItems: mapAppeals,
		tableColumns: AppealTableColumns,
	};
};
