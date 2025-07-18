const Footer = () => {
  return (
    <footer className='mt-12 mb-8'>
      <main className='mx-auto flex max-w-5xl justify-between gap-4 px-5'>
        <p className='text-sm'>
          Invoicipedia &copy; {new Date().getFullYear()}
        </p>
        <p className='text-sm'>
          Created by Colby Fayock with Next.js, Xata, and Clerk
        </p>
      </main>
    </footer>
  )
}

export default Footer
