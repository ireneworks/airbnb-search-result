import House from "../assets/89cafda9-71a9-42ec-b88e-64e7f2987672.jpeg";
import React from "react";
import styled from "styled-components";
import CloseIcon from "../assets/bx-x.svg";
import StarIcon from "../assets/bxs-star.svg";
import HeartIcon from "../assets/bx-heart-black.svg";
import { NARROW_DESKTOP } from "../styles/devices";

interface Props {
  isOpen: boolean;
  setOpen(value: boolean): void;
}

export default function MobilePinItem({ isOpen, setOpen }: Props) {

  return (
        <ItemWrapper>
          <div className='image-wrapper'>
            <img src={House} />
            <button className="close-button" onClick={() => setOpen(!isOpen)} />
          </div>
          <section>
            <div>
              <strong>Seocho 4(sa)-dong, Seocho-gu의 아파트</strong>
              <button />
            </div>
              <span>Big house2 in gangnam</span>
              <span>퀸 침대 1개</span>
            <div className='sub-content-wrapper'>
              <span>₩99,800 /박</span>
              <span className='rating-wrapper'>4.71 (100)</span>
            </div>
          </section>
        </ItemWrapper>
  );
}

const ItemWrapper = styled.button`
  position: fixed;
  display: flex;
  bottom: 90px;
  margin: 0;
  padding: 0;
  max-width: 600px;
  height: 120px;
  background: #ffffff;
  border-radius: 12px;
  border: none;
  text-decoration-line: none;

  div.image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    
    img {
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
      background: rgba(0, 0, 0, 0.3) url(${CloseIcon}) center / 20px no-repeat;
      border-radius: 28px;
      border: none;
    }
  }
  
  section {
    width: 100%;
    padding: 12px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;


        strong {
          font-size: 15px;
          line-height: 16px;
          color: #111111;
          overflow: hidden;
          word-break: break-all;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        button {
          display: block;
          margin-left: 8px;
          padding: 0; 
          width: 20px;
          height: 20px;
          background: transparent url(${HeartIcon}) center / 20px no-repeat;
          border: none;
        }
      }
    
      span {
        display: block;
        margin: 0 0 3px 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        color: #888888;
        text-align: left;
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    
    div.sub-content-wrapper {
      display: flex;
      justify-content: space-between;
      margin: 10px 0 0 0;
      color: #111111;
      font-size: 14px;
      font-weight: 600;

      span {
        color: #111111;
        font-weight: 600;
      }
      
      span.rating-wrapper {
        padding-left: 24px;
        background: transparent url(${StarIcon}) left 2px top -1px / 16px no-repeat;
      }
    }
  }

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    display: none;
  }
`;