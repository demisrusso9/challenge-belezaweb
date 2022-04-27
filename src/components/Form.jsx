import React, { useContext } from 'react'
import Input from 'react-input-mask'
import Card from './Card'
import { ProductContext } from '../contexts/ProductContext'
import styles from '../assets/styles/components/Form.module.scss'

export default function Form() {
  const { card, setCard } = useContext(ProductContext)

  return (
    <form>
      <Card>
        <div className={styles.inputBlock}>
          <label htmlFor="card-number">Número do cartão:</label>
          <Input
            mask={'9999.9999.9999.9999'}
            placeholder={'____.____.____.____'}
            value={card.number}
            onChange={(e) => setCard((state) => ({ ...state, number: e.target.value }))}
          />
        </div>

        <div className={styles.inputBlock}>
          <label htmlFor="card-name">Nome do Titular:</label>
          <Input
            placeholder={'Como no cartão'}
            value={card.name}
            onChange={(e) => setCard((state) => ({ ...state, name: e.target.value }))}
          />
        </div>

        <section>
          <div className={styles.inputBlock}>
            <label htmlFor="card-validity">Validade (mês/ano):</label>
            <Input
              mask={'99/9999'}
              placeholder={'__/____'}
              value={card.validity}
              onChange={(e) => setCard((state) => ({ ...state, validity: e.target.value }))}
            />
          </div>

          <div className={styles.inputBlock}>
            <label htmlFor="card-cvv">CVV:</label>
            <Input
              mask={'999'}
              placeholder={'___'}
              value={card.cvv}
              onChange={(e) => setCard((state) => ({ ...state, cvv: e.target.value }))}
            />
          </div>
        </section>
      </Card>
    </form>
  )
}
