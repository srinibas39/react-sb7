import { Button } from "./Button.jsx"


export default {
    title: "Design System/Form/Button",
    component: Button,
    argsTypes: {
        backgroundColor: { control: "color" }
    },
}


export const Primary = {
    args: {
        variant: "primary",
        children: "I am Primary Button",
        backgroundColor: ""

    }
}

export const Secondary = {
    args: {
        variant: "secondary",
        children: "I am Secondary Button",
        backgroundColor: ""
    }
}
export const Success = {
    args: {
        variant: "success",
        children: "I am Success Button",
        backgroundColor: ""
    }
}
export const Danger = {
    args: {
        variant: "danger",
        children: "I am Danger Button",
        backgroundColor: ""
    }
}


export const PrimaryLong = {
    args: {
        ...Primary.args,
        children: "I am primary button and I have a long name"
    }
}
