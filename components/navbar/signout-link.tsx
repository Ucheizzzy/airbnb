'use client'
import { SignOutButton } from '@clerk/nextjs'
import React from 'react'
import { useToast } from '@/components/ui/use-toast'

export default function SignOutLink() {
  const { toast } = useToast()
  const handleSignOut = () => {
    toast({
      title: 'Success',
      description: 'Sign out completed successful',
    }).toString()
  }
  return (
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={handleSignOut}>
        Logout
      </button>
    </SignOutButton>
  )
}
