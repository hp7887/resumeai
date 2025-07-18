import 'next-auth'
import type { DefaultSession } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    role?: 'admin' | 'user'
  }

  interface Session {
    accessToken?: string
    error?: 'RefreshAccessTokenError'

    user: {
      id: string
      role?: 'admin' | 'user'
    } & DefaultSession['user']
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    role?: 'admin' | 'user'
    accessToken?: string
    accessTokenExpires?: number
    refreshToken?: string
    error?: 'RefreshAccessTokenError'
  }
}
