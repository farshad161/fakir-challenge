import * as React from "react";
import Item from "./Item";

interface ListProps {
  items: string[];
}
class List extends React.Component<ListProps> {
  renderItems(list: string[]) {
    return list.map((item) => <Item name={item} />);
  }
  render(): React.ReactNode {
    return <div className="list">{this.renderItems(this.props.items)}</div>;
  }
}

export default List;
