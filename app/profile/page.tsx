import { SubmitButton } from '@/components/form/buttons'
import FormContainer from '@/components/form/form-container'
import FormInput from '@/components/form/form-input'
import ImageInputContainer from '@/components/form/image-input-container'
import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from '@/lib/actions'
import React from 'react'

export default async function ProfilePage() {
  const profile = await fetchProfile()
  return (
    <section>
      <h1 className='text-2xl font-semibold capitalize mb-8'>User Profile</h1>
      <div className='border p-8 rounded-md'>
        {/* image input container */}
        <ImageInputContainer
          image={profile?.profileImage}
          name={profile?.username}
          action={updateProfileImageAction}
          text='Update Profile Image'
        />

        <FormContainer action={updateProfileAction}>
          <div className='grid gap-4 md:grid-cols-2 mt-4 '>
            <FormInput
              type='text'
              name='firstName'
              label='First Name'
              defaultValue={profile.firstName}
            />
            <FormInput
              type='text'
              name='lastName'
              label='Last Name'
              defaultValue={profile.lastName}
            />
            <FormInput
              type='text'
              name='username'
              label='Username'
              defaultValue={profile.username}
            />
          </div>
          <SubmitButton text='Update Profile' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  )
}
