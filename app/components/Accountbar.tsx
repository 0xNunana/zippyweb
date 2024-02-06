import Image from 'next/image'
import React from 'react'

const Accountbar = () => {
  return (
    <div className=' p-[32px]'>
        <div className='flex items-center'>
<div className='flex flex-grow'>
    <div className='space-y-[6px] text-[16px] '>
    <p className='font-medium' >Hi, Kwame </p>
    <p className='text-zippygray'>Track and monitor your packages</p>
    </div>

</div>
<div className='flex gap-4'>
 <Image src='/bell.svg' alt='bell' width={150} height={70} />
</div>
        </div>
        </div>
  )
}

export default Accountbar