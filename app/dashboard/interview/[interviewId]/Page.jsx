"use client"
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect } from 'react'

function Interview({params}) {

    useEffect(() => {
        console.log(params.interviewId)
        GetInterviewDetails()
    },[])

    const GetInterviewDetails = async() => {
        const result=await db.select().from(MockInterview)
        .where(eq(MockInterview.mockId,params.interviewId))

        console.log(result)
    }
  return (
    <div>
      Interview
    </div>
  )
}

export default Interview
