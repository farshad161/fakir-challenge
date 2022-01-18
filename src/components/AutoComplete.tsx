import React, { Component } from "react";
import { Divider, AutoComplete as AutoCompletion } from "antd";
class AutoComplete extends Component {
  render(): React.ReactNode {
    return (
      <>
        <Divider orientation="left">Autocomplete</Divider>
        <AutoCompletion placeholder="input here" />
      </>
    );
  }
}

export default AutoComplete;
