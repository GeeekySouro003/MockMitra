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
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.

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
