import * as React from "react";
import AutoComplete from "./AutoComplete";

interface AppProps {
  className?: string;
}
class App extends React.Component<AppProps> {
  render(): React.ReactNode {
    return <AutoComplete />;
  }
}

export default App;
