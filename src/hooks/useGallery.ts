import { GalleryPhoto } from "@/entities/GalleryPhoto";
import APIClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useGallery = (hotelId: number) => {
  const galleryService = new APIClient<GalleryPhoto[]>(
    `/hotels/${hotelId}/gallery`
  );

  return useQuery<GalleryPhoto[], Error>({
    queryKey: [hotelId, "gallery"],
    queryFn: galleryService.get,
  });
};
export default useGallery;
