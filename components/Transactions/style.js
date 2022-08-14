import styled, { css } from "styled-components";

const Container = styled.div`
  background: white;
  color: black;
  border-radius: 12px;
  padding: 30px 25px;
  width: 320px;
  min-height: 75vh;
  height: auto;
  margin: 0 auto;
  position: relative;

  section:nth-child(2n + 3) {
    height: 450px;
    overflow-y: auto;
  }

  h3 {
    font-size: 15px;
  }

  ${(props) =>
    props.loader &&
    css`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }

      img {
        animation: spin 1s linear infinite;
      }

      display: flex;
      align-items: center;
      justify-content: center;
    `};

  h3 {
    font-weight: 600;
  }
`;

export default Container;
