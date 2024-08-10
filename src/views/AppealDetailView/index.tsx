'use client';
import { useAppealController } from '@/entities/Appeal';
import { RouterPaths } from '@/shared/enums';
import { AccordionCard } from '@/shared/ui';
import { PageContentLayout } from '@/widgets/layouts';
import { useParams, useRouter } from 'next/navigation';
import { Button } from 'primereact/button';
import { FC } from 'react';

const AppealDetailView: FC = () => {
	const { id } = useParams();
	const router = useRouter();

	const { detailAppeal } = useAppealController({ id: Number(id) || undefined });

	const additional = (
		<>
			<p>Дополнительный контент</p>
			<p>{detailAppeal?.status}</p>
		</>
	);

	return (
		<PageContentLayout>
			<Button
				label='Назад'
				className='w-min'
				onClick={() => router.push(RouterPaths.Appeal)}
			/>

			{detailAppeal && (
				<div className='flex flex-column gap-4 p-4 bg-white'>
					<AccordionCard additional={additional}>
						<p className='text-xl'>{detailAppeal.theme}</p>
						<p className='text-md'>{detailAppeal.number}</p>
					</AccordionCard>
				</div>
			)}
		</PageContentLayout>
	);
};

export default AppealDetailView;
