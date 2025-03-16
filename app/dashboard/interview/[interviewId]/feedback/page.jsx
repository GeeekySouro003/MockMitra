"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'

function Feedback({params}) {

const[feedbackList,setFeedbackList]=useState([]);
  useEffect(()=>{
     GetFeedback();
  },[])
  const GetFeedback=async() => {
    const result=await db.select()
    .from(UserAnswer)
    .where(eq(UserAnswer.mockIdRef,params.interviewId))
    .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);

  }
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold text-green-600'>Congratulations!</h2>
      <h2 className='font-bold text-xl'>Here is your Interview Feedback</h2>
      <h2 className='text-primary text-lg my-3'>Your overall interview rating: <strong>8/10</strong></h2>

      <h2 className='text-sm text-gray-600'>Find below Interview Question with Correct Answer , Your answer and feedback for improvement</h2>
    </div>
    
  )
}

export default Feedback
