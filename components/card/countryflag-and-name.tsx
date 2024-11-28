import { findCountryByCode } from '@/lib/countries'
import React from 'react'

export default function CountryFlagAndName({
  countryCode,
}: {
  countryCode: string
}) {
  const validCountry = findCountryByCode(countryCode)
  const countryName =
    validCountry!.name.length > 20
      ? `${validCountry!.name.substring(0, 20)}...`
      : validCountry!.name
  return (
    <div className='flex justify-between items-center gap-2 text-sm'>
      {validCountry?.flag} {countryName}
    </div>
  )
}
