//rfc snippet code
import React from "react";
import { Menu } from "semantic-ui-react"; //added semantic-ui import

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </div>
  );
}
