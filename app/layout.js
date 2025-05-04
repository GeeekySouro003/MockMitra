import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MockMitra",
  description: "Ai Powered Mock Interview Preparation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
<html lang="en">
      <body className={inter.className}>
        <Toaster/>
        {children}</body>
    </html>
    </ClerkProvider>
    
  );
}
