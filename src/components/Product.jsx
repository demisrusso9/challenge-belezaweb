import React from 'react'
import { formatPrice } from '../utils/formatPrice'
import styles from '../assets/styles/components/Product.module.scss'

export default function Product({ item, showPrice }) {
  return (
    <div className={styles.product}>
      <img alt="Product" src={item.product.imageObjects[0].thumbnail} className={styles.image} />

      <p className={styles.description}>{item.product.name}</p>

      {showPrice && (
        <span className={styles.price}>{formatPrice(item.product.priceSpecification.price)}</span>
      )}
    </div>
  )
}
