import styled from "styled-components";
import BackArrow from "../assets/bx-left-arrow-alt.svg";
import FilterIcon from "../assets/bx-slider-alt.svg";
import Logo from "../assets/airbnb-logo-266x300@2x.png";
import SearchIcon from "../assets/bx-search-white.svg";
import Globe from "../assets/bx-globe.svg";
import MenuIcon from "../assets/bx-menu.svg";
import UserIcon from "../assets/bxs-user-circle.svg";
import { NARROW_DESKTOP } from "../styles/devices";

export default function SearchBar() {
  return (
    <SearchBarWrapper>
      <MobileWrapper>
        <div className="left-side">
          <button className="back-button" />
          <button className="search-button">
            <span className="location">강남</span>
            <span className="sub-content">11월 9일~12일 · 게스트 추가</span>
          </button>
        </div>
        <button className="filter-button" />
      </MobileWrapper>
      <DesktopWrapper>
        <div>
          <button className="logo-wrapper" />
          <button className="desktop-search-bar-wrapper">
            <div>
              <span>강남구</span>
              <span>11월 9일~12일</span>
              <span>게스트 추가</span>
            </div>
            <div className="search-button" />
          </button>
        </div>
        <div>
          <a className="host-button" href="#">
            호스트 되기
          </a>
          <button className="globe-button" />
          <div className="hamburger-wrapper">
            <button className="menu-icon-button" />
            <button className="user-icon-button" />
          </div>
        </div>
      </DesktopWrapper>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 12px 20px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 9px 16px -7px rgba(0, 0, 0, 0.1);
  z-index: 900;

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    padding: 12px 40px;
    box-shadow: none;
    border-bottom: 1px solid #dddddd;
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 8px 12px;
  box-sizing: border-box;
  border-radius: 36px;
  background: #f7f7f7;

  div.left-side {
    display: flex;
    align-items: center;
  }

  button.back-button {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    padding: 0;
    background: transparent url(${BackArrow}) center / 100% no-repeat;
    border: none;
    cursor: pointer;
  }

  button.search-button {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    text-align: left;

    span.location {
      display: block;
      margin-bottom: 4px;
      width: 100%;
      font-size: 15px;
      font-weight: 700;
      color: #111111;
    }

    span.sub-content {
      font-size: 12px;
      font-weight: 500;
      color: #333333;
    }
  }

  button.filter-button {
    width: 40px;
    height: 40px;
    padding: 0;
    border: 1px solid #dddddd;
    border-radius: 42px;
    background: transparent url(${FilterIcon}) center/ 20px 20px no-repeat;
    cursor: pointer;
  }

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    display: none;
  }
`;

const DesktopWrapper = styled.div`
  display: none;

  @media screen and (min-width: ${NARROW_DESKTOP}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;

      button.logo-wrapper {
        width: 40px;
        height: 40px;
        background: transparent url(${Logo}) center / 100% no-repeat;
        border: none;
      }

      button.desktop-search-bar-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 350px;
        height: 50px;
        margin-left: 28px;
        padding: 8px 20px;
        background: none;
        border: 1px solid #dddddd;
        border-radius: 40px;
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
          gap: 20px;
          width: 100%;
          margin-right: 24px;

          span {
            position: relative;

            &::after {
              position: absolute;
              top: -3px;
              right: 0;
              display: block;
              width: 1px;
              height: 22px;
              margin-right: -10px;
              background: #dddddd;
              content: "";
            }

            &:last-child::after {
              display: none;
            }
          }
        }
        div.search-button {
          max-width: 32px;
          height: 32px;
          margin-right: 0;
          border-radius: 40px;
          background: #ff385c url(${SearchIcon}) center / 16px no-repeat;
        }
      }

      a.host-button {
        padding: 10px;
        border-radius: 40px;
        background: none;
        font-size: 14px;
        font-weight: 600;
        color: #111111;
        text-decoration-line: none;
        cursor: pointer;

        :hover {
          background: #ebebeb;
        }
      }

      button.globe-button {
        width: 40px;
        height: 40px;
        margin: 0 18px 0 8px;
        padding: 0 10px;
        border-radius: 60px;
        border: none;
        background: transparent url(${Globe}) center / 20px no-repeat;
        cursor: pointer;

        :hover {
          background-color: #ebebeb;
        }
      }

      div.hamburger-wrapper {
        padding: 4px;
        border-radius: 24px;
        border: 1px solid #dddddd;

        button.menu-icon-button {
          margin-left: 8px;
          width: 20px;
          height: 20px;
          background: transparent url(${MenuIcon}) center / 100% no-repeat;
          border: none;
          cursor: pointer;
        }

        button.user-icon-button {
          margin-left: 12px;
          width: 32px;
          height: 32px;
          background: transparent url(${UserIcon}) center / 100% no-repeat;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
`;
