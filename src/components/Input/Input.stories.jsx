
import { Input } from "./Input";


export default {
    title: "Design System/Form/Input",
    component: Input,
}




export const Small = {
    args: {
        size: "small",
        placeholder: "I am small input"
    }
}
export const Medium = {
    args: {
        size: "medium",
        placeholder: "I am Medium input"
    }
}

export const Large = {
    args: {
        size: "large",
        placeholder: "I am Large input"
    }
}
// renaming the story name
Small.storyName = "Small Input"
