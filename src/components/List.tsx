import * as React from "react";
import { IUser } from "../types/user";
import Item from "./Item";

interface ListProps {
  items: IUser[];
}
class List extends React.Component<ListProps> {
  renderItems(list: IUser[]) {
    return list.map((item) => <Item key={item.id} name={item.username} />);
  }
  render(): React.ReactNode {
    return <div className="list">{this.renderItems(this.props.items)}</div>;
  }
}

export default List;
