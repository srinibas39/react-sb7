import "./Button.css"
export const Button = (props) => {
    const { align, variant, children, backgroundColor, textColor, border , ...rest } = props
    return <div className={`container ${align} ${border}`}>
        <button className={`button ${variant}`} {...rest} style={{ backgroundColor: backgroundColor, color: textColor }}>{children}</button>
    </div>
}