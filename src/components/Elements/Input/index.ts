import styled from "styled-components";
import ReactInputMask from "react-input-mask";

interface Props {
  borderBottom?: string;
}

export const Input = styled.input<Props>`
  background-color: transparent;
  ${(props) =>
    props.borderBottom
      ? "border-bottom:" + props.borderBottom
      : "border: 1px solid #fff"};
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  width: 100%;
  min-height: 38px;
  outline: none !important;
  appearance: none !important;
  box-shadow: none !important;
`;

export const MaskedInput = styled(ReactInputMask)<Props>`
  background-color: transparent;
  ${(props) =>
    props.borderBottom
      ? "border-bottom:" + props.borderBottom
      : "border: 1px solid #fff"};
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.8);
  padding: 5px 10px;
  width: 100%;
  min-height: 38px;
  outline: none !important;
  appearance: none !important;
  box-shadow: none !important;
`;
