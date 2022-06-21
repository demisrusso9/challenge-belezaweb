import React from "react";
import { useProduct } from "../../hooks/useProduct";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./styles.module.scss";

export function PriceDetails() {
  const { products } = useProduct();

  const productsPrice = products.items?.reduce((acc, curr) => {
    const total = curr.product.priceSpecification.price;

    return total + acc;
  }, 0);

  const totalValue = productsPrice + products.shippingTotal - products.discount;

  return (
    <section className={styles.information}>
      <p>
        Produtos
        <span>{formatPrice(Number(productsPrice))}</span>
      </p>

      <p>
        Frete
        <span>{formatPrice(Number(products.shippingTotal))}</span>
      </p>

      <p className={styles.discount}>
        Desconto
        <span>- {formatPrice(Number(products.discount))}</span>
      </p>

      <p>
        Total
        <span>{formatPrice(Number(totalValue))}</span>
      </p>
    </section>
  );
}
