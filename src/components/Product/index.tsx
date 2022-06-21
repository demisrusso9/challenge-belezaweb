import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./styles.module.scss";

interface ProductProps {
  item: {
    name: string;
    imageObjects: [
      {
        thumbnail: string;
      }
    ];
    priceSpecification: {
      price: number;
    };
  };

  showPrice: boolean;
}

export function Product({ item, showPrice }: ProductProps) {
  return (
    <div className={styles.product}>
      <img
        alt="Product"
        src={item.imageObjects[0].thumbnail}
        className={styles.image}
      />

      <p className={styles.description}>{item.name}</p>

      {showPrice && (
        <span className={styles.price}>
          {formatPrice(item.priceSpecification.price)}
        </span>
      )}
    </div>
  );
}
