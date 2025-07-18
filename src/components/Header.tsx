import {
  //   OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className='mx-auto mt-8 mb-12 flex min-w-5xl items-center justify-between gap-4 px-5'>
      <div className='flex items-center gap-4'>
        <p className='font-bold'>
          <Link href='/dashboard'>Invoicipedia</Link>
        </p>
        <span className='text-slate-300'>/</span>
        {/* <SignedIn>
            <span className='-ml-2'>
              <OrganizationSwitcher afterCreateOrganizationUrl='/dashboard' />
            </span>
          </SignedIn> */}
      </div>
      <div>
        <SignedOut>
          <Button type='button' asChild>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}

export default Header
