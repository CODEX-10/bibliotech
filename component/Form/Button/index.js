import React from "react";
import { Button } from "reactstrap";
import { Container } from "./styles";

export default function ButtonGlobal({ label, disabled, ...rest }) {
  return (
    <Container disabled={disabled}>
      <Button disabled={disabled} {...rest}>
        {label}
      </Button>
    </Container>
  );
}
