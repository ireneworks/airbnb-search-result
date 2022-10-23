import React, { useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import Item from "./item";
import styled from "styled-components";
import FilterIcon from "../assets/bx-slider-alt.svg";

interface Props {
  isContentOpen: boolean;
}

export default function KakaoMap({ isContentOpen }: Props) {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState(3);
  const setStyle = open ? clickedPin : unClickedPin;

  return (
    <Container>
      {!isContentOpen && (
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
        <div className="change-level">
          <button onClick={() => setLevel(level - 1)}>-</button>
          <button onClick={() => setLevel(level + 1)}>+</button>
        </div>
        {overlayPins.map((pin) => (
          <CustomOverlayMap position={pin.position}>
            <div style={setStyle} onClick={() => setOpen(!open)}>
              {pin.price}
            </div>
          </CustomOverlayMap>
        ))}
      </Map>
      {open && <Item isOpen={open} setOpen={setOpen} />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  .change-level {
    position: absolute;
    top: 100px;
    background: red;
    display: flex;
    flex-direction: column;

    button {
      display: block;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100px;
    left: 20px;
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
