import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from '../assets/styles/components/Header.module.scss'

export default function Header() {
  const route = useLocation().pathname.split('/')

  return (
    <header>
      <Link
        to={'/sacola'}
        className={`${styles.text} ${route[1] === 'sacola' && styles.highlight}`}
      >
        sacola
      </Link>

      <Link
        to={'/pagamento'}
        className={`${styles.text} ${route[1] === 'pagamento' && styles.highlight}`}
      >
        pagamento
      </Link>

      <Link
        to={'/confirmacao'}
        className={`${styles.text} ${route[1] === 'confirmacao' && styles.highlight}`}
      >
        confirmação
      </Link>
    </header>
  )
}
