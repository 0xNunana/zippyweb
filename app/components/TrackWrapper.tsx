import React from 'react'
import Image from 'next/image'
import { getOrderDetails } from '../lib/action'

const TrackWrapper = () => {
  return (
    <div className='  flex justify-between'>
        <div className='p-[20px]'>
            <p className='font-[700] text-[20px]'>Track your package</p>
<form className='my-3 ' action={getOrderDetails}>
  <div className='flex items-center gap-1 py-7'>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#8C8FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 22L20 20" stroke="#8C8FA5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<input className='text-[16px] p-3'type='number' inputMode='numeric' pattern='[0-9]' name='orderNum' placeholder='Enter Tracking Number'  />
  </div>

  <div className='flex items-center'>
                <button className='px-[32px] py-[12px] rounded-md bg-zippygreen text-white'>Search package</button>
                <p className='text-zippygreen'>Can&apos;t find</p>
            </div>

</form>
           
           
        </div>
        <div>
            <Image src='/discount.png' width={300} height={100} alt='discount coupon'/>
        </div>
    </div>
  )
}

export default TrackWrapper