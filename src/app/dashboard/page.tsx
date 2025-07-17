import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import { CirclePlus } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <main className='mx-auto my-12 flex h-full max-w-5xl flex-col justify-center gap-6 text-center'>
      <div className='text-left-2 flex justify-between px-4'>
        <h1 className='text-3xl font-bold'>Invoices</h1>
        <Button asChild className='hover:bg-primary/70 inline-flex gap-2'>
          <Link href='/invoice/create'>
            <CirclePlus className='size-5' />
            Create invoice
          </Link>
        </Button>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] p-4'>Date</TableHead>
            <TableHead className='p-4'>Customer</TableHead>
            <TableHead className='p-4'>Email</TableHead>
            <TableHead className='p-4 text-center'>Status</TableHead>

            <TableHead className='p-4 text-right'>Value (£)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='p-4 text-left font-medium'>
              <span className='font-bold'>31/10/2024</span>
            </TableCell>
            <TableCell className='p-4 text-left'>
              <span className='font-bold'>John Doe Limited</span>
            </TableCell>
            <TableCell className='p-4 text-left'>
              <span>john_doe@bt.com</span> p-4
            </TableCell>
            <TableCell className='p-4 text-center'>
              <Badge className='rounded-full'>unpaid</Badge>
            </TableCell>
            <TableCell className='p-4 text-right'>
              <span>125.25</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}
