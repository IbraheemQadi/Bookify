import { Box, Slider, Stack, Typography, styled } from "@mui/material";
import { useFormik } from "formik";
import { amenities } from "../../data/amenities";
import Amenity from "../common/Amenity";

const StyledStack = styled(Stack)({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  borderBlock: "1px solid #e0e0e0",
  direction: "column",
  padding: "8px 15px",
});

const SearchFilters = () => {
  const formik = useFormik({
    initialValues: {
      priceRange: [30, 500],
      starRating: 3,
      amenities: [] as string[],
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleAmenityChange =
    (amenityName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        formik.setFieldValue("amenities", [
          ...formik.values.amenities,
          amenityName,
        ]);
      } else {
        formik.setFieldValue(
          "amenities",
          formik.values.amenities.filter((name) => name !== amenityName)
        );
      }
    };

  return (
    <form>
      <Stack
        sx={{ border: "1px solid #e0e0e0", borderRadius: "5px", width: 365 }}
      >
        <Box p={1}>
          <Typography fontWeight={"bold"} variant="h5">
            Filter by:
          </Typography>
        </Box>
        <StyledStack>
          <Typography mb={1} variant="h6">
            Budget per night:
          </Typography>
          <Typography variant="subtitle2">
            US${formik.values.priceRange[0]} - US${formik.values.priceRange[1]}+
          </Typography>
          <Slider
            aria-label="price range"
            max={500}
            min={30}
            name="priceRange"
            onChange={formik.handleChange}
            value={formik.values.priceRange}
            valueLabelDisplay="off"
            size="medium"
          />
        </StyledStack>
        <StyledStack>
          <Typography mb={1} variant="h6">
            Star Rating:
          </Typography>
          <Slider
            aria-label="star rating"
            defaultValue={3}
            marks
            max={5}
            min={1}
            name="starRating"
            onChange={formik.handleChange}
            step={1}
            size="medium"
            value={formik.values.starRating}
            valueLabelDisplay="on"
          />
        </StyledStack>
        <StyledStack>
          <Typography mb={1} variant="h6">
            Amenities:
          </Typography>
          <Box>
            {amenities.map((amenity) => (
              <Amenity
                key={amenity.name}
                amenity={amenity}
                checked={formik.values.amenities.includes(amenity.name)}
                handleChange={handleAmenityChange(amenity.name)}
              />
            ))}
          </Box>
        </StyledStack>
      </Stack>
    </form>
  );
};

export default SearchFilters;
// price range ✅
// rating ✅
// amenities ✅
// types of rooms
