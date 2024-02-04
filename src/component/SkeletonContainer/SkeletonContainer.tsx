import { Stack } from "@mui/material";

interface Props {
  children: React.ReactNode;
  numberOfSkeletons: number;
  direction: "row" | "column";
}
let skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

const SectionSkeleton = ({ children, numberOfSkeletons, direction }: Props) => {
  skeletons = Array.from({ length: numberOfSkeletons });

  return (
    <Stack direction={direction} spacing={2}>
      {skeletons.map(() => children)}
    </Stack>
  );
};

export default SectionSkeleton;
