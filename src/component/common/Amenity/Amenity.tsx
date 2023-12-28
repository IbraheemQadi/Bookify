import {
  ButtonBase,
  Checkbox,
  FormControlLabel,
  Typography,
  styled,
} from "@mui/material";
import { Amenity as AmenityType } from "../../../entities/Amenity";

const StyledFormControlLabel = styled(FormControlLabel)({
  border: "1px solid #e0e0e0",
  borderRadius: "5px",
  margin: "0",
  paddingRight: "15px",
});

interface Props {
  amenity: AmenityType;
  checked: boolean;
  size: "small" | "medium";
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Amenity = ({ amenity, checked, size = "small", handleChange }: Props) => {
  return (
    <ButtonBase>
      <StyledFormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            icon={amenity.icon}
            checkedIcon={amenity.checkedIcon}
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
  );
};

export default Amenity;
