import styled from "styled-components";

export const Container = styled.div`
  .camera {
    overflow: hidden;
    display: flex;
    justify-content: center;
    position: relative;
    height: 100%;

    .scanner {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 50vw;
      height: 50vw;
      border: 2px solid rgb(255, 255, 255, 0.5);
      border-radius: 10px;
    }
  }
`;
