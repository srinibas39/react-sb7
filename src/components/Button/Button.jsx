import "./Button.css"
export const Button = (props) => {
    const { variant, children, backgroundColor, textColor, ...rest } = props
    return <button className={`button ${variant}`} {...rest} style={{ backgroundColor: backgroundColor, color:textColor }}>{children}</button>
}