import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

function QuestionsSection({mockInterviewQuestion,activeQuestionIndex}) {

  const textToSpeech=(text)=>{
    if('speechSynthesis' in window) {
      const speech=new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
    else{
      alert('Your browser does not support this feature!')
    }
  }

  return mockInterviewQuestion && (
    <div className='p-5 border rounded-xl my-8'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {mockInterviewQuestion&&mockInterviewQuestion.map((question,index)=> (
          <h3 className={`p-2 bg-secondary rounded-full text-xs md:text-sm text-center cursor-pointer
            ${activeQuestionIndex==index &&"bg-blue-600 text-white"}`}>Question #{index+1}</h3>
        ))}

      </div>
      <h2 className='my-5 text-sm md:text-lg'>{mockInterviewQuestion[activeQuestionIndex]?.question}</h2>
      <Volume2 className="cursor-pointer my-5"onClick={()=>textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)}/>

      <div className='border rounded-lg p-5 bg-blue-100 mt-15'>
        <h2 className='flex gap-2 items-center text-blue-600'>
          <Lightbulb/>
          <b>Note:</b>
        </h2>
        <h2 className='text-sm text-primary my-2'>{process.env.NEXT_PUBLIC_QUESTION_NOTE}</h2>
      </div>

    </div>
  )
}

export default QuestionsSection