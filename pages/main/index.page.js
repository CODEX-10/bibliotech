import React, { useState } from "react";
import { Menu } from "../../component";
import { Container } from "./styles";

import Home from "./home";
import Search from "./search";
import Qrcode from "./qrcode";
import Calender from "./calendar";
import Profile from "./profile";

export default function Main() {
  const [page, setPage] = useState("home");

  const pages_content = {
    home: <Home setPage={setPage} />,
    search: <Search />,
    qrcode: <Qrcode />,
    calendar: <Calender />,
    profile: <Profile />,
  };

  return (
    <Container>
      {pages_content[page]}
      <Menu page={page} setPage={setPage} />
    </Container>
  );
}
