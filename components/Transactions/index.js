import React from "react";
import { useState, useEffect } from "react";
import Container from "./style";
import Card from "../Card";
import Transaction from "../Transaction";

function Transactions() {
  const [data, setData] = useState(null);
  const [balance , setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // generates a random hexcode, used for the Transaction 'crest' prop, just a stylistic choice
  function randomColor() {
    const rangeSize = 10;
    const parts = [
      Math.floor(Math.random() * 256),
      Math.floor(Math.random() * rangeSize),
      Math.floor(Math.random() * rangeSize) + 256 - rangeSize,
    ].sort((a, b) => Math.random() < 0.5);

    return parts.map((p) => ("f" + p.toString(14)).slice(-2)).join("");
  }

  useEffect(() => {
    // API request
    const getTransactions = async () => {
      const url = "http://www.mocky.io/v2/5c62e7c33000004a00019b05";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        let data = await response.json();
        let transactions = data.transactions;

        // sorting transactions by amount value and slicing the first 10
        const sortAmount = transactions.sort(
            (a, b) => parseFloat(a.amount.value) - parseFloat(b.amount.value)
        ).slice(0, transactions.length > 10 ? 10 : transactions.length);

        // then sorting by date / most recent first
        const sortByDate = sortAmount.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
        
        setBalance(data.balance);
        setData(sortByDate);
        setError(null);
      } catch (err) {
        setData(null);
        setBalance(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTransactions();
  }, []);

  // loader visual before data is set
  if (loading === true && !data?.length) {
    return (
      <Container loader>
        <img src="images/loader.svg" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container loader>
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container>
      <section>
        <Card amount={balance?.amount} name="MR J DOE" doe="09/26" />
      </section>

      <h3>Transactions</h3>

      <section>
        {data &&
          data.map((value, index) => {
            return (
              <Transaction
                key={value.id || index}
                name={value.description}
                value={value.amount.value}
                currency={value.amount.currency_iso}
                category={value.category_title}
                crest={"#" + randomColor()}
              ></Transaction>
            );
          })}
      </section>
    </Container>
  );
}

export default Transactions;
