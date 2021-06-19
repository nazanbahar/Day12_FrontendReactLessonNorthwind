import React from "react";
import { Menu, Image, Dropdown } from "semantic-ui-react"; //intelicense

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://avatars.githubusercontent.com/u/77123580?s=400&u=b8eccdb61d901b320fec71878787f37ed0fca9ac&v=4"
        />

        <Dropdown>
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item text="Çıkış" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}