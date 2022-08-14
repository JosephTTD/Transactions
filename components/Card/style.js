import styled from "styled-components";

const Container = styled.div`
  background-image: url('images/card-bg.png');
  background-repeat: no-repeat;
  background-size: 110%;
  background-position: -20px;
  border-radius: 15px;
  color: black;
  height: 200px;
  margin-bottom: 20px;
  box-sizing: border-box;
  position: relative;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0px 0px 20px 0px #eeeeee;

  h3 {
    font-size: 23px;
  } 

  div {
    position: absolute;
    display: flex;
    bottom: 0;
    justify-content: space-between;
    width: 100%;
    right: 0;
    padding-left: inherit;

    p {
        padding: 20px;
        margin: 0;
        font-size: 10px;

        &:first-child {
            padding-left: inherit;
        }

        &:nth-child(2) {
            padding-right: 30px;
            color: white;
        }
    }
  }

  img {
    width: 40px;
    position: absolute;
    right: 0;
    padding-right: inherit;
    padding-top: inherit;
    top: 0;
  }
`;

export default Container;
