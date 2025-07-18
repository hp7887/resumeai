'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import {
  Menu,
  BookOpenCheck,
  FileSearch,
  LayoutDashboard,
  Brain,
  CheckCircle,
  FileSignature,
  User,
  LogOut,
  Heart,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import HeaderDropdown from './header-dropdown'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { LoginModal } from './auth/LoginModal'

function UserNav() {
  const { data: session, status } = useSession()
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (status === 'loading') {
    return (
      <div className="flex items-center space-x-2">
        <Skeleton className="h-10 w-20 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    )
  }

  if (session?.user) {
    const userInitials =
      session.user.name
        ?.split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase() || 'U'

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar className="h-10 w-10">
              {session.user.image && (
                <AvatarImage src={session.user.image} alt={session.user.name || 'Аватар'} />
              )}
              <AvatarFallback>{userInitials}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{session.user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">{session.user.email}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {session.user.role === 'admin' && (
            <DropdownMenuItem asChild>
              <Link href="/admin">
                <User className="mr-2 h-4 w-4" />
                <span>Панель администратора</span>
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Выйти</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="text-gray-700 dark:text-gray-200 dark:border-gray-600"
          onClick={() => setIsModalOpen(true)}
        >
          Sign in
        </Button>
        <Button variant="custom-green" onClick={() => setIsModalOpen(true)}>
          Sign Up
        </Button>
      </div>
      <LoginModal open={isModalOpen} setOpen={setIsModalOpen} />
    </>
  )
}

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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white shadow-sm dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
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

          <div className="hidden md:flex items-center">
            <UserNav />
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
