import { Amenity as AmenityType } from "@/entities/Amenity";
import { ButtonBase, Checkbox, Tooltip, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import { getAmenityIcon } from "./getAmenityIcon";
import { StyledFormControlLabel } from "./styles";

interface Props {
  amenity: AmenityType;
  checked: boolean;
  size: "small" | "medium";
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Amenity = ({ amenity, checked, size = "small", handleChange }: Props) => {
  const [icon, checkedIcon] = getAmenityIcon(amenity.name);

  return (
    <Tooltip
      title={amenity.description}
      placement="top"
      arrow
      TransitionComponent={Fade}
    >
      <ButtonBase>
        <StyledFormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleChange}
              icon={icon}
              checkedIcon={checkedIcon}
              size={size}
            />
          }
          label={
            <Typography
              fontWeight={"normal"}
              variant={size === "medium" ? "body1" : "body2"}
            >
              {amenity.name}
            </Typography>
          }
          sx={{
            backgroundColor: checked ? "#f5f5f5" : undefined,
          }}
        />
      </ButtonBase>
    </Tooltip>
  );
};

export default Amenity;
