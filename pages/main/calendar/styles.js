import styled from "styled-components";

export const Container = styled.div`
  .legend-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1.5rem;

    .legend {
      display: flex;
      align-items: center;

      div {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 0.4rem;

        &[type="avaibled"] {
          background: green;
        }

        &[type="unavaibled"] {
          background: darkred;
        }

        &[type="delivered"] {
          background: lightblue;
        }

        &[type="pending"] {
          background: red;
        }
      }

      p {
        font-size: 0.6rem;
        font-weight: 500;
        margin-left: 0.15rem;
        margin-bottom: 0;
      }
    }
  }
`;
