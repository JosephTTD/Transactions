import React from "react";
import Container from "./style";

function Card({ amount, name, doe }) {
  const random = "8644765040641004";
  const cardno = random.split("");
  const show = cardno.filter((no, idx) => idx > 11);
  const encrypt = cardno.slice(-12, cardno.length).join("").replace(/./g, "*");
  const divide = encrypt.match(/.{1,3}/g).join(" ");

  return (
    <Container>
      <img src="images/mastercard.png" />
      <h3>{`£${amount || 0}`}</h3>
      <span>
        {divide} {show}
      </span>

      <div>
        {name && <p>{name}</p>}
        {doe && <p>{doe}</p>}
      </div>
    </Container>
  );
}

export default Card;
