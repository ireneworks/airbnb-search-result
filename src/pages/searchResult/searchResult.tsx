import SearchBar from "./components/searchBar";
import Navigation from "./components/navigation";
import KakaoMap from "./components/kakaoMap";

export default function SearchResult() {
  return (
    <>
      <SearchBar />
      <KakaoMap />
      {/*<BottomSheet />*/}
      <Navigation />
    </>
  );
}
