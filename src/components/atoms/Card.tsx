type Props = {
    children: string | JSX.Element | JSX.Element[] 
    customCss?: string,
    style?: React.CSSProperties,
}

const Card = ({children, customCss, style}: Props) => {
  return (
    <div className={`inline-block shadow-md rounded-md p-2 ${customCss}`} style={style}>
        {children}
    </div>
  )
}

export default Card
