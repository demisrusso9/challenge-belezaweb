import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { formatPrice } from '../utils/formatPrice'
import styles from '../assets/styles/components/PriceDetails.module.scss'

export default function PriceDetails(props) {
  const { list, cartInfo } = useContext(ProductContext)

  const productsPrice = list.reduce((acc, curr) => {
    const total = curr.product.priceSpecification.price
    return total + acc
  }, 0)

  const totalValue = productsPrice + cartInfo.shippingTotal - cartInfo.discount

  return (
    <section className={styles.information}>
      <p>
        Produtos
        <span>{formatPrice(Number(productsPrice))}</span>
      </p>

      <p>
        Frete
        <span>{formatPrice(Number(cartInfo.shippingTotal))}</span>
      </p>

      <p className={styles.discount}>
        Desconto
        <span>- {formatPrice(Number(cartInfo.discount))}</span>
      </p>

      <p>
        Total
        <span>{formatPrice(Number(totalValue))}</span>
      </p>
    </section>
  )
}
