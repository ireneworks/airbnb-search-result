import styled from "styled-components";
import FilterIcon from "../assets/bx-slider-alt.svg";
import StarIcon from "../assets/bxs-star.svg";
import { useEffect, useRef, useState } from "react";
import HeartIcon from "../assets/bx-heart-white.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NARROW_DESKTOP } from "../styles/devices";
import Image from "../assets/89cafda9-71a9-42ec-b88e-64e7f2987672.jpeg";

interface Props {
  isContentOpen: boolean;
}

export default function ContentList({ isContentOpen }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleScroll = () => {
    console.log(scrollRef.current?.scrollTop);
    if (window.scrollY >= 10) {
      return setScroll(true);
    }
    return setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container ref={scrollRef} isContentOpen={isContentOpen}>
      <div className="bottom-sheet-header">
        <div className="bottom-sheet-header-handler" />
      </div>
      <DesktopHeaderWrapper scroll={scroll}>
        <p>숙소 1,000개 이상</p>
        <button>
          <div />
          필터
        </button>
      </DesktopHeaderWrapper>
      <Content>
        <a href="#">
          <ImageWrapper>
            <span>슈퍼호스트</span>
            <Slider {...settings}>
              <img src={Image} />
              <img src={Image} />
            </Slider>
            <button />
          </ImageWrapper>
          <ItemHeaderWrapper>
            <span>Seocho 4(sa)-dong</span>
            <span className="rating-wrapper">4.71 (100)</span>
          </ItemHeaderWrapper>
          <p>강남역 8분거리/포근/ 장기출장/ 깨끗해요/맛집/</p>
          <p>퀸 침대 1개</p>
          <p className="price-wrapper">
            ₩98,902 /박 · <span>총액 ₩296,706</span>
          </p>
        </a>
        <a href="#">
          <ImageWrapper>
            <span>슈퍼호스트</span>
            <Slider {...settings}>
              <img src={Image} />
              <img src={Image} />
            </Slider>
            <button />
          </ImageWrapper>
          <ItemHeaderWrapper>
            <span>Seocho 4(sa)-dong</span>
            <span className="rating-wrapper">4.71 (100)</span>
          </ItemHeaderWrapper>
          <p>강남역 8분거리/포근/ 장기출장/ 깨끗해요/맛집/</p>
          <p>퀸 침대 1개</p>
          <p className="price-wrapper">
            ₩98,902 /박 · <span>총액 ₩296,706</span>
          </p>
        </a>
        <a href="#">
          <ImageWrapper>
            <span>슈퍼호스트</span>
            <Slider {...settings}>
              <img src={Image} />
              <img src={Image} />
            </Slider>
            <button />
          </ImageWrapper>
          <ItemHeaderWrapper>
            <span>Seocho 4(sa)-dong</span>
            <span className="rating-wrapper">4.71 (100)</span>
          </ItemHeaderWrapper>
          <p>강남역 8분거리/포근/ 장기출장/ 깨끗해요/맛집/</p>
          <p>퀸 침대 1개</p>
          <p className="price-wrapper">
            ₩98,902 /박 · <span>총액 ₩296,706</span>
          </p>
        </a>
        <a href="#">
          <ImageWrapper>
            <span>슈퍼호스트</span>
            <Slider {...settings}>
              <img src={Image} />
              <img src={Image} />
            </Slider>
            <button />
          </ImageWrapper>
          <ItemHeaderWrapper>
            <span>Seocho 4(sa)-dong</span>
            <span className="rating-wrapper">4.71 (100)</span>
          </ItemHeaderWrapper>
          <p>강남역 8분거리/포근/ 장기출장/ 깨끗해요/맛집/</p>
          <p>퀸 침대 1개</p>
          <p className="price-wrapper">
            ₩98,902 /박 · <span>총액 ₩296,706</span>
          </p>
        </a>
      </Content>
    </Container>
  );
}

const Container = styled.div<{ isContentOpen: boolean }>`
  display: ${(props) => (props.isContentOpen ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    border-radius: 0;
  }

  div.bottom-sheet-header {
    position: relative;
    height: 48px;
    padding: 16px 0 4px 0;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    div.bottom-sheet-header-handler {
      width: 32px;
      height: 4px;
      margin: auto;
      border-radius: 12px;
      background: #dddddd;
    }

    @media screen and (min-width: ${NARROW_DESKTOP}) {
      display: none;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: auto;
  margin: 0 20px 100px 20px;

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    flex-wrap: nowrap;
    gap: 24px;
    margin: 100px 26px 60px;
  }

  a {
    flex: 1 100%;
    width: 100%;
    margin-bottom: 32px;
    text-decoration-line: none;
    color: #111111;
    cursor: pointer;

    @media screen and (min-width: ${NARROW_DESKTOP}) {
      flex: 1 1 50%;
      width: 50%;
    }

    p {
      margin: 0 0 3px 0;
      font-size: 14px;
      font-weight: 500;
      color: #888888;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    p.price-wrapper {
      margin: 12px 0 0 0;
      font-size: 14px;
      font-weight: 600;
      color: #111111;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: nowrap;

      span {
        font-weight: 400;
        color: #888888;
        text-decoration-line: underline;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;

  span {
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 6px 8px;
    background: #ffffff;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    color: #111111;
    z-index: 4;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
    aspect-ratio: 1/1;
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;
    margin: 0;
    width: 28px;
    height: 28px;
    border: none;
    background: transparent url(${HeartIcon}) center / 100% no-repeat;
    cursor: pointer;
  }
`;

const ItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 12px;

  span {
    font-size: 15px;
    font-weight: 600;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span.rating-wrapper {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding-left: 19px;
    background: transparent url(${StarIcon}) left / 16px no-repeat;
    font-size: 15px;
    font-weight: 500;
    color: #111111;
  }
`;

const DesktopHeaderWrapper = styled.div<{ scroll: boolean }>`
  display: none;

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 80px;
    width: 100%;
    padding: 28px 40px 20px;
    box-sizing: border-box;
    background: #ffffff;
    border-bottom: ${(props) => (props.scroll ? "1px solid #dddddd" : " none")};
    z-index: 5;

    p {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: #111111;
    }

    button {
      display: flex;
      flex-direction: row;
      padding: 12px;
      border: 1px solid #eeeeee;
      background: #ffffff;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      color: #111111;
      cursor: pointer;

      div {
        margin-right: 8px;
        width: 16px;
        height: 16px;
        background-color: transparent;
        background-image: url(${FilterIcon});
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
  }
`;
