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
import InvoiceCreationForm from '../_components/create-invoice-form'

export default function CreateInvoicePage() {
  return (
    <main className='mx-auto my-12 flex min-w-2xl flex-col'>
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
