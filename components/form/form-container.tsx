'use client'
import { type actionFunction } from '@/lib/types'
import React, { ReactNode, useActionState, useEffect } from 'react'
import { useToast } from '../ui/use-toast'

const initialState = {
  message: '',
}
export default function FormContainer({
  action,
  children,
}: {
  action: actionFunction
  children: ReactNode
}) {
  const [state, formAction] = useActionState(action, initialState)
  const { toast } = useToast()

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message })
    }
  }, [state])
  return <form action={formAction}>{children}</form>
}
