import React from "react";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { PriceDetails } from "../../components/PriceDetails";
import { Form } from "../../components/Form";
import styles from "./styles.module.scss";
import { useProduct } from "../../hooks/useProduct";

export default function Payment() {
  const { card } = useProduct();

  function fullCard() {
    let number = 0;

    if (card.name.length >= 4) number++;
    if (card.number.length >= 16) number++;
    if (card.validity.length >= 6) number++;
    if (card.cvv.length >= 3) number++;

    return number === 4;
  }

  return (
    <>
      <section className={styles.box}>
        <Title name="Cartão de Crédito" />

        <div>
          <Form />
          <PriceDetails />
        </div>
      </section>

      {fullCard() && <Button name="Finalizar o pedido" link="confirmacao" />}
    </>
  );
}
