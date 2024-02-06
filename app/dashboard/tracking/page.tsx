import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center  py-40 my-auto'> 
<div >
  <div className='flex justify-center items-center'>
  <Image src='/map.svg' alt='map' width={100} height={20}/>
  </div>

  <p className='text-[24px] font-[400] text-zippygray'>No Package Tracking Data</p>
</div>
    </div>
  )
}

export default page