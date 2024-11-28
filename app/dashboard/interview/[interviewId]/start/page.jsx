"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { json } from 'drizzle-orm/mysql-core';
import React, { useEffect, useState } from 'react'

function StartInterview({params}) {

  const[interviewData,setInterviewData]=useState();
  const[MockInterviewQuestions,setInterviewQuestions]=useState();
  useEffect(() => {
GetInterviewDetails();
  },[]);



  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]); // Save fetched data

    const jsonMockresp=JSON.parse(result[0].jsonMockResp);
    console.log(jsonMockresp);
    setInterviewQuestions(jsonMockresp);
    setInterviewData(result[0]); 
  };

  return (
    <div>
      StartInterview
    </div>
  )
}

export default StartInterview
