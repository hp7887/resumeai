import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Buffer } from 'buffer'

import { authjsPlugin } from 'payload-authjs'
import { authConfig } from './auth.config'
import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const base64Cert = process.env.SSL_CERT_BASE64
const decodedCert = base64Cert ? Buffer.from(base64Cert, 'base64').toString('utf-8') : undefined

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      ssl: decodedCert ? { rejectUnauthorized: true, ca: decodedCert } : false,
    },
  }),
  sharp,
  plugins: [
    authjsPlugin({
      authjsConfig: authConfig,
    }),
  ],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
})
