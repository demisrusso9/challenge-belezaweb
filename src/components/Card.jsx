import React from 'react'
import styles from '../assets/styles/components/Card.module.scss'

export default function Card({ children }) {
  return <div className={styles.card}>{children}</div>
}
