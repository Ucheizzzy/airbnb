import { fetchProperties } from '@/lib/actions'
import { PropertyCardProps } from '@/lib/types'
import React from 'react'
import EmptyList from './empty-list'
import PropertiesList from './properties-list'

export default async function PropertiesContainer({
  category,
  search,
}: {
  category?: string
  search?: string
}) {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  })

  if (properties.length === 0) {
    return (
      <EmptyList
        heading='No results'
        message='Try changing or removing some of your filters'
        btnText='Clear filters'
      />
    )
  }
  return <PropertiesList properties={properties} />
}
