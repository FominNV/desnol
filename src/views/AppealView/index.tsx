'use client';
import { AppealTable, IAppealItem, useAppealController } from '@/entities/Appeal';
import { RouterPaths } from '@/shared/enums';
import { PageContentLayout } from '@/widgets/layouts';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

const AppealView: FC = () => {
	const router = useRouter();
	const { appealsItems, tableColumns } = useAppealController();

	const handleRowClick = (value: IAppealItem) => {
		router.push(`${RouterPaths.Appeal}/${value.id}`);
	};

	return (
		<PageContentLayout>
			<AppealTable
				columns={tableColumns}
				items={appealsItems}
				onRowClick={handleRowClick}
			/>
		</PageContentLayout>
	);
};

export default AppealView;
