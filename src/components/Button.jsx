import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../assets/styles/components/Button.module.scss'

export default function Button(props) {
  return (
    <button className={styles.button}>
      <Link to={`/${props.link}`}>{props.name}</Link>
    </button>
  )
}
