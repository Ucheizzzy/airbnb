'use client'
import { type ImageInputContainerProps } from '@/lib/types'
import Image from 'next/image'
import React, { useState } from 'react'
import { LuUser2 } from 'react-icons/lu'
import { Button } from '../ui/button'
import FormContainer from './form-container'
import ImageInput from './image-input'
import { SubmitButton } from './buttons'

export default function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState<boolean>(false)
  const userIcon = (
    <LuUser2 className='size-24 bg-primary rounded-md text-white mb-4' />
  )
  return (
    <div>
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          alt={name}
          className='rounded-md object-cover mb-4 size-24'
        />
      ) : (
        userIcon
      )}

      <Button
        variant={'outline'}
        size={'sm'}
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className='max-w-lg mt-4'>
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size='sm' />
          </FormContainer>
        </div>
      )}
    </div>
  )
}
