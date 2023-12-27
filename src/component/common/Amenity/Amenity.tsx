import { ButtonBase, Checkbox, FormControlLabel, styled } from "@mui/material";
import { Amenity as AmenityType } from "../../../entities/Amenity";

const StyledFormControlLabel = styled(FormControlLabel)({
  border: "1px solid #e0e0e0",
  borderRadius: "5px",
  margin: "5px",
  padding: "10px",
});

interface Props {
  amenity: AmenityType;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Amenity = ({ amenity, checked, handleChange }: Props) => {
  return (
    <ButtonBase>
      <StyledFormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            icon={amenity.icon}
            checkedIcon={amenity.checkedIcon}
          />
        }
        label={amenity.name}
        sx={{
          backgroundColor: checked ? "#f5f5f5" : undefined,
        }}
      />
    </ButtonBase>
  );
};

export default Amenity;
