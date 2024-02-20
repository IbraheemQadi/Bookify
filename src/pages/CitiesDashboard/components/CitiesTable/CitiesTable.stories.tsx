import cities from "../../data/cities.json";
import { Meta } from "@storybook/react";
import { rest } from "msw";
import CitiesTable from "./CitiesTable";

export default {
  title: "Section/Cities",
  component: CitiesTable,
  parameters: {
    msw: {
      handlers: [
        rest.get(`${import.meta.env.VITE_BASE_URL}/cities`, (_, res, ctx) => {
          return res(ctx.delay(500), ctx.json(cities));
        }),
      ],
    },
  },
} as Meta;

export const Default = {
  args: {},
};
