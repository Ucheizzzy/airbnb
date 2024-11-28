import React from 'react'
import { Button } from '../ui/button'
import { FaHeart } from 'react-icons/fa'
import { auth } from '@clerk/nextjs/server'
import { CardSignInButton } from '../form/buttons'
import { fetchFavoriteId } from '@/lib/actions'
import FavoriteToggleForm from './favorite-toggle-form'

export default async function FavoriteToggleButton({
  propertyId,
}: {
  propertyId: string
}) {
  const { userId } = auth()
  if (!userId) return <CardSignInButton />
  const favoriteId = await fetchFavoriteId({ propertyId })
  return <FavoriteToggleForm favoriteId={favoriteId} propertyId={propertyId} />
}
