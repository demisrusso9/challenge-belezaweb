import React from "react";

import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Content } from "../../components/Content";
import { PriceDetails } from "../../components/PriceDetails";
import { Product } from "../../components/Product";
import { useProduct } from "../../hooks/useProduct";
import styles from "./styles.module.scss";

export default function ShoppingBag() {
  const { products } = useProduct();

  return (
    <>
      <section className={styles.box}>
        <Title name="Produtos" />

        <div>
          <Content>
            {products.items?.map((item, i) => (
              <Product item={item.product} key={i} showPrice={true} />
            ))}
          </Content>

          <PriceDetails />
        </div>
      </section>

      <Button name="Seguir para o pagamento" link="pagamento" />
    </>
  );
}
