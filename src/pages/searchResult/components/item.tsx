import House from "../assets/89cafda9-71a9-42ec-b88e-64e7f2987672.jpeg";
import React from "react";
import styled from "styled-components";
import CloseIcon from "../assets/bx-x.svg";
import StarIcon from "../assets/bxs-star.svg";
import HeartIcon from "../assets/bx-heart-black.svg";

interface Props {
  isOpen: boolean;
  setOpen(value: boolean): void;
}

export default function Item({ isOpen, setOpen }: Props) {
  return (
    <ItemWrapper href="#">
      <ImageWrapper>
        <img src={House} />
        <button onClick={() => setOpen(!isOpen)}>
          <div />
        </button>
      </ImageWrapper>
      <section>
        <dt>Seocho 4(sa)-dong, Seocho-gu의 아파트</dt>
        <dd>Big house2 in gangnam/.. </dd>
        <dd>퀸 침대 1개</dd>
        <SubContentWrapper>
          <span>₩99,800 /박</span>
          <div>
            <div />
            <span>4.71 (100)</span>
          </div>
        </SubContentWrapper>
        <LikeButton>
          <div />
        </LikeButton>
      </section>
    </ItemWrapper>
  );
}

const LikeButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;

  div {
    width: 20px;
    height: 20px;
    background-color: transparent;
    background-image: url(${HeartIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const SubContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  color: #111111;
  font-size: 12px;
  font-weight: 600;

  div {
    div {
      display: inline-block;
      width: 12px;
      height: 12px;
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
  left: 20px;
  right: 20px;
  bottom: 90px;
  height: 120px;
  background: #ffffff;
  border-radius: 12px;
  text-decoration-line: none;

  section {
    padding: 12px;
    letter-spacing: -0.2px;
    word-break: keep-all;

    dt {
      max-width: 90%;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: #111111;
      margin-bottom: 8px;
    }

    dd {
      margin: 0 0 2px 0;
      font-size: 12px;
      font-weight: 400;
      color: #717171;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 120px;
    height: 120px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    object-fit: cover;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8px;
    left: 8px;
    width: 28px;
    height: 28px;
    padding: 0;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 28px;

    div {
      width: 20px;
      height: 20px;
      background-color: transparent;
      background-image: url(${CloseIcon});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;
