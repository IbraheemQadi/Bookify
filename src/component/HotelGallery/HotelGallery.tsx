import { Skeleton } from "@mui/material";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import LightGallery from "lightgallery/react";
import useGallery from "@/hooks/useGallery";
import GalleryItem from "./GalleryItem";
import "./styles.css";

interface Props {
  hotelId: number;
}

const HotelGallery = ({ hotelId }: Props) => {
  const { data: gallery, isLoading } = useGallery(hotelId);
  const photosShown = 4;

  return (
    <LightGallery
      elementClassNames="grid"
      speed={250}
      plugins={[lgThumbnail, lgAutoPlay]}
    >
      {isLoading
        ? Array.from({ length: 8 }, () => (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          ))
        : gallery?.map((photo, index) => (
            <GalleryItem
              key={photo.id}
              photo={photo}
              index={index}
              photosShown={photosShown}
              totalPhotos={gallery.length}
            />
          ))}
    </LightGallery>
  );
};

export default HotelGallery;
