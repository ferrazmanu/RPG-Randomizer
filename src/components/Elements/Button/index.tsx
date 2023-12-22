import { Container } from "@/components/Elements/Container";
import * as S from "./styles";
import { MouseEventHandler } from "react";

interface Props {
  text?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  maxWidth?: string;
  margin?: string;
  type?: "button" | "reset" | "submit" | undefined;
  color?: string;
}

export const Button = (props: Props) => {
  return (
    <S.Button
      onClick={props.onClick}
      maxWidth={props.maxWidth}
      margin={props.margin}
      type={props.type}
      color={props.color}
    >
      {props.text}
    </S.Button>
  );
};
