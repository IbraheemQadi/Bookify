import { Button, Stack, Typography, styled } from "@mui/material";

const StyledStack = styled(Stack)({
  backgroundColor: "#fff",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  borderRadius: "5px",
});

interface ControlsProps {
  title: string;
  count: number;
  handleChange: (name: string, count: number) => void;
}

const Controls = ({ title, count = 0, handleChange }: ControlsProps) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <StyledStack
        sx={{
          border: "1px gray solid ",
          ml: 4,
        }}
      >
        <Button onClick={() => handleChange(title.toLowerCase(), count - 1)}>
          -
        </Button>
        <Typography variant="body1" marginInline={1}>
          {count}
        </Typography>
        <Button onClick={() => handleChange(title.toLowerCase(), count + 1)}>
          +
        </Button>
      </StyledStack>
    </>
  );
};

export default Controls;
