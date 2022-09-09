import React from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import { Divider, Form, Label } from "semantic-ui-react";
import "../../src/Stylesheet.css";

export const header = () => {
  return (
    <div>
      <Form>
        <Form.Field>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => e.target.value}
          />
          <Label pointing>Please enter a Username</Label>
        </Form.Field>
        <Divider />

        <Form.Field>
          <Label pointing="below">Please enter a Password</Label>
          <input type="text" placeholder="Password" />
        </Form.Field>

        <Divider />
        <Button className="btn"> Click me</Button>
      </Form>
    </div>
  );
};

export default header;
