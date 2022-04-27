import React from 'react'
import styles from '../assets/styles/components/Title.module.scss'

export default function Title(props) {
  return <h1 className={styles.title}>{props.name}</h1>
}
