'use client';
import { FC, ReactNode } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { IAppealItem } from '../types';

interface IAppealTableProps {
	items?: IAppealItem[];
	columns?: ITableColumn[];
	onRowClick?: (value: IAppealItem) => void;
}

export const AppealTable: FC<IAppealTableProps> = ({ items = [], columns = [], onRowClick = () => null }) => {
	const themeTemplate = (rowData: IAppealItem) => {
		return rowData.isWaitingAnswer ? (
			<div className='flex align-items-center gap-2'>
				<span>{rowData.theme} </span>
				<span
					className='pi pi-exclamation-triangle'
					style={{ color: 'red' }}
				/>
			</div>
		) : (
			rowData.theme
		);
	};

	const templates: Partial<Record<string, (data: IAppealItem) => ReactNode>> = {
		theme: themeTemplate,
	};

	const createColumns = columns.map((elem) => (
		<Column
			key={elem.id}
			field={elem.field}
			header={elem.title}
			body={templates[elem.field]}
		/>
	));

	return (
		<DataTable
			value={items}
			onRowClick={(e) => onRowClick(e.data as IAppealItem)}
			paginator
			rows={5}
			rowsPerPageOptions={[5, 10, 25, 50]}
			selectionMode='single'>
			{createColumns}
		</DataTable>
	);
};
