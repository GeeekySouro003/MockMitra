import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div>
      <Image src={'/logo.svg'} width={160} height={100} alt="Logo" />
      <ul>
        <li>DashBoard</li>
        <li>Questions</li>
        <li>Upgrade</li>
        <li>How it Work?</li>
      </ul>
      <UserButton />
    </div>
  )
}

export default Header
