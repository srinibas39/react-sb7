import { Todo } from "./Todo";


export default {
    title: "Design System/Form/Todo",
    component: Todo,
    argTypes: {
        background: {
            control: 'radio',
            options: ["background", "noBackground"],

        },
        onChange: { action: "changed" }
    },
    args: {
        background: "background"
    }
}

export const TodoA = {
    args: {
        children: "hello TodoA",
        background: "noBackground",

    }
}

export const TodoB = {
    args: {
        children: "hello TodoB",
        // background: "background",
    }
}