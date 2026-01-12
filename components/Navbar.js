"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
 
  }
  return (
    <div className='flex justify-between px-4 bg-gray-950 text-white items-center h-14'>
      <div className='logo font-bold text-2xl flex items-center gap-2 '>
        <img width={34} src="chai.gif" alt="" />
        GetMeaChai!</div>

        {session && <Link href="/dashboard " >
        <div className='border-2 mx-6 my-14 focus:ring-blue-300 dark:focus:ring-blue-800 group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-4 text-sm font-medium text-neutral-200 transition hover:scale-110 cursor-pointer'>
          </div>
          </Link>
        } 
     
        {!session &&
         <div> 
        <Link href="/login">
        <button className="border-2 mx-6 my-14 focus:ring-blue-300 dark:focus:ring-blue-800 group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-4 text-sm font-medium text-neutral-200 transition hover:scale-110">
          <span className=''>Login</span>
          <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
            <div className="relative h-full w-4 bg-white/20"></div>
          </div>
        </button>
        </Link>
      </div>
      }
    </div>
  )
}

export default Navbar
