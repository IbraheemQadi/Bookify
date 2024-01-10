import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SearchStore {
  sort: string;
  priceRange: [number, number];
  starRating: number;
  amenities: string[];
  setSort: (sort: string) => void;
  setPriceRange: (priceRange: [number, number]) => void;
  setStarRating: (starRating: number) => void;
  setAmenities: (amenities: string[]) => void;
  reset: () => void;
}

const initialState = {
  sort: "",
  priceRange: [0, 0] as [number, number],
  starRating: 0,
  amenities: [],
};

const useSearchStore = create<SearchStore>()(
  devtools((set) => ({
    ...initialState,
    setSort: (sort) => set((state) => ({ ...state, sort })),
    setPriceRange: (priceRange) => set((state) => ({ ...state, priceRange })),
    setStarRating: (starRating) => set((state) => ({ ...state, starRating })),
    setAmenities: (amenities) => set((state) => ({ ...state, amenities })),
    reset: () =>
      set((state) => ({
        ...state,
        ...initialState,
      })),
  }))
);

export default useSearchStore;
