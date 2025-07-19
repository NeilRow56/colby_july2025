'use server'

import { db } from '@/db'
import { Customer, Customers } from '@/db/schema'
import { eq } from 'drizzle-orm'

export async function getCustomers() {
  try {
    const allCustomers = await db.select().from(Customers)
    return allCustomers
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function createCustomer(
  customer: Omit<Customer, 'id' | 'createTs' | 'userId'>
) {
  try {
    await db.insert(Customers).values(customer)
  } catch (error) {
    console.error(error)
    return { error: 'Failed to create user' }
  }
}

export async function updateCustomer(customer: Omit<Customer, 'createTs'>) {
  try {
    await db
      .update(Customers)
      .set(customer)
      .where(eq(Customers.id, customer.id))
  } catch (error) {
    console.error(error)
    return { error: 'Failed to update customer' }
  }
}

export async function deleteUser(id: string) {
  try {
    await db.delete(Customers).where(eq(Customers.id, id))
  } catch (error) {
    console.error(error)
    return { error: 'Failed to delete user' }
  }
}
