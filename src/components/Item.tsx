import * as React from "react";

interface ItemProps {
  name: string;
}
class Item extends React.Component<ItemProps> {
  render(): React.ReactNode {
    return <div className="item">{this.props.name}</div>;
  }
}

export default Item;
