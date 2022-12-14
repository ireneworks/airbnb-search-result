import SearchBar from "./components/searchBar";
import Navigation from "./components/navigation";
import styled from "styled-components";
import { useState } from "react";
import ContentList from "./components/contentList";
import KakaoMap from "./components/kakaoMap";
import SwitchListToMapButton from "./components/switchListToMapButton";

export default function SearchResult() {
  const [isContentOpen, setContentOpen] = useState(true);

  return (
    <Container>
      <SearchBar />
      <SwitchListToMapButton
        isContentOpen={isContentOpen}
        setContentOpen={setContentOpen}
      />
      <div className="content-wrapper">
        <ContentList isContentOpen={isContentOpen} />
        <KakaoMap isContentOpen={isContentOpen} />
      </div>
      <Navigation />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;

  div.content-wrapper {
    margin-top: 80px;
    width: 100%;
    height: 100%;
    background: #ffffff;
    overflow-x: hidden;
  }
`;
