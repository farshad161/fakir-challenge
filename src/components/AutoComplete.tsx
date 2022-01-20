import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import { fetchUserRequest } from "../actions";
import { FetchUserRequest, UserState } from "../types/user";
import { appState } from "../reducers/rootReducer";

interface AutoCompleteProps {
  fetchUserRequest: () => FetchUserRequest;
  users: UserState;
}
class AutoComplete extends Component<AutoCompleteProps> {
  componentDidMount() {
    this.props.fetchUserRequest();
  }

  handleChange() {
    console.log(this.props.users);
  }
  render(): React.ReactNode {
    const items: string[] = ["ali", "jafar"];
    return (
      <div className="autoComplete">
        <input
          className="input-text"
          autoComplete="off"
          type="text"
          onChange={this.handleChange.bind(this)}
          name="user"
          id="user"
        />
        <input className="button info" type="button" value="Submit" />
        {!!items.length ? <List items={items} /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUserRequest,
};
const mapStateToProps = (state: appState) => ({
  users: state.user,
});
export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);
