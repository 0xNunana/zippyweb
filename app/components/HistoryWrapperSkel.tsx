import React from 'react'
import { shimmer } from '../lib/Shimmer'

export const HistoryWrapperSkeleton = () => {
    return (
      <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
    >
        <tr  className=''>
    <td className='bg-gray-100' style={{ padding: '15px' }}>
      <p className='py-5'/>  
    </td>
    <td >
      <div className='flex gap-5 md:gap-10 lg:gap-16 items-center p-3 bg-gray-100'>
      <div className='flex justify-between items-center gap-2'>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7467 5.63333C13.0467 2.55333 10.36 1.16666 8 1.16666C8 1.16666 8 1.16666 7.99334 1.16666C5.64 1.16666 2.94667 2.54666 2.24667 5.62666C1.46667 9.06666 3.57334 11.98 5.48 13.8133C6.18667 14.4933 7.09334 14.8333 8 14.8333C8.90667 14.8333 9.81334 14.4933 10.5133 13.8133C12.42 11.98 14.5267 9.07333 13.7467 5.63333ZM8 8.97333C6.84 8.97333 5.9 8.03333 5.9 6.87333C5.9 5.71333 6.84 4.77333 8 4.77333C9.16 4.77333 10.1 5.71333 10.1 6.87333C10.1 8.03333 9.16 8.97333 8 8.97333Z" fill="#4CA7A8"/>
</svg>
<p className='text-zippygray text-[20px] font-[400]'/>

      </div>
      
   
        <p>-</p>

        <div className='flex justify-between items-center gap-2'>
    
<p className='text-zippygray text-[20px] '/>
      
        </div>
    
      </div>
      
    </td>
    <td  className=' '>
      <div className='flex justify-between items-center '>
     

        <div className='bg-gray-100'>
        <p />
      </div>


       <div className=''>
   
       </div>
      </div>

        </td>
  </tr>
    </div>
    )
  }


const HistoryWrapperSkel = () => {
  return (
    <>
     <HistoryWrapperSkeleton/>
   <HistoryWrapperSkeleton/>
   <HistoryWrapperSkeleton/>
    </>
  
  )
}

export default HistoryWrapperSkel