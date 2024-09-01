import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'

function Dashboard() {
  return (
    <div>
      <div className="p-10">

      <h2 className='font-bold text-3xl'>DashBoard</h2>
      <h2 className='text-gray-600'>Create Your Next Mockup Interview</h2>

      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewInterview/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
