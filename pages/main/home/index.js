import React from "react";
import Link from "next/link";
import { Container } from "./styles";
import Image from "next/image";
import user from "../../../assets/circle-user-solid.svg";
import logout from "../../../assets/arrow-right-from-bracket-solid.svg";
import { Card, Content } from "../../../component";

import library from "../../../repository/library";

export default function Home(props) {
  return (
    <Container>
      <div className="header" onClick={() => props.setPage("profile")}>
        <Image src={user} width={40} height={40} />
        <div>
          <p>Anderson Rodrigo Farias</p>
          <p>Matrícula: 201811601</p>
        </div>
        <Link href="/">
          <div className="logout">
            <Image src={logout} width={15} height={15} />
            <p>sair</p>
          </div>
        </Link>
      </div>
      <Content>
        <p className="title">Meus livros</p>
        {library.map(
          (data, index) =>
            data.location.status !== "delivered" && (
              <Card
                key={index}
                photo={data.photo}
                title={data.title}
                status={data.location.status}
                start={data.location.start}
                end={data.location.end}
              />
            )
        )}
      </Content>
    </Container>
  );
}
