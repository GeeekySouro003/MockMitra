"use client"
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'

function Interview({params}) {

    const[interviewData,setInterviewData]=useState();

    useEffect(() => {
        console.log(params.interviewId)
        GetInterviewDetails();
    },[])

    const GetInterviewDetails = async() => {
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))

        setInterviewData(result[0]);
    }
  return (
    <div className='my-10 flex justify-center flex-col items-center'>
      <h2 className='font-bold text-2xl'>Ready to roll?</h2>
      <div>
        <WebcamIcon className='h-96 w-full p-20 bg-secondary rounded-lg border' />
      </div>
    </div>
  )
}

export default Interview
