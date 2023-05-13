import { useState } from "react";


export const LoaderItem = (props) => {
    const { todo, ...rest } = props;
    // const [allItems, setAllItems] = useState(todo)
    return <div {...rest}>
        {
            todo && todo.map((item) => {
                return <ul key={item.id}>
                    <li>Title : {item.title}</li>
                    <li>Completed : {item.completed}</li>
                </ul>
            })
        }

        {/* <li>Title : {todo.title}</li>
        <li>Completed : {todo.completed}</li> */}
    </div>
}