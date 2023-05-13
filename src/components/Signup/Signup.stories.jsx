import { userEvent, waitFor, within } from "@storybook/testing-library";
import { Signup } from "./Signup";



export default {
    title: "Design System/Form/Sign up",
    component: Signup
}


export const FirstStory = {
    play: ({ canvasElement }) => {
        const canvas = within(canvasElement);
        userEvent.type(canvas.getByTestId("email"), "srinibaskhuntia39@gmail.com")
    }
}

export const SecondStory = {
    play: ({ canvasElement }) => {
        const canvas = within(canvasElement);
        userEvent.type(canvas.getByTestId("password"), "12345678")
    }
}

export const CombinedStory = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // run the first two stories before running this story

        await FirstStory.play({ canvasElement })
        await SecondStory.play({ canvasElement })

        await userEvent.type(canvas.getByTestId("name"), "srinibas")
    }
}

export const ClickStory = {

    play: async ({ canvasElement }) => {

        const canvas = within(canvasElement);


        await FirstStory.play({ canvasElement })
        await SecondStory.play({ canvasElement })

        await userEvent.type(canvas.getByTestId("name"), "srinibas")

        await userEvent.click(canvas.getByTestId("signupSubmit"))


    }
}

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const SelectStory = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const select = canvas.getByTestId("cityBox");

        await userEvent.selectOptions(select, ['city 1'])
        await delay(1000);

        await userEvent.selectOptions(select, ['city 2'])
        await delay(1000);

        await userEvent.selectOptions(select, ["city 3"])
        await delay(1000)
    }
}


export const DelayedType = {
    play: async ({ canvasElement }) => {

        const canvas = within(canvasElement);


        await FirstStory.play({ canvasElement })
        await SecondStory.play({ canvasElement })

        await userEvent.type(canvas.getByTestId("name"), "srinibas", { delay: 100 })

        await userEvent.click(canvas.getByTestId("signupSubmit"))


    }
}

// export const AsyncStory = {
//     play: async ({ canvasElement }) => {

//         const canvas = within(canvasElement);

//         userEvent.type(canvas.getByTestId("email"), "srinibaskhuntia39@gmail.com", { delay: 100 })
//         await userEvent.click(canvas.getByTestId("signupSubmit"))

//         await waitFor(async () => {
//             await userEvent.hover(canvas.getByTestId('error'));
//         })
//     }
// }