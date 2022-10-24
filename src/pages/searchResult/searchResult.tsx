import SearchBar from "./components/searchBar";
import KakaoMap from "./components/kakaoMap";
import Navigation from "./components/navigation";
import ContentList from "./components/contentList";
import styled from "styled-components";
import MapIcon from "./assets/bxs-map-alt.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DESKTOP, NARROW_DESKTOP } from "./styles/devices";
import ListIcon from "./assets/bx-list-ul.svg";

export default function SearchResult() {
  const [contentOpen, setContentOpen] = useState(true);
  const isNarrowDesktop = useMediaQuery({
    query: `(min-width: ${NARROW_DESKTOP})`,
  });
  const isDesktop = useMediaQuery({ query: `(min-width: ${DESKTOP})` });

  return (
    <Container>
      <SearchBar />
      {isNarrowDesktop && !isDesktop && (
        <SwitchButton
          contentOpen={contentOpen}
          onClick={() => setContentOpen(!contentOpen)}
        >
          <span>{contentOpen ? "지도 표시하기" : "목록 보기"}</span>
          <div />
        </SwitchButton>
      )}
      <ContentList isOpen={contentOpen} />
      <KakaoMap isContentOpen={contentOpen} />
      <Navigation />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
`;

const SwitchButton = styled.button<{ contentOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: auto;
  height: 45px;
  padding: 0 20px;
  background: #111111;
  border: none;
  border-radius: 50px;
  z-index: 510;
  cursor: pointer;

  span {
    margin-right: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
  }

  div {
    width: 20px;
    height: 20px;
    background-color: transparent;
    background-image: url(${(props) =>
      props.contentOpen ? MapIcon : ListIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
