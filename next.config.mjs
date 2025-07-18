import { withPayload } from '@payloadcms/next/withPayload'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@payloadcms/db-postgres', 'sharp'],
  output: 'standalone',
}

export default withPayload(nextConfig, {
  // Путь к вашему основному конфигурационному файлу Payload
  configPath: path.resolve(__dirname, './src/payload.config.ts'),

  // Путь к вашему конфигурационному файлу NextAuth.js
  auth: {
    configPath: path.resolve(__dirname, './src/auth.config.ts'),
  },

  // Payload Admin UI будет доступен по этому пути
  payloadPath: '/admin',
})
