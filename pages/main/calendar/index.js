import React from "react";
import { Container } from "./styles";
import { Content, Header, Card, Button } from "../../../component";

import library from "../../../repository/library";

export default function Calendar() {
  const legend = [
    { type: "avaibled", name: "Disponível" },
    { type: "unavaibled", name: "Locado" },
    { type: "pending", name: "Pendente" },
    { type: "delivered", name: "Entregue" },
  ];

  return (
    <Container>
      <Header title="Histórico de locações" />
      <Content>
        <div className="legend-container">
          {legend.map((data, index) => (
            <div key={index} className="legend">
              <div type={data.type} />
              <span>{data.name}</span>
            </div>
          ))}
        </div>
        {library.map((data, index) => (
          <Card
            key={index}
            photo={data.photo}
            title={data.title}
            status={data.location.status}
            start={data.location.start}
            end={data.location.end}
          />
        ))}
        <Button type="button" label="fazer devolução" />
      </Content>
    </Container>
  );
}
