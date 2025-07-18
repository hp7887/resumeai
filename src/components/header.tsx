'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Menu,
  BookOpenCheck,
  FileSearch,
  LayoutDashboard,
  Sparkles,
  FileText,
  Landmark,
  Brush,
  Heart,
  Brain,
  Zap,
  CheckCircle,
  FileSignature,
} from 'lucide-react'
import HeaderDropdown from './header-dropdown'

export default function Header() {
  const resumeItems = [
    {
      title: 'Resume Tools & Guides',
      list: [
        {
          icon: Brain,
          txt: 'AI Resume Builder',
          desc: 'Build your resume with AI assistance',
          href: '#',
        },
        {
          icon: CheckCircle,
          txt: 'Resume Checker',
          desc: 'Scan your resume for 16 crucial checks',
          href: '#',
        },
        {
          icon: LayoutDashboard,
          txt: 'Resume Templates',
          desc: 'Professionally designed templates',
          href: '#',
        },
        {
          icon: BookOpenCheck,
          txt: 'How to Write a Resume',
          desc: 'The most comprehensive guide',
          href: '#',
        },
        { icon: FileSearch, txt: 'Resume Examples', desc: 'Browse samples by industry', href: '#' },
      ],
    },
  ]
  const coverLetterItems = [
    {
      icon: FileSignature,
      title: 'Cover Letter Builder',
      href: '#',
      list: [{ desc: 'Create professional cover letters in minutes.', href: '#', txt: '' }],
    },
    {
      icon: FileSearch,
      title: 'Cover Letter Examples',
      href: '#',
      list: [{ desc: 'Browse examples by industry and job title.', href: '#', txt: '' }],
    },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white dark:bg-zinc-950 shadow-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 select-none">
              <Heart className="size-7 text-[#6355d8]" fill="#6355d8" />
              <span className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                CareerMind
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-0.5">
              <HeaderDropdown label="Resume" items={resumeItems} />
              <HeaderDropdown label="Cover Letter" items={coverLetterItems} />
              <Button variant="ghost" asChild>
                <Link href="#">Blog</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#">Pricing</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#">For Organizations</Link>
              </Button>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="outline"
              className="text-gray-700 dark:text-gray-200 dark:border-gray-600"
            >
              Sign in
            </Button>
            <Button variant="custom-green">Sign Up</Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
