import { LoaderItem } from "./LoaderItem";


export default {
    title: "Design System/Form/LoaderItem",
    component: LoaderItem,
    render: (args,{loaded:{todo}}) => <LoaderItem {...args} todo={todo}/>
}

export const Primary = {
    loaders: [
        async () => ({
          todo: await (
            await fetch('https://jsonplaceholder.typicode.com/todos/1')
          ).json(),
        }),
      ],
}