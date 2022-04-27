import React, { useContext } from 'react'
import Title from '../components/Title'
import PriceDetails from '../components/PriceDetails'
import Product from '../components/Product'
import Card from '../components/Card'
import checkIcon from '../assets/icons/check.svg'
import { ProductContext } from '../contexts/ProductContext'
import styles from '../assets/styles/pages/Confirmacao.module.scss'

export default function Confirmacao() {
  const { list, card } = useContext(ProductContext)

  const creditCardNumber = card.number.toString()

  return (
    <>
      <div className={styles.success}>
        <img src={checkIcon} alt="Check icon" />
        <p>Compra efetuada com sucesso</p>
      </div>

      <section className={styles.box}>
        <Title name="Pagamento" />

        <div className={styles.creditCard}>
          <Card>
            <p>{creditCardNumber}</p>
            <p>{card.name}</p>
            <p>{card.validity}</p>
          </Card>
        </div>
      </section>

      <section className={styles.box}>
        <Title name="Produtos" />

        <div>
          <Card>
            {list.map((item, i) => (
              <Product item={item} key={i} showPrice={false} />
            ))}
          </Card>

          <PriceDetails />
        </div>
      </section>
    </>
  )
}
