import * as React from "react";
import AutoComplete from "./AutoComplete";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

interface AppProps {
  className?: string;
}
class App extends React.Component<AppProps> {
  render(): React.ReactNode {
    return (
      <Layout>
        <Header />
        <Content>
          <div className="site-layout-content">
            <AutoComplete />
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default App;
