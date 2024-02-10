import { Divider, Stack, Typography, styled } from "@mui/material";

const StyledStack = styled(Stack)({
  paddingInline: "20px",
  paddingBlock: "10px",
  gap: "40px",
});

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
