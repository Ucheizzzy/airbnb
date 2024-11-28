import Link from 'next/link'
import React from 'react'

export default function ErrorPage() {
  return (
    <div className='flex justify-center items-center mx-auto h-[100vh]'>
      <h2>Oops Something went wrong</h2>
      <p>Take me back and refresh</p>
      <Link href={'/'} className='gap-x-3 text-muted-foreground'>
        Reload
      </Link>
    </div>
  )
}
