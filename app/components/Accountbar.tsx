'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { UserType, url } from '../lib/definitions';
import { useData } from '@/DataContext';
import { useRouter } from 'next/navigation';

const Accountbar = () => {
  const router = useRouter()
  const { data } = useData();
  const accessToken = data?.accessToken;
  const [user, setUser] = useState<UserType | null>(null);
  if(!data?.accessToken)(
    router.replace('/')
  )

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
        <div className='flex flex-grow'>
          <div className='space-y-[6px] text-[16px]'>
            <p className='font-medium'>Hi, {user?.data.name}</p>
            <p className='text-zippygray'>Track and monitor your packages</p>
          </div>
        </div>
        <div className='flex gap-4'>
          <Image src='/bell.svg' alt='bell' width={150} height={70} />
        </div>
      </div>
    </div>
  );
};

export default Accountbar;
