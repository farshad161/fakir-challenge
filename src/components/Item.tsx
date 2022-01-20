import * as React from "react";
import { connect } from "react-redux";
import { appState } from "../reducers/rootReducer";
import { UserState } from "../types/user";

interface ItemProps {
  name: string;
  key: number;
  user: UserState;
}
class Item extends React.Component<ItemProps> {
  private makeHeadBolded(): JSX.Element {
    const value = this.props.name;
    const { length } = this.props.user.pattern;
    const [head, tail] = [value.slice(0, length), value.slice(length)];
    return (
      <>
        <b>{head}</b>
        <span>{tail}</span>
      </>
    );
  }
  render(): React.ReactNode {
    return (
      <div key={this.props.name} className="item">
        {this.makeHeadBolded()}
      </div>
    );
  }
}
const mapStateToProps = (state: appState) => ({
  user: state.user,
});
export default connect(mapStateToProps)(Item);
