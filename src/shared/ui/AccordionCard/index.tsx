import './styles.css';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { FC, ReactNode, useState } from 'react';

interface IAccordionCardProps extends IWrapper {
	additional?: ReactNode;
}

export const AccordionCard: FC<IAccordionCardProps> = ({ children, additional }) => {
	const [isCollapse, setIsCollapse] = useState<boolean>(true);

	return (
		<div className='relative border-1 border-round p-4 transition-all transition-duration-300'>
			<div>{children}</div>

			<div
				className={classNames(
					'overflow-hidden transition-all transition-duration-300',
					isCollapse ? 'max-h-0' : 'max-h-1000'
				)}>
				{additional}
			</div>
			<Button
				className={classNames('accordion-card__toggle-button transition-all transition-duration-300', {
					'rotate-180': !isCollapse,
				})}
				icon={'pi pi-angle-down'}
				onClick={() => setIsCollapse((prev) => !prev)}
				rounded
			/>
		</div>
	);
};
