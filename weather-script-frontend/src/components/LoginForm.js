import React from "react";
import { Card, Segment, Button, Form } from "semantic-ui-react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Card raised centered>
        <Form size={"big"}>
          <Form.Group widths="equal">
            <Form.Field control="input" placeholder="Username" />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control="input"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button fluid type="submit">
            Login
          </Button>
        </Form>
      </Card>
    );
  }
}

export default LoginForm;
