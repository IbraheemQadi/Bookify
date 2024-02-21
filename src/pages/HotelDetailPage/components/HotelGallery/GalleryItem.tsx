import { GalleryPhoto } from "../../entities/GalleryPhoto";
import { StyledChip, StyledImage } from "./styles";

interface Props {
  photo: GalleryPhoto;
  index: number;
  photosShown: number;
  totalPhotos: number;
}

const GalleryItem = ({ photo, index, photosShown, totalPhotos }: Props) => {
  const isHidden = index > photosShown;
  const isBlurred = index === photosShown;
  const label = `+${totalPhotos - photosShown} More Photos`;

  return (
    <a
      className={isBlurred ? "p-relative" : ""}
      hidden={isHidden}
      href={photo.url}
    >
      <StyledImage className={isBlurred ? "blur" : ""} src={photo.url} />
      {isBlurred && <StyledChip label={label} />}
    </a>
  );
};

export default GalleryItem;
