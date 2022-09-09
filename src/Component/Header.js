import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { Divider, Form, Label } from "semantic-ui-react";
import "../../src/Stylesheet.css";

export const Header = ({ data, setData }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const newData = {
      id: data.length + 1,
      username: username,
      password: password,
    };

    setData([...data, newData]);
  };

  return (
    <>
      <div className="FirstContainer">
        <Form>
          <Divider />
          <div className="inputContainer">
            <input
              className="inputStyle"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Label pointing>Please enter a Username</Label>
          </div>
          <Divider />
          <div className="inputContainer">
            <Label pointing="below">Please enter a Password</Label>

            <input
              className="inputStyle"
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Divider />
        </Form>
      </div>
      <Button className="btn" onClick={handleClick}>
        Click me
      </Button>
    </>
  );
};

export default Header;
