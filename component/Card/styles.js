import styled from "styled-components";

const status_color = {
  pending: "red",
  avaible: "green",
  unavaible: "darkred",
  delivered: "lightblue",
};

export const Container = styled.div`
  display: flex;
  padding: 0.7rem;
  border-radius: 5px;
  border-left: 5px solid ${(props) => status_color[props.status] || "#fff"};
  background: #fff;
  width: 100%;
  margin-bottom: 0.3rem;

  .photo {
    flex: 1;
    padding-right: 0.5rem;
    border-right: 1px solid rgb(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      font-size: 0.7rem;
      font-weight: 600;
      text-transform: capitalize;
      color: #333;
      margin-bottom: 0.5rem;
      margin-top: 0;
    }

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;

      p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.6rem;
        font-weight: 500;
        color: rgb(0, 0, 0, 0.6);
        margin-bottom: 0;

        span {
          font-weight: 600;
          color: #333;
        }
      }
    }
  }
`;
