import { Skeleton, Stack } from "@mui/material";

function PageHeaderSkeleton() {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Skeleton variant="text" width={270} height={60} />
      <Skeleton variant="text" width={200} height={60} />
    </Stack>
  );
}

export default PageHeaderSkeleton;
