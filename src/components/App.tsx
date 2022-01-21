import * as React from "react";
import { connect } from "react-redux";
import Card from "./card/Card";
import Content from "./card/Content";
import Title from "./card/Title";
import AutoComplete from "./AutoComplete";
import Button from "./Button";
import { appState } from "../reducers/rootReducer";
import {
  SetUserPattern,
  SetUserPatternPayload,
  UserState,
} from "../types/user";
import { setUserPattern } from "../actions";

interface appProps {
  user: UserState;
  setUserPattern: (pattern: SetUserPatternPayload) => SetUserPattern;
}
class App extends React.Component<appProps> {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Card>
          <Title>Auto Complete</Title>
          <Content>
            <AutoComplete />
            <Button
              type="button"
              value="submit"
              handler={(): void => {
                if (!!this.props.user.pattern) {
                  alert(`Username: ${this.props.user.pattern} was submitted.`);
                  this.props.setUserPattern({ pattern: "" });
                }
              }}
            />
          </Content>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state: appState) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUserPattern,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
