import React, { useState } from "react"; //intelicense 
import { Container, Menu } from "semantic-ui-react"; //for failed to compile error...
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  //destructure
  const [isAuthenticated, setIsAuthenticated] = useState(true); 

  
  function handleSignOut() {
   
    setIsAuthenticated(false); 
  }

  
  function handleSignIn() {
           setIsAuthenticated(true); 
  }

 
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSignIn} /> 
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
