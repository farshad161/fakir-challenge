import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./List";
import { fetchUserRequest } from "../actions";
import { FetchUserRequest } from "../types/user";

interface AutoCompleteProps {
  fetchUserRequest: () => FetchUserRequest;
}
class AutoComplete extends Component<AutoCompleteProps> {
  componentDidMount() {
    this.props.fetchUserRequest();
  }
  render(): React.ReactNode {
    const items: string[] = ["ali", "jafar"];
    return (
      <div className="autoComplete">
        <input
          className="input-text"
          autoComplete="off"
          type="text"
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

export default connect(null, mapDispatchToProps)(AutoComplete);
