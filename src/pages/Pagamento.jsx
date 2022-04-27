import React from 'react'
import Button from '../components/Button'
import Title from '../components/Title'
import PriceDetails from '../components/PriceDetails'
import Form from '../components/Form'
import styles from '../assets/styles/pages/Pagamento.module.scss'

export default function Pagamento() {
  return (
    <>
      <section className={styles.box}>
        <Title name="Cartão de Crédito" />

        <div>
          <Form />
          <PriceDetails />
        </div>
      </section>

      <Button name="Finalizar o pedido" link="confirmacao" />
    </>
  )
}
