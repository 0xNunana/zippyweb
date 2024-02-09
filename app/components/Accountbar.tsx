'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { UserType, url } from '../lib/definitions';
import { useData } from '@/DataContext';
import Link from 'next/link';


const Accountbar = () => {

  const { data } = useData();
  const accessToken = data?.accessToken;
  const [user, setUser] = useState<UserType | null>(null);
 
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`${url}/get_user_details`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        if (response.ok) {
          const userInfo = await response.json();
          setUser(userInfo);
        } else {
          console.error('Failed to fetch user info:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    if (accessToken) {
      fetchUserInfo();
    }
  }, [accessToken]);

  return (
    <div className='p-[32px]'>
      <div className='flex items-center'>
        {data?.accessToken ? (
 <div className='flex flex-grow '>
 <div className='space-y-[6px] text-[16px]'>
   <p className='font-medium'>Hi {user?.data.name},</p>
   <p className='text-zippygray'>Track and monitor your packages</p>
 </div>
</div>
        ):(
          <div className='flex flex-grow '>
          <div className='space-y-[6px] text-[16px]'>
            <p className='font-medium text-zippygray'>Kindly Login to view details</p>
           <Link href='/' >
            <div className='bg-zippygreen border flex justify-center items-center p-3 rounded-[8px] '>
            <p className='text-white'>
            Click here
            </p>
            </div>
          
         
           </Link>
          </div>
        </div>

        )}
       
       


        <div className='flex gap-5'>
          <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.44V9.77" stroke="#8C8FA5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M12.02 2C8.34002 2 5.36002 4.98 5.36002 8.66V10.76C5.36002 11.44 5.08002 12.46 4.73002 13.04L3.46002 15.16C2.68002 16.47 3.22002 17.93 4.66002 18.41C9.44002 20 14.61 20 19.39 18.41C20.74 17.96 21.32 16.38 20.59 15.16L19.32 13.04C18.97 12.46 18.69 11.43 18.69 10.76V8.66C18.68 5 15.68 2 12.02 2Z" stroke="#8C8FA5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M15.33 18.82C15.33 20.65 13.83 22.15 12 22.15C11.09 22.15 10.25 21.77 9.64998 21.17C9.04998 20.57 8.66998 19.73 8.66998 18.82" stroke="#8C8FA5" strokeWidth="1.5" strokeMiterlimit="10"/>
</svg>

          </div>

          <div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z" stroke="#8C8FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="#8C8FA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountbar;
