//import { Card } from '@/app/ui/dashboard/cards';


//import { fetchCardData } from '@/app/lib/data';
import HistoryWrapper from '@/app/components/HistoryWrapper';
import OrderHistory from '@/app/components/OrderHistory';
import TrackWrapper from '@/app/components/TrackWrapper';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <main className='flex gap-7'>
     <div className='flex-grow'>
     <div className="">
      
      <Suspense fallback={<div>Card skeletons</div>}>
        <TrackWrapper/>
      </Suspense>
    </div>
    <div className="">
      <Suspense fallback={<div>RevenueChartSkeleton</div>}>
      <HistoryWrapper/>
      </Suspense>
      
    </div>
     </div>
<div className='hidden md:flex'>
<Suspense >
    <OrderHistory/>
</Suspense>
</div>


    
     
    </main>
  );
}