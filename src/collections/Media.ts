import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    hidden: ({ user }) => !user || user.role !== 'admin',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user && user.role === 'admin',
    update: ({ req: { user } }) => !!user && user.role === 'admin',
    delete: ({ req: { user } }) => !!user && user.role === 'admin',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
