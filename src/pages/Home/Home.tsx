import useRecentlyHotels from "../../hooks/useRecentlyHotels";
import useTrending from "../../hooks/useTrending";

function Home() {
  const { data: hotels } = useRecentlyHotels(1);
  console.log("🚀 ~ file: App.tsx:7 ~ App ~ hotels:", hotels);
  const { data: trending } = useTrending();
  console.log("🚀 ~ file: Home.tsx:8 ~ Home ~ trending:", trending);
  return <div>Home Page</div>;
}

export default Home;
