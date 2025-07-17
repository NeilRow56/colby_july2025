'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod/v4'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { PlusIcon } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { invoiceSchema } from '../schema'

export function InvoiceCreationForm() {
  const form = useForm({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      name: '',
      email: '',
      value: null,
      description: ''
    }
  })

  function onSubmit(data: z.infer<typeof invoiceSchema>) {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>Billing Name</FormLabel>
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
              <FormLabel className='font-semibold'>Billing Email</FormLabel>
              <FormControl>
                <Input type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='value'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-semibold'>Value</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='number'
                  value={field.value ?? ''}
                  className='rounded-r-none'
                  onChange={e =>
                    field.onChange(
                      isNaN(e.target.valueAsNumber)
                        ? null
                        : e.target.valueAsNumber
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel className='font-semibold'>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>
          Submit <PlusIcon className='ml-1 size-4' />
        </Button>
      </form>
    </Form>
  )
}
