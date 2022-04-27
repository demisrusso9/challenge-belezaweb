import React, { lazy, Suspense } from 'react'
import Header from './components/Header'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext'
import styles from './assets/styles/App.module.scss'

const Sacola = lazy(() => import('./pages/Sacola'))
const Pagamento = lazy(() => import('./pages/Pagamento'))
const Confirmacao = lazy(() => import('./pages/Confirmacao'))

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <section className={styles.container}>
          <ProductProvider>
            <Suspense fallback={null}>
              <Routes>
                <Route path="*" element={<Navigate to="/sacola" replace />} />
                <Route path="/sacola" element={<Sacola />} />
                <Route path="/pagamento" element={<Pagamento />} />
                <Route path="/confirmacao" element={<Confirmacao />} />
              </Routes>
            </Suspense>
          </ProductProvider>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
