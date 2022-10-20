import React, { useState } from "react";
import { CustomOverlayMap, Map } from "react-kakao-maps-sdk";
import Item from "./item";

export default function KakaoMap() {
  const [open, setOpen] = useState(false);
  const setStyle = open ? clickedPin : unClickedPin;

  return (
    <>
      <Map
        center={{ lat: 37.500001, lng: 127.02612 }}
        style={{
          position: "fixed",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        {overlayPins.map((pin) => (
          <CustomOverlayMap position={pin.position}>
            <div style={setStyle} onClick={() => setOpen(!open)}>
              {pin.price}
            </div>
          </CustomOverlayMap>
        ))}
      </Map>
      {open && <Item isOpen={open} setOpen={setOpen} />}
    </>
  );
}

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
};

const clickedPin = {
  padding: "6px 10px",
  backgroundColor: "#333333",
  color: "#ffffff",
  borderRadius: "40px",
  fontSize: "13px",
  fontWeight: "700",
  boxShadow: "0 9px 16px -7px rgba(0, 0, 0, 0.3)",
};
