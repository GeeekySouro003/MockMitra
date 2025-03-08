"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { json } from 'drizzle-orm/mysql-core';
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionsSection';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnswerSection from './_components/RecordAnswerSection';
import { Button } from '@/components/ui/button';

function StartInterview({params}) {

  const[interviewData,setInterviewData]=useState();
  const[mockInterviewQuestion,setInterviewQuestion]=useState();
  const[activeQuestionIndex,setActiveQuestionIndex]=useState(0);
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
    setInterviewQuestion(jsonMockresp);
    setInterviewData(result[0]); 
  };

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/*Questions*/}
        <QuestionsSection mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
        />


        {/*Recording */}
        <RecordAnswerSection
        mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}
        interviewData={interviewData}
        />
      </div>
      <div className='flex justify-end gap-5'>
       {activeQuestionIndex>0&& 
       <Button>Previous Question</Button>}
        {activeQuestionIndex!=mockInterviewQuestion?.length-1 && 
        <Button onClick={()=>setActiveQuestionIndex(activeQuestionIndex+1)}>Next Question</Button>}
        {activeQuestionIndex==mockInterviewQuestion?.length-1 &&
         <Button>End Interview</Button>}

      </div>
    </div>
  )
}

export default StartInterview
