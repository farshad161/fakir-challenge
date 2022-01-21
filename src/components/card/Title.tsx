import * as React from "react";

interface TitleProps {
  children: React.ReactNode;
}
const Title = (props: TitleProps) => {
  return (
    <div className="title">
      <p>
        <b>{props.children}</b>
      </p>
    </div>
  );
};

export default Title;
