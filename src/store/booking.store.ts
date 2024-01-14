import { Hotel } from "@/entities/Hotel";
import { Room } from "@/entities/Room";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface Booking {
  room: Room;
  hotel: Hotel;
  checkInDate: string;
  checkOutDate: string;
  adults: number;
  children: number;
}

type BookingStore = {
  booking: Booking;
  isReserved: boolean;
  reserve: (booking: Booking) => void;
  unreserve: () => void;
};

const useBookingStore = create<BookingStore>()(
  devtools(
    persist(
      (set) => ({
        booking: {} as Booking,
        isReserved: false,
        reserve: (booking) => set({ booking, isReserved: true }),
        unreserve: () => set({ booking: {} as Booking, isReserved: false }),
      }),
      { name: "booking-store" }
    )
  )
);

export default useBookingStore;
