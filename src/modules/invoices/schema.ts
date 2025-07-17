import * as z from 'zod/v4'

export const invoiceSchema = z.object({
  name: z
    .string()
    .min(3, { error: 'Name must be at least 3 characters.' })
    .max(100, { error: 'Name must be at most 100 characters.' }),
  email: z.email().min(1, { error: 'Email required.' }),
  value: z
    .number()
    .min(1, { error: 'Value must be a positive number' })
    .nullable(),
  description: z
    .string()
    .min(3, { error: 'Description must be at least 3 characters.' })
})
