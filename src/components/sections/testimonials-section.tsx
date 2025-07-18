// components/sections/testimonials-section.tsx
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const quotes = [
    {
      text: "CareerMind has changed my life: One week & four interviews later, I will be making 150% more doing the job I chose.",
      author: "JENICA",
      position: "SOLUTIONS ENGINEER",
      avatar: "/avatar-jenica.png",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-purple-600/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-white rounded-lg p-8 shadow-xl">
            <div className="flex items-start space-x-4">
              <Image
                src={quotes[0].avatar || "/placeholder.svg"}
                alt="Avatar"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full"
              />
              <div className="flex-1">
                <div className="text-4xl text-gray-300 leading-none -mt-2">"</div>
                <h6 className="text-lg font-semibold text-gray-900 mt-2">{quotes[0].text}</h6>
                <div className="text-4xl text-gray-300 text-right leading-none -mb-2">"</div>
                <div className="mt-4">
                  <div className="font-semibold text-gray-900">{quotes[0].author}</div>
                  <div className="text-sm text-gray-600">{quotes[0].position}</div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-6">
              Your resume is an extension of yourself – make one that's truly you
            </h2>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 mb-6 shadow-lg">
              Build Your Resume
            </Button>
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-white">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-white" />
                ))}
              </div>
              <span className="font-semibold">Excellent</span>
              <span>4,662 Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}