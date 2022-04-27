import React, { useContext } from 'react'

import Title from '../components/Title'
import Button from '../components/Button'
import Card from '../components/Card'
import PriceDetails from '../components/PriceDetails'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'
import styles from '../assets/styles/pages/Sacola.module.scss'

export default function Sacola() {
  const { list } = useContext(ProductContext)

  return (
    <>
      <section className={styles.box}>
        <Title name="Produtos" />

        <div>
          <Card>
            {list.map((item, i) => (
              <Product item={item} key={i} showPrice={true} />
            ))}
          </Card>

          <PriceDetails />
        </div>
      </section>

      <Button name="Seguir para o pagamento" link="pagamento" />
    </>
  )
}
