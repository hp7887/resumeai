'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AlertTriangle, Loader2 } from 'lucide-react'

function ErrorDisplay() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const errorMessages: { [key: string]: string } = {
    OAuthAccountNotLinked:
      'Этот Google аккаунт уже привязан к другому пользователю на нашем сайте. Пожалуйста, войдите, используя другой метод.',
    AccessDenied: 'Вы отклонили запрос на авторизацию через Google.',
    default: 'Что-то пошло не так во время входа. Пожалуйста, попробуйте еще раз.',
  }

  const message = error ? errorMessages[error] || errorMessages.default : errorMessages.default

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-theme(spacing.14))] p-4">
      <Card className="w-full max-w-md shadow-lg text-center">
        <CardHeader>
          <div className="mx-auto bg-destructive/10 rounded-full p-3 w-fit">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold mt-4">Ошибка авторизации</CardTitle>
          <CardDescription className="text-muted-foreground pt-2">{message}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/">Вернуться на главную</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
function AuthErrorLogic() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const isPopup = typeof window !== 'undefined' && window.opener

  useEffect(() => {
    if (isPopup) {
      window.opener.postMessage(
        { status: 'error', error: error || 'unknown' },
        window.location.origin,
      )
      window.close()
    }
  }, [error, isPopup])

  if (isPopup) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: 'hsl(var(--background))',
          color: 'hsl(var(--foreground))',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Обработка ошибки...</span>
        </div>
      </div>
    )
  }

  return <ErrorDisplay />
}

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      }
    >
      <AuthErrorLogic />
    </Suspense>
  )
}
