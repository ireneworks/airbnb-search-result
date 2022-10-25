import styled from "styled-components";
import BackArrow from "../assets/bx-left-arrow-alt.svg";
import FilterIcon from "../assets/bx-slider-alt.svg";
import Logo from "../assets/airbnb-logo-266x300@2x.png";
import SearchIcon from "../assets/bx-search-white.svg";
import Globe from "../assets/bx-globe.svg";
import MenuIcon from "../assets/bx-menu.svg";
import UserIcon from "../assets/bxs-user-circle.svg";
import { useMediaQuery } from "react-responsive";
import { MOBILE, NARROW_DESKTOP } from "../styles/devices";

export default function SearchBar() {
  const isMobile = useMediaQuery({ query: "(max-width: 745px)" });
  const isNarrowDesktop = useMediaQuery({ query: "(min-width:  746px)" });

  return (
    <SearchBarWrapper>
      {isNarrowDesktop && (
        <DesktopWrapper>
          <div>
            <LogoWrapper href="#" />
            <SearchBarDesktop>
              <div>
                <span>강남구</span>
                <span>11월 9일~12일</span>
                <span>게스트 추가</span>
              </div>
              <SearchBarDesktopIcon />
            </SearchBarDesktop>
          </div>
          <div>
            <HostButton>호스트 되기</HostButton>
            <GlobeIcon />
            <HamburgerMenu>
              <MenuIconWrapper />
              <UserIconWrapper />
            </HamburgerMenu>
          </div>
        </DesktopWrapper>
      )}
      {isMobile && (
        <TouchAreaWrapper>
          <LeftSide>
            <button />
            <SearchContent>
              <LocationLabel>강남</LocationLabel>
              <span>11월 9일~12일 · 게스트 추가</span>
            </SearchContent>
          </LeftSide>
          <FilterButton>
            <div />
          </FilterButton>
        </TouchAreaWrapper>
      )}
    </SearchBarWrapper>
  );
}

const HostButton = styled.a`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 10px;
  border-radius: 40px;
  background: none;

  :hover {
    background: #ebebeb;
  }
`;

const HamburgerMenu = styled.div`
  padding: 4px;
  border-radius: 24px;
  border: 1px solid #dddddd;
`;

const UserIconWrapper = styled.a`
  margin-left: 12px;
  width: 32px;
  height: 32px;
  background-color: transparent;
  background-image: url(${UserIcon});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const MenuIconWrapper = styled.button`
  margin-left: 8px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  background-image: url(${MenuIcon});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  border: none;
`;

const GlobeIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  padding: 0;
  width: 40px;
  height: 40px;
  border-radius: 60px;
  border: none;
  background-size: 20px;
  background-image: url(${Globe});
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;

  :hover {
    background-color: #ebebeb;
  }
`;

const SearchBarWrapper = styled.section`
  //position: fixed;
  //left: 0;
  //right: 0;
  width: 100%;
  height: 80px;
  padding: 12px 40px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 9px 16px -7px rgba(0, 0, 0, 0.1);
  z-index: 900;

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    box-shadow: none;
    border-bottom: 1px solid #dddddd;
  }

  @media screen and (max-width: ${MOBILE}) {
    padding: 12px 20px;
  }
`;

const DesktopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const SearchBarDesktop = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 50px;
  margin-left: 28px;
  background: none;
  border: 1px solid #dddddd;
  border-radius: 40px;
  padding: 8px 10px;
  box-sizing: border-box;
  box-shadow: 0 0 20px -4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: 600;
  color: #111111;
  cursor: pointer;

  :hover {
    box-shadow: none;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    span {
      position: relative;
      padding-right: 20px;

      &::after {
        position: absolute;
        display: block;
        margin-right: 6px;
        width: 1px;
        height: 22px;
        top: -2px;
        right: 0;
        background: #dddddd;
        content: "";
      }

      &:last-child::after {
        display: none;
      }
    }
  }
`;

const SearchBarDesktopIcon = styled.div`
  max-width: 32px;
  height: 32px;
  border-radius: 40px;
  background-color: #ff385c;
  background-image: url(${SearchIcon});
  background-size: 16px;
  background-position: center;
  background-repeat: no-repeat;
`;

const LogoWrapper = styled.a`
  width: 40px;
  height: 40px;
  background-size: 40px;
  background-color: transparent;
  background-image: url(${Logo});
  background-position: center;
  background-repeat: no-repeat;
`;

const TouchAreaWrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-radius: 36px;
  padding: 0 12px;
  background: #f7f7f7;
  box-sizing: border-box;
  cursor: pointer;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    padding: 0;
    background: url(${BackArrow}) 0 0 no-repeat;
    background-size: contain;
    border: none;
  }
`;

const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const LocationLabel = styled.span`
  display: block;
  margin-bottom: 4px;
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  color: #111111;

  + span {
    font-size: 12px;
    color: #333333;
  }
`;

const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid #dddddd;
  border-radius: 42px;
  background: none;
  cursor: pointer;

  div {
    width: 20px;
    height: 20px;
    background-color: transparent;
    background-image: url(${FilterIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
