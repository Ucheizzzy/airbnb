import { SubmitButton } from '@/components/form/buttons'
import FormContainer from '@/components/form/form-container'
import FormInput from '@/components/form/form-input'
import React from 'react'
import { createProfileAction } from '@/lib/actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function CreateProfile() {
  const user = await currentUser()
  if (user?.privateMetadata?.hasProfile) redirect('/')
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>New User</h1>
      <div className='border p-8 rounded-md max-w-lg'>
        <FormContainer action={createProfileAction}>
          <div className='grid gap-4 mt-4'>
            <FormInput type='text' name='firstName' label='First Name' />
            <FormInput type='text' name='lastName' label='Last Name' />
            <FormInput type='text' name='username' label='User Name' />
          </div>
          <SubmitButton text='Create Profile' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  )
}
