import React from "react";
import { Title } from "../../components/Title";
import { PriceDetails } from "../../components/PriceDetails";
import { Product } from "../../components/Product";
import { Content } from "../../components/Content";
import { useProduct } from "../../hooks/useProduct";
import styles from "./styles.module.scss";

export default function Confirmation() {
  const { products, card } = useProduct();
  const maskedCardNumber =
    card.number.slice(0, 14).replace(/\d/g, "*") + card.number.slice(14);

  return (
    <>
      <div className={styles.success}>
        <img src="/check.svg" alt="Check icon" />
        <p>Compra efetuada com sucesso</p>
      </div>

      <section className={styles.box}>
        <Title name="Pagamento" />

        <div className={styles.creditCard}>
          <Content>
            <p>{maskedCardNumber}</p>
            <p>{card.name}</p>
            <p>{card.validity}</p>
          </Content>
        </div>
      </section>

      <section className={styles.box}>
        <Title name="Produtos" />

        <div>
          <Content>
            {products.items?.map((item, i) => (
              <Product item={item.product} key={i} showPrice={false} />
            ))}
          </Content>

          <PriceDetails />
        </div>
      </section>
    </>
  );
}
