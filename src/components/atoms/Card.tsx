type Props = {
    children: string | JSX.Element | JSX.Element[] 
    customCss?: string
}

const Card = ({children, customCss}: Props) => {
  return (
    <div className={`inline-block shadow-md rounded-md p-2 ${customCss}`}>
        {children}
    </div>
  )
}

export default Card
