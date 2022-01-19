import * as React from "react";
import AutoComplete from "./AutoComplete";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <AutoComplete />
      </div>
    );
  }
}

export default App;
