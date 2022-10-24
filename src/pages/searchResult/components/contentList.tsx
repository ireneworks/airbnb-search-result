import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";
import FilterIcon from "../assets/bx-slider-alt.svg";
import Image from "../assets/89cafda9-71a9-42ec-b88e-64e7f2987672.jpeg";
import StarIcon from "../assets/bxs-star.svg";
import { useEffect, useState } from "react";
import HeartIcon from "../assets/bx-heart-white.svg";
import Slider from "react-slick";
import { MOBILE, NARROW_DESKTOP } from "../styles/devices";

interface Props {
  isOpen: boolean;
}

export default function ContentList({ isOpen }: Props) {
  const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE})` });
  const isNarrowDesktop = useMediaQuery({
    query: `(min-width: ${NARROW_DESKTOP})`,
  });

  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 10) {
      return setScroll(true);
    }
    return setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container isOpen={isOpen}>
      {isMobile && (
        <HeaderWrapper>
          <Handler />
        </HeaderWrapper>
      )}
      {isNarrowDesktop && (
        <TopWrapper scroll={scroll}>
          <p>숙소 1,000개 이상</p>
          <button>
            <div />
            필터
          </button>
        </TopWrapper>
      )}
      <Content>
        <a href="#">
          <ImageWrapper>
            <span>슈퍼호스트</span>
            <div>
              <SliderWrapper {...settings}>
                <img src={Image} />
                <img src={Image} />
              </SliderWrapper>
            </div>
            <button />
          </ImageWrapper>
          <ItemHeaderWrapper>
            <dt>Seocho 4(sa)-dong</dt>
            <RatingWrapper>
              <div />
              <span>4.71 (100)</span>
            </RatingWrapper>
          </ItemHeaderWrapper>
          <dd>강남역 8분거리/포근/ 장기출장/ 깨끗해요/맛집/...</dd>
          <dd>퀸 침대 1개</dd>
          <p>
            ₩98,902 /박 ꞏ <span>총액 ₩296,706</span>
          </p>
        </a>
        <a href="#">
          <ImageWrapper>
            <span>슈퍼호스트</span>
            <div>
              <SliderWrapper {...settings}>
                <img src={Image} />
                <img src={Image} />
              </SliderWrapper>
            </div>
            <button />
          </ImageWrapper>
          <ItemHeaderWrapper>
            <dt>Seocho 4(sa)-dong</dt>
            <RatingWrapper>
              <div />
              <span>4.71 (100)</span>
            </RatingWrapper>
          </ItemHeaderWrapper>
          <dd>강남역 8분거리/포근/ 장기출장/ 깨끗해요/맛집/...</dd>
          <dd>퀸 침대 1개</dd>
          <p>
            ₩98,902 /박 ꞏ <span>총액 ₩296,706</span>
          </p>
        </a>
        <a href="#">
          <ImageWrapper>
            <span>슈퍼호스트</span>
            <div>
              <SliderWrapper {...settings}>
                <img src={Image} />
                <img src={Image} />
              </SliderWrapper>
            </div>
            <button />
          </ImageWrapper>
          <ItemHeaderWrapper>
            <dt>Seocho 4(sa)-dong</dt>
            <RatingWrapper>
              <div />
              <span>4.71 (100)</span>
            </RatingWrapper>
          </ItemHeaderWrapper>
          <dd>강남역 8분거리/포근/ 장기출장/ 깨끗해요/맛집/...</dd>
          <dd>퀸 침대 1개</dd>
          <p>
            ₩98,902 /박 ꞏ <span>총액 ₩296,706</span>
          </p>
        </a>
        <a href="#">
          <ImageWrapper>
            <span>슈퍼호스트</span>
            <div>
              <SliderWrapper {...settings}>
                <img src={Image} />
                <img src={Image} />
              </SliderWrapper>
            </div>
            <button />
          </ImageWrapper>
          <ItemHeaderWrapper>
            <dt>Seocho 4(sa)-dong</dt>
            <RatingWrapper>
              <div />
              <span>4.71 (100)</span>
            </RatingWrapper>
          </ItemHeaderWrapper>
          <dd>강남역 8분거리/포근/ 장기출장/ 깨끗해요/맛집/...</dd>
          <dd>퀸 침대 1개</dd>
          <p>
            ₩98,902 /박 ꞏ <span>총액 ₩296,706</span>
          </p>
        </a>
      </Content>
    </Container>
  );
}

const SliderWrapper = styled(Slider)`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
    aspect-ratio: 1/1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 0;
  border-radius: 16px;
  background: green;

  div {
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 12px;
  }

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
  }

  button {
    position: absolute;
    top: 16px;
    right: 16px;
    margin: 0;
    width: 28px;
    height: 28px;
    border: none;
    background-color: transparent;
    background-image: url(${HeartIcon});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
  }
`;

const ItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  dt {
    display: inline;
    font-size: 15px;
    font-weight: 600;
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;

  div {
    margin: 0;
    width: 16px;
    height: 16px;
    background-color: transparent;
    background-image: url(${StarIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
  span {
    display: inline;
    margin-left: 2px;
    font-size: 15px;
    font-weight: 500;
    color: #111111;
  }
`;

const Content = styled.div`
  @media screen and (min-width: ${NARROW_DESKTOP}) {
    margin: 100px 26px 60px;
  }
  margin: 24px 26px 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  a {
    @media screen and (min-width: ${NARROW_DESKTOP}) {
      flex: 1 1 40%;
    }
    flex: 1 100%;
    margin: 0 14px 36px;
    width: 100%;
    cursor: pointer;
    text-decoration-line: none;
    color: #111111;

    dd {
      margin: 0 0 2px 0;
      font-size: 14px;
      color: #888888;
    }

    p {
      margin: 12px 0 0 0;
      font-size: 14px;
      font-weight: 600;
      color: #111111;

      span {
        font-weight: 400;
        color: #888888;
        text-decoration-line: underline;
      }
    }
  }
`;

const TopWrapper = styled.div<{ scroll: boolean }>`
  position: fixed;
  top: 80px;
  width: 100%;
  padding: 28px 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background: #ffffff;

  ${(props) => {
    if (props.scroll) {
      return css`
        border-bottom: 1px solid #dddddd;
      `;
    }
    return css`
      border-bottom: none;
    `;
  }};

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
`;

const Container = styled.div<{ isOpen: boolean }>`
  ${(props) => {
    if (props.isOpen) {
      return css`
        display: flex;
      `;
    }
    return css`
      display: none;
    `;
  }}
  flex-direction: column;
  position: fixed;
  z-index: 2;
  top: 80px;
  left: 0;
  right: 0;
  overflow-x: hidden;

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    border-radius: 0;
  }

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  height: ${window.innerHeight - 40}px;
`;

const HeaderWrapper = styled.div`
  height: 48px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: relative;
  padding: 16px 0 4px 0;
`;

const Handler = styled.div`
  width: 32px;
  height: 4px;
  border-radius: 12px;
  background: #dddddd;
  margin: auto;
`;
