"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiModal';
import { LoaderCircle } from 'lucide-react';
import { MockInterview } from '@/utils/schema';
import { db } from '@/utils/db';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';

  
function AddNewInterview() {
    const [openDialog,setopenDialog]=useState(false);
    const[jobPosition,setJobPosition]=useState();
    const [jobDescription,setJobDescription]=useState();
    const [jobExperience,setJobExperience]=useState();
    const [loading,setLoading]=useState(false);
    const [jsonresponse,setjsonresponse]=useState([]);
    const {user}=useUser();

    const onSubmit = async(e) => {
      setLoading(true);
      e.preventDefault();
      console.log(jobPosition,jobDescription,jobExperience);

      const InputPrompt="Job Profile:" + jobPosition + "Job Description:" +jobDescription + "Experience:" +process.env.NEXT_PUBLIC_YEARS_OF_EXPERIENCE + "based on the data write 5 interview question and answers in json format and take question and answer as json field values"
      const result=await chatSession.sendMessage(InputPrompt);
      const mockjsonresp=(result.response.text()).replace('```json','').replace('```','');
      console.log(JSON.parse(mockjsonresp));
      setjsonresponse(mockjsonresp);

      const resp=await db.insert(MockInterview)
      .values({
        mockId:uuidv4(),
        jsonMockResp:mockjsonresp,
        jobPosition:jobPosition,
        jobDesc:jobDescription,
        jobExperience:jobExperience,
        createdBy:
      })
      setLoading(false);
    }

   
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
      onClick={()=> setopenDialog(true)}
      >
        <h2 className='text-bold text-lg text-center'>+ Create New</h2>
      </div>
      <Dialog open={openDialog}>
  
  <DialogContent className='max-w-xl'>
    <DialogHeader>
      <DialogTitle className='text-xl'>Describe more about your upcoming Interview</DialogTitle>
      <DialogDescription>
        <form onSubmit={onSubmit}>
        <div className='font-semibold'>
          <h2>Add details about your job description,Job role/position,years of experience</h2>
        </div>

        <div className='mt-7 my-3'>
          <label>Job Position/Role</label>
          <Input placeholder='Software Developer' required  
          onChange={(event) => setJobPosition(event.target.value)}
          />
        </div>

        <div className='mt-7 my-3'>
          <label>Job Description</label>
          <Textarea placeholder='NextJs,Redis,AngularJs,PostgreSql'
          onChange={(event) => setJobDescription(event.target.value)}
          />
        </div>

        <div className='mt-7 my-3'>
          <label>Years of Experience</label>
          <Input placeholder='3' type='number' max='69'
          onChange={(event) => setJobExperience(event.target.value)}
          />
        </div>

        <div className='flex gap-4 justify-end'>
            <Button type='submit' disabled={loading}>
            {loading ?
              <>
              <LoaderCircle className='animate-spin'/>Generating from AI
              </>:'Start Interview'
            }
            
            </Button>
            <Button type='button' variant="ghost" onClick={()=> setopenDialog(false)}>Discard</Button>
        </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview
