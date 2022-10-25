import SearchBar from "./components/searchBar";
import Navigation from "./components/navigation";
import styled from "styled-components";
import MapIcon from "./assets/bxs-map-alt.svg";
import { useState } from "react";
import ListIcon from "./assets/bx-list-ul.svg";
import { DESKTOP, NARROW_DESKTOP } from "./styles/devices";

export default function SearchResult() {
  const [contentOpen, setContentOpen] = useState(true);

  return (
    <Container>
      <SearchBar />
      <Wrapper>{/*<ContentList isOpen={contentOpen} />*/}</Wrapper>
      <Navigation />
      <SwitchButton
        contentOpen={contentOpen}
        onClick={() => setContentOpen(!contentOpen)}
      >
        <span>{contentOpen ? "지도 표시하기" : "목록 보기"}</span>
      </SwitchButton>
      {/*<KakaoMap isContentOpen={contentOpen} />*/}
    </Container>
  );
}
const Wrapper = styled.div`
  height: 100%;
  background: red;
`;

const Container = styled.main`
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 600px;
`;

const SwitchButton = styled.button<{ contentOpen: boolean }>`
  display: none;

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    display: flex;
  }
  @media screen and (min-width: ${DESKTOP}) {
    display: none;
  }

  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 25px;
  width: auto;
  height: 45px;
  padding: 0 18px;
  background: #111111
    url(${(props) => (props.contentOpen ? MapIcon : ListIcon)}) right 16px
    bottom 13px / 20px 20px no-repeat;
  border: none;
  border-radius: 50px;
  z-index: 510;
  cursor: pointer;

  span {
    margin-right: 25px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
  }
`;
