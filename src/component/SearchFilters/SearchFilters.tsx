import { Box, Slider, Stack, Typography, styled } from "@mui/material";
import { amenities as shownAmenities } from "../../data/amenities";
import useSearchStore from "../../store/search.store";
import Amenity from "../common/Amenity";

const StyledStack = styled(Stack)({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  borderBlock: "1px solid #e0e0e0",
  direction: "column",
  padding: "8px 15px",
});

const marks = Array.from({ length: 5 }, (_, i) => ({
  value: i + 1,
  label: `${i + 1}⭐`,
}));

const SearchFilters = () => {
  const priceRange = useSearchStore((state) => state.priceRange);
  const setPriceRange = useSearchStore((state) => state.setPriceRange);
  const priceRangeMin = useSearchStore((state) => state.priceRangeMin);
  const priceRangeMax = useSearchStore((state) => state.priceRangeMax);
  const starRating = useSearchStore((state) => state.starRating);
  const setStarRating = useSearchStore((state) => state.setStarRating);
  const amenities = useSearchStore((state) => state.amenities);
  const setAmenities = useSearchStore((state) => state.setAmenities);

  const handlePriceRangeChange = (
    _event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    setPriceRange(newValue as [number, number]);
  };

  const handleStarRatingChange = (event: Event) => {
    setStarRating(event?.target?.value);
  };

  const handleAmenityChange =
    (amenityName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.checked
        ? setAmenities([...amenities, amenityName])
        : setAmenities(amenities.filter((amenity) => amenity !== amenityName));
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
            US${priceRange[0]} - US${priceRange[1]}+
          </Typography>
          <Slider
            aria-label="price range"
            name="priceRange"
            size="medium"
            min={priceRangeMin}
            max={priceRangeMax}
            value={priceRange}
            step={1}
            onChange={handlePriceRangeChange}
          />
        </StyledStack>
        <StyledStack>
          <Typography mb={1} variant="h6">
            Star Rating:
          </Typography>
          <Slider
            aria-label="star rating"
            marks={marks}
            max={5}
            min={1}
            name="starRating"
            onChange={handleStarRatingChange}
            step={1}
            size="medium"
            value={starRating}
          />
        </StyledStack>
        <StyledStack>
          <Typography mb={1} variant="h6">
            Amenities:
          </Typography>
          <Stack direction={"row"} gap={0.5} flexWrap="wrap">
            {shownAmenities.map((amenity) => (
              <Amenity
                key={amenity.name}
                amenity={amenity}
                checked={amenities.includes(amenity.name)}
                handleChange={handleAmenityChange(amenity.name)}
                size="medium"
              />
            ))}
          </Stack>
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
