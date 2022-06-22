import styled from "styled-components";

export const Container = styled.div`
  .header {
    width: 100%;
    height: 5rem;
    background: #fff;
    padding: 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(0, 0, 0, 0.1);

    div {
      margin-left: 1rem;

      p {
        margin: 0;
      }

      p:first-child {
        font-size: 0.8rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 0.5rem;
      }

      p:last-child {
        font-size: 0.6rem;
        font-weight: 600;
        color: rgb(0, 0, 0, 0.5);
      }
    }

    .logout {
      display: flex;
      flex-direction: column;
      align-items: end;
      margin-top: 0.2rem;
      flex: 1;
      padding: 0 0.6rem;

      p {
        margin-top: 0.3rem;
      }
    }
  }

  .title {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;
