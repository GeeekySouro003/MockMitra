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
  
function AddNewInterview() {
    const [openDialog,setopenDialog]=useState(false);
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
        <div className='font-semibold'>
          <h2>Add details about your job description,Job role/position,years of experience</h2>
        </div>

        <div className='mt-7 my-3'>
          <label>Job Position/Role</label>
          <Input placeholder='Software Developer'></Input>
        </div>

        <div className='mt-7 my-3'>
          <label>Job Description</label>
          <Textarea placeholder='NextJs,Redis,AngularJs,PostgreSql'></Textarea>
        </div>

        <div className='mt-7 my-3'>
          <label>Years of Experience</label>
          <Input placeholder='3' type='number'></Input>
        </div>

        <div className='flex gap-4 justify-end'>
            <Button>Start Interview</Button>
            <Button variant="ghost" onClick={()=> setopenDialog(false)}>Discard</Button>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default AddNewInterview
