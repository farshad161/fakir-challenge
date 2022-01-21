import * as React from "react";

interface ButtonProps {
  type: string;
  value: string;
  handler: () => any;
}
const Button = (props: ButtonProps) => {
  return (
    <div className="btn btn-info">
      <input
        type={props.type}
        value={props.value}
        onClick={() => props.handler()}
      />
    </div>
  );
};

export default Button;
