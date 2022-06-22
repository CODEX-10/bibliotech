import React from "react";
import { Container } from "./styles";
import Image from "next/image";
import user from "../../../assets/circle-user-solid.svg";
import { Input, Button, Content, Header } from "../../../component";

export default function Profile() {
  const inputs = [
    { label: "Nome completo", value: "Anderson Rodrigo Farias" },
    { label: "Endereço", value: "Rua Antonio Just, 410" },
    { label: "Telefone", value: "(48) 99910-9342" },
    { label: "E-mail", value: "anderson@satc.edu.com.br" },
    { label: "Matrícula", value: "201811601", disabled: true },
  ];

  return (
    <Container>
      <Header title="Meu perfil" />
      <Content>
        <Image src={user} width={80} height={80} />
        <form>
          {inputs.map((input, index) => (
            <Input
              key={index}
              defaultValue={input.value}
              disabled={input.disabled}
              label={input.label}
            />
          ))}
          <Button type="button" label="salvar" />
        </form>
      </Content>
    </Container>
  );
}
