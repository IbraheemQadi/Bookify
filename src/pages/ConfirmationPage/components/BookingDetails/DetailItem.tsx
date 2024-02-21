import { Divider, Typography } from "@mui/material";
import { StyledStack } from "./styles";

interface Props {
  label: string;
  value: string | number;
  isLast?: boolean;
}

const DetailItem = ({ label, value, isLast }: Props) => (
  <>
    <StyledStack direction="row" justifyContent="space-between">
      <Typography variant="body1" fontWeight={isLast ? "bold" : "normal"}>
        {label}
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        fontWeight={isLast ? "bold" : "normal"}
      >
        {value}
      </Typography>
    </StyledStack>
    {!isLast && <Divider />}
  </>
);

export default DetailItem;
