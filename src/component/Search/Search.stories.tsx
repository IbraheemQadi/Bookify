import { Story, Meta } from "@storybook/react";
import Search from "./Search";
import { Container } from "@mui/material";

export default {
  title: "Components/Search",
  component: Search,
  decorators: [
    (Story) => (
      <Container maxWidth="lg">
        <Story />
      </Container>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Search {...args} />;

export const Default = Template.bind({});
