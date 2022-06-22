import React from "react";
import { Container } from "./styles";

import house from "../../assets/house-solid.svg";
import house_active from "../../assets/house-solid-active.svg";
import magnifying from "../../assets/magnifying-glass-solid.svg";
import magnifying_active from "../../assets/magnifying-glass-solid-active.svg";
import calendar from "../../assets/calendar-solid.svg";
import calendar_active from "../../assets/calendar-solid-active.svg";
import user from "../../assets/user-large-solid.svg";
import user_active from "../../assets/user-large-solid-active.svg";
import qrcode from "../../assets/qrcode-solid.svg";
import Image from "next/image";

export default function Menu(props) {
  const pages = [
    { icon: house, active: house_active, content: "home" },
    { icon: magnifying, active: magnifying_active, content: "search" },
    { icon: qrcode, content: "qrcode" },
    { icon: calendar, active: calendar_active, content: "calendar" },
    { icon: user, active: user_active, content: "profile" },
  ];

  return (
    <Container>
      <ul>
        {pages.map((page, index) => (
          <li
            key={index}
            onClick={() => {
              props.setPage(page.content);
            }}
            className={
              props.page === page.content && props.page !== "qrcode"
                ? "active"
                : ""
            }
          >
            <Image
              src={
                props.page === page.content && props.page !== "qrcode"
                  ? page.active
                  : page.icon
              }
              width={20}
              height={20}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}
