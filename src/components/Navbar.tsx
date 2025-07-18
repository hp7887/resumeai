'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useAuthPopup } from '@/hooks/useAuthPopup'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Skeleton } from './ui/skeleton'
import { AppGridMenu } from './AppGridMenu'

export default function Navbar() {
  const { data: session, status } = useSession()
  const { openSignInPopup } = useAuthPopup()

  const userInitials =
    session?.user?.name
      ?.split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'U'

  return (
    <header className="sticky top-0 z-50 w-full py-2">
      {/* 
        ИСПРАВЛЕНИЕ: 
        1. Убрана вложенная обертка `div`.
        2. Стили `justify-end` (прижать вправо) и `gap-x-4` (отступ между элементами) 
           теперь применяются напрямую к `<nav>`.
        Эта структура проще и более устойчива к перерасчетам макета, что устраняет "прыжок" контента.
      */}
      <nav className="container flex h-14 items-center justify-end gap-x-4">
        <Link href="#" className="text-sm hover:underline text-foreground">
          Почта
        </Link>
        <Link href="#" className="text-sm hover:underline text-foreground">
          Картинки
        </Link>

        <AppGridMenu />

        {(() => {
          if (status === 'loading') {
            return <Skeleton className="h-10 w-24 rounded-md" />
          }

          if (session?.user) {
            return (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      {session.user.image && (
                        <AvatarImage src={session.user.image} alt={session.user.name || 'avatar'} />
                      )}
                      <AvatarFallback>{userInitials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{session.user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/admin/collections/links">Мои ссылки</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut({ callbackUrl: '/' })}>
                    Выйти
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          }

          return (
            <Button
              onClick={() => openSignInPopup()}
              className="bg-[#1a73e8] hover:bg-[#1b66c9] text-white rounded-[4px] px-6"
            >
              Войти
            </Button>
          )
        })()}
      </nav>
    </header>
  )
}
