import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  p {
    font-size: 0.8rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 3px;
    margin-left: 0.6rem;
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.8rem;
    border: 1px solid #fff;
    font-family: "Work Sans", sans-serif;
    background-color: ${(props) =>
      props.disabled ? "#fff" : "#fff"} !important;
    width: 100%;
    transition: ease 0.3s;

    &:focus-visible {
      outline: none !important;
      border: 1px solid #60bf63 !important;
    }

    &:focus {
      box-shadow: none;
      border: none;
    }
  }
`;
