import React from "react";
import { Container, Content } from "./style";

function Transaction({ name, value, currency, category, crest }) {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <Container>
      <Content crest={crest}>
        {name && <span>{name[0]}</span>}

        <div>
          {category && <p>{category}</p>}
          {name && <p>{name}</p>}
        </div>
      </Content>

      {value &&  (
        <p>
          {value}
          <sup> {currency}</sup>
        </p>
      )}
    </Container>
  );
}

export default Transaction;
