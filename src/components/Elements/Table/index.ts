import styled, { css } from 'styled-components';

interface TableProps {
  minWidth?: string;
  marked?: boolean;
}

export const Table = styled.table<TableProps>`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 20px;

  ${(props) =>
    props.marked
      ? css`
          gap: 0;
          border: 1px solid white;

          thead {
            border: 1px solid white;
            padding: 10px 8px;
            border-collapse: collapse;
          }

          tbody {
            gap: 0;

            tr {
              border-top: 1px solid white;
              padding: 15px 8px;
              border-collapse: collapse;
            }
          }
        `
      : css`
          gap: 20px;
        `}
`;

export const Header = styled.thead<TableProps>`
  width: 100%;
  display: flex;
  gap: 20px;

  td {
    font-size: 20px;
  }

  @media only screen and (max-width: 1024px) {
    td {
      font-size: 18px;
    }
  }
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
  gap: 2vw;
`;

export const Data = styled.td<TableProps>`
  display: flex;
  gap: 10px;
  min-width: ${(props) => (props.minWidth ? props.minWidth : `auto`)};
  width: ${(props) => (props.minWidth ? 'auto' : `100%`)};

  button {
    height: 100%;
  }
`;
