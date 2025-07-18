'use client'

import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Upload, Lock } from 'lucide-react'

export default function HeroSection() {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (
        file.type === 'application/pdf' ||
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        if (file.size <= 2 * 1024 * 1024) {
          // 2MB limit
          console.log('File uploaded:', file.name)
          // TODO: Implement actual file processing
        } else {
          alert('File size must be less than 2MB')
        }
      } else {
        alert('Only PDF and DOCX files are allowed')
      }
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const file = files[0]
      if (
        file.type === 'application/pdf' ||
        file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        if (file.size <= 2 * 1024 * 1024) {
          console.log('File uploaded:', file.name)
          // TODO: Implement actual file processing
        } else {
          alert('File size must be less than 2MB')
        }
      } else {
        alert('Only PDF and DOCX files are allowed')
      }
    }
  }

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-hero">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 pt-4 text-center lg:text-left">
            <div className="space-y-4 lg:pl-8 xl:pl-16">
              <div className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                AI RESUME CHECKER
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Is your resume good enough?
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                A free and fast AI resume checker doing 16 crucial checks to ensure your resume is
                ready to perform and get you interview callbacks.
              </p>
            </div>

            <div className="lg:pl-8 xl:pl-16 lg:max-w-md mx-auto lg:mx-0">
              <Card className="p-6 sm:p-8 border-2 border-dashed border-blue-400 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                <div
                  className={`text-center space-y-4 ${dragActive ? 'opacity-50' : ''}`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <p className="text-gray-500">
                    Drop your resume here or choose a file.
                    <br className="hidden sm:inline" />
                    PDF & DOCX only. Max 2MB file size.
                  </p>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.docx"
                      onChange={handleFileInput}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-md shadow-lg">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Your Resume
                    </Button>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Lock className="w-4 h-4" />
                    <span>Privacy guaranteed</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px] overflow-visible">
            <div
              className="absolute top-0 left-0 w-full max-w-none
                translate-x-8
                md:translate-x-12"
            >
              <Image
                src="/resume-checker.svg"
                alt="Resume preview being checked by AI"
                width={496}
                height={644}
                priority
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
