import React from "react";
import { Container } from "./styles";
import Image from "next/image";

export default function Card(props) {
  return (
    <Container status={props.status}>
      <div className="photo">
        {!!props.photo && <Image src={props.photo} width={60} height={70} />}
      </div>
      <div className="content">
        <p className="title">{props.title}</p>
        <div>
          {props.start && (
            <p>
              Locado: <span>{props.start}</span>
            </p>
          )}
          {props.end && (
            <p>
              Devolução: <span>{props.end}</span>
            </p>
          )}
          {props.author && (
            <p>
              Autor: <span>{props.author}</span>
            </p>
          )}
          {props.created_at && (
            <p>
              Publicação: <span>{props.created_at}</span>
            </p>
          )}
        </div>
      </div>
    </Container>
  );
}
