import { AVAILABLE_STATUSES } from '@/data/invoices'
import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export type Status = (typeof AVAILABLE_STATUSES)[number]['id']

const statuses = AVAILABLE_STATUSES.map(({ id }) => id) as Array<Status>

export const statusEnum = pgEnum(
  'status',
  statuses as [Status, ...Array<Status>]
)

export const Invoices = pgTable('invoices', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  serial: serial(),
  createTs: timestamp('createTs').defaultNow().notNull(),
  value: integer('value').notNull(),
  description: text('description').notNull(),
  customerId: text('customerId')
    .notNull()
    .references(() => Customers.id),
  status: statusEnum('status').notNull()
})

export type Invoice = typeof Invoices.$inferSelect

export const Customers = pgTable('customers', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  createTs: timestamp('createTs').defaultNow().notNull(),
  name: text('name').notNull(),
  email: text('email').notNull()
})

export type Customer = typeof Customers.$inferSelect

// Create relations
export const customersRelations = relations(Customers, ({ many }) => ({
  Invoices: many(Invoices)
}))

export const invoiceRelations = relations(Invoices, ({ one }) => ({
  customer: one(Customers, {
    fields: [Invoices.customerId],
    references: [Customers.id]
  })
}))
