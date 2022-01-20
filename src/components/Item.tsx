import * as React from "react";

interface ItemProps {
  name: string;
  key: number;
}
class Item extends React.Component<ItemProps> {
  render(): React.ReactNode {
    return (
      <div key={this.props.name} className="item">
        {this.props.name}
      </div>
    );
  }
}

export default Item;
