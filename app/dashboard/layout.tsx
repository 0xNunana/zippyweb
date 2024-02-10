import SideNav from "@/app/components/SideNav";
import Accountbar from '../components/Accountbar';
import { auth } from "@/auth";
import Link from "next/link";
export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth() 
  console.log(session?.user)
  return (


    <>
    {session?.user ? (   <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>

        <div className="flex-grow p-6 md:overflow-y-auto ">
          <Accountbar/>
          {children}</div>
      </div>):(

        <div className="flex items-center justify-center min-h-screen">
         <div>
         <p>You need to be signed in </p>
<Link href='/' className="flex justify-center">
<button className="bg-red-300 p-5 rounded-md">
  Sign In
</button>
</Link></div>
     
        </div>
      )}
    </>
   
    );
  }