import { Hotel } from "@/entities/Hotel";
import { Divider, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import HotelGallery from "./components/HotelGallery";
import PageBody from "./components/PageBody";
import PageBodySkeleton from "./components/PageBody/PageBodySkeleton";
import PageHeader from "./components/PageHeader";
import PageHeaderSkeleton from "./components/PageHeader/PageHeaderSkeleton";
import useHotelInformation from "./hooks/useHotelInformation";

export default function HotelDetailPage() {
  const { id } = useParams();
  const hotelId = parseInt(id || "");
  const { data: hotel, isLoading } = useHotelInformation(hotelId);

  return (
    <Stack gap={3}>
      {isLoading ? (
        <PageHeaderSkeleton />
      ) : (
        <PageHeader hotel={hotel ?? ({} as Hotel)} />
      )}
      <HotelGallery hotelId={hotelId} />
      <Divider />
      {isLoading ? (
        <PageBodySkeleton />
      ) : (
        <PageBody hotel={hotel ?? ({} as Hotel)} />
      )}
    </Stack>
  );
}
