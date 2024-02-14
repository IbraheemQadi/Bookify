import CheckoutPage from "@/pages/CheckoutPage";
import ConfirmationPage from "@/pages/ConfirmationPage";
import HomePage from "@/pages/HomePage";
import HotelDetailPage from "@/pages/HotelDetailPage";
import SearchPage from "@/pages/SearchPage";

const userRoutes = [
  { index: true, element: <HomePage /> },
  { path: "search", element: <SearchPage /> },
  { path: "hotel/:id", element: <HotelDetailPage /> },
  { path: "checkout", element: <CheckoutPage /> },
  { path: "confirmation", element: <ConfirmationPage /> },
];

export default userRoutes;
