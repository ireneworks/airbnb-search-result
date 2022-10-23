import SearchBar from "./components/searchBar";
import KakaoMap from "./components/kakaoMap";
import Navigation from "./components/navigation";
import ContentList from "./components/contentList";
import styled from "styled-components";
import MapIcon from "./assets/bxs-map-alt.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DESKTOP, NARROW_DESKTOP } from "./styles/devices";

export default function SearchResult() {
  const [contentOpen, setContentOpen] = useState(true);
  const isNarrowDesktop = useMediaQuery({
    query: `(min-width: ${NARROW_DESKTOP})`,
  });
  const isDesktop = useMediaQuery({ query: `(min-width: ${DESKTOP})` });

  return (
    <>
      <SearchBar />
      {isNarrowDesktop && !isDesktop && (
        <SwitchButton onClick={() => setContentOpen(!contentOpen)}>
          <span>{contentOpen ? "지도 표시하기" : "목록 보기"}</span>
          <div />
        </SwitchButton>
      )}
      <ContentList isOpen={contentOpen} />
      <KakaoMap isContentOpen={contentOpen} />
      <Navigation />
    </>
  );
}

const SwitchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: 150px;
  height: 45px;
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
    background-image: url(${MapIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
