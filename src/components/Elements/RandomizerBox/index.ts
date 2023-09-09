import styled from "styled-components";

export const RandomizerBox = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 3vw;
  border: 3px solid #fff;
  border-radius: 5px;
  min-height: 300px;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 26px;
  }

  .phrase {
    min-height: 60px;
    display: flex;
    align-items: center;
    font-size: 22px;
  }
`;
