import { Button } from "./Button.jsx"
import { withActions } from '@storybook/addon-actions/decorator';


export default {
    title: "Design System/Form/Button",
    component: Button,
    parameters: {
        actions: {
            handles: ['mouseover', 'hover button'],
        },
    },
    decorators: [withActions],
    argTypes: {
        backgroundColor: { control: "color" },
        textColor: { control: 'select', options: ['brown', 'magenta', "white", "black"] },
        align: {
            control: 'radio',
            options: ["left", "center", "right"],
        },
        border: { control: "boolean", options: ["yes", "no"] },
        onClick: { action: "clicked" }
    },
    args: { textColor: 'white', align: "left", border: "no" },


}


export const Primary = {
    args: {
        variant: "primary",
        children: "I am Primary Button",
        // backgroundColor: "",
        // align:"center"
    },
    parameters: {
        backgrounds: {
            values: [
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    },
}

export const Secondary = {
    args: {
        variant: "secondary",
        children: "I am Secondary Button",
        // backgroundColor: ""
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
