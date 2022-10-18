import styled from "styled-components";
import BackArrow from "./assets/bx-left-arrow-alt.svg";

export default function SearchResult() {
  return (
    <>
      <SearchBar>
        <div>
          <div>
            <button>
              <div />
            </button>
            <SearchContent>
              <span>유럽</span>
              <span>날짜게스트추가</span>
            </SearchContent>
          </div>
          <button>이거다</button>
        </div>
      </SearchBar>
      <map>지도</map>
      <div>바텀없</div>
      <div>네비게이션</div>
    </>
  );
}

const SearchBar = styled.section`
  height: 80px;
  padding: 12px 20px;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 9px 16px -7px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    border-radius: 36px;
    padding: 0 12px;
    background: #eeeeee;
    box-sizing: border-box;
  }

  button {
    width: 24px;
    height: 24px;
    padding: 0;
    background: none;
    border: none;

    div {
      padding: 0;
      background-color: transparent;
      background-image: url(${BackArrow});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;

  span {
    display: block;
    width: 100%;
  }
`;
