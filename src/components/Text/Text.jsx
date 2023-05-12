import "./Text.css"

export const Text = (props) => {
    const { children, ...rest } = props
    return <p className="para" {...rest}>{children}</p>
}