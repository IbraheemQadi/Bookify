import { Skeleton, Stack } from "@mui/material";

function PageBodySkeleton() {
  return (
    <Stack direction="row" justifyContent="space-between" gap={3}>
      <Skeleton variant="text" width={500} height={150} />
      <Skeleton variant="text" width={500} height={150} />
    </Stack>
  );
}

export default PageBodySkeleton;
