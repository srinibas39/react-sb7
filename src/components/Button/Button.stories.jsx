import { Button } from "./Button.jsx"


export default {
    title: "Design System/Form/Button",
    component: Button
}


export const Primary = {
    args: {
        variant: "primary",
        children: "I am Primary Button",
        color: ""

    }
}

export const Secondary = {
    args: {
        variant: "secondary",
        children: "I am Secondary Button",
        color: ""
    }
}
export const Success = {
    args: {
        variant: "success",
        children: "I am Success Button",
        color: ""
    }
}
export const Danger = {
    args: {
        variant: "danger",
        children: "I am Danger Button",
        color: ""
    }
}

