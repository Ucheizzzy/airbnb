'use client'
import { toggleFavoriteAction } from '@/lib/actions'
import { usePathname } from 'next/navigation'
import React from 'react'
import FormContainer from '../form/form-container'
import { CardSubmitButton } from '../form/buttons'

export default function FavoriteToggleForm({
  propertyId,
  favoriteId,
}: {
  propertyId: string
  favoriteId: string | null
}) {
  const pathname = usePathname()
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  })
  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  )
}
