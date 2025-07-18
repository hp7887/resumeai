import type { CollectionConfig, PayloadRequest } from 'payload'

const isAdmin = ({ req }: { req: PayloadRequest }) => req.user?.role === 'admin'
const isLoggedIn = ({ req }: { req: PayloadRequest }) => !!req.user

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
    hidden: ({ user }) => !user || user.role !== 'admin',
  },
  access: {
    create: () => true,
    read: ({ req }) => (req.user?.role === 'admin' ? true : { id: { equals: req.user.id } }),
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
    admin: isLoggedIn,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'image',
      type: 'text', // URL аватара
    },
    {
      name: 'role',
      required: true,
      defaultValue: 'user',
      access: {
        create: isAdmin,
        update: isAdmin,
      },
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
}
