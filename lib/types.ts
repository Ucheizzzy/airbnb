export type formInputProps = {
  name: string
  type: string
  label?: string
  defaultValue?: string
  placeholder?: string
}
type btnSize = 'default' | 'lg' | 'sm'
export type SubmitButtonProps = {
  className?: string
  text?: string
  size?: btnSize
}

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>

export type ImageInputContainerProps = {
  image: string
  name: string
  action: actionFunction
  text: string
  children?: React.ReactNode
}

export type PropertyCardProps = {
  image: string
  id: string
  name: string
  tagline: string
  country: string
  price: number
}
