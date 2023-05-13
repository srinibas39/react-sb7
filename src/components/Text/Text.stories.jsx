import { Center } from "../Decorators/Center/Center"
import { Text } from "./Text"

const withCenterAlign = (Story) => {
    return <Center>
        <Story />
    </Center>
}

export default {
    title: "Design System/Form/Text",
    component: Text,
    decorators: [
        withCenterAlign,
    ]
    
}

export const Primary = {
    args: {
        children: "I am primary Text"
    },
   
}