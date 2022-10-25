import SearchIcon from "../assets/bx-search.svg";
import HeartIcon from "../assets/bx-heart.svg";
import UserIcon from "../assets/bx-user-circle.svg";
import styled from "styled-components";
import { NARROW_DESKTOP } from "../styles/devices";

export default function Navigation() {
  return (
    <NavigationWrapper>
      <section>
        <button>
          <MenuIconWrapper icon={SearchIcon} />
          <span style={{ color: "#111111" }}>둘러보기</span>
        </button>
        <button>
          <MenuIconWrapper icon={HeartIcon} />
          <span>위시리스트</span>
        </button>
        <button>
          <MenuIconWrapper icon={UserIcon} />
          <span>로그인</span>
        </button>
      </section>
    </NavigationWrapper>
  );
}

const NavigationWrapper = styled.nav`
  @media screen and (min-width: ${NARROW_DESKTOP}) {
    display: none;
  }

  display: table-row;
  width: 100%;
  height: 66px;
  border-top: 1px solid #eeeeee;
  background: #ffffff;
  z-index: 899;

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 70px;
      background: none;
      border: none;
      cursor: pointer;

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
