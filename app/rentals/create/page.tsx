import AmenitiesInput from '@/components/form/amenities-input'
import { SubmitButton } from '@/components/form/buttons'
import CategoriesInput from '@/components/form/categories-input'
import CounterInput from '@/components/form/counter-input'
import CountriesInput from '@/components/form/countries-input'
import FormContainer from '@/components/form/form-container'
import FormInput from '@/components/form/form-input'
import ImageInput from '@/components/form/image-input'
import PriceInput from '@/components/form/price-input'
import TextAreaInput from '@/components/form/textarea-input'
import { createPropertyAction } from '@/lib/actions'
import React from 'react'

export default function CreateProperty() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
        Create Property
      </h1>
      <div className='border p-8 rounded-md'>
        <h3 className='text-lg mb-4 font-medium'>General info</h3>
        <FormContainer action={createPropertyAction}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='name'
              type='text'
              label='Name (20 limit'
              defaultValue='Cabin in the woods'
            />
            <FormInput
              name='tagline'
              type='text'
              label='Tagline (30 limit)'
              defaultValue='Dream getaway awaits you here'
            />

            {/* price */}
            <PriceInput />
            {/* category */}
            <CategoriesInput />
          </div>
          <TextAreaInput
            name='description'
            labelText='Description (10-100 words)'
          />

          <div className='grid sm:grid-cols-2 gap-8 mt-4'>
            <CountriesInput />
            <ImageInput />
          </div>

          <h3 className='text-lg mt-8 mb-4 font-medium'>
            Accommodation Details
          </h3>
          <CounterInput detail='guests' />
          <CounterInput detail='bedrooms' />
          <CounterInput detail='beds' />
          <CounterInput detail='baths' />

          <h3 className='text-lg mt-10 mb-6 font-medium'>Amenities</h3>
          <AmenitiesInput />

          <SubmitButton text='create rental' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  )
}
