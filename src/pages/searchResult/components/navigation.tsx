import SearchIcon from "../assets/bx-search.svg";
import HeartIcon from "../assets/bx-heart.svg";
import UserIcon from "../assets/bx-user-circle.svg";
import styled from "styled-components";
import { NARROW_DESKTOP } from "../styles/devices";

export default function Navigation() {
  return (
    <NavigationWrapper>
      <section>
        <MenuWrapper icon={SearchIcon}>둘러보기</MenuWrapper>
        <MenuWrapper icon={HeartIcon}>위시리스트</MenuWrapper>
        <MenuWrapper icon={UserIcon}>로그인</MenuWrapper>
      </section>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 66px;
  border-top: 1px solid #eeeeee;
  box-sizing: border-box;
  background: #ffffff;
  z-index: 900;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    height: 100%;
    text-align: center;
  }

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    display: none;
  }
`;

const MenuWrapper = styled.button<{ icon: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
  height: 60px;
  padding-top: 34px;
  background: transparent url(${(props) => props.icon}) center top 4px / 24px
    no-repeat;
  border: none;
  font-size: 12px;
  font-weight: 500;
  color: #888888;
  text-align: center;
  cursor: pointer;

  :active {
    color: #111111;
  }
`;
