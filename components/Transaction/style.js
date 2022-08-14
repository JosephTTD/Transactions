import styled from "styled-components";

const Container = styled.div`
  background: transparent;
  border-radius: 5px;
  color: black;
  padding: 5px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
  }

  sup {
    font-size: 10px;
    color: grey;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 300;
  align-items: center;

  span {
    background: black;
    color: ${(props) => props.crest};
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin-right: 15px;
  }

  p {
    margin: 0;
    &:first-child {
      color: grey;
      font-size: 10px;
    }

    &:nth-child(2) {
      font-size: 15px;
    }
  }
`;

export { Container, Content };
