import * as React from "react";
import { connect } from "react-redux";
import { appState } from "../reducers/rootReducer";
import {
  UserState,
  SetUserPatternPayload,
  SetUserPattern,
  SetSuggestedUsersPayload,
  SetSuggestedUsers,
  SetUserTabIndexPayload,
  SetUserTabIndex,
} from "../types/user";
import { setUserPattern, setSuggestedUsers, setUserTabIndex } from "../actions";

interface ItemProps {
  name: string;
  key: number;
  user: UserState;
  tabIndex: number;
  setUserPattern: (pattern: SetUserPatternPayload) => SetUserPattern;
  setSuggestedUsers: (users: SetSuggestedUsersPayload) => SetSuggestedUsers;
  setUserTabIndex: (tabIndex: SetUserTabIndexPayload) => SetUserTabIndex;
}
class Item extends React.Component<ItemProps> {
  /**
   *
   * @param event
   */
  handleClick(event: React.MouseEvent<HTMLDivElement>): void {
    const username = (event.target as Element).id;

    this.props.setUserPattern({ pattern: username });
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
      <p id={value}>
        <b id={value}>{head}</b>
        <>{tail}</>
      </p>
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
        tabIndex={this.props.tabIndex}
        className={
          this.props.tabIndex === this.props.user.tabIndex
            ? "item selected"
            : "item"
        }
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
  setUserTabIndex,
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);
