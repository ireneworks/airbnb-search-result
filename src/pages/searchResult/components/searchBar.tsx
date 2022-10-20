import styled from "styled-components";
import BackArrow from "../assets/bx-left-arrow-alt.svg";
import FilterIcon from "../assets/bx-slider-alt.svg";

export default function SearchBar() {
  return (
    <SearchBarWrapper>
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
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  height: 80px;
  padding: 12px 20px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 9px 16px -7px rgba(0, 0, 0, 0.1);
  z-index: 900;
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
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    padding: 0;
    background-color: transparent;
    background-image: url(${BackArrow});
    background-size: contain;
    background-repeat: no-repeat;
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

  div {
    width: 20px;
    height: 20px;
    background-color: transparent;
    background-image: url(${FilterIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
