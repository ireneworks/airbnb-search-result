import SearchIcon from "../assets/bx-search.svg";
import HeartIcon from "../assets/bx-heart.svg";
import UserIcon from "../assets/bx-user-circle.svg";
import styled, { css } from "styled-components";

export default function Navigation() {
  return (
    <NavigationWrapper isOpen={true}>
      <section>
        <a>
          <MenuIconWrapper icon={SearchIcon} />
          <span style={{ color: "#111111" }}>둘러보기</span>
        </a>
        <a>
          <MenuIconWrapper icon={HeartIcon} />
          <span>위시리스트</span>
        </a>
        <a>
          <MenuIconWrapper icon={UserIcon} />
          <span>로그인</span>
        </a>
      </section>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav<{ isOpen: boolean }>`
  ${(props) => {
    if (!props.isOpen) {
      return css`
        display: none;
      `;
    }
  }}
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 66px;
  border-top: 1px solid #eeeeee;
  background: #ffffff;
  z-index: 50;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70px;

      span {
        font-size: 11px;
        font-weight: 500;
        color: #888888;
      }
    }
  }
`;

const MenuIconWrapper = styled.div<{ icon: string }>`
  margin: 0 0 6px 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url(${(props) => props.icon});
  background-size: contain;
  background-repeat: no-repeat;
`;
