import { Avatar } from '@nextui-org/react'

const CustomAvatar = ({title,...props}) => {
  return (
    <>
    <Avatar {...props} />
    <h1 className="text-center">{title}</h1>
    </>
  )
}

export default CustomAvatar