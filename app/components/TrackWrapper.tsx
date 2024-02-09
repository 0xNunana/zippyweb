
'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import { useData } from '@/DataContext'
import { OrdersDetailType } from '../lib/definitions'



const TrackWrapper = () => {


  const {data}=useData()
  const [error, setError] = useState('');
  const [orderId, setOrderId] = useState('');
  const [searchdata, setsearchData] = useState<OrdersDetailType | null>(null);

 
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
console.log(data?.accessToken)
    try {
      if (!orderId.trim()) {
        setError('Please enter a tracking number');
        setsearchData(null);
        return;
      }

      const response = await fetch(`https://coding.zippy.com.gh/api/get_order_details?orderId=${orderId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data?.accessToken}` 
        },
      });

      const result = await response.json();

      if (response.ok) {
        setsearchData(result);
      } else {
        setError('No search found');
      }
    } catch (error) {
      console.error('Search Error:', error);
      setError('An error occurred during search');
    }
  };




  return (
    <div className='pb-10'>
  <div className='  flex justify-between'>
        <div className='p-[20px]'>
            <p className='font-[700] text-[20px]'>Track your package</p>
<form className='mt-5 ' onSubmit={handleSearch}>
  <div className='flex items-center gap-1 py-7'>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#8C8FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 22L20 20" stroke="#8C8FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

<input className='text-[16px] p-3' name='orderNum' placeholder='Enter Tracking Number'  
value={orderId} onChange={(e)=>setOrderId(e.target.value.toUpperCase())}
/>
  </div>

  <div className='flex items-center gap-3'>
                <button className='px-[32px] py-[12px] rounded-md bg-zippygreen text-white'>Search package</button>
                {searchdata?.responseCode =='005' && <div style={{padding:5,justifyContent:'center',alignItems:'center'}}>
      <p className='text-zippygreen'>{searchdata.responseDesc}</p>
      </div>}
            </div>

</form>
           
           
        </div>
        <div className='hidden lg:block'>
            <Image src='/discount.png' width={300} height={100} alt='discount coupon'/>
        </div>
    </div>

{searchdata?.data && (
  <div className='border-2 flex rounded-md justify-between items-center'>
  <div className='text-zippygreen' style={{ padding: '15px' }}>
    <p className='py-5'>  {searchdata.data.custId}</p>
  </div>
  <div >
    <div className='flex gap-5 md:gap-10 lg:gap-16 items-center p-3'>
    <div className='flex justify-between items-center gap-2'>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.7467 5.63333C13.0467 2.55333 10.36 1.16666 8 1.16666C8 1.16666 8 1.16666 7.99334 1.16666C5.64 1.16666 2.94667 2.54666 2.24667 5.62666C1.46667 9.06666 3.57334 11.98 5.48 13.8133C6.18667 14.4933 7.09334 14.8333 8 14.8333C8.90667 14.8333 9.81334 14.4933 10.5133 13.8133C12.42 11.98 14.5267 9.07333 13.7467 5.63333ZM8 8.97333C6.84 8.97333 5.9 8.03333 5.9 6.87333C5.9 5.71333 6.84 4.77333 8 4.77333C9.16 4.77333 10.1 5.71333 10.1 6.87333C10.1 8.03333 9.16 8.97333 8 8.97333Z" fill="#4CA7A8"/>
</svg>
<p className='text-zippygray text-[20px] font-[400]'>{searchdata.data.senderAddress}</p>

    </div>
    
 
      <p>-</p>

      <div className='flex justify-between items-center gap-2'>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.95334C9.14875 8.95334 10.08 8.02209 10.08 6.87334C10.08 5.72458 9.14875 4.79333 8 4.79333C6.85125 4.79333 5.92 5.72458 5.92 6.87334C5.92 8.02209 6.85125 8.95334 8 8.95334Z" stroke="#8C8FA5" strokeWidth="1.5"/>
<path d="M2.41333 5.66C3.72667 -0.113337 12.28 -0.10667 13.5867 5.66666C14.3533 9.05333 12.2467 11.92 10.4 13.6933C9.06 14.9867 6.94 14.9867 5.59333 13.6933C3.75333 11.92 1.64667 9.04666 2.41333 5.66Z" stroke="#8C8FA5" strokeWidth="1.5"/>
</svg>
<p className='text-zippygray text-[20px] '>{searchdata.data.receiverAddress}</p>
    
      </div>
  
    </div>
    
  </div>
  <div  className=' '>
    <div className='flex justify-between items-center'>
   

      <div style={{backgroundColor: searchdata.data.status === 'Order Received' ? '#00A89C14' : searchdata.data.status === 'Order Picked Up' ? '#1680E414': searchdata.data.status === 'Cancelled' ? '#CE112614' : '#FCD1161A'}}>
      <p style={{fontWeight:'500',color:searchdata.data.status === 'Order Received' ? '#00A89C' : searchdata.data.status === 'Order Picked Up' ? '#1680E4': searchdata.data.status === 'Cancelled' ? '#CE1126' : '#EEC200'}}>{searchdata.data.status}</p>
    </div>


     <div>
     <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.91 20.42L15.43 13.9C16.2 13.13 16.2 11.87 15.43 11.1L8.91 4.58" stroke="#4CA7A8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

     </div>
    </div>

      </div>
</div>
)}



{orderId==='' && <div style={{padding:5,justifyContent:'center',alignItems:'center'}}>
  <p className='text-zippygreen'>{error}</p>
  </div>}







    </div>
  
  )
}

export default TrackWrapper