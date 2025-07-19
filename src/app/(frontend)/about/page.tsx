'use client'

import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function AboutPage() {
  const [activeFeature, setActiveFeature] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      title: 'AI-Driven Resume Analysis',
      description: 'Our advanced AI analyzes your resume and provides a detailed score with improvement suggestions.',
      icon: '📊'
    },
    {
      title: 'ATS Keyword Optimization',
      description: 'Ensure your resume passes Applicant Tracking Systems with targeted keyword enhancements.',
      icon: '🔍'
    },
    {
      title: 'Virtual Interview Prep',
      description: 'Practice with real-time feedback to boost your confidence and performance.',
      icon: '🎤'
    },
    {
      title: 'Personalized Recommendations',
      description: 'Get tailored advice to align your application with your career goals.',
      icon: '💡'
    },
    {
      title: 'Intuitive User Experience',
      description: 'Navigate our platform with ease, designed for seamless user interaction.',
      icon: '🚀'
    },
    {
      title: 'Career Path Guidance',
      description: 'Receive personalized career advice to plan and achieve your professional goals.',
      icon: '🗺️'
    }
  ]

  const timelineEvents = [
    { year: '2020', event: 'CareerMind.io founded with a vision to revolutionize job search.' },
    { year: '2021', event: 'Launched AI-powered resume analysis tool.' },
    { year: '2022', event: 'Introduced virtual interview preparation feature.' },
    { year: '2023', event: 'Expanded to support global job markets.' },
    { year: '2025', event: 'Reached 1M+ users worldwide.' }
  ]

  const teamMembers = [
    { name: 'Jane Doe', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { name: 'John Smith', role: 'CTO', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
    { name: 'Emily Johnson', role: 'Lead AI Engineer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' }
  ]

  const testimonials = [
    { name: 'Alex Brown', quote: 'CareerMind.io transformed my resume and landed me my dream job!', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
    { name: 'Sarah Lee', quote: 'The interview prep feature boosted my confidence immensely.', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f' },
    { name: 'Michael Chen', quote: 'The AI feedback was spot-on and easy to implement.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12 pt-28 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 text-center"
      >
        <h1 className="text-5xl font-bold text-white">About CareerMind.io</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          CareerMind.io is a cutting-edge AI-powered platform designed to empower job seekers. From resume optimization to personalized interview coaching, we provide the tools you need to stand out in today’s competitive job market.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 transition"
        >
          Explore Our Tools
        </motion.button>
      </motion.section>

      <Separator className="bg-gray-700" />

      {/* Our Mission */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
        <p className="text-gray-400 leading-relaxed">
          At CareerMind.io, we aim to empower professionals globally by leveraging AI to optimize resumes, ensure ATS compatibility, and provide tailored interview preparation. Our goal is to help you showcase your skills and achieve your career aspirations with confidence.
        </p>
      </motion.section>

      <Separator className="bg-gray-700" />

      {/* Company Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-white text-center">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center w-full`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <h3 className="text-xl font-semibold text-white">{event.year}</h3>
                <p className="text-gray-400">{event.event}</p>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
              </div>
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator className="bg-gray-700" />

      {/* Key Features */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-white text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: activeFeature === index ? 1.05 : 1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setActiveFeature(index)}
              onHoverEnd={() => setActiveFeature(null)}
              className="p-6 bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator className="bg-gray-700" />

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-white text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-700 rounded-lg shadow-md text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0'; }}
              />
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator className="bg-gray-700" />

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-semibold text-white text-center">What Our Users Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-gray-700 rounded-lg shadow-xl text-center"
          >
            <img
              src={testimonials[currentTestimonial].image}
              alt={testimonials[currentTestimonial].name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-300 italic text-lg">"{testimonials[currentTestimonial].quote}"</p>
            <p className="mt-4 text-white font-semibold">{testimonials[currentTestimonial].name}</p>
          </motion.div>
          <div className="flex justify-between mt-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              →
            </motion.button>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-500'}`}
              ></div>
            ))}
          </div>
        </div>
      </motion.section>

      <Separator className="bg-gray-700" />

      {/* Contact Us */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="space-y-6 text-center"
      >
        <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Have questions, feedback, or partnership inquiries? We’d love to hear from you!
        </p>
        <div className="space-y-2">
          <p className="text-gray-400">
            📧 Email: <a href="mailto:support@careermind.io" className="underline text-blue-400 hover:text-blue-300">support@careermind.io</a>
          </p>
          <p className="text-gray-400">
            🕒 Working hours: Monday - Friday, 9:00 AM - 6:00 PM (UTC)
          </p>
        </div>
        <motion.a
          href="mailto:support@careermind.io"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 transition"
        >
          Get in Touch
        </motion.a>
      </motion.section>
    </div>
  )
}