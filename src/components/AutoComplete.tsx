import React, { Component } from "react";
import List from "./List";

class AutoComplete extends Component {
  render(): React.ReactNode {
    const items: string[] = ["ali", "jafar"];
    return (
      <div className="autoComplete">
        <input className="input-text" type="text" name="user" id="user" />
        <input className="button info" type="button" value="Submit" />
        {!!items.length ? <List items={items} /> : null}
      </div>
    );
  }
}

export default AutoComplete;
