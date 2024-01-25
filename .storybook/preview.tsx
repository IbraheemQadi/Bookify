import { Container } from "@mui/material";
import type { Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initialize, mswLoader } from "msw-storybook-addon";
import React from "react";
import { withRouter } from "storybook-addon-react-router-v6";

initialize();

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Container maxWidth="lg">
          <Story />
        </Container>
      </QueryClientProvider>
    ),
    withRouter,
  ],
  loaders: [mswLoader],
};

export default preview;
