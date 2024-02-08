'use client'


import Image from 'next/image';

import Link from 'next/link';
// import clsx from 'clsx';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: '/home.svg' },
  {
    name: 'Package Tracking',
    href: '/dashboard/tracking',
    icon: '/map.svg',
  },
  { name: 'My Transactions', href: '/dashboard/transactions', icon: '/receipt-2.svg' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={` ${pathname === link.href && "bg-[#EDF6F6] text-zippygreen"}
              flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#EDF6F6] hover:text-zippygreen md:flex-none md:justify-start md:p-2 md:px-3
             
            `}
          >
           <Image width={25} src={LinkIcon} alt='icon' height={10}/>
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
