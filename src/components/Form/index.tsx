import React from "react";
import Input from "react-input-mask";
import { Content } from "../Content";
import { useProduct } from "../../hooks/useProduct";
import styles from "./styles.module.scss";
import { Button } from "../Button";

export function Form() {
  const { card, setCard } = useProduct();

  return (
    <form>
      <Content>
        <div className={styles.inputBlock}>
          <label htmlFor="card-number">Número do cartão:</label>
          <Input
            required
            mask={"9999.9999.9999.9999"}
            placeholder={"____.____.____.____"}
            value={card.number}
            onChange={(e) =>
              setCard((state) => ({ ...state, number: e.target.value }))
            }
          />
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor="card-name">Nome do Titular:</label>
          <Input
            required
            mask={""}
            placeholder={"Como no cartão"}
            value={card.name}
            onChange={(e) =>
              setCard((state) => ({ ...state, name: e.target.value }))
            }
          />
        </div>

        <section>
          <div className={styles.inputBlock}>
            <label htmlFor="card-validity">Validade (mês/ano):</label>
            <Input
              required
              mask={"99/9999"}
              placeholder={"__/____"}
              value={card.validity}
              onChange={(e) =>
                setCard((state) => ({ ...state, validity: e.target.value }))
              }
            />
          </div>

          <div className={styles.inputBlock}>
            <label htmlFor="card-cvv">CVV:</label>
            <Input
              required
              mask={"999"}
              placeholder={"___"}
              value={card.cvv}
              onChange={(e) =>
                setCard((state) => ({ ...state, cvv: e.target.value }))
              }
            />
          </div>
        </section>
      </Content>
    </form>
  );
}
