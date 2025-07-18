'use client'

import type React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, Lock } from 'lucide-react'

export default function UploadCtaSection() {
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      console.log('File selected:', file.name)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Get your resume score now!</h3>
        <p className="text-xl text-white/90 mb-8">
          Upload your resume and you'll get a personalized email with an actionable tasklist.
        </p>
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 max-w-lg mx-auto">
          <div className="text-center space-y-6">
            <Upload className="w-16 h-16 text-white mx-auto" />
            <div className="relative">
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 shadow-lg">
                Upload Your Resume
              </Button>
            </div>
            <p className="text-white/80 text-sm">
              Drop your resume here or choose a file. <br />
              PDF & DOCX only. Max 2MB file size.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-white/70">
              <Lock className="w-4 h-4" />
              <span>Privacy guaranteed</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
