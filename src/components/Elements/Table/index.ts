import styled from "styled-components";

const COLUMNWITH = "315px";

interface DataProps {
  minWidth?: string;
}

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .form-container {
    display: flex;
    gap: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Header = styled.thead`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Body = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Row = styled.tr`
  width: 100%;
  display: flex;
  gap: 20px;

  li {
    width: 100%;
    max-width: ${COLUMNWITH};
  }
`;

export const Data = styled.td<DataProps>`
  display: flex;
  gap: 10px;
  min-width: ${(props) => (props.minWidth ? props.minWidth : `fit-content`)};
  width: ${(props) => (props.minWidth ? "auto" : `100%`)};
  max-width: ${COLUMNWITH};
  font-size: 22px;

  button {
    height: 100%;
  }
`;
