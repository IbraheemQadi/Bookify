import { gallery } from "@/data/hotelGallery";
import { Meta } from "@storybook/react";
import { rest } from "msw";
import HotelGallery from "./HotelGallery";

export default {
  title: "Section/HotelGallery",
  component: HotelGallery,
  parameters: {
    msw: {
      handlers: [
        rest.get(
          `${import.meta.env.VITE_BASE_URL}/hotels/1/gallery`,
          (_, res, ctx) => {
            return res(ctx.json(gallery));
          }
        ),
      ],
    },
  },
} as Meta;

export const Default = {
  args: {
    hotelId: 1,
  },
};