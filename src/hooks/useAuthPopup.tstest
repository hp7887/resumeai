'use client'

import { useSession } from 'next-auth/react'

type PopupOptions = {
  onAuthSuccess?: () => void
  onAuthError?: (error: any) => void
  onClose?: () => void
}

export function useAuthPopup() {
  const { update } = useSession()

  const openSignInPopup = (options?: PopupOptions) => {
    const width = 500,
      height = 700
    const left = (window.innerWidth - width) / 2
    const top = (window.innerHeight - height) / 2
    const url = '/api/auth/popup-start'

    const newWindow = window.open(
      url,
      'discord-auth',
      `width=${width},height=${height},top=${top},left=${left}`,
    )

    let timer: NodeJS.Timeout | null = null
    let authCompleted = false

    const cleanup = () => {
      if (timer) clearInterval(timer)
      window.removeEventListener('message', messageListener)
    }

    const messageListener = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) {
        return
      }

      if (event.data?.status === 'authenticated') {
        authCompleted = true
        update() // Обновляем сессию
        options?.onAuthSuccess?.()
        cleanup()
        newWindow?.close()
      } else if (event.data?.status === 'error') {
        authCompleted = true
        options?.onAuthError?.(event.data.error)
        cleanup()
        newWindow?.close()
      }
    }

    timer = setInterval(() => {
      if (newWindow && newWindow.closed && !authCompleted) {
        options?.onClose?.()
        cleanup()
      }
    }, 500)

    window.addEventListener('message', messageListener)
  }

  return { openSignInPopup }
}
