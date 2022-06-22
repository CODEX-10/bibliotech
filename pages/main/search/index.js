import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { Input, Content, Header, Card } from "../../../component";

import library from "../../../repository/library";

export default function Search() {
  const [search, setSearch] = useState("");
  const [content, setContent] = useState([]);

  useEffect(() => {
    const filtered_content = library.filter((data) =>
      data.title.includes(search?.toLowerCase())
    );

    setContent(filtered_content);
  }, [search]);

  const status_filter = {
    pending: "unavaible",
    avaible: "avaible",
    delivered: "avaible",
    unavaible: "unavaible",
  };

  return (
    <Container>
      <Header title="Pesquisar" />
      <Content>
        <Input
          placeholder="Pesquise o livro aqui"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {content.map((data, index) => (
          <Card
            key={index}
            photo={data.photo}
            status={status_filter[data.location.status]}
            title={data.title}
            author={data.author}
            created_at={data.created_at}
          />
        ))}
      </Content>
    </Container>
  );
}
