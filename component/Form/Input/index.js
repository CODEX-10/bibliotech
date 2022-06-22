import React from "react";
import { Input } from "reactstrap";
import { Container } from "./styles";

export default function InputGlobal({ label, disabled, ...rest }) {
  return (
    <Container disabled={disabled}>
      {label && <p>{label}</p>}
      <Input disabled={disabled} {...rest} />
    </Container>
  );
}
