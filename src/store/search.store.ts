import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SearchStore {
  sort: string;
  priceRange: [number, number];
  starRating: number;
  amenities: string[];
  priceRangeMin: number;
  priceRangeMax: number;
  setSort: (sort: string) => void;
  setPriceRange: (priceRange: [number, number]) => void;
  setStarRating: (starRating: number) => void;
  setAmenities: (amenities: string[]) => void;
  setPriceRangeMin: (priceRangeMin: number) => void;
  setPriceRangeMax: (priceRangeMax: number) => void;
  reset: () => void;
}

const initialState = {
  sort: "",
  priceRange: [10, 80] as [number, number],
  starRating: 0,
  amenities: [],
  priceRangeMin: 10,
  priceRangeMax: 80,
};

const useSearchStore = create<SearchStore>()(
  devtools((set) => ({
    ...initialState,
    setSort: (sort) => set((state) => ({ ...state, sort })),
    setPriceRange: (priceRange) => set((state) => ({ ...state, priceRange })),
    setStarRating: (starRating) => set((state) => ({ ...state, starRating })),
    setAmenities: (amenities) => set((state) => ({ ...state, amenities })),
    setPriceRangeMin: (priceRangeMin) =>
      set((state) => ({ ...state, priceRangeMin })),
    setPriceRangeMax: (priceRangeMax) =>
      set((state) => ({ ...state, priceRangeMax })),
    reset: () => set({ ...initialState }),
  }))
);

export default useSearchStore;
