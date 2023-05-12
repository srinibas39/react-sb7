import "./Input.css"

export const Input = (props) => {
    const { size = "medium", placeholder, ...rest } = props
    return <input className={`input ${size}`} placeholder={placeholder}  {...rest} />
}