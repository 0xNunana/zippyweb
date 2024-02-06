import React from 'react'
import Image from 'next/image'

const OrderHistory = () => {
  return (
    <div>
       <div className='flex justify-between items-center py-3'>
        <p className='text-[20px] font-[700]'>Package History</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#8C8FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16998 14.83L14.83 9.17001" stroke="#8C8FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.83 14.83L9.16998 9.17001" stroke="#8C8FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       </div>
       <Image src='/map.png' alt='map' width={300} height={200} className='rounded-md'/>
       <div className='border my-7'/>
     

       <div className='flex gap-3'>
        <div className='py-2'>
        <svg width="12" height="45" viewBox="0 0 12 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#4CA7A8"/>
<path d="M6 45L6 16" stroke="#4CA7A8" stroke-width="2" stroke-dasharray="5 5"/>
</svg>


        </div>
 
<div className='text-zippygray space-y-[8px]'>
    <p className='font-[700] text-16px]'>Order Received</p>
    <p>10:55 AM</p>
</div>
       </div>
       <div className='flex gap-3'>
        <div className='py-2'>
        <svg width="12" height="45" viewBox="0 0 12 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#4CA7A8"/>
<path d="M6 45L6 16" stroke="#4CA7A8" stroke-width="2" stroke-dasharray="5 5"/>
</svg>


        </div>
 
<div className='text-zippygray space-y-[8px]'>
    <p className='font-[700] text-16px]'>Order Picked Up</p>
    <p>10:55 AM</p>
</div>
       </div>





       <div className='flex gap-3'>
        <div className='py-2'>
        <svg width="12" height="45" viewBox="0 0 12 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#D9D9D9"/>
<path d="M6 45L6 16" stroke="#D9D9D9" stroke-width="2" stroke-dasharray="5 5"/>
</svg>


        </div>
 
<div className='text-zippygray space-y-[8px]'>
    <p className='font-[700] text-16px]'>Transit</p>
    <p>10:55 AM</p>
</div>
       </div>

       <div className='flex gap-3'>
        <div className='py-2'>
        <svg width="12" height="45" viewBox="0 0 12 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="6" fill="#D9D9D9"/>
<path d="M6 45L6 16" stroke="#D9D9D9" stroke-width="2" stroke-dasharray="5 5"/>
</svg>


        </div>
 
<div className='text-zippygray space-y-[8px]'>
    <p className='font-[700] text-16px]'>Delivered</p>
    <p>10:55 AM</p>
</div>
       </div>
       <div>
       <button className='text-white mt-4 bg-zippygreen px-[32px] py-[12px] rounded-md flex justify-center items-center w-full'>
        Print History
       </button>
      <button className='flex justify-center items-center w-full px-[32px] py-[12px] gap-3 text-zippygreen'>
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.16666 7.83333L14.6333 2.36667" stroke="#4CA7A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.1667 5.03334V1.83334H11.9667" stroke="#4CA7A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.83334 1.83334H6.50001C3.16668 1.83334 1.83334 3.16668 1.83334 6.50001V10.5C1.83334 13.8333 3.16668 15.1667 6.50001 15.1667H10.5C13.8333 15.1667 15.1667 13.8333 15.1667 10.5V9.16668" stroke="#4CA7A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        Share
      </button>
       </div>
      
     </div>
  )
}

export default OrderHistory