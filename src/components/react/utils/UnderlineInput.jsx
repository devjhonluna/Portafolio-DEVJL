import { Input } from '@nextui-org/react'

const UnderlineInput = ({tipo,label,placeholder,classGroup,register,emailfield, reglas, error}) => {
  return (
    <Input type={tipo} label={label} placeholder={placeholder} variant="underlined"
    className='w-full sm:w-[48%]'
    classNames={classGroup}
    {...register(emailfield, reglas)}
    errorMessage={error?.message}
    isInvalid={error ? true: false}
    />
  )
}

export default UnderlineInput