import "./Todo.css"
export const Todo = (props) => {
    const { children, onChange, background } = props
    return <div className={`container ${background}`}>
        <input type="checkbox" onChange={onChange} />
        <p>{children}</p>
    </div>
}