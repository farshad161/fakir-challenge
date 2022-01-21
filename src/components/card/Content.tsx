import * as React from "react";

interface ContentProps {
  children: React.ReactNode;
}
const Content = (props: ContentProps) => {
  return <div className="content">{props.children}</div>;
};

export default Content;
