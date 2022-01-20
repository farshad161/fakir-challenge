import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import { fetchUserRequest, setUserPattern } from "../actions";
import {
  FetchUserRequest,
  SetPatternPayload,
  SetUserPattern,
  UserState,
} from "../types/user";
import { appState } from "../reducers/rootReducer";
import { IUser } from "../types/user";

interface AutoCompleteProps {
  fetchUserRequest: () => FetchUserRequest;
  user: UserState;
  setUserPattern: (pattern: SetPatternPayload) => SetUserPattern;
}

interface AutoCompleteState {
  sugestedUsers: IUser[];
}
class AutoComplete extends Component<AutoCompleteProps, AutoCompleteState> {
  constructor(props: AutoCompleteProps) {
    super(props);
    this.state = {
      sugestedUsers: [],
    };
  }
  componentDidMount() {
    this.props.fetchUserRequest();
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    const input = event.currentTarget.value;

    // setting pattern in application store
    this.props.setUserPattern({ pattern: input });

    const matched = this.getMatched(input);
    this.setState({ sugestedUsers: matched });
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
        />
        <input className="button info" type="button" value="Submit" />
        {!!this.state.sugestedUsers.length ? (
          <List items={this.state.sugestedUsers} />
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUserRequest,
  setUserPattern,
};
const mapStateToProps = (state: appState) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
