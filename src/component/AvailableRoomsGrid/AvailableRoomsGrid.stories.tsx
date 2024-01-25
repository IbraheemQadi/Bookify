import { Meta } from "@storybook/react";
import { rest } from "msw";
import { reactRouterParameters } from "storybook-addon-react-router-v6";
import AvailableRoomsGrid from "./AvailableRoomsGrid";
import { availableRooms } from "@/data/availableRooms";

export default {
  title: "Section/AvailableRoomsGrid",
  component: AvailableRoomsGrid,
  parameters: {
    reactRouter: reactRouterParameters({
      routing: { path: "/hotels/:id" },
      location: {
        path: "/hotels/1",
        searchParams: "?checkInDate=2021-10-01&checkOutDate=2021-10-02",
      },
    }),
    msw: {
      handlers: [
        rest.get(
          `${import.meta.env.VITE_BASE_URL}/hotels/1/available-rooms`,
          (_, res, ctx) => {
            return res(ctx.json(availableRooms));
          }
        ),
      ],
    },
  },
} as Meta;

export const Default = {
  args: {},
};
