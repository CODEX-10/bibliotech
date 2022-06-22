import alice from "../assets/Alice-no-Pais-das-Maravilhas.jpg";
import dom_quixote from "../assets/Dom-Quixote.jpg";
import harry from "../assets/Harry-Potter-e-a-Pedra-Filosofal.jpg";
import alquimista from "../assets/O-Alquimista.jpg";
import dez_negrinhos from "../assets/O-Caso-dos-Dez-Negrinhos.jpg";
import conde from "../assets/O-Conde-de-Monte-Cristo.jpg";
import senhor_aneis from "../assets/O-Senhor-dos-Aneis.jpg";
import steve_jobs from "../assets/Steve-Jobs.jpg";
import conto from "../assets/Um-Conto-de-Duas-Cidades.jpg";
import xgh from "../assets/xgh.jpg";

const library = [
  {
    id: 1,
    photo: steve_jobs,
    title: "a grande lição de steve jobs",
    author: "Maurício Silva",
    created_at: "12/05/2022",
    location: {
      status: "delivered",
      start: "28/05/2022",
      end: "28/06/2022",
    },
  },
  {
    id: 2,
    photo: xgh,
    title: "extreme go horse (XGH)",
    author: "João Silvestre",
    created_at: "30/11/2021",
    location: {
      status: "pending",
      start: "26/05/2022",
      end: "26/06/2022",
    },
  },
  {
    id: 3,
    photo: conto,
    title: "um conto de duas cidades",
    author: "Maria Azevedo",
    created_at: "12/05/2022",
    location: {
      status: "avaible",
      start: "16/05/2022",
      end: "16/06/2022",
    },
  },
  {
    id: 4,
    photo: senhor_aneis,
    title: "o senhor dos anéis",
    author: "Robort Jhones",
    created_at: "14/08/2021",
    location: {
      status: "avaible",
      start: "09/05/2022",
      end: "09/06/2022",
    },
  },
  {
    id: 5,
    photo: conde,
    title: "o conde de monte cristo",
    author: "Albert Ainstain",
    created_at: "20/02/2022",
    location: {
      status: "unavaible",
      start: "18/05/2022",
      end: "18/06/2022",
    },
  },
  {
    id: 6,
    photo: dez_negrinhos,
    title: "o caso dos dez negrinhos",
    author: "Jonny Walker",
    created_at: "12/03/2022",
    location: {
      status: "pending",
      start: "15/05/2022",
      end: "15/06/2022",
    },
  },
  {
    id: 7,
    photo: alquimista,
    title: "o alquimista",
    author: "Jeff Bezos",
    created_at: "04/03/2022",
    location: {
      status: "unavaible",
      start: "30/05/2022",
      end: "30/06/2022",
    },
  },
  {
    id: 8,
    photo: harry,
    title: "harry potter e a pedra filosofal",
    author: "Felipe Neto",
    created_at: "03/12/2021",
    location: {
      status: "avaible",
      start: "29/05/2022",
      end: "29/06/2022",
    },
  },
  {
    id: 9,
    photo: dom_quixote,
    title: "dom quixote",
    author: "Roberto Valerim",
    created_at: "01/05/2022",
    location: {
      status: "unavaible",
      start: "20/05/2022",
      end: "20/06/2022",
    },
  },
  {
    id: 10,
    photo: alice,
    title: "alice no pais das maravilhas",
    author: "Jonathan Coelho",
    created_at: "24/04/2022",
    location: {
      status: "delivered",
      start: "12/05/2022",
      end: "12/06/2022",
    },
  },
];

export default library;
