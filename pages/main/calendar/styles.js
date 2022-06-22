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
          background: #17901c;
        }

        &[type="unavaibled"] {
          background: #fc0101;
        }

        &[type="delivered"] {
          background: #059df2;
        }

        &[type="pending"] {
          background: #fc3d01;
        }
      }

      span {
        font-size: 0.6rem;
        font-weight: 500;
        margin-left: 0.15rem;
      }
    }
  }
`;
