import NextAuth from 'next-auth'
import { authConfig } from './auth.config'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isAdminRoute = nextUrl.pathname.startsWith('/admin')

  if (isAdminRoute) {
    if (isLoggedIn) {
      if (req.auth.user?.role !== 'admin') {
        return Response.redirect(new URL('/', nextUrl))
      }
      return
    }
    const loginUrl = new URL('/admin/login', nextUrl.origin)
    loginUrl.searchParams.set('redirect', nextUrl.pathname)
    return Response.redirect(loginUrl)
  }

  return
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
