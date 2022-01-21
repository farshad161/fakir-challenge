import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import {
  fetchUserRequest,
  setUserPattern,
  setSuggestedUsers,
  setUserTabIndex,
} from "../actions";
import {
  FetchUserRequest,
  SetUserPatternPayload,
  SetUserPattern,
  UserState,
  SetSuggestedUsersPayload,
  SetSuggestedUsers,
  SetUserTabIndex,
  SetUserTabIndexPayload,
} from "../types/user";
import { appState } from "../reducers/rootReducer";
import { IUser } from "../types/user";

interface AutoCompleteProps {
  fetchUserRequest: () => FetchUserRequest;
  user: UserState;
  setUserPattern: (pattern: SetUserPatternPayload) => SetUserPattern;
  setSuggestedUsers: (users: SetSuggestedUsersPayload) => SetSuggestedUsers;
  setUserTabIndex: (tabIndex: SetUserTabIndexPayload) => SetUserTabIndex;
}

const INITIAL_TAB_INDEX = -1;
class AutoComplete extends Component<AutoCompleteProps> {
  componentDidMount() {
    this.props.fetchUserRequest();
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    const input = event.currentTarget.value;

    // setting pattern in application store
    this.props.setUserPattern({ pattern: input });

    const matched = this.getMatched(input);
    this.props.setSuggestedUsers({ suggestedUsers: matched });
  }

  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const { tabIndex, suggestedUsers } = this.props.user;

    if (event.key === "ArrowDown") {
      this.props.setUserTabIndex({
        tabIndex: tabIndex >= suggestedUsers.length - 1 ? 0 : tabIndex + 1,
      });
    }
    if (event.key === "ArrowUp") {
      this.props.setUserTabIndex({
        tabIndex: tabIndex <= 0 ? suggestedUsers.length - 1 : tabIndex - 1,
      });
    }

    if (event.key === "Enter") {
      if (tabIndex !== INITIAL_TAB_INDEX)
        this.props.setUserPattern({
          pattern: suggestedUsers[tabIndex].username,
        });
    }

    if (event.key === "Backspace") {
      this.props.setUserTabIndex({
        tabIndex: INITIAL_TAB_INDEX,
      });
    }
  }
  /**
   *
   * @param pattern
   * @returns all the users<IUser> matched by the input value.
   */
  private getMatched(pattern: string): IUser[] {
    if (!!!pattern) return [];
    return this.props.user.users.filter((item: IUser) =>
      item.username.toLowerCase().startsWith(pattern.toLowerCase())
    );
  }

  render(): React.ReactNode {
    return (
      <div className="autoComplete">
        <input
          className="input-text"
          placeholder="Username"
          autoComplete="off"
          type="text"
          onChange={this.handleChange.bind(this)}
          name="user"
          value={this.props.user.pattern}
          id="user"
          onKeyDown={this.handleKeyDown.bind(this)}
        />

        {!!this.props.user.suggestedUsers.length ? <List /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUserRequest,
  setUserPattern,
  setSuggestedUsers,
  setUserTabIndex,
};
const mapStateToProps = (state: appState) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
