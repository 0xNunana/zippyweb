'use client'
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Example() {


  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)

  await signIn('credentials',{
  email:formData.get('email'),
  password:formData.get('password'),
  callbackUrl:'/dashboard'
 })

  };

  return (
    <>
      <div className="flex min-h-screen flex-1 p-5">
        <div className="relative hidden flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full object-cover rounded-xl"
            src='/image.png'
            alt="login image"
            height={100}
            width={1000}
            priority
          />
        </div>
        <div className="w-[700px] flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 ">
          <div className="mx-auto w-full max-w-sm lg:w-[900px]  ">
            <div>
              <div className="flex justify-center items-center pb-10 ">
                <Image
                  className="w-[160px] h-[86.89px]"
                  src="/logo.png"
                  alt="Your Company"
                  height={50}
                  width={200}
                />
              </div>
              <h2 className="mt-8 text-[24px] font-bold leading-9 tracking-tight text-gray-900">
                Get Started Now
              </h2>
              <p className="mt-2 text-[16px] leading-6 text-gray-500">
                Enter your credentials to access your account
              </p>
            </div>
            <div className="mt-10">
              <div>
                <form onSubmit={handleLogin} className="">
                  <div className="my-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-00">
                      Email 
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                
                        required
                        className="block w-full pl-2 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                   
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 pl-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="text-sm leading-6 mb-14">
                    <a href="#" className="font-semibold text-gray-500 hover:text-gray-600">
                      Forgot password?
                    </a>
                  </div>
                  <div className="flex justify-center items-center p-2 text-red-400">
                
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#4ca7ab] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1680E4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
