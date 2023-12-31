import { Chip, styled } from "@mui/material";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import LightGallery from "lightgallery/react";
import { gallery } from "../../data/hotelGallery";
import "./styles.css";

const StyledChip = styled(Chip)(() => ({
  position: "absolute",
  bottom: 10,
  right: 10,
  borderColor: "white",
  backgroundColor: "#fff",
  "font-weight": "bold",
  "font-size": "1.2rem",
  padding: "20px 5px",
  fontWeight: "normal",
}));

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "top",
});

interface Props {
  hotelId: number;
}

const HotelGallery = ({ hotelId }: Props) => {
  // const gallery=useGallery(hotelId);
  const photosShown = 4;

  return (
    <LightGallery
      elementClassNames="grid"
      speed={250}
      plugins={[lgThumbnail, lgAutoPlay]}
    >
      {gallery.map((photo, index) => {
        if (index < photosShown) {
          return (
            <a className={index === 0 ? "grid-span-2" : ""} href={photo.url}>
              <StyledImage src={photo.url} />
            </a>
          );
        } else if (index === photosShown) {
          return (
            <a className="p-relative" href={photo.url}>
              <StyledImage className="blur" src={photo.url} />
              <StyledChip
                label={`+${gallery.length - photosShown} More Photos`}
              />
            </a>
          );
        } else {
          return (
            <a hidden href={photo.url}>
              <StyledImage src={photo.url} />
            </a>
          );
        }
      })}
    </LightGallery>
  );
};

export default HotelGallery;
