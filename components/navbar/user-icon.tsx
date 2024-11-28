import { fetchProfileImage } from '@/lib/actions'
import React from 'react'
import { LuUser2 } from 'react-icons/lu'

export default async function UserIcon() {
  const profileImage = await fetchProfileImage()

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt='profile image'
        className='size-6 bg-primary rounded-full object-cover'
      />
    )
  }
  return <LuUser2 className='size-6 bg-primary rounded-full text-white' />
}
