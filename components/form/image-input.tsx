import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

export default function ImageInput() {
  const name = 'image'
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>Image</Label>
      <Input
        id={name}
        name={name}
        type='file'
        accept='image/*'
        className='max-w-xs'
      />
    </div>
  )
}
