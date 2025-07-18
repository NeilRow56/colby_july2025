import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { InvoiceCreationForm } from '../_components/create-invoice-form'

export default function CreateInvoicePage() {
  return (
    <main className='mx-auto my-12 flex h-full max-w-5xl flex-col justify-center gap-6 text-center'>
      <div className='mb-8 flex items-center gap-4'>
        <Link
          href='/invoives'
          className={buttonVariants({
            variant: 'outline',
            size: 'icon'
          })}
        >
          <ArrowLeft className='size-4' />
        </Link>
        <h1 className='text-2xl font-bold'>Create Invoice</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className='text-primary text-2xl'></CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <InvoiceCreationForm />
        </CardContent>
      </Card>
    </main>
  )
}
