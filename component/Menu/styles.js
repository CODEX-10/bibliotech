import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background: #fff;
  border-top: 1px solid rgb(0, 0, 0, 0.1);

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    list-style: none;
    padding: 0 !important;
    position: relative;
    margin: 0;

    li {
      width: 100%;
      height: 100%;
      transition: ease 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;

      &.active {
        border-top: 3.5px solid #60bf63;
      }
    }

    li:nth-child(2) {
      margin-right: 1.5rem;
    }

    li:nth-child(4) {
      margin-left: 1.5rem;
    }

    li:nth-child(3) {
      background: #60bf63;
      position: absolute;
      top: -2rem;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2rem;
      width: 4rem;
      height: 4rem;
      padding: 1.2rem;
      box-shadow: 0 0 5px 0px rgb(0, 0, 0, 0.3);
    }
  }
`;
