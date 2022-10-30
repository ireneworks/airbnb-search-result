import React, { useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import MobilePinItem from "./mobilePinItem";
import styled from "styled-components";
import FilterIcon from "../assets/bx-slider-alt.svg";
import { NARROW_DESKTOP } from "../styles/devices";
import DesktopPinItem from "./desktopPinItem";

interface Props {
  isContentOpen: boolean;
}

export default function KakaoMap({ isContentOpen }: Props) {
  const [locationPinOpen, setLocationPinOpen] = useState(false);
  const [level, setLevel] = useState(3);
  const setPinStyle = locationPinOpen ? clickedPin : unClickedPin;

  return (
    <Container isContentOpen={isContentOpen}>
        <button className='filter-button'>필터</button>
      <Map
        center={{ lat: 37.500001, lng: 127.02612 }}
        level={level}
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          //   width: "100%",
          //   height: "100%",
        }}
      >
          <div className="change-level">
              <button className="up-button" onClick={() => setLevel(level - 1)}>
                  +
              </button>
            <button className="down-button" onClick={() => setLevel(level + 1)}>
                -
            </button>
          </div>
        {locationPins.map((pin) => (
          <CustomOverlayMap position={pin.position}>
            <div style={setPinStyle} onClick={() => setLocationPinOpen(!locationPinOpen)}>
              {pin.price}
            </div>
            {locationPinOpen && <DesktopPinItem isPinOpen={locationPinOpen} setPinOpen={setLocationPinOpen} /> }
          </CustomOverlayMap>
        ))}
      </Map>
      {locationPinOpen && <MobilePinItem isOpen={locationPinOpen} setOpen={setLocationPinOpen} />}
    </Container>
  );
}

const Container = styled.div<{ isContentOpen: boolean }>`
  display: ${(props) => (!props.isContentOpen ? "flex" : "none")};
  justify-content: center;

  button.filter-button {
    display: none;
    
    @media screen and (min-width: ${NARROW_DESKTOP}) {
      position: absolute;
      top: 24px;
      left: 24px;
      border: none;
      padding: 8px 12px 8px 36px;
      border-radius: 6px;
      background: #ffffff url(${FilterIcon}) left 12px bottom 6px / 20px no-repeat;
      font-weight: 600;
      color: #111111;
      z-index: 52;
      cursor: pointer;
    }
  }
  
  div.change-level {
    display: none;
    
    @media screen and (min-width: ${NARROW_DESKTOP}) {
      position: absolute;
      top: 24px;
      right: 24px;
      display: flex;
      flex-direction: column;
      z-index: 5;

      button.up-button {
        padding: 8px 12px;
        background: #ffffff;
        border:none;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        font-size: 24px;
        font-weight: 600;
        line-height: 24px;
        color: #555555;
      }

      button.down-button {
        padding: 8px 15px;
        background: #ffffff;
        font-size: 24px;
        font-weight: 700;
        line-height: 24px;
        color: #555555;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-top: 1px solid #dddddd;
        border-left: none;
        border-right: none;
        border-bottom: none;
      }
    }
  }
  
`;

const unClickedPin = {
  padding: "6px 10px",
  backgroundColor: "#ffffff",
  color: "#000000",
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

const locationPins = [
    { position: { lat: 37.50115, lng: 127.02501 }, price: "₩158,100" },
    { position: { lat: 37.50085, lng: 127.02549 }, price: "₩112,500" },
    { position: { lat: 37.50096, lng: 127.02719 }, price: "₩94,300" },
    { position: { lat: 37.50051, lng: 127.02692 }, price: " ₩130,800" },
];