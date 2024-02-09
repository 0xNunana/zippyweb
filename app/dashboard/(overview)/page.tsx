
import HistoryWrapper from '@/app/components/HistoryWrapper';
import HistoryWrapperSkel from '@/app/components/HistoryWrapperSkel';
import OrderHistory from '@/app/components/OrderHistory';
import TrackWrapper from '@/app/components/TrackWrapper';


import { Suspense } from 'react';

export default function Page() {
 
  return (
    <main className='flex gap-7'>
     <div className='flex-grow'>
     <div className="">
      
   
        <TrackWrapper/>
   
    </div>
    <div className="">
      <Suspense fallback={<HistoryWrapperSkel/>}>
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