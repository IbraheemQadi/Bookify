import { Meta, Story } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Section/Footer",
  component: Footer,
} as Meta;

const Template: Story = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
