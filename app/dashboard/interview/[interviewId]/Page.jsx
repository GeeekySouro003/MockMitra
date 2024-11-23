"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { WebcamIcon, Lightbulb } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null); // Initialized as null
  const [webcamEnabled, setWebcamEnabled] = useState(false);

  useEffect(() => {
    console.log(params.interviewId);
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]); // Save fetched data
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Ready to roll?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="flex flex-col my-5 gap-4">
          <div className="flex flex-col p-5 rounded-md border gap-5">
            {interviewData ? (
              <>
                <h2 className="text-lg">
                  <b>Job Position/Role:</b> {interviewData.jobPosition}
                </h2>
                <h2 className="text-lg">
                  <b>Job Description:</b> {interviewData.jobDesc}
                </h2>
                <h2 className="text-lg">
                  <b>Years of Experience:</b> {interviewData.jobExperience}
                </h2>
              </>
            ) : (
              <p>Loading interview details...</p>
            )}
          </div>
          <div className="p-5 border rounded-md border-blue-500">
            <h2 className="flex gap-2 items-center text-blue-600">
              <Lightbulb />
              <strong>Disclaimer!</strong>
            </h2>
            <h2 className="mt-3 text-black">
              <b>
              {process.env.NEXT_PUBLIC_INFORMATION || "No additional information available."}
              </b>
            </h2>
          </div>
        </div>

        {/* Right Section */}
        <div>
          {webcamEnabled ? (
            <Webcam
              onUserMedia={() => setWebcamEnabled(true)}
              onUserMediaError={() => setWebcamEnabled(false)}
              mirrored={true}
              style={{
                height: 300,
                width: 300,
              }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full p-20 bg-secondary rounded-lg border my-7" />
              <Button  onClick={() => setWebcamEnabled(true)}>Enable Camera and Microphone</Button>
            </>
          )}
        </div>
      </div>

      {/* Start Button */}
      <div className="flex justify-center mt-10">
        <Button>Start Interview</Button>
      </div>
    </div>
  );
}

export default Interview;
