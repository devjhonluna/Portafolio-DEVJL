import { Divider } from "@nextui-org/react"

const TooltipContent = ({titulo="",texto=""}) => {
  return (
    <div className='px-2 py-1'>
        <h4 className="font-bold font-mono">{titulo}</h4>
        <Divider className="border-primary border-solid" />
        <p className="font-mono">{texto}</p>
    </div>
  )
}

export default TooltipContent