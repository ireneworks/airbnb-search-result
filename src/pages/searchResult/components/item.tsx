import House from "../assets/89cafda9-71a9-42ec-b88e-64e7f2987672.jpeg";
import React from "react";
import styled from "styled-components";
import CloseIcon from "../assets/bx-x.svg";
import StarIcon from "../assets/bxs-star.svg";
import HeartIcon from "../assets/bx-heart-black.svg";
import { useMediaQuery } from "react-responsive";
import { MOBILE, NARROW_DESKTOP } from "../styles/devices";

interface Props {
  isOpen: boolean;
  setOpen(value: boolean): void;
}

export default function Item({ isOpen, setOpen }: Props) {
  const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE})` });
  const isNarrowDesktop = useMediaQuery({
    query: `(min-width: ${NARROW_DESKTOP})`,
  });

  return (
    <>
      {isMobile && (
        <ItemWrapper href="#">
          <ImageWrapper>
            <img src={House} />
            <button className="close-button" onClick={() => setOpen(!isOpen)} />
          </ImageWrapper>
          <section>
            <div>
              <dt>Seocho 4(sa)-dong, Seocho-gu의 아파트</dt>
              <button />
            </div>
            <dd>Big house2 in gangnam/..</dd>
            <dd>퀸 침대 1개</dd>
            <SubContentWrapper>
              <span>₩99,800 /박</span>
              <div>
                <div />
                <span>4.71 (100)</span>
              </div>
            </SubContentWrapper>
          </section>
        </ItemWrapper>
      )}
    </>
  );
}

const SubContentWrapper = styled.div`
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  color: #111111;
  font-size: 14px;
  font-weight: 600;

  div {
    display: block;

    div {
      margin-right: 4px;
      width: 16px;
      height: 16px;
      background-color: transparent;
      background-image: url(${StarIcon});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

const ItemWrapper = styled.a`
  position: fixed;
  display: flex;
  bottom: 90px;
  margin: 0 20px;
  max-width: 600px;
  height: 120px;
  background: #ffffff;
  border-radius: 12px;
  text-decoration-line: none;

  section {
    position: relative;
    padding: 12px;
    width: 100%;
    letter-spacing: -0.2px;
    word-break: keep-all;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      dt {
        font-size: 15px;
        font-weight: 600;
        line-height: 16px;
        color: #111111;
        margin-bottom: 8px;
      }

      button {
        position: static;
        display: block;
        margin-left: 6px;
        width: 20px;
        height: 20px;
        background-color: transparent;
        background-size: 20px;
        background-image: url(${HeartIcon});
        background-position: center;
        background-repeat: no-repeat;
        border: none;
      }
    }

    dd {
      margin: 0 0 3px 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      color: #717171;
    }
  }
`;

const ImageWrapper = styled.div`
  img {
    position: relative;
    width: 120px;
    height: 120px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    object-fit: cover;
  }

  button.close-button {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 28px;
    height: 28px;
    padding: 0;
    background-size: 20px;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.3);
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    border-radius: 28px;
  }
`;
