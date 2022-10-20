import styled from "styled-components";

export default function BottomSheet() {
  return (
    <BottomSheetWrapper>
      <section>
        <Indicator />
      </section>
    </BottomSheetWrapper>
  );
}

const BottomSheetWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 73px;
  height: 100px;
  background: #ffffff;
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;

  section {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Indicator = styled.div`
  margin-top: 12px;
  width: 40px;
  height: 5px;
  background: #dddddd;
  border-radius: 12px;
`;
