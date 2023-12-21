import "./textarea.css";
import { ChangeEventHandler } from "react";

type TextareaProps = {
  id: string;
  placeholder: string;
  controlledValue?: {
    value: string;
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
  };
};

export function Textarea({ id, placeholder, controlledValue }: TextareaProps) {
  return (
    <textarea
      id={id}
      name={id}
      placeholder={placeholder}
      className="textarea-input"
      value={controlledValue?.value}
      onChange={controlledValue?.onChange}
    />
  );
}
