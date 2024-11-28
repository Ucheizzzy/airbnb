import { formInputProps } from '@/lib/types'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

export default function FormInput({
  label,
  type,
  name,
  defaultValue,
  placeholder,
}: formInputProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name}>{label || name}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  )
}
