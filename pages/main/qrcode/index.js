import React from "react";
import { Container } from "./styles";
import { Header } from "../../../component";
import Webcam from "react-webcam";

export default function Qrcode() {
  return (
    <Container>
      <Header title="Leitor" />
      <div className="camera">
        <Webcam
          height="100%"
          videoConstraints={{
            facingMode: { exact: "environment" },
          }}
        />
        <div className="scanner" />
      </div>
    </Container>
  );
}
