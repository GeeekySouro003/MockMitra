"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
  const path =usePathname();
  useEffect(() => {
    console.log(path)
  },[])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src={'/logo3.png'} width={200} height={120} alt="Logo" />
      <ul className='hidden md:flex gap-7'>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard' && 'text-primary font-bold'}
          `}>DashBoard</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/questions' && 'text-primary font-bold'}
          `}>Questions</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/upgrade' && 'text-primary font-bold'}
          `}>Upgrade</li>
        <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer
          ${path=='/dashboard/how' && 'text-primary font-bold'}
          `}>How it Work?</li>
      </ul>
      <UserButton />
    </div>
  )
}

export default Header
