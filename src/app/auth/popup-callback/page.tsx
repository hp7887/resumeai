'use client'

import { useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export default function PopupCallback() {
  useEffect(() => {
    if (window.opener) {
      window.opener.postMessage({ status: 'authenticated' }, window.location.origin)
      window.close()
    }
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        left: 0,
        top: 0,
        background: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Loader2 className="h-5 w-5 animate-spin" />
        <span>Завершение авторизации...</span>
      </div>
    </div>
  )
}
