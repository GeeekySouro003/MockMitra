"use client"
import { Button } from '@/components/ui/button'
import { Mic } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import useSpeechToText from 'react-hook-speech-to-text'
import Webcam from 'react-webcam'
import { toast } from 'sonner'
//import useSpeechToText from 'react-hook-speech-to-text';

function RecordAnswerSection({mockInterviewQuestion,activeQuestionIndex}) {
  const[userAnswer,setUserAnswer] = useState('');
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

  const SaveUserAnswer=()=> {
    if(isRecording) {
      stopSpeechToText()
      if(userAnswer?.length<10) {
        toast("Error occured! Please record your answer again")
        return;
      }
      const feedbackPrompt="Question:"+mockInterviewQuestion[activeQuestionIndex]?.question
      ", User Answer:"+userAnswer+", Depends on question and user answer for given interview question "+ 
      " Please give us rating for answer accuracy and feedback for providing better services "+
      " within a few words  to improve it in JSON format with rating field and feedback field ";
    }
    else {
      startSpeechToText()
    }
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
    <Button variant="outline" className="my-10" 
    onClick={SaveUserAnswer}
    >
      {isRecording?
      <h2 className='text-red-600 flex gap-3'>
        <Mic/> Stop Recording..
      </h2>
      : 'Record Answer'}</Button>
      <Button onClick={()=>console.log(userAnswer)}>Show Answer</Button>
    
    </div>
    
  )
}

export default RecordAnswerSection
