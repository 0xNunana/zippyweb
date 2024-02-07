'use client'

import React, { useEffect,useState } from 'react'
import { useData } from '@/DataContext'
import { OrdersType } from '../lib/definitions'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const HistoryWrapper = () => {

  const {data}=useData()
  const [searchData, setSearchData] = useState<OrdersType | null>(null);
  const [error,setError]=useState('')
  useEffect(() => {
    const fetchData = async () => {
      if (data?.accessToken) { // Fetch data only if accessToken is present
        try {
          const response = await fetch('https://coding.zippy.com.gh/api/get_orders', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${data.accessToken}`
            }
          });
    
          if (response.ok) {
            const result = await response.json();
            setSearchData(result);
        
          } else {
            // Handle error response
            console.error('Failed to fetch data for Latest:', response.statusText);
          }
        } catch (error) {
          // Handle network or other errors
          console.error('Error fetching data:', error);
        }
      }
    };
    
    fetchData(); // Call the async function immediately
  }, [data]); // Empty dependency array means this effect runs only once on mount
  





  return (
    <div>
        <div className='flex justify-between items-center'>
            <p className='text-[24px] font-[700]'>History</p>
            <p className='text-zippygreen text-[20px]'>View all</p>

        </div>
        <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="text-start p-2">Tracking number</th>
          <th className="text-start p-2">Route</th>
          <th className="text-start  p-2">Status</th>
          <th className="text-start  p-2"></th>
        </tr>
      </thead>
      <tbody>
     


      {searchData?.data.map((info, index) => (
  <tr key={index} className=''>
    <td className='text-zippygreen' style={{ padding: '15px' }}>
      <p className='py-5'>  {info.custId}</p>
    </td>
    <td >
      <div className='flex gap-5 md:gap-10 lg:gap-16 items-center p-3'>
      <div className='flex justify-between items-center gap-2'>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7467 5.63333C13.0467 2.55333 10.36 1.16666 8 1.16666C8 1.16666 8 1.16666 7.99334 1.16666C5.64 1.16666 2.94667 2.54666 2.24667 5.62666C1.46667 9.06666 3.57334 11.98 5.48 13.8133C6.18667 14.4933 7.09334 14.8333 8 14.8333C8.90667 14.8333 9.81334 14.4933 10.5133 13.8133C12.42 11.98 14.5267 9.07333 13.7467 5.63333ZM8 8.97333C6.84 8.97333 5.9 8.03333 5.9 6.87333C5.9 5.71333 6.84 4.77333 8 4.77333C9.16 4.77333 10.1 5.71333 10.1 6.87333C10.1 8.03333 9.16 8.97333 8 8.97333Z" fill="#4CA7A8"/>
</svg>
<p className='text-zippygray text-[20px] font-[400]'>{info.senderAddress}</p>

      </div>
      
   
        <p>-</p>

        <div className='flex justify-between items-center gap-2'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.95334C9.14875 8.95334 10.08 8.02209 10.08 6.87334C10.08 5.72458 9.14875 4.79333 8 4.79333C6.85125 4.79333 5.92 5.72458 5.92 6.87334C5.92 8.02209 6.85125 8.95334 8 8.95334Z" stroke="#8C8FA5" stroke-width="1.5"/>
<path d="M2.41333 5.66C3.72667 -0.113337 12.28 -0.10667 13.5867 5.66666C14.3533 9.05333 12.2467 11.92 10.4 13.6933C9.06 14.9867 6.94 14.9867 5.59333 13.6933C3.75333 11.92 1.64667 9.04666 2.41333 5.66Z" stroke="#8C8FA5" stroke-width="1.5"/>
</svg>
<p className='text-zippygray text-[20px] '>{info.receiverAddress}</p>
      
        </div>
    
      </div>
      
    </td>
    <td  className=' '>
      <div className='flex justify-between items-center'>
     

        <div style={{backgroundColor: info.status === 'Order Received' ? '#00A89C14' : info.status === 'Order Picked Up' ? '#1680E414': info.status === 'Cancelled' ? '#CE112614' : '#FCD1161A'}}>
        <p style={{fontWeight:'500',color:info.status === 'Order Received' ? '#00A89C' : info.status === 'Order Picked Up' ? '#1680E4': info.status === 'Cancelled' ? '#CE1126' : '#EEC200'}}>{info.status}</p>
      </div>


       <div>
       <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91 20.42L15.43 13.9C16.2 13.13 16.2 11.87 15.43 11.1L8.91 4.58" stroke="#4CA7A8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

       </div>
      </div>

        </td>
  </tr>
))}


      </tbody>
    </table>
    </div>
  )
}

export default HistoryWrapper