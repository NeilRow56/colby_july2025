'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { customerSchema } from '@/zod/schema'
import { Customer } from '@/db/schema'
import { z } from 'zod/v4'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { createCustomer, updateCustomer } from '@/server/customers'

interface CustomerFormProps {
  customer?: Customer
}

export default function CreateCustomerForm({ customer }: CustomerFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof customerSchema>>({
    mode: 'onBlur',
    resolver: zodResolver(customerSchema),
    defaultValues: {
      name: customer?.name || '',
      email: customer?.email || ''
    }
  })

  async function onSubmit(values: z.infer<typeof customerSchema>) {
    setIsLoading(true)

    try {
      const customerData = {
        ...values,
        organizationId: '121'
      }

      if (customer) {
        await updateCustomer({
          ...customerData,
          id: customer.id
        })
      } else {
        await createCustomer(customerData)
      }

      form.reset()

      toast.success(`User ${customer ? 'updated' : 'added'} successfully`)
      router.refresh()
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      toast.error(`Failed to ${customer ? 'update' : 'add'} customer`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex flex-col gap-1 sm:px-8'>
      <div>
        <h2 className='text-2xl font-bold'>
          {customer?.id ? 'Edit' : 'New'} Customer Form
        </h2>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-4 md:flex-row md:gap-8'
        >
          <div className='flex w-full min-w-xs flex-col gap-4'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold'>Name</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold'>Email</FormLabel>
                  <FormControl>
                    <Input type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex gap-2'>
              <Button disabled={isLoading} type='submit'>
                {isLoading ? (
                  <Loader2 className='size-4 animate-spin' />
                ) : (
                  `${customer ? 'Update' : 'Add'} Customer`
                )}
              </Button>
              <Button
                type='button'
                variant='destructive'
                title='Reset'
                onClick={() => form.reset()}
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}
