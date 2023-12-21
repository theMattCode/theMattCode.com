import "./textfield.css";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type TextfieldProps = {
  id: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  controlledValue?: {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  };
};

export function Textfield({
  id,
  placeholder,
  type,
  controlledValue,
}: TextfieldProps) {
  return (
    <input
      type={type ?? "text"}
      id={id}
      name={id}
      className="textfield-input"
      placeholder={placeholder}
      value={controlledValue?.value}
      onChange={controlledValue?.onChange}
    />
  );
}
