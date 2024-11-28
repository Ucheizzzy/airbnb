import { PropertyCardProps } from '@/lib/types'
import React from 'react'
import PropertyCard from '../card/property-card'

export default function PropertiesList({
  properties,
}: {
  properties: PropertyCardProps[]
}) {
  return (
    <section className='mt-4 gap-8 grid sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4'>
      {properties.map((property) => {
        return <PropertyCard key={property?.id} property={property} />
      })}
    </section>
  )
}
