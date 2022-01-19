import React, { Component } from "react";
import {
  Divider,
  Button,
  Row,
  Col,
  AutoComplete as AutoCompletion,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
class AutoComplete extends Component {
  render(): React.ReactNode {
    return (
      <div className="auto-complete">
        <Divider orientation="left">Auto Complete</Divider>
        <Row>
          <Col span={12}>
            <AutoCompletion size="large" placeholder="input here" />
          </Col>
          <Col span={12}>
            <Button type="primary" size="large" icon={<SearchOutlined />}>
              Search
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AutoComplete;
