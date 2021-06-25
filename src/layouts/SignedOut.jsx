import React from "react";

import { Button, MenuItem } from "semantic-ui-react"; //intelisence

export default function SignedOut({signIn}) { //obje destructure - SignedOut({ })
  return (
    <div>
      <MenuItem>
        <Button onClick={signIn} primary>Giriş yap</Button>
        <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
      </MenuItem>
    </div>
  );
}
