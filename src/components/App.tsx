import * as React from "react";
import Card from "./card/Card";
import Content from "./card/Content";
import Title from "./card/Title";
import AutoComplete from "./AutoComplete";
import Button from "./Button";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Card>
          <Title>Auto Complete</Title>
          <Content>
            <AutoComplete />
            <Button type="button" value="submit" handler={(): void => {}} />
          </Content>
        </Card>
      </div>
    );
  }
}

export default App;
