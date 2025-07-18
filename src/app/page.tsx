import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='mx-auto flex max-w-5xl flex-col items-center justify-center text-center'>
      <h1 className='text-5xl font-bold'>Invoicipedia</h1>
      <div className='mt-8'>
        <Link
          className={buttonVariants({
            size: 'lg'
          })}
          href='/dashboard'
        >
          Sign In
        </Link>
      </div>
    </main>
  )
}
