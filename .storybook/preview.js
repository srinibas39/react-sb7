/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  // argTypes: {
  //   textColor: { control: 'select', options: ['brown', 'magenta', "white", "black"] },
  //   align: {
  //     control: 'radio',
  //     options: ["left", "center", "right"],
  //   },

  // },
  // args: { textColor: 'white', align: "left" },

};



export default preview;
