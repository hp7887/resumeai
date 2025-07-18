// src/auth.config.ts (ИСПРАВЛЕННАЯ ВЕРСИЯ С ЯВНЫМ ПРИВЕДЕНИЕМ ТИПОВ)
import type { NextAuthConfig } from 'next-auth'
import discord from 'next-auth/providers/discord'

export const authConfig: NextAuthConfig = {
  providers: [
    discord({
      clientId: process.env.AUTH_DISCORD_ID,
      clientSecret: process.env.AUTH_DISCORD_SECRET,
      authorization: { params: { scope: 'identify email guilds' } },
    }),
  ],
  pages: {
    signIn: '/admin/login',
    error: '/auth/error',
  },
  callbacks: {
    session: ({ session, token }) => {
      // ИСПРАВЛЕНИЕ: Явно приводим session к `any`, чтобы добавить кастомные поля.
      const modifiedSession = session as any
      modifiedSession.accessToken = token.accessToken as string | undefined
      modifiedSession.error = token.error as 'RefreshAccessTokenError' | undefined
      if (modifiedSession.user) {
        modifiedSession.user.id = token.id as string
        modifiedSession.user.role = token.role as 'admin' | 'user'
      }
      return modifiedSession
    },
    jwt: async ({ token, user, account }) => {
      // 1. Первичный вход: Сохраняем все необходимые данные в токен
      if (account && user) {
        return {
          ...token,
          id: user.id,
          // ИСПРАВЛЕНИЕ: Приводим `user` к `any`, чтобы получить доступ к `role`
          role: (user as any).role,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account.expires_at ? account.expires_at * 1000 : undefined,
        }
      }

      // 2. Последующие запросы: Если токен все еще валиден, возвращаем его.
      // ИСПРАВЛЕНИЕ: Приводим `token.accessTokenExpires` к `number`
      if (token.accessTokenExpires && Date.now() < (token.accessTokenExpires as number)) {
        return token
      }

      // 3. Если токен истек, но нет refresh token, то мы не можем его обновить.
      if (!token.refreshToken) {
        if (token.accessToken) {
          return { ...token, error: 'RefreshAccessTokenError' as const }
        }
        return token
      }

      // 4. Пытаемся обновить токен
      try {
        const response = await fetch('https://discord.com/api/oauth2/token', {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            client_id: process.env.AUTH_DISCORD_ID!,
            client_secret: process.env.AUTH_DISCORD_SECRET!,
            grant_type: 'refresh_token',
            refresh_token: token.refreshToken as string,
          }),
          method: 'POST',
        })

        const tokens = await response.json()
        if (!response.ok) throw tokens

        return {
          ...token,
          accessToken: tokens.access_token,
          accessTokenExpires: Date.now() + tokens.expires_in * 1000,
          refreshToken: tokens.refresh_token ?? token.refreshToken,
          error: undefined,
        }
      } catch (error) {
        console.error('Ошибка при обновлении токена доступа:', error)
        return { ...token, error: 'RefreshAccessTokenError' as const }
      }
    },
    authorized: ({ auth }) => !!auth,
  },
}
