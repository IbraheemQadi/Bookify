import { Stack } from "@mui/material";

interface Props {
  Children: React.FC;
  numberOfSkeletons: number;
  direction: "row" | "column";
}
let skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

const SectionSkeleton = ({ Children, numberOfSkeletons, direction }: Props) => {
  skeletons = Array.from({ length: numberOfSkeletons });

  return (
    <Stack direction={direction} spacing={2}>
      {skeletons.map((_, index) => (
        <Children key={index} />
      ))}
    </Stack>
  );
};

export default SectionSkeleton;
