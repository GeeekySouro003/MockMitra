"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { chatSession } from '@/utils/GeminiModal'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { Mic } from 'lucide-react'
import moment from 'moment'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useSpeechToText from 'react-hook-speech-to-text'
import Webcam from 'react-webcam'
import { toast } from 'sonner'
//import useSpeechToText from 'react-hook-speech-to-text';

function RecordAnswerSection({mockInterviewQuestion,activeQuestionIndex,interviewData}) {
  const[userAnswer,setUserAnswer] = useState('');
  const {user}=useUser();
  const[loading,setLoading]=useState(false); 
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    results.map((result)=> {
      setUserAnswer(prevAns=>prevAns+result?.transcript)
    })

  },[results])


  useEffect(()=>{
    if(!isRecording && userAnswer.length>10 ) {
      UpdateUserAnswer();
    }
    // if(userAnswer?.length<10) {
    //   setLoading(false);
    //   toast("Error occured! Please record your answer again")
    //   return;
    // }
  },[userAnswer])

  const StartStopRecording= async()=> {
    if(isRecording) {
       
      stopSpeechToText()
    
      
    }
    else {
      startSpeechToText()
    }
  }

  const UpdateUserAnswer=async()=>{
    console.log(userAnswer);  
    setLoading(true);
    const feedbackPrompt="Question"+mockInterviewQuestion[activeQuestionIndex]?.question+
    ", User Answer:"+userAnswer+",Depends on question and user answer for given interview question "+
    " please give us rating for answer and feedback as area of improvement if any "+
    "in just 3 to 5 lines to improve it in JSON format with rating field and feedback field";
    const result=await chatSession.sendMessage(feedbackPrompt);
    const mockJsonresp=(result.response.text()).replace('```json','').replace('```','');
    console.log(mockJsonresp);
    const JsonFeedbackResp=JSON.parse(mockJsonresp);

    const resp=await db.insert(UserAnswer).values({
      mockIdRef:interviewData?.mockId,
      question:mockInterviewQuestion[activeQuestionIndex]?.question,
      correctAns:mockInterviewQuestion[activeQuestionIndex]?.answer,
      userAns:userAnswer,
      feedback:JsonFeedbackResp?.feedback,
      rating:JsonFeedbackResp?.rating,
      userEmail:user?.primaryEmailAddress.emailAddress,
      createdAt:moment().format('DD-MM-YYYY')
      
    })

    if(resp) {
      toast('User answer recorded successfully!'); 
    }   
    setUserAnswer('');
    setLoading(false);
  }

  
  return (
    <div className='flex items-center justify-center flex-col'>
<div className='flex flex-col justify-center items-center bg-black rounded-lg p-5 mt-20'>
        <Image src={'/webcam.png'} width={200} height={200} 
        className='absolute '/>
      <Webcam
      style={{
        height:300,
        width:'100%',
        zIndex:10,
      }}
      mirrored={true}
      />
    </div>
    <Button 
    disabled={loading}
    variant="outline" className="my-10" 
    onClick={StartStopRecording}
    >
      {isRecording?
      <h2 className='text-red-600 flex gap-3'>
        <Mic/> Stop Recording..
      </h2>
      : 'Record Answer'}</Button>
    
    
    </div>
    
  )
}

export default RecordAnswerSection
