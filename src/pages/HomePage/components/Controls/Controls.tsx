import { Button, Typography } from "@mui/material";
import { StyledStack } from "./styles";

interface ControlsProps {
  title: string;
  count: number;
  disabled?: boolean;
  handleChange: (name: string, count: number) => void;
}

const Controls = ({
  title,
  count = 0,
  handleChange,
  disabled,
}: ControlsProps) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <StyledStack>
        <Button
          disabled={disabled}
          onClick={() => handleChange(title.toLowerCase(), count - 1)}
        >
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
