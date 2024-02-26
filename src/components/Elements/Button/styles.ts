import styled from 'styled-components';

interface Props {
  maxWidth?: string;
  margin?: string;
}

export const Button = styled.button<Props>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : `130px`)};
  width: 100%;
  margin: ${(props) => (props.margin ? props.margin : `0`)};
  height: 30px;
  border: 1px solid #fff;
  font-weight: 600;
  background-color: ${(props) => (props.color ? props.color : `transparent`)};
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
`;
