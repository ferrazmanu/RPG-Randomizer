import styled from "styled-components";

interface Props {
  borderBottom?: boolean;
}

export const InputStyles = styled.div<Props>`
  border-bottom: 1px solid #fff;

  input {
    background-color: transparent;
    padding: 5px 10px;
    width: 100%;
    min-height: 38px;
    color: rgba(255, 255, 255, 0.8);
    outline: none !important;
    appearance: none !important;
    box-shadow: none !important;
    border: none !important;
  }
`;
