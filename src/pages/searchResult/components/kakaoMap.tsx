import React, { useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import Item from "./item";
import styled from "styled-components";
import FilterIcon from "../assets/bx-slider-alt.svg";
import { useMediaQuery } from "react-responsive";
import { NARROW_DESKTOP } from "../styles/devices";

interface Props {
  isContentOpen: boolean;
}

export default function KakaoMap({ isContentOpen }: Props) {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState(3);
  const setStyle = open ? clickedPin : unClickedPin;
  const isNarrowDesktop = useMediaQuery({
    query: `(min-width: ${NARROW_DESKTOP})`,
  });

  return (
    <Container>
      {!isContentOpen && isNarrowDesktop && (
        <button>
          <div />
          <span>필터</span>
        </button>
      )}
      <Map
        center={{ lat: 37.500001, lng: 127.02612 }}
        level={level}
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        {!isContentOpen && isNarrowDesktop && (
          <div className="change-level">
            <button className="down-button" onClick={() => setLevel(level + 1)}>
              -
            </button>
            <button className="up-button" onClick={() => setLevel(level - 1)}>
              +
            </button>
          </div>
        )}
        {overlayPins.map((pin) => (
          <CustomOverlayMap position={pin.position}>
            <div style={setStyle} onClick={() => setOpen(!open)}>
              {pin.price}
            </div>
            {open && isNarrowDesktop && (
              <ItemWrapper onClick={() => setOpen(!open)}>열기</ItemWrapper>
            )}
          </CustomOverlayMap>
        ))}
      </Map>
      {open && <Item isOpen={open} setOpen={setOpen} />}
    </Container>
  );
}

const ItemWrapper = styled.div`
  width: 300px;
  position: absolute;
  top: 32px;
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  .change-level {
    position: absolute;
    top: 0;
    right: 80px;
    display: flex;
    flex-direction: row;

    button.down-button {
      margin-top: 40px;
      padding: 8px 15px;
      background: #ffffff;
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
      color: #111111;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border-top: 1px solid #eeeeee;
    }

    button.up-button {
      background: #ffffff;
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
      color: #111111;
      padding: 8px 12px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100px;
    left: 24px;
    border: none;
    background: #ffffff;
    padding: 8px 12px;
    z-index: 2;
    cursor: pointer;
    border-radius: 6px;

    div {
      width: 20px;
      height: 20px;
      background-color: transparent;
      background-image: url(${FilterIcon});
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 8px;
    }

    span {
      font-size: 15px;
      font-weight: 600;
      color: #111111;
    }
  }
`;

const overlayPins = [
  { position: { lat: 37.50115, lng: 127.02501 }, price: "₩158,100" },
  { position: { lat: 37.50085, lng: 127.02549 }, price: "₩112,500" },
  { position: { lat: 37.50096, lng: 127.02719 }, price: "₩94,300" },
  { position: { lat: 37.50051, lng: 127.02692 }, price: " ₩130,800" },
];

const unClickedPin = {
  padding: "6px 10px",
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: "40px",
  fontSize: "13px",
  fontWeight: "700",
  boxShadow: "0 9px 16px -7px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
};

const clickedPin = {
  padding: "6px 10px",
  backgroundColor: "#333333",
  color: "#ffffff",
  borderRadius: "40px",
  fontSize: "13px",
  fontWeight: "700",
  boxShadow: "0 9px 16px -7px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
};
