import React from "react";
import styled from "styled-components";
import {NARROW_DESKTOP} from "../styles/devices";

interface Props {
    isPinOpen:boolean;
    setPinOpen(value:boolean):void;
}

export default function DesktopPinItem({isPinOpen, setPinOpen}:Props) {
    return <ItemWrapper onClick={() => setPinOpen(!isPinOpen)}>열기</ItemWrapper>
}

const ItemWrapper = styled.div`
  display: none;
  
  @media screen and (min-width: ${NARROW_DESKTOP}) {
    display: block;
    position: absolute;
    top: 40px;
    width: 300px;
    padding: 24px;
    background: #ffffff;
    border-radius: 12px;
  }
`;