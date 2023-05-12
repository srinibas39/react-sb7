import "./Button.css"
export const Button = (props) => {
    const { variant, children, color, ...rest } = props
    return <button className={`button ${variant}`} {...rest} style={{ background: color }}>{children}</button>
}