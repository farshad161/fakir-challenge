import * as React from "react";
import { connect } from "react-redux";
import { appState } from "../reducers/rootReducer";
import { IUser, UserState } from "../types/user";
import Item from "./Item";

interface ListProps {
  user: UserState;
}
class List extends React.Component<ListProps> {
  renderItems(list: IUser[]) {
    return list.map((item) => <Item key={item.id} name={item.username} />);
  }
  render(): React.ReactNode {
    return (
      <div className="list">
        {this.renderItems(this.props.user.suggestedUsers)}
      </div>
    );
  }
}

const mapStateToProps = (state: appState) => ({
  user: state.user,
});
export default connect(mapStateToProps)(List);
