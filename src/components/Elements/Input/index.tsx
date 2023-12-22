import { InputStyles } from "./styles";
import ReactInputMask from "react-input-mask";

interface InputProps {
  name: string;
  value: string | number;
  type?: string;
  onChange: (e: any) => void;
  mask?: string;
  maskPlaceholder?: string | null | undefined;
  placeholder?: string;
  borderBottom?: boolean;
}

export function DefaultInput({
  name,
  onChange,
  type,
  value,
  mask,
  maskPlaceholder,
  placeholder,
}: InputProps) {
  return (
    <InputStyles>
      {mask ? (
        <ReactInputMask
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          mask={mask}
          maskPlaceholder={maskPlaceholder}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      )}
    </InputStyles>
  );
}
