"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex justify-between px-4 bg-gray-950 text-white items-center h-14'>
      <Link href={"/"}>
      <div className='logo font-bold text-2xl flex items-center gap-2 '>
        <img width={34} src="chai.gif" alt="" />
        GetMeaChai!
      </div>
      </Link>

      {session && (
        <div className="relative  " >
          {/* Dropdown Button */}
          <button onBlur={()=> {setTimeout(() => {
            setIsOpen(false)
          }, 100);}}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700  font-medium rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            Welcome {session.user.name}
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              className="absolute right-0 top-full mt-2 w-48  bg-slate-800 rounded-xl shadow-xl overflow-hidden z-50  "
              style={{ backgroundColor: '#1f2937' }}
            >
              <Link href="/dashboard">
                <button className="w-full cursor-pointer  px-6 py-3 text-left text-slate-300 hover:bg-slate-700 transition-colors">
                  Dashboard
                </button>
              </Link>
              <Link href="/yourpage">
                <button className="w-full cursor-pointer  px-6 py-3 text-left text-slate-300 hover:bg-slate-700 transition-colors">
                  Your Page
                </button>
              </Link>
              <button 
                onClick={() => signOut()} 
                className="w-full cursor-pointer  px-6 py-3 text-left text-slate-300 hover:bg-slate-700 transition-colors"
              >
                Sign out
              </button>
            </div>
          )}

          {/* Click outside to close */}
          {isOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      )}

      {!session && (
        <div>
          <Link href="/login">
            <button className="border-2 mx-6 focus:ring-blue-300 dark:focus:ring-blue-800 group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-4 text-sm font-medium text-neutral-200 transition hover:scale-110">
              <span>Login</span>
              <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-4 bg-white/20"></div>
              </div>
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Navbar