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
  argTypes: { textColor: { control: 'select', options: ['brown', 'magenta', "white", "black"] } },
  args: { textColor: 'white' },
};



export default preview;
