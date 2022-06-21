import React, { lazy, Suspense } from "react";
import { Header } from "./components/Header";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProductProvider } from "./hooks/useProduct";
import styles from "./styles/App.module.scss";

const Confirmation = lazy(() => import("./pages/Confirmation"));
const Payment = lazy(() => import("./pages/Payment"));
const ShoppingBag = lazy(() => import("./pages/ShoppingBag"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <section className={styles.container}>
        <ProductProvider>
          <Suspense fallback={null}>
            <Routes>
              <Route path="*" element={<Navigate to="/sacola" replace />} />
              <Route path="/sacola" element={<ShoppingBag />} />
              <Route path="/pagamento" element={<Payment />} />
              <Route path="/confirmacao" element={<Confirmation />} />
            </Routes>
          </Suspense>
        </ProductProvider>
      </section>
    </BrowserRouter>
  );
};

export default App;
