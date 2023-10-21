

const IconInfo = ({text, icon}) => {
  return (
    <div className="mx-auto text-center">
      {icon} <h2 className="text-sm font-medium sm:text-xl ">{text}</h2>
    </div>
  )
}

export default IconInfo
