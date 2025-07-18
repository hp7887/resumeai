'use client'

import { signIn } from 'next-auth/react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import GoogleIcon from '../icons/GoogleIcon'

interface LoginModalProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function LoginModal({ open, setOpen }: LoginModalProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md rounded-lg">
        <DialogHeader className="items-center text-center">
          <Heart className="h-10 w-10 text-[#6355d8]" fill="#6355d8" />
          <DialogTitle className="text-2xl font-bold pt-2">Вход в аккаунт</DialogTitle>
          <DialogDescription>Продолжите с помощью Google, чтобы начать.</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4 py-4">
          <Button
            variant="outline"
            className="w-full text-base py-6"
            onClick={() => signIn('google')}
          >
            <GoogleIcon className="mr-2 h-5 w-5" />
            Продолжить с Google
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Нет аккаунта?{' '}
          <button
            onClick={() => signIn('google')}
            className="underline underline-offset-2 hover:text-primary"
          >
            Регистрация
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
