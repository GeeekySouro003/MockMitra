import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Webcam from 'react-webcam'

function RecordAnswerSection() {
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
    <Button variant="outline" className="my-10">Start Recording</Button>
    </div>
    
  )
}

export default RecordAnswerSection
