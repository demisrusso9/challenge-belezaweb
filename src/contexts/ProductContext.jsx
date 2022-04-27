import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [list, setList] = useState([])
  const [cartInfo, setCartInfo] = useState([])
  const [card, setCard] = useState({
    number: '2342.4234.2432.3423',
    name: 'Demis R M S Junior',
    validity: '12/2022',
    cvv: '111'
  })

  useEffect(() => {
    axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07').then((res) => {
      setList(res.data.items)
      setCartInfo(res.data)
    })
  }, [setCartInfo, setList])

  return (
    <ProductContext.Provider value={{ list, setList, cartInfo, setCartInfo, card, setCard }}>
      {children}
    </ProductContext.Provider>
  )
}
