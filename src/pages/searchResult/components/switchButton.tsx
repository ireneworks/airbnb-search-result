import styled from "styled-components";
import { DESKTOP, NARROW_DESKTOP } from "../styles/devices";
import MapIcon from "../assets/bxs-map-alt.svg";
import ListIcon from "../assets/bx-list-ul.svg";

interface Props {
  isContentOpen: boolean;
  setContentOpen(value: boolean): void;
}

export default function SwitchButton({ isContentOpen, setContentOpen }: Props) {
  return (
    <Container
      isContentOpen={isContentOpen}
      onClick={() => setContentOpen(!isContentOpen)}
    >
      <span>{isContentOpen ? "지도 표시하기" : "목록 보기"}</span>
    </Container>
  );
}

const Container = styled.button<{ isContentOpen: boolean }>`
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
    url(${(props) => (props.isContentOpen ? MapIcon : ListIcon)}) right 16px
    bottom 13px / 20px no-repeat;
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
