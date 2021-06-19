import React, { useState } from "react"; //intelicense
import React from "react";
import { Container, Menu } from "semantic-ui-react"; //for failed to compile error...
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? <SignedIn /> : <SignedOut />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
