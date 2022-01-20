import * as React from "react";
import { connect } from "react-redux";
import { appState } from "../reducers/rootReducer";
import {
  UserState,
  SetUserPatternPayload,
  SetUserPattern,
  setSuggestedUsersPayload,
  SetSuggestedUsers,
} from "../types/user";
import { setUserPattern, setSuggestedUsers } from "../actions";

interface ItemProps {
  name: string;
  key: number;
  user: UserState;
  setUserPattern: (pattern: SetUserPatternPayload) => SetUserPattern;
  setSuggestedUsers: (users: setSuggestedUsersPayload) => SetSuggestedUsers;
}
class Item extends React.Component<ItemProps> {
  /**
   *
   * @param event
   */
  handleClick(event: React.MouseEvent<HTMLDivElement>): void {
    const username = (event.target as Element).id;
    this.props.setUserPattern({ pattern: username });
    this.props.setSuggestedUsers({ suggestedUsers: [] });
  }
  /**
   *
   * @returns div<JSX> that the first n characters were bolded base on the user input pattern
   *
   */
  private makeHeadBolded(): JSX.Element {
    const value = this.props.name;
    const { length } = this.props.user.pattern;

    //getting the head and tail of username
    const [head, tail] = [value.slice(0, length), value.slice(length)];
    return (
      <div id={value}>
        <b>{head}</b>
        <span>{tail}</span>
      </div>
    );
  }
  /**
   *
   * @returns
   */
  render(): React.ReactNode {
    return (
      <div
        key={this.props.name}
        className="item"
        onClick={this.handleClick.bind(this)}
      >
        {this.makeHeadBolded()}
      </div>
    );
  }
}
const mapStateToProps = (state: appState) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUserPattern,
  setSuggestedUsers,
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);
