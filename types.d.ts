interface IWrapper {
	children?: React.ReactNode;
	className?: string;
}

interface ITableColumn {
	/** Идентификатор поля */
	id: string;
	/** Наименование поля */
	title: string;
	/** Ключ поля */
	field: string;
	/** Шаблон поля */
	template?: string;
}
